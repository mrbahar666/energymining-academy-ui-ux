const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const library = fs.readFileSync(__dirname + "/self-test.html", "utf8");
const filterScript = library.match(/<!-- ASSESSMENT-ONLY -->\s*<script>([\s\S]*?)<\/script>/)[1];
const buttons = [...library.matchAll(/<button[^>]*data-status-filter="([^"]+)"[^>]*aria-pressed="([^"]+)"/g)].map(([, status, pressed]) => ({
  dataset: { statusFilter: status }, pressed,
  setAttribute(name, value) { assert.equal(name, "aria-pressed"); this.pressed = value; },
  addEventListener(type, listener) { assert.equal(type, "click"); this.click = listener; }
}));
const cards = [...library.matchAll(/<article[^>]*data-status="([^"]+)"[^>]*>/g)].map(([tag, status]) => ({ tag, dataset: { status }, hidden: false }));
const groups = [...library.matchAll(/<section[^>]*data-test-group[\s\S]*?<\/section>/g)].map(([html]) => {
  const groupCards = cards.filter(card => html.includes(card.tag));
  const empty = { hidden: true };
  return { empty, groupCards, querySelector(selector) {
    if (selector === "[data-empty-group]") return empty;
    assert.equal(selector, "[data-status]:not([hidden])");
    return groupCards.find(card => !card.hidden);
  } };
});
const panels = {};
const faqs = [...library.matchAll(/<button[^>]*class="faq-toggle"[^>]*aria-controls="([^"]+)"/g)].map(([, id]) => {
  panels[id] = { hidden: false };
  return { getAttribute(name) { assert.equal(name, "aria-controls"); return id; },
    setAttribute(name, value) { assert.equal(name, "aria-expanded"); this.expanded = value; } };
});
const filters = { hidden: true, querySelectorAll(selector) { assert.equal(selector, "button"); return buttons; } };
const summary = { textContent: "" };
assert.equal(cards.length, 26);
assert.equal(buttons.length, 4);
cards.forEach(card => assert.doesNotMatch(card.tag, /\bhidden\b/));
assert.equal([...library.matchAll(/class="faq-answer"[^>]*hidden/g)].length, 0);
vm.runInNewContext(filterScript, { document: {
  getElementById(id) { return id === "assessment-filters" ? filters : id === "filter-summary" ? summary : panels[id]; },
  querySelectorAll(selector) {
    if (selector === ".assessment-list [data-status]") return cards;
    if (selector === "[data-test-group]") return groups;
    assert.equal(selector, ".faq-toggle[aria-controls]");
    return faqs;
  }
} });
assert.equal(filters.hidden, false);
for (const [status, count] of [["ok", 18], ["lock", 5], ["draft", 3], ["draft", 3], ["all", 26]]) {
  const button = buttons.find(button => button.dataset.statusFilter === status);
  button.click();
  assert.equal(cards.filter(card => !card.hidden).length, count);
  buttons.forEach(chip => assert.equal(chip.pressed, String(chip === button)));
  groups.forEach(group => assert.equal(group.empty.hidden, group.groupCards.some(card => !card.hidden)));
  assert.ok(summary.textContent.startsWith(count.toLocaleString("bn-BD")));
}
faqs.forEach(button => assert.equal(button.expanded, "false"));
Object.values(panels).forEach(panel => assert.equal(panel.hidden, true));
console.log("Assessment filters: all statuses, repeat, reset, empty groups and no-JS content passed.");

const take = fs.readFileSync(__dirname + "/self-test-take.html", "utf8");
const takeScript = take.match(/<!-- ASSESSMENT-ONLY -->\s*<script>([\s\S]*?)<\/script>/)[1];
const control = () => ({ hidden: false, disabled: false, handlers: {},
  addEventListener(type, callback) { this.handlers[type] = callback; },
  focus() { this.focused = true; }
});
const nodes = Object.fromEntries(["start-test", "before-start", "questions", "next-page", "sample-submit", "show-sample", "previous-page", "back-to-intro", "submit-hint"].map(id => [id, control()]));
const pages = [0, 1].map(() => {
  const heading = control();
  const items = Array.from({ length: 10 }, () => ({ answered: false, querySelector(selector) {
    assert.equal(selector, "input:checked"); return this.answered ? {} : null;
  } }));
  return { ...control(), items, heading,
    querySelectorAll(selector) { assert.equal(selector, "[data-question]"); return items; },
    querySelector(selector) { assert.equal(selector, "h2"); return heading; }
  };
});
const introHeading = control();
nodes["before-start"].querySelector = selector => { assert.equal(selector, "h2"); return introHeading; };
const pageControls = Array.from({ length: 4 }, control);
assert.match(take, /id="questions">/);
assert.equal([...take.matchAll(/data-question-page="[01]"/g)].length, 2);
assert.equal([...take.matchAll(/<input[^>]*type="radio"/g)].length, 100);
assert.doesNotMatch(take.match(/<form[\s\S]*?<\/form>/)[0], /<input/);
assert.doesNotMatch(takeScript, /localStorage|sessionStorage|fetch\(|XMLHttpRequest/);
vm.runInNewContext(takeScript, { document: {
  getElementById(id) { assert.ok(nodes[id], id); return nodes[id]; },
  querySelectorAll(selector) {
    if (selector === "[data-question-page]") return pages;
    assert.equal(selector, "[data-page-controls], [data-page-hint]"); return pageControls;
  }
} });
const click = id => nodes[id].handlers.click();
const change = () => nodes.questions.handlers.change();
assert.equal(nodes.questions.hidden, true);
assert.equal(nodes["start-test"].hidden, false);
assert.equal(nodes["next-page"].disabled, true);
click("next-page");
assert.equal(nodes.questions.hidden, true);
click("start-test");
assert.equal(nodes.questions.hidden, false);
assert.equal(pages[0].hidden, false);
assert.equal(pages[1].hidden, true);
assert.equal(nodes["sample-submit"].hidden, true);
pages[0].items.slice(0, 9).forEach(item => { item.answered = true; });
change();
assert.equal(nodes["next-page"].disabled, true);
pages[0].items[9].answered = true;
change();
assert.equal(nodes["next-page"].disabled, false);
click("next-page");
assert.equal(pages[0].hidden, true);
assert.equal(pages[1].hidden, false);
assert.equal(nodes["sample-submit"].hidden, false);
assert.equal(nodes["show-sample"].disabled, true);
click("previous-page");
assert.equal(pages[0].hidden, false);
assert.ok(pages[0].items.every(item => item.answered));
click("back-to-intro");
assert.equal(nodes.questions.hidden, true);
assert.equal(introHeading.focused, true);
click("start-test");
click("next-page");
pages[1].items.forEach(item => { item.answered = true; });
change();
assert.equal(nodes["show-sample"].disabled, false);
let prevented = false;
nodes["sample-submit"].handlers.submit({ preventDefault() { prevented = true; } });
assert.equal(prevented, false);
pages[0].items[0].answered = false;
change();
assert.equal(nodes["show-sample"].disabled, true);
nodes["sample-submit"].handlers.submit({ preventDefault() { prevented = true; } });
assert.equal(prevented, true);
assert.equal(pages[0].hidden, false);
assert.equal(pages[1].hidden, true);
console.log("Mini-IPIP navigation: 10-answer gates, back/forward retention, restart, focus, submission gate and no answer transport passed.");
