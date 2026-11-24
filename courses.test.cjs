const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const html = fs.readFileSync(`${__dirname}/courses.html`, "utf8");
const script = html.match(/<!-- COURSES-ONLY -->\s*<script>([\s\S]*?)<\/script>/)[1];
const buttons = [...html.matchAll(/<button[^>]*data-energy-filter="([^"]+)"[^>]*aria-pressed="([^"]+)"/g)].map(([, energy, pressed]) => ({
  dataset: { energyFilter: energy },
  pressed,
  setAttribute(name, value) { assert.equal(name, "aria-pressed"); this.pressed = value; },
  addEventListener(type, listener) { assert.equal(type, "click"); this.click = listener; }
}));
const cards = [...html.matchAll(/<article[^>]*data-energy="([^"]+)"[^>]*>/g)].map(([tag, energy]) => ({
  dataset: { energy },
  filtered: false,
  classList: { toggle(name, hidden) { assert.equal(name, "course-filtered-out"); cards.find(card => card.dataset.energy === energy).filtered = hidden; } },
  tag
}));
const filters = { hidden: true, querySelectorAll(selector) { assert.equal(selector, "button"); return buttons; } };
assert.equal(buttons.length, 5);
assert.equal(cards.length, 4);
cards.forEach(card => assert.doesNotMatch(card.tag, /\bhidden\b|course-filtered-out/));
assert.match(html, /id="energy-filters"[^>]*hidden/);
assert.match(html, /\.course-filtered-out\s*\{\s*display:\s*none;/);
vm.runInNewContext(script, { document: {
  getElementById(id) { assert.equal(id, "energy-filters"); return filters; },
  querySelectorAll(selector) { assert.equal(selector, "#course-list [data-energy]"); return cards; }
} });
assert.equal(filters.hidden, false);
const visible = () => cards.filter(card => !card.filtered).map(card => card.dataset.energy);
assert.deepEqual(visible(), ["voice", "body", "mind", "purpose"]);
for (const energy of ["voice", "body", "mind", "purpose", "purpose", "all"]) {
  const button = buttons.find(button => button.dataset.energyFilter === energy);
  button.click();
  assert.deepEqual(visible(), energy === "all" ? ["voice", "body", "mind", "purpose"] : [energy]);
  buttons.forEach(chip => assert.equal(chip.pressed, String(chip === button)));
}
console.log("Course filter self-check passed: five filters, repeated selection, reset, and no-JS markup.");
