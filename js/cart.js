// BOOKS-ONLY: EMA_CART.add(format = "hard copy") adds the real book; returns false if it cannot be saved.
(() => {
  const formats = ["PDF", "hard copy", "audio"];
  const book = { id: "atmar-rosayon", title: "আত্মার রসায়ন", author: "Sayful Alvi" };
  const storageMessage = "ব্রাউজারে কার্ট পড়া বা সংরক্ষণ করা যায়নি। সংরক্ষিত তথ্য ও ব্রাউজারের স্টোরেজ সেটিং দেখুন, তারপর আবার চেষ্টা করুন।";

  function validItems(items) {
    return Array.isArray(items) && items.every(item => item && item.id === book.id &&
      item.title === book.title && item.author === book.author && formats.includes(item.format) &&
      Number.isSafeInteger(item.qty) && item.qty >= 1);
  }

  function loadCart() {
    const saved = localStorage.getItem("ema-cart");
    const items = saved === null ? [] : JSON.parse(saved);
    if (!validItems(items)) throw new Error("Invalid saved cart");
    return items;
  }

  function saveCart(items) {
    localStorage.setItem("ema-cart", JSON.stringify(items));
  }

  window.EMA_CART = {
    add(format = "hard copy") {
      if (!formats.includes(format)) return false;
      try {
        const items = loadCart();
        const item = items.find(entry => entry.id === book.id && entry.format === format);
        if (item) {
          if (item.qty === Number.MAX_SAFE_INTEGER) return false;
          item.qty += 1;
        } else items.push({ ...book, format, qty: 1 });
        saveCart(items);
        return true;
      } catch {
        return false;
      }
    }
  };

  const list = document.getElementById("cart-list");
  if (list) {
    const empty = document.getElementById("cart-empty");
    const form = document.getElementById("checkout-form");
    const error = document.getElementById("cart-error");
    const status = document.getElementById("cart-status");
    const submit = document.getElementById("place-order");
    const showError = message => { error.textContent = message; error.hidden = false; };

    function render() {
      const items = loadCart();
      list.replaceChildren();
      empty.hidden = items.length > 0;
      submit.disabled = items.length === 0;
      items.forEach((item, index) => {
        const row = document.getElementById("cart-row").content.cloneNode(true);
        row.querySelector("[data-title]").textContent = item.title;
        row.querySelector("[data-author]").textContent = item.author;
        row.querySelector("[data-format]").textContent = item.format;
        row.querySelector("[data-quantity]").textContent = String(item.qty);
        row.querySelectorAll("[data-cart-action]").forEach(button => {
          const action = button.dataset.cartAction;
          button.dataset.index = String(index);
          button.setAttribute("aria-label", item.title + ", " + item.format + ": " + button.getAttribute("aria-label"));
          button.disabled = (action === "decrease" && item.qty === 1) || (action === "increase" && item.qty === Number.MAX_SAFE_INTEGER);
        });
        list.append(row);
      });
      error.hidden = true;
    }

    list.addEventListener("click", event => {
      const button = event.target.closest("[data-cart-action]");
      if (!button || button.disabled) return;
      try {
        const items = loadCart();
        const index = Number(button.dataset.index);
        const item = items[index];
        if (!item) return;
        const action = button.dataset.cartAction;
        if (action === "remove") items.splice(index, 1);
        if (action === "increase" && item.qty < Number.MAX_SAFE_INTEGER) item.qty += 1;
        if (action === "decrease" && item.qty > 1) item.qty -= 1;
        saveCart(items);
        render();
        status.textContent = action === "remove" ? "বইটি কার্ট থেকে সরানো হয়েছে।" : "পরিমাণ এখন " + item.qty + "।";
        const next = list.querySelector('[data-index="' + Math.min(index, items.length - 1) + '"][data-cart-action="' + action + '"]:enabled') || list.querySelector("button:enabled") || empty.querySelector("a");
        next.focus();
      } catch { showError(storageMessage); }
    });

    form.addEventListener("invalid", () => showError("নাম, ফোন নম্বর ও ঠিকানা লিখুন।"), true);
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      try {
        const items = loadCart();
        if (!items.length) { showError("কার্ট খালি। আগে বই যোগ করুন।"); return; }
        const fields = new FormData(form);
        const name = fields.get("name").trim();
        const phone = fields.get("phone").trim();
        const address = fields.get("address").trim();
        if (!name || !phone || !address) { showError("নাম, ফোন নম্বর ও ঠিকানা লিখুন।"); return; }
        const now = new Date();
        const date = String(now.getFullYear()) + String(now.getMonth() + 1).padStart(2, "0") + String(now.getDate()).padStart(2, "0");
        const number = "EMA-" + date + "-" + String(Math.floor(Math.random() * 10000)).padStart(4, "0");
        const order = { orderNo: number, items, name, phone, address, note: fields.get("note").trim(), placedAt: now.toISOString() };
        localStorage.setItem("ema-order", JSON.stringify(order));
        localStorage.removeItem("ema-cart");
        window.location.href = "order-confirmation.html";
      } catch { showError(storageMessage); }
    });

    try {
      const url = new URL(window.location.href);
      if (url.searchParams.get("add") === book.id) {
        // A plain detail link carries the default format when its inline script is unavailable.
        url.searchParams.delete("add");
        window.history.replaceState(null, "", url);
        if (!window.EMA_CART.add()) throw new Error("Cart could not be saved");
      }
      render();
    } catch { submit.disabled = true; showError(storageMessage); }
  }

  const confirmation = document.getElementById("order-summary");
  if (confirmation) {
    try {
      const order = JSON.parse(localStorage.getItem("ema-order"));
      if (!order) return;
      if (typeof order.orderNo !== "string" || order.orderNo.length !== 17 || !/^EMA-\d{8}-\d{4}/.test(order.orderNo) ||
        !validItems(order.items) || !order.items.length ||
        ![order.name, order.phone, order.address].every(value => typeof value === "string" && value.trim()) ||
        typeof order.note !== "string" || typeof order.placedAt !== "string" || !Number.isFinite(Date.parse(order.placedAt))) throw new Error("Invalid saved order");
      const number = document.getElementById("order-number");
      number.textContent = order.orderNo;
      number.removeAttribute("data-placeholder");
      const items = document.getElementById("order-items");
      order.items.forEach(item => {
        const row = document.createElement("li");
        row.textContent = item.title + " — " + item.format + " — পরিমাণ: " + item.qty;
        items.append(row);
      });
      for (const field of ["name", "phone", "address", "note"]) document.getElementById("order-" + field).textContent = order[field] || "কোনো নোট দেওয়া হয়নি।";
      confirmation.hidden = false;
      document.getElementById("order-missing").hidden = true;
    } catch {
      const error = document.getElementById("order-error");
      error.textContent = "এই ব্রাউজারে অর্ডারের বিবরণ পড়া যায়নি। সংরক্ষিত তথ্য ও স্টোরেজ সেটিং দেখুন।";
      error.hidden = false;
    }
  }
})();
