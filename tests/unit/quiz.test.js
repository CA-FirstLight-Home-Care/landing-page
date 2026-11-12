import assert from "node:assert/strict";
import { test } from "node:test";
import { buildCareGuide } from "../../assets/lib/quiz.js";

function answers(extra) {
  return {
    who: "self",
    daily: "companion",
    memory: "no",
    schedule: [],
    recovery: "no",
    veteran: "no",
    pay: "private",
    ltc: "no",
    ...extra,
  };
}

function ids(items) {
  return items.map((item) => item.id);
}

test("companion care and payment questions build a short guide", () => {
  const guide = buildCareGuide(answers({}));
  assert.deepEqual(ids(guide.care), ["companion-care"]);
  assert.ok(ids(guide.programs).includes("financial-consulting"));
  assert.match(guide.schedule, /Visit hours/);
});

test("a couple with personal care, dementia, and respite adds those services", () => {
  const guide = buildCareGuide(
    answers({
      who: "couple",
      daily: "both",
      memory: "diagnosed",
      schedule: ["respite", "aroundclock"],
      recovery: "yes",
      veteran: "veteran",
      pay: "va",
      ltc: "yes",
    }),
  );
  assert.deepEqual(ids(guide.care), [
    "couples-care",
    "companion-care",
    "personal-care",
    "memory-care",
    "respite-care",
    "transitional-care",
    "veteran-care",
  ]);
  const programs = ids(guide.programs);
  for (const id of [
    "cms-guide",
    "scan-benefits",
    "ihss",
    "calaim-personal",
    "calaim-respite",
    "assisted-living-waiver",
    "local-aging",
    "hicap",
    "va-pension",
    "va-home-care",
    "ltc-review",
  ]) {
    assert.ok(programs.includes(id), id);
  }
  assert.match(guide.schedule, /24-hour care/);
  assert.equal(
    guide.programs.some((item) => item.detail.includes("$")),
    false,
  );
});

test("overnight help is a schedule note, not its own service", () => {
  const guide = buildCareGuide(
    answers({ schedule: "overnight", daily: "none" }),
  );
  assert.deepEqual(ids(guide.care), []);
  assert.match(guide.schedule, /overnight help/);
});

test("a surviving spouse and a VA payment question use different reasons", () => {
  const spouse = buildCareGuide(
    answers({ veteran: "spouse", daily: "none", pay: "private" }),
  );
  assert.ok(ids(spouse.care).includes("veteran-care"));
  const payOnly = buildCareGuide(
    answers({ veteran: "no", pay: "va", daily: "none" }),
  );
  const pension = payOnly.programs.find((item) => item.id === "va-pension");
  assert.match(pension.reason, /Veterans benefits/);
});

test("memory concerns do not claim a diagnosis", () => {
  const guide = buildCareGuide(answers({ memory: "concerns", daily: "none" }));
  assert.equal(guide.care[0].id, "memory-care");
  assert.match(guide.care[0].reason, /does not suggest a diagnosis/);
  assert.equal(ids(guide.programs).includes("cms-guide"), false);
});
