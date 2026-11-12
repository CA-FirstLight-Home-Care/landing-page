// Care guide scoring. Pure: answers in, suggested care and topics out.

export const SERVICE_GUIDES = [
  ["companion-care", "Companion care"],
  ["personal-care", "Personal care"],
  ["memory-care", "Dementia & Alzheimer’s care"],
  ["respite-care", "Respite care"],
  ["transitional-care", "Post-surgery & transitional care"],
  ["veteran-care", "Veteran care"],
  ["couples-care", "Couples care"],
];
const scheduleHas = (a, v) =>
  Array.isArray(a.schedule) ? a.schedule.includes(v) : a.schedule === v;
// Official-source referral topics, not eligibility decisions or FirstLight payment commitments.
export function verifiedProgramTopics(a) {
  const out = [],
    daily = ["companion", "personal", "both"].includes(a.daily),
    personal = ["personal", "both"].includes(a.daily),
    memory = ["concerns", "diagnosed"].includes(a.memory),
    respite = scheduleHas(a, "respite"),
    recovery = a.recovery === "yes",
    aroundclock = scheduleHas(a, "aroundclock");
  const need =
    daily ||
    memory ||
    respite ||
    recovery ||
    aroundclock ||
    scheduleHas(a, "overnight");
  const funding = [
    "private",
    "family",
    "home",
    "waiting",
    "options",
    "unsure",
    "insurance",
    "va",
  ].includes(a.pay);
  if (a.memory === "diagnosed")
    out.push({
      id: "cms-guide",
      name: "Ask your doctor about CMS GUIDE",
      reason:
        "You reported a dementia diagnosis. A participating dementia care team may be worth asking about.",
      detail:
        "GUIDE offers coordinated dementia care, caregiver support and respite for some eligible people. It requires clinician-confirmed dementia, Original Medicare Parts A and B as primary coverage, and other CMS rules. You cannot be enrolled in Medicare Advantage (such as SCAN), PACE or Medicare hospice, or live in a long-term nursing home or memory care unit. Only 1 GUIDE team can enroll you at a time. Ask your doctor to help find a participating GUIDE team for an assessment. The team seeks your consent and CMS confirms eligibility. No FirstLight participation is confirmed here.",
      source: "https://www.cms.gov/priorities/innovation/guide/faqs",
      sourceName: "CMS: GUIDE eligibility and access",
    });
  if (daily || respite || recovery)
    out.push({
      id: "scan-benefits",
      name: "SCAN members: ask about at-home benefits",
      reason: respite
        ? "You asked for a family caregiver to have a break."
        : "You described everyday help or recovery support at home.",
      detail:
        "SCAN is a Medicare Advantage health plan. If you are already a member, ask Member Services whether your specific plan includes in-home help or caregiver respite, and which providers it authorizes. Benefits, limits and availability vary by plan and year. This page does not recommend enrolling in or changing plans. SCAN coverage cannot be combined with GUIDE enrollment.",
      source:
        "https://www.scanhealthplan.com/en/scan-members/member-benefit-materials-and-information/2026-supplemental-benefits/at-home-support",
      sourceName: "SCAN: 2026 at-home support benefits",
    });
  if (daily || memory || aroundclock)
    out.push({
      id: "ihss",
      name: "Ask your county about Medi-Cal IHSS",
      reason:
        "You described help with daily tasks, memory-related support or intensive help at home.",
      detail:
        "In-Home Supportive Services helps eligible older, blind or disabled Californians remain in their own homes. A Medi-Cal eligibility determination, health care certification and county needs assessment are required. The county decides authorized tasks and hours. Ask the county how to apply for IHSS and who may provide approved care. Do not assume a private agency is covered.",
      source:
        "https://www.cdss.ca.gov/in-home-supportive-services/ihss/apply-for-ihss",
      sourceName: "CDSS: IHSS requirements and application",
    });
  if (daily)
    out.push({
      id: "calaim-personal",
      name: "Medi-Cal plan: personal care and homemaker support",
      reason:
        "You described personal care or practical help with everyday tasks.",
      detail:
        "If you have Medi-Cal managed care, ask your plan about CalAIM Community Supports Personal Care and Homemaker Services. This can help eligible members with daily tasks at home, sometimes while IHSS is pending or when approved IHSS support is not enough. It does not replace IHSS. Your plan must check its current rules, clinical need, authorization and available providers.",
      source:
        "https://www.dhcs.ca.gov/wp-content/uploads/2025/10/DHCS-Community-Supports-Policy-Guide.pdf",
      sourceName: "DHCS: Community Supports policy guide",
    });
  if (respite)
    out.push({
      id: "calaim-respite",
      name: "Medi-Cal plan: caregiver respite",
      reason: "You selected a break for a family caregiver.",
      detail:
        "If you have Medi-Cal managed care, ask your plan about CalAIM Community Supports caregiver respite. It offers temporary, non-medical relief for a caregiver of an eligible member who needs support. It is different from medical recuperative care. Ask the plan about assessment, service limits, authorization and available providers; it is not automatic coverage.",
      source:
        "https://www.dhcs.ca.gov/wp-content/uploads/2025/10/DHCS-Community-Supports-Policy-Guide.pdf",
      sourceName: "DHCS: caregiver respite and Community Supports",
    });
  if (aroundclock && (personal || a.memory === "diagnosed"))
    out.push({
      id: "assisted-living-waiver",
      name: "Considering assisted living? Ask about the waiver",
      reason:
        "You selected 24-hour support and personal or diagnosed-memory care needs. This is only relevant if you are also considering a different living setting.",
      detail:
        "The Medi-Cal Assisted Living Waiver is mainly for approved assisted living settings, with some approved publicly subsidized housing arrangements. It is not a general voucher for private home care. Applicants must be at least 21, have full-scope Medi-Cal without a share of cost, meet nursing-facility-level care rules, and satisfy county and setting requirements. Room and board are not paid by the waiver. Ask a DHCS-listed Care Coordination Agency whether it fits your plans and whether a place is available.",
      source:
        "https://www.dhcs.ca.gov/wp-content/uploads/2025/10/ALW-Program-Descriptand-Elig-2024.pdf",
      sourceName: "DHCS: Assisted Living Waiver participant facts",
    });
  if (need || funding || a.ltc === "yes")
    out.push({
      id: "local-aging",
      name: "Ask your local Area Agency on Aging",
      reason:
        "Local guidance may help you find support or understand ways to arrange care.",
      detail:
        "Your Area Agency on Aging can connect older adults, adults with disabilities and families with local information and support. Ask about caregiver help, meals and referrals. Use the county where the person lives, not a business address. The City of Los Angeles has a separate agency from Los Angeles County. Services and eligibility vary; a referral is not payment approval.",
      source: "https://aging.ca.gov/Find_Services_in_My_County/",
      sourceName: "California Department of Aging: find local services",
      countyLinks: [
        [
          "Los Angeles County",
          "https://aging.ca.gov/Find_Services_in_My_County/My_County/?cc=LA",
        ],
        [
          "City of Los Angeles",
          "https://aging.ca.gov/Find_Services_in_My_County/My_County/?cc=lac",
        ],
        [
          "Orange County",
          "https://aging.ca.gov/Find_Services_in_My_County/My_County/?cc=ora",
        ],
        [
          "Riverside County",
          "https://aging.ca.gov/Find_Services_in_My_County/My_County/?cc=riv",
        ],
        [
          "San Bernardino County",
          "https://aging.ca.gov/Find_Services_in_My_County/My_County/?cc=sbd",
        ],
        [
          "Ventura County",
          "https://aging.ca.gov/Find_Services_in_My_County/My_County/?cc=VEN",
        ],
      ],
    });
  if (
    daily ||
    respite ||
    recovery ||
    a.ltc === "yes" ||
    ["insurance", "options", "unsure"].includes(a.pay)
  )
    out.push({
      id: "hicap",
      name: "Ask HICAP for insurance counseling",
      reason:
        "You may have questions about insurance, plan benefits or paying for care.",
      detail:
        "If you have Medicare or will soon be eligible, California HICAP offers free, confidential 1-to-1 counseling about Medicare, Medi-Cal and long-term care insurance. Ask a counselor to explain your options before changing coverage. This is guidance, not funding for home care.",
      source: "https://aging.ca.gov/Programs_and_Services/Medicare_Counseling/",
      sourceName: "California Department of Aging: HICAP",
    });
  return out;
}

