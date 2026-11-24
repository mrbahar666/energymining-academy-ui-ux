const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const source = fs.readFileSync(__dirname + "/cart.js", "utf8");

function load(initial = null, blocked = false, elements = {}, savedOrder = null) {
  const storage = new Map(initial === null ? [] : [["ema-cart", initial]]);
  if (savedOrder !== null) storage.set("ema-order", savedOrder);
  const window = { location: { href: "https://example.test/cart.html" }, history: { replaceState() {} } };
  vm.runInNewContext(source, {
    window,
    document: { getElementById: id => elements[id] ?? null, createElement: () => element() },
    URL,
    FormData: class { constructor(form) { this.get = key => form.values[key]; } },
    localStorage: {
      getItem: key => storage.get(key) ?? null,
      setItem(key, value) { if (blocked) throw new Error("Storage unavailable"); storage.set(key, value); },
      removeItem: key => storage.delete(key)
    }
  });
  return { add: window.EMA_CART.add, storage, window, cart: () => JSON.parse(storage.get("ema-cart")) };
}

function element(extra = {}) {
  return {
    textContent: "", hidden: false, disabled: false, dataset: {}, listeners: {}, children: [],
    addEventListener(type, listener) { this.listeners[type] = listener; },
    setAttribute() {}, removeAttribute() {}, getAttribute: () => "action", focus() {},
    append(child) { this.children.push(child); }, replaceChildren() { this.children = []; },
    ...extra
  };
}

function cartElements(values = { name: "নমুনা পাঠক", phone: "demo phone", address: "নমুনা ঠিকানা", note: "নমুনা নোট" }) {
  const elements = Object.fromEntries(["cart-list", "cart-empty", "checkout-form", "cart-error", "cart-status", "place-order"].map(id => [id, element()]));
  elements["cart-row"] = { content: { cloneNode() {
    const fields = Object.fromEntries(["[data-title]", "[data-author]", "[data-format]", "[data-quantity]"].map(key => [key, element()]));
    const buttons = ["decrease", "increase", "remove"].map(action => element({ dataset: { cartAction: action } }));
    return { fields, buttons, querySelector: key => fields[key], querySelectorAll: () => buttons };
  } } };
  elements["cart-list"].querySelector = () => element();
  elements["cart-empty"].querySelector = () => element();
  elements["checkout-form"].values = values;
  elements["checkout-form"].reportValidity = () => true;
  return elements;
}

function click(elements, index, action) {
  const button = elements["cart-list"].children[index].buttons.find(entry => entry.dataset.cartAction === action);
  elements["cart-list"].listeners.click({ target: { closest: () => button } });
}

const demo = load();
assert.equal(demo.add(), true);
assert.equal(demo.add("PDF"), true);
assert.equal(demo.add("audio"), true);
assert.equal(demo.add("PDF"), true);
assert.deepEqual(demo.cart().map(item => [item.format, item.qty]), [["hard copy", 1], ["PDF", 2], ["audio", 1]]);
demo.cart().forEach(item => {
  assert.equal(item.id, "atmar-rosayon");
  assert.equal(item.title, "আত্মার রসায়ন");
  assert.equal(item.author, "Sayful Alvi");
});
assert.equal(demo.add("unsupported"), false);
assert.equal(demo.cart().length, 3);
for (const invalid of ["{", "null", "{}", '[{"id":"other"}]']) {
  const broken = load(invalid);
  assert.equal(broken.add(), false);
  assert.equal(broken.storage.get("ema-cart"), invalid, "Unreadable saved data must remain intact");
}
assert.equal(load(null, true).add(), false);

const elements = cartElements();
const flow = load(JSON.stringify(demo.cart()), false, elements);
assert.equal(elements["cart-list"].children.length, 3);
assert.equal(elements["cart-list"].children[0].fields["[data-format]"].textContent, "hard copy");
click(elements, 0, "decrease");
assert.equal(flow.cart()[0].qty, 1);
click(elements, 0, "increase");
assert.equal(flow.cart()[0].qty, 2);
click(elements, 0, "decrease");
assert.equal(flow.cart()[0].qty, 1);
click(elements, 1, "remove");
assert.deepEqual(flow.cart().map(item => item.format), ["hard copy", "audio"]);
elements["checkout-form"].listeners.invalid();
assert.equal(elements["cart-error"].hidden, false);
const expectedItems = flow.cart();
elements["checkout-form"].listeners.submit({ preventDefault() {} });
const order = JSON.parse(flow.storage.get("ema-order"));
assert.deepEqual(order.items, expectedItems);
assert.equal(order.name, elements["checkout-form"].values.name);
assert.equal(order.phone, elements["checkout-form"].values.phone);
assert.equal(order.address, elements["checkout-form"].values.address);
assert.equal(order.note, elements["checkout-form"].values.note);
assert.match(order.orderNo, /^EMA-\d{8}-\d{4}/);
assert.equal(order.orderNo.length, 17);
assert.ok(Number.isFinite(Date.parse(order.placedAt)));
assert.equal(flow.storage.has("ema-cart"), false);
assert.equal(flow.window.location.href, "order-confirmation.html");

for (const values of [null, { name: " ", phone: "demo", address: "demo", note: "" }]) {
  const view = cartElements(values || undefined);
  const empty = load(values ? JSON.stringify(expectedItems) : null, false, view);
  view["checkout-form"].listeners.submit({ preventDefault() {} });
  assert.equal(empty.storage.has("ema-order"), false);
  assert.equal(view["cart-error"].hidden, false);
}
const removable = cartElements();
const removed = load(JSON.stringify([expectedItems[0]]), false, removable);
click(removable, 0, "remove");
assert.equal(removed.cart().length, 0);
assert.equal(removable["cart-empty"].hidden, false);
assert.equal(removable["place-order"].disabled, true);
const failedView = cartElements();
const failed = load(JSON.stringify(expectedItems), true, failedView);
failedView["checkout-form"].listeners.submit({ preventDefault() {} });
assert.deepEqual(failed.cart(), expectedItems, "A failed save keeps the cart");
assert.equal(failed.window.location.href, "https://example.test/cart.html");

function confirmationElements() {
  return Object.fromEntries(["order-summary", "order-number", "order-items", "order-name", "order-phone", "order-address", "order-note", "order-missing", "order-error"].map(id => [id, element({ hidden: id === "order-summary" || id === "order-error", textContent: id === "order-number" ? "শীঘ্রই জানানো হবে" : "" })]));
}
const confirmation = confirmationElements();
load(null, false, confirmation, JSON.stringify(order));
assert.equal(confirmation["order-number"].textContent, order.orderNo);
assert.equal(confirmation["order-name"].textContent, order.name);
assert.equal(confirmation["order-phone"].textContent, order.phone);
assert.equal(confirmation["order-address"].textContent, order.address);
assert.equal(confirmation["order-items"].children.length, expectedItems.length);
expectedItems.forEach((item, index) => assert.equal(confirmation["order-items"].children[index].textContent, item.title + " — " + item.format + " — পরিমাণ: " + item.qty));
assert.equal(confirmation["order-missing"].hidden, true);
for (const saved of [null, "{", JSON.stringify({ ...order, orderNo: "invalid" })]) {
  const view = confirmationElements();
  load(null, false, view, saved);
  assert.equal(view["order-number"].textContent, "শীঘ্রই জানানো হবে");
  assert.equal(view["order-summary"].hidden, true);
}
console.log("Cart flow self-check passed: three formats, quantities, removal, checkout, matching confirmation, and storage/validation failures.");
