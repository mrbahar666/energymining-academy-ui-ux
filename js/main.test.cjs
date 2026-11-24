const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const source = fs.readFileSync(`${__dirname}/main.js`, "utf8");

class Element {
  constructor(attributes = {}) {
    this.attributes = { ...attributes };
    this.listeners = {};
    this.dataset = {};
    this.open = false;
    this.hidden = true;
  }
  addEventListener(type, listener) { (this.listeners[type] ??= []).push(listener); }
  dispatch(type) { (this.listeners[type] ?? []).forEach(listener => listener({ target: this })); }
  setAttribute(name, value) { this.attributes[name] = String(value); }
  getAttribute(name) { return this.attributes[name] ?? null; }
  showModal() { this.open = true; }
  close() { this.open = false; this.dispatch("close"); }
}

function load({ toggle = null, menu = null, languages = [], faqs = [], panels = {} } = {}) {
  const document = {
    documentElement: { lang: "bn" },
    querySelector: () => toggle,
    querySelectorAll: selector => selector === "[data-language]" ? languages : faqs,
    getElementById: id => id === "mobile-menu" ? menu : panels[id] ?? null
  };
  const window = new Element();
  window.innerWidth = 375;
  vm.runInNewContext(source, { document, window });
  return { document, window };
}

assert.doesNotThrow(() => load());
assert.doesNotThrow(() => load({ toggle: new Element() }));
const toggle = new Element({ "aria-expanded": "false" });
const menu = new Element();
const close = new Element();
const link = new Element();
menu.querySelector = () => close;
menu.querySelectorAll = () => [link];
const { window } = load({ toggle, menu });
toggle.dispatch("click");
assert.equal(menu.open, true);
assert.equal(toggle.getAttribute("aria-expanded"), "true");
toggle.dispatch("click");
assert.equal(menu.open, false);
assert.equal(toggle.getAttribute("aria-expanded"), "false");
toggle.dispatch("click");
close.dispatch("click");
assert.equal(menu.open, false);
toggle.dispatch("click");
link.dispatch("click");
assert.equal(menu.open, false);
toggle.dispatch("click");
menu.close(); // Native Escape closes the dialog and emits this same close event.
assert.equal(toggle.getAttribute("aria-expanded"), "false");
toggle.dispatch("click");
window.dispatch("resize");
assert.equal(menu.open, true);
window.innerWidth = 1024;
window.dispatch("resize");
assert.equal(menu.open, false);
menu.querySelector = () => null;
assert.doesNotThrow(() => load({ toggle: new Element(), menu }));

const languages = ["bn", "en", "bn", "en"].map(language => {
  const button = new Element();
  button.dataset.language = language;
  return button;
});
const { document } = load({ languages });
languages[1].dispatch("click");
assert.equal(document.documentElement.lang, "en");
languages.forEach(button => assert.equal(button.getAttribute("aria-pressed"), String(button.dataset.language === "en")));
languages[2].dispatch("click");
assert.equal(document.documentElement.lang, "bn");
languages.forEach(button => assert.equal(button.getAttribute("aria-pressed"), String(button.dataset.language === "bn")));

const faq = new Element({ "aria-controls": "answer", "aria-expanded": "false" });
const missing = new Element({ "aria-controls": "missing" });
const panel = new Element();
load({ faqs: [faq, missing], panels: { answer: panel } });
faq.dispatch("click");
assert.equal(faq.getAttribute("aria-expanded"), "true");
assert.equal(panel.hidden, false);
faq.dispatch("click");
assert.equal(faq.getAttribute("aria-expanded"), "false");
assert.equal(panel.hidden, true);
assert.doesNotThrow(() => missing.dispatch("click"));
console.log("Interaction self-check passed: menu, language controls, FAQ, and missing elements.");