export function buildCareGuide(a) {
  const care = [],
    programs = [];
  const addCare = (i, reason) =>
    care.push({
      id: SERVICE_GUIDES[i][0],
      name: SERVICE_GUIDES[i][1],
      reason,
    });
  if (a.who === "couple")
    addCare(
      6,
      "You selected 2 people in the same home. Couples care can arrange 1 caregiver to support both people when their needs can be met safely together. Each person needs a separate assessment; staffing and program eligibility must be checked individually.",
    );
  if (["companion", "both"].includes(a.daily))
    addCare(
      0,
      "Company, meals and light household tasks fit practical and social companion support.",
    );
  if (["personal", "both"].includes(a.daily))
    addCare(
      1,
      "Hands-on help with bathing, dressing or toileting fits personal care.",
    );
  if (["concerns", "diagnosed"].includes(a.memory))
    addCare(
      2,
      a.memory === "diagnosed"
        ? "You reported a dementia diagnosis. Ask about support adapted to familiar routines, preferences and changing needs."
        : "You mentioned memory concerns. Adapted routines and support may be worth discussing; this does not suggest a diagnosis.",
    );
  if (scheduleHas(a, "respite"))
    addCare(
      3,
      "A family caregiver needs time to rest or be away, with someone else providing the support needed.",
    );
  if (a.recovery === "yes")
    addCare(
      4,
      "Everyday help while settling back home after a hospital stay, surgery, illness or injury may be useful.",
    );
  const veteran = ["veteran", "spouse"].includes(a.veteran);
  if (veteran)
    addCare(
      5,
      "Ask about everyday support for Veterans and their families. Care needs and benefit eligibility are separate questions.",
    );
  programs.push(...verifiedProgramTopics(a));
  if (veteran || a.pay === "va")
    programs.push({
      id: "va-pension",
      name: "VA Aid & Attendance questions",
      reason: veteran
        ? "You mentioned Veteran or surviving-spouse status. A pension-related benefit may be worth asking about."
        : "You selected Veterans benefits as a possible way to pay. Ask VA to clarify whether that fits your situation.",
      detail:
        "Aid & Attendance is added to a qualifying VA pension when its requirements are met. Service history, financial and care requirements need a separate review. This guide checks none of those requirements.",
      source: "https://www.va.gov/pension/aid-attendance-housebound/",
      sourceName: "VA: Aid & Attendance",
    });
  if (
    a.veteran === "veteran" &&
    (["personal", "both"].includes(a.daily) ||
      scheduleHas(a, "respite") ||
      ["concerns", "diagnosed"].includes(a.memory))
  )
    programs.push({
      id: "va-home-care",
      name: "VA community care and home-care questions",
      reason:
        "You mentioned a Veteran who may need daily help or family-caregiver support.",
      detail:
        "Ask a VA social worker about Homemaker and Home Health Aide care. Enrollment, community-care eligibility, assessed need, local availability and a VA-contracted provider all matter. This is different from the pension benefit.",
      source:
        "https://www.va.gov/geriatrics/pages/Homemaker_and_Home_Health_Aide_Care.asp",
      sourceName: "VA: Homemaker and Home Health Aide care",
    });
  if (a.ltc === "yes" || a.pay === "insurance")
    programs.push({
      id: "ltc-review",
      name: "Long-term care insurance review",
      reason: "You mentioned an existing policy or planned insurance payment.",
      detail:
        "A policy may include support at home, but benefits, limits and requirements vary. Ask the insurer to confirm the covered services, waiting period, claim requirements and approved providers before assuming payment.",
      source:
        "https://aging.ca.gov/Providers_and_Partners/Health_Insurance_Counseling_and_Advocacy_Program/Long_Term_Care_Insurance/",
      sourceName: "California Department of Aging: long-term care insurance",
    });
  if (
    ["private", "family", "home", "waiting", "options", "unsure"].includes(
      a.pay,
    )
  )
    programs.push({
      id: "financial-consulting",
      name: "Financial consulting may be available",
      reason:
        "You selected a payment approach that may raise questions about funding care.",
      detail:
        "Financial consulting may be available to help you explore ways to pay for care. Ask your local team whether a free consultation is available. A conversation is not a loan approval, benefits decision or recommendation to buy a product.",
    });
  const schedule =
    scheduleHas(a, "overnight") || scheduleHas(a, "aroundclock")
      ? "You are considering " +
        (!scheduleHas(a, "aroundclock")
          ? "overnight help"
          : "24-hour care (day and night)") +
        ". This is a schedule, not a separate service. Confirm awake coverage, rest arrangements, staffing, minimum visits and availability locally."
      : "Visit hours, minimum visits, staffing and availability still need to be agreed with your local team.";
  return { care, programs, schedule };
}
