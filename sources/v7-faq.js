(() => {
  const faqSearch = document.getElementById("faq-search"),
    faqList = document.getElementById("faq-list"),
    faqStatus = document.getElementById("faq-search-status"),
    faqClear = document.getElementById("faq-search-clear"),
    faqEmpty = document.getElementById("faq-no-results"),
    expand = document.getElementById("faq-expand"),
    collapse = document.getElementById("faq-collapse");
  const aliases = {
    "faq-1": [
      "cost",
      "costs",
      "price",
      "prices",
      "pricing",
      "rate",
      "rates",
      "hourly",
      "budget",
      "expensive",
      "pay",
      "how much",
    ],
    "faq-2": [
      "minimum",
      "minimums",
      "min",
      "hours",
      "hour",
      "short visit",
      "visit length",
      "weekly commitment",
    ],
    "faq-3": [
      "insurance",
      "insured",
      "ltc",
      "long term care",
      "longterm",
      "medicare",
      "medicare advantage",
      "coverage",
      "policy",
      "payment",
      "paying",
    ],
    "faq-4": [
      "va",
      "veteran",
      "veterans",
      "military",
      "spouse",
      "surviving spouse",
      "aid",
      "attendance",
      "benefit",
      "benefits",
    ],
    "faq-5": [
      "start",
      "starts",
      "soon",
      "quick",
      "quickly",
      "timing",
      "discharge",
      "tomorrow",
      "urgent",
      "availability",
    ],
    "faq-6": [
      "screen",
      "screening",
      "screened",
      "background",
      "checks",
      "training",
      "trained",
      "qualifications",
      "dementia",
      "alzheimer",
    ],
    "faq-7": [
      "same",
      "regular caregiver",
      "continuity",
      "consistent",
      "match",
      "matching",
      "familiar",
    ],
    "faq-8": [
      "sick",
      "ill",
      "absent",
      "unavailable",
      "backup",
      "replacement",
      "no show",
      "missed shift",
      "substitute",
    ],
    "faq-9": [
      "contract",
      "agreement",
      "cancel",
      "cancellation",
      "cancellations",
      "notice",
      "fees",
      "terminate",
      "termination",
      "change schedule",
    ],
    "faq-10": [
      "medical",
      "nursing",
      "nurse",
      "wound",
      "medication",
      "medications",
      "medicine",
      "injection",
      "therapy",
      "emergency",
    ],
    "faq-11": [
      "prepare",
      "preparation",
      "ready",
      "documents",
      "first call",
      "first conversation",
      "assessment",
      "paperwork",
    ],
    "faq-12": [
      "choose",
      "choosing",
      "type",
      "types",
      "options",
      "which service",
      "memory",
      "alzheimer",
      "dementia",
    ],
    "faq-location": [
      "location",
      "closest",
      "near",
      "nearby",
      "gps",
      "zip",
      "privacy",
      "device",
      "coordinates",
      "permission",
    ],
  };
  const normalize = (value) =>
    String(value)
      .toLocaleLowerCase("en-US")
      .normalize("NFKD")
      .replace(/\p{M}/gu, "")
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .trim();
  const stop = new Set([
    "a",
    "an",
    "the",
    "and",
    "or",
    "do",
    "does",
    "can",
    "i",
    "we",
    "how",
    "what",
    "is",
    "are",
    "my",
    "me",
    "to",
    "for",
    "of",
    "with",
    "about",
    "it",
    "you",
    "your",
    "will",
    "please",
  ]);
  const faqItems = Array.from(faqList.querySelectorAll(".faq-item")).map(
    (element, index) => ({
      element,
      index,
      id: element.id,
      title: normalize(element.querySelector("summary").textContent),
      body: normalize(element.querySelector(".faq-answer").textContent),
    }),
  );
  function rankFaqs(query) {
    const normalized = normalize(query),
      tokens = normalized.split(/\s+/).filter((x) => x && !stop.has(x));
    if (!tokens.length) return faqItems.map((x) => ({ ...x, score: 0 }));
    return faqItems
      .map((x) => {
        let score = 0;
        const titleWords = x.title.split(" "),
          bodyWords = x.body.split(" ");
        for (const token of new Set(tokens)) {
          if (titleWords.includes(token)) score += 5;
          if (bodyWords.includes(token)) score += 1;
        }
        for (const alias of aliases[x.id] || []) {
          if ((" " + normalized + " ").includes(" " + alias + " ")) score += 8;
        }
        return { ...x, score };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score || a.index - b.index);
  }
  window.rankCareFaqs = (query) =>
    rankFaqs(query).map((x) => ({ id: x.id, score: x.score }));
  function filterFaqs() {
    const query = faqSearch.value.trim(),
      ranked = rankFaqs(query),
      ids = new Set(ranked.map((x) => x.id));
    faqItems.forEach((x) => {
      x.element.hidden = !ids.has(x.id);
    });
    ranked.forEach((x) => faqList.appendChild(x.element));
    faqClear.hidden = !query;
    faqEmpty.hidden = ranked.length !== 0;
    expand.disabled = collapse.disabled = ranked.length === 0;
    faqStatus.textContent = query
      ? ranked.length +
        " matching " +
        (ranked.length === 1 ? "question" : "questions") +
        ": best matches first."
      : faqItems.length + " questions";
    if (query && ranked.length) ranked[0].element.open = true;
  }
  faqSearch.addEventListener("input", filterFaqs);
  function clearFaqSearch() {
    faqSearch.value = "";
    filterFaqs();
    faqSearch.focus();
  }
  faqClear.addEventListener("click", clearFaqSearch);
  faqSearch.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && faqSearch.value) {
      event.preventDefault();
      clearFaqSearch();
    }
  });
  function toggleFaqs(open) {
    const visible = faqItems.filter((x) => !x.element.hidden);
    visible.forEach((x) => {
      x.element.open = open;
    });
    faqStatus.textContent =
      (open ? "Expanded " : "Collapsed ") +
      visible.length +
      " matching " +
      (visible.length === 1 ? "question." : "questions.");
  }
  expand.addEventListener("click", () => toggleFaqs(true));
  collapse.addEventListener("click", () => toggleFaqs(false));
  document.getElementById("faq-tools").hidden = false;

  window.addEventListener("pagehide", () => {
    faqSearch.value = "";
    filterFaqs();
  });
})();
