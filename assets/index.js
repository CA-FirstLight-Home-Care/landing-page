const OFFICE_DATA = {
  offices: [
    {
      id: "burbank",
      name: "Burbank",
      shortName: "Burbank",
      areas: ["Burbank", "Los Angeles"],
      phone: "(626) 360-0048",
      url: "https://www.firstlighthomecare.com/home-healthcare-burbank/",
      zipCodes: [
        "90027",
        "90031",
        "90039",
        "90065",
        "90072",
        "91204",
        "91205",
        "91210",
        "91226",
        "91501",
        "91502",
        "91504",
        "91506",
        "91526",
      ],
    },
    {
      id: "chino-hills",
      name: "Chino Hills",
      shortName: "Chino Hills",
      areas: ["Chino Hills", "Diamond Bar", "Glendora", "San Dimas"],
      phone: "(909) 660-8900",
      url: "https://www.firstlighthomecare.com/home-healthcare-chino-hills/",
      zipCodes: ["91702", "91709", "91741", "91765", "91768", "91769", "91773"],
    },
    {
      id: "glendale",
      name: "Glendale",
      shortName: "Glendale",
      areas: ["Glendale", "La Crescenta", "South Pasadena"],
      phone: "(626) 360-0048",
      url: "https://www.firstlighthomecare.com/home-healthcare-glendale/",
      zipCodes: [
        "90041",
        "91011",
        "91012",
        "91020",
        "91021",
        "91023",
        "91030",
        "91031",
        "91046",
        "91105",
        "91115",
        "91123",
        "91129",
        "91184",
        "91189",
        "91201",
        "91202",
        "91203",
        "91206",
        "91207",
        "91208",
        "91209",
        "91214",
        "91221",
        "91222",
        "91224",
        "91226",
      ],
    },
    {
      id: "irvine",
      name: "Irvine",
      shortName: "Irvine",
      areas: ["Irvine", "Tustin", "Santa Ana"],
      phone: "(949) 704-2969",
      url: "https://www.firstlighthomecare.com/home-healthcare-irvine/",
      zipCodes: [
        "92602",
        "92604",
        "92606",
        "92614",
        "92623",
        "92701",
        "92702",
        "92705",
        "92706",
        "92707",
        "92711",
        "92712",
        "92735",
        "92780",
        "92781",
        "92782",
        "92856",
        "92859",
        "92866",
        "92869",
      ],
    },
    {
      id: "marina-del-rey",
      name: "Marina del Rey",
      shortName: "Marina del Rey",
      areas: ["Marina del Rey", "Culver City", "Venice", "West Los Angeles"],
      phone: "(310) 956-4811",
      url: "https://www.firstlighthomecare.com/home-healthcare-marina-del-rey/",
      zipCodes: [
        "90034",
        "90064",
        "90066",
        "90230",
        "90231",
        "90232",
        "90291",
        "90292",
        "90294",
        "90295",
        "90405",
        "90409",
      ],
    },
    {
      id: "montclair",
      name: "Montclair",
      shortName: "Montclair",
      areas: ["Chino", "Montclair", "Pomona", "Ontario"],
      phone: "(840) 200-9868",
      url: null,
      zipCodes: ["91710", "91762", "91763", "91766", "91767"],
    },
    {
      id: "pasadena",
      name: "Pasadena",
      shortName: "Pasadena",
      areas: ["Pasadena", "Arcadia", "Altadena", "San Marino"],
      phone: "(626) 360-0048",
      url: "https://www.firstlighthomecare.com/home-healthcare-pasadena-altadena/",
      zipCodes: [
        "91001",
        "91003",
        "91006",
        "91007",
        "91024",
        "91025",
        "91066",
        "91077",
        "91101",
        "91102",
        "91103",
        "91104",
        "91106",
        "91107",
        "91108",
        "91109",
        "91110",
        "91114",
        "91116",
        "91117",
        "91118",
        "91121",
        "91124",
        "91125",
        "91126",
        "91182",
        "91188",
        "91199",
      ],
    },
    {
      id: "rancho-cucamonga",
      name: "Rancho Cucamonga",
      shortName: "Rancho Cucamonga",
      areas: ["Rancho Cucamonga", "Upland", "Claremont", "La Verne"],
      phone: "(909) 321-4466",
      url: "https://www.firstlighthomecare.com/home-healthcare-rancho-cucamonga/",
      zipCodes: [
        "91701",
        "91711",
        "91729",
        "91730",
        "91739",
        "91750",
        "91784",
        "91785",
        "91786",
      ],
    },
    {
      id: "san-clemente",
      name: "San Clemente",
      shortName: "San Clemente",
      areas: [
        "San Clemente",
        "San Juan Capistrano",
        "Dana Point",
        "Laguna Niguel",
      ],
      phone: "(949) 940-8500",
      url: "https://www.firstlighthomecare.com/home-healthcare-sanclemente/",
      zipCodes: [
        "92530",
        "92531",
        "92607",
        "92624",
        "92629",
        "92672",
        "92673",
        "92675",
        "92677",
        "92693",
        "92694",
      ],
    },
    {
      id: "san-gabriel",
      name: "San Gabriel",
      shortName: "San Gabriel",
      areas: ["San Gabriel", "Monrovia", "Rosemead", "Temple City"],
      phone: "(626) 360-0048",
      url: "https://www.firstlighthomecare.com/home-healthcare-san-gabriel/",
      zipCodes: [
        "91008",
        "91009",
        "91010",
        "91016",
        "91731",
        "91734",
        "91770",
        "91771",
        "91772",
        "91775",
        "91778",
        "91780",
      ],
    },
    {
      id: "simi-valley",
      name: "Simi Valley",
      shortName: "Simi Valley",
      areas: ["Simi Valley", "Moorpark", "Westlake Village", "Camarillo"],
      phone: "(805) 915-4706",
      url: "https://www.firstlighthomecare.com/home-healthcare-simi-valley/",
      zipCodes: [
        "91303",
        "91304",
        "91305",
        "91309",
        "91319",
        "91320",
        "91358",
        "91359",
        "91360",
        "91361",
        "91362",
        "91396",
        "93010",
        "93011",
        "93012",
        "93015",
        "93016",
        "93020",
        "93021",
        "93033",
        "93034",
        "93040",
        "93041",
        "93042",
        "93043",
        "93044",
        "93062",
        "93063",
        "93065",
        "93066",
        "93094",
        "93099",
      ],
    },
    {
      id: "temecula",
      name: "Temecula",
      shortName: "Temecula",
      areas: ["Temecula", "Murrieta", "Wildomar"],
      phone: "(951) 395-0821",
      url: "https://www.firstlighthomecare.com/home-healthcare-temecula-valley/",
      zipCodes: [
        "92562",
        "92563",
        "92564",
        "92589",
        "92590",
        "92591",
        "92592",
        "92593",
        "92595",
      ],
    },
    {
      id: "west-hollywood",
      name: "West Hollywood",
      shortName: "West Hollywood",
      areas: [
        "West Hollywood",
        "Beverly Hills",
        "Century City",
        "Fairfax District",
      ],
      phone: "(424) 230-8833",
      url: "https://www.firstlighthomecare.com/home-healthcare-west-hollywood/",
      zipCodes: [
        "90016",
        "90019",
        "90035",
        "90036",
        "90046",
        "90048",
        "90067",
        "90069",
        "90211",
      ],
    },
    {
      id: "whittier",
      name: "Whittier",
      shortName: "Whittier",
      areas: ["Whittier", "La Habra", "La Mirada", "Santa Fe Springs"],
      phone: "(562) 800-6922",
      url: "https://www.firstlighthomecare.com/home-healthcare-whittier/",
      zipCodes: [
        "90601",
        "90602",
        "90603",
        "90604",
        "90605",
        "90607",
        "90608",
        "90609",
        "90631",
        "90632",
        "90637",
        "90638",
        "90639",
        "90670",
        "90671",
      ],
    },
    {
      id: "woodland-hills",
      name: "Woodland Hills / Calabasas",
      shortName: "Woodland Hills / Calabasas",
      areas: ["Woodland Hills", "Calabasas", "Agoura Hills", "Topanga"],
      phone: "(818) 443-1281",
      url: "https://www.firstlighthomecare.com/home-healthcare-woodland-hills/",
      zipCodes: [
        "90290",
        "91301",
        "91302",
        "91306",
        "91307",
        "91308",
        "91324",
        "91356",
        "91357",
        "91364",
        "91365",
        "91367",
        "91371",
        "91372",
        "91376",
        "91377",
        "91396",
      ],
    },
  ],
  zipToOfficeIds: {
    90016: ["west-hollywood"],
    90019: ["west-hollywood"],
    90027: ["burbank"],
    90031: ["burbank"],
    90034: ["marina-del-rey"],
    90035: ["west-hollywood"],
    90036: ["west-hollywood"],
    90039: ["burbank"],
    90041: ["glendale"],
    90046: ["west-hollywood"],
    90048: ["west-hollywood"],
    90064: ["marina-del-rey"],
    90065: ["burbank"],
    90066: ["marina-del-rey"],
    90067: ["west-hollywood"],
    90069: ["west-hollywood"],
    90072: ["burbank"],
    90211: ["west-hollywood"],
    90230: ["marina-del-rey"],
    90231: ["marina-del-rey"],
    90232: ["marina-del-rey"],
    90290: ["woodland-hills"],
    90291: ["marina-del-rey"],
    90292: ["marina-del-rey"],
    90294: ["marina-del-rey"],
    90295: ["marina-del-rey"],
    90405: ["marina-del-rey"],
    90409: ["marina-del-rey"],
    90601: ["whittier"],
    90602: ["whittier"],
    90603: ["whittier"],
    90604: ["whittier"],
    90605: ["whittier"],
    90607: ["whittier"],
    90608: ["whittier"],
    90609: ["whittier"],
    90631: ["whittier"],
    90632: ["whittier"],
    90637: ["whittier"],
    90638: ["whittier"],
    90639: ["whittier"],
    90670: ["whittier"],
    90671: ["whittier"],
    91001: ["pasadena"],
    91003: ["pasadena"],
    91006: ["pasadena"],
    91007: ["pasadena"],
    91008: ["san-gabriel"],
    91009: ["san-gabriel"],
    91010: ["san-gabriel"],
    91011: ["glendale"],
    91012: ["glendale"],
    91016: ["san-gabriel"],
    91020: ["glendale"],
    91021: ["glendale"],
    91023: ["glendale"],
    91024: ["pasadena"],
    91025: ["pasadena"],
    91030: ["glendale"],
    91031: ["glendale"],
    91046: ["glendale"],
    91066: ["pasadena"],
    91077: ["pasadena"],
    91101: ["pasadena"],
    91102: ["pasadena"],
    91103: ["pasadena"],
    91104: ["pasadena"],
    91105: ["glendale"],
    91106: ["pasadena"],
    91107: ["pasadena"],
    91108: ["pasadena"],
    91109: ["pasadena"],
    91110: ["pasadena"],
    91114: ["pasadena"],
    91115: ["glendale"],
    91116: ["pasadena"],
    91117: ["pasadena"],
    91118: ["pasadena"],
    91121: ["pasadena"],
    91123: ["glendale"],
    91124: ["pasadena"],
    91125: ["pasadena"],
    91126: ["pasadena"],
    91129: ["glendale"],
    91182: ["pasadena"],
    91184: ["glendale"],
    91188: ["pasadena"],
    91189: ["glendale"],
    91199: ["pasadena"],
    91201: ["glendale"],
    91202: ["glendale"],
    91203: ["glendale"],
    91204: ["burbank"],
    91205: ["burbank"],
    91206: ["glendale"],
    91207: ["glendale"],
    91208: ["glendale"],
    91209: ["glendale"],
    91210: ["burbank"],
    91214: ["glendale"],
    91221: ["glendale"],
    91222: ["glendale"],
    91224: ["glendale"],
    91226: ["burbank", "glendale"],
    91301: ["woodland-hills"],
    91302: ["woodland-hills"],
    91303: ["simi-valley"],
    91304: ["simi-valley"],
    91305: ["simi-valley"],
    91306: ["woodland-hills"],
    91307: ["woodland-hills"],
    91308: ["woodland-hills"],
    91309: ["simi-valley"],
    91319: ["simi-valley"],
    91320: ["simi-valley"],
    91324: ["woodland-hills"],
    91356: ["woodland-hills"],
    91357: ["woodland-hills"],
    91358: ["simi-valley"],
    91359: ["simi-valley"],
    91360: ["simi-valley"],
    91361: ["simi-valley"],
    91362: ["simi-valley"],
    91364: ["woodland-hills"],
    91365: ["woodland-hills"],
    91367: ["woodland-hills"],
    91371: ["woodland-hills"],
    91372: ["woodland-hills"],
    91376: ["woodland-hills"],
    91377: ["woodland-hills"],
    91396: ["simi-valley", "woodland-hills"],
    91501: ["burbank"],
    91502: ["burbank"],
    91504: ["burbank"],
    91506: ["burbank"],
    91526: ["burbank"],
    91701: ["rancho-cucamonga"],
    91702: ["chino-hills"],
    91709: ["chino-hills"],
    91710: ["montclair"],
    91711: ["rancho-cucamonga"],
    91729: ["rancho-cucamonga"],
    91730: ["rancho-cucamonga"],
    91731: ["san-gabriel"],
    91734: ["san-gabriel"],
    91739: ["rancho-cucamonga"],
    91741: ["chino-hills"],
    91750: ["rancho-cucamonga"],
    91762: ["montclair"],
    91763: ["montclair"],
    91765: ["chino-hills"],
    91766: ["montclair"],
    91767: ["montclair"],
    91768: ["chino-hills"],
    91769: ["chino-hills"],
    91770: ["san-gabriel"],
    91771: ["san-gabriel"],
    91772: ["san-gabriel"],
    91773: ["chino-hills"],
    91775: ["san-gabriel"],
    91778: ["san-gabriel"],
    91780: ["san-gabriel"],
    91784: ["rancho-cucamonga"],
    91785: ["rancho-cucamonga"],
    91786: ["rancho-cucamonga"],
    92530: ["san-clemente"],
    92531: ["san-clemente"],
    92562: ["temecula"],
    92563: ["temecula"],
    92564: ["temecula"],
    92589: ["temecula"],
    92590: ["temecula"],
    92591: ["temecula"],
    92592: ["temecula"],
    92593: ["temecula"],
    92595: ["temecula"],
    92602: ["irvine"],
    92604: ["irvine"],
    92606: ["irvine"],
    92607: ["san-clemente"],
    92614: ["irvine"],
    92623: ["irvine"],
    92624: ["san-clemente"],
    92629: ["san-clemente"],
    92672: ["san-clemente"],
    92673: ["san-clemente"],
    92675: ["san-clemente"],
    92677: ["san-clemente"],
    92693: ["san-clemente"],
    92694: ["san-clemente"],
    92701: ["irvine"],
    92702: ["irvine"],
    92705: ["irvine"],
    92706: ["irvine"],
    92707: ["irvine"],
    92711: ["irvine"],
    92712: ["irvine"],
    92735: ["irvine"],
    92780: ["irvine"],
    92781: ["irvine"],
    92782: ["irvine"],
    92856: ["irvine"],
    92859: ["irvine"],
    92866: ["irvine"],
    92869: ["irvine"],
    93010: ["simi-valley"],
    93011: ["simi-valley"],
    93012: ["simi-valley"],
    93015: ["simi-valley"],
    93016: ["simi-valley"],
    93020: ["simi-valley"],
    93021: ["simi-valley"],
    93033: ["simi-valley"],
    93034: ["simi-valley"],
    93040: ["simi-valley"],
    93041: ["simi-valley"],
    93042: ["simi-valley"],
    93043: ["simi-valley"],
    93044: ["simi-valley"],
    93062: ["simi-valley"],
    93063: ["simi-valley"],
    93065: ["simi-valley"],
    93066: ["simi-valley"],
    93094: ["simi-valley"],
    93099: ["simi-valley"],
  },
  nationalFinderUrl: "https://www.firstlighthomecare.com/locations/",
};
const OFFICE_EXTRAS = {
  burbank: {
    address: "450 North Brand Blvd, #600, Glendale, CA 91203",
    latitude: 34.1526952,
    longitude: -118.2545802,
    socials: [],
  },
  "chino-hills": {
    address: "1370 Valley Vista Dr., Suite 200, Diamond Bar, CA 91765",
    latitude: 33.998530636966,
    longitude: -117.835669785771,
    socials: [],
  },
  glendale: {
    address: "450 North Brand Blvd, #600, Glendale, CA 91203",
    latitude: 34.1526952,
    longitude: -118.2545802,
    socials: [],
  },
  irvine: {
    address: "2030 Main Street, Suite 1300, Irvine, CA 92614",
    latitude: 33.685401562787,
    longitude: -117.854637244791,
    socials: [],
  },
  "marina-del-rey": {
    address: "11600 Washington Place, PH 2, Los Angeles, CA 90066",
    latitude: 34.004781960048,
    longitude: -118.420533312205,
    socials: [],
  },
  montclair: {
    address: "13781 Roswell Ave Ste D, Chino, CA 91710",
    latitude: 34.002809662445,
    longitude: -117.721704541492,
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/firstlightmontclair",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/firstlight-home-care-of-montclair",
      },
      { platform: "X", url: "https://x.com/FLHCMontclair" },
    ],
  },
  pasadena: {
    address: "612 W. Duarte Road, Suite 404, Arcadia, CA 91007",
    latitude: 34.12649869219,
    longitude: -118.051557789705,
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/firstlightpasadena/",
      },
      { platform: "X", url: "https://x.com/FLHC_Pasadena" },
    ],
  },
  "rancho-cucamonga": {
    address: "9650 Business Center Dr Suite 132, Rancho Cucamonga, CA 91730",
    latitude: 34.098166160904,
    longitude: -117.594704760959,
    socials: [],
  },
  "san-clemente": {
    address:
      "32303 Camino Capistrano, Suite 203, San Juan Capistrano, CA 92675",
    latitude: 33.493906926548,
    longitude: -117.662745489939,
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/firstlight.sanclemente",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/firstlight-homecare-of-san-clemente",
      },
    ],
  },
  "san-gabriel": {
    address: "612 W. Duarte Road, Suite 404, Arcadia, CA 91007",
    latitude: 34.12649869219,
    longitude: -118.051557789705,
    socials: [],
  },
  "simi-valley": {
    address: "2655 First Street, Suite 250, Simi Valley, CA 93065",
    latitude: 34.284039722323,
    longitude: -118.778917020277,
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/firstlightventuracounty",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/firstlight-home-care-of-simi-valley/",
      },
    ],
  },
  temecula: {
    address: "43218 Business Park Dr Ste 101, Temecula, CA 92590",
    latitude: 33.503253833958,
    longitude: -117.166589226428,
    socials: [{ platform: "X", url: "https://x.com/FLHC_Temecula" }],
  },
  "west-hollywood": {
    address: "1436 S La Cienega Blvd Unit 104, Los Angeles, CA 90035",
    latitude: 34.052026374304,
    longitude: -118.376062806873,
    socials: [],
  },
  whittier: {
    address: "7901 Painter Ave, Suite 5, Whittier, CA 90602",
    latitude: 33.969242350063,
    longitude: -118.032727291698,
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/firstlight_home_care_whittier/",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/firstlight-home-care-whittier/",
      },
    ],
  },
  "woodland-hills": {
    address: "21255 Burbank Blvd., 1st Floor, Woodland Hills, CA 91367",
    latitude: 34.173351278311,
    longitude: -118.594229818015,
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/flhcwoodlandhillscalabasas/",
      },
    ],
  },
};

const CITY_OFFICES = {
  burbank: { city: "Burbank", ids: ["burbank"] },
  "los angeles": { city: "Los Angeles", ids: ["burbank", "glendale"] },
  glendale: { city: "Glendale", ids: ["burbank", "glendale"] },
  "chino hills": { city: "Chino Hills", ids: ["chino-hills"] },
  "diamond bar": { city: "Diamond Bar", ids: ["chino-hills"] },
  glendora: { city: "Glendora", ids: ["chino-hills"] },
  "san dimas": { city: "San Dimas", ids: ["chino-hills"] },
  azusa: { city: "Azusa", ids: ["chino-hills"] },
  pomona: { city: "Pomona", ids: ["chino-hills", "montclair"] },
  "la crescenta": { city: "La Crescenta", ids: ["glendale"] },
  "south pasadena": { city: "South Pasadena", ids: ["glendale"] },
  "la cañada flintridge": {
    city: "La Cañada Flintridge",
    ids: ["glendale"],
  },
  montrose: { city: "Montrose", ids: ["glendale"] },
  "verdugo city": { city: "Verdugo City", ids: ["glendale"] },
  irvine: { city: "Irvine", ids: ["irvine"] },
  tustin: { city: "Tustin", ids: ["irvine"] },
  "santa ana": { city: "Santa Ana", ids: ["irvine"] },
  "north tustin": { city: "North Tustin", ids: ["irvine"] },
  woodbridge: { city: "Woodbridge", ids: ["irvine"] },
  northwood: { city: "Northwood", ids: ["irvine"] },
  "lemon heights": { city: "Lemon Heights", ids: ["irvine"] },
  "costa mesa": { city: "Costa Mesa", ids: ["irvine"] },
  "villa park": { city: "Villa Park", ids: ["irvine"] },
  orange: { city: "Orange", ids: ["irvine"] },
  "marina del rey": { city: "Marina del Rey", ids: ["marina-del-rey"] },
  "culver city": { city: "Culver City", ids: ["marina-del-rey"] },
  venice: { city: "Venice", ids: ["marina-del-rey"] },
  "west los angeles": {
    city: "West Los Angeles",
    ids: ["marina-del-rey"],
  },
  "santa monica": { city: "Santa Monica", ids: ["marina-del-rey"] },
  "mar vista": { city: "Mar Vista", ids: ["marina-del-rey"] },
  palms: { city: "Palms", ids: ["marina-del-rey"] },
  "cheviot hills": { city: "Cheviot Hills", ids: ["marina-del-rey"] },
  "del rey": { city: "Del Rey", ids: ["marina-del-rey"] },
  chino: { city: "Chino", ids: ["montclair"] },
  montclair: { city: "Montclair", ids: ["montclair"] },
  ontario: { city: "Ontario", ids: ["montclair", "rancho-cucamonga"] },
  pasadena: { city: "Pasadena", ids: ["pasadena"] },
  arcadia: { city: "Arcadia", ids: ["pasadena"] },
  altadena: { city: "Altadena", ids: ["pasadena"] },
  "san marino": { city: "San Marino", ids: ["pasadena"] },
  "sierra madre": { city: "Sierra Madre", ids: ["pasadena"] },
  "temple city": {
    city: "Temple City",
    ids: ["pasadena", "san-gabriel"],
  },
  "greater san gabriel valley": {
    city: "Greater San Gabriel Valley",
    ids: ["pasadena"],
  },
  "rancho cucamonga": {
    city: "Rancho Cucamonga",
    ids: ["rancho-cucamonga"],
  },
  upland: { city: "Upland", ids: ["rancho-cucamonga"] },
  claremont: { city: "Claremont", ids: ["rancho-cucamonga"] },
  "la verne": { city: "La Verne", ids: ["rancho-cucamonga"] },
  "alta loma": { city: "Alta Loma", ids: ["rancho-cucamonga"] },
  "san clemente": { city: "San Clemente", ids: ["san-clemente"] },
  "san juan capistrano": {
    city: "San Juan Capistrano",
    ids: ["san-clemente"],
  },
  "dana point": { city: "Dana Point", ids: ["san-clemente"] },
  "laguna niguel": { city: "Laguna Niguel", ids: ["san-clemente"] },
  "ladera ranch": { city: "Ladera Ranch", ids: ["san-clemente"] },
  "rancho mission viejo": {
    city: "Rancho Mission Viejo",
    ids: ["san-clemente"],
  },
  "san gabriel": { city: "San Gabriel", ids: ["san-gabriel"] },
  monrovia: { city: "Monrovia", ids: ["san-gabriel"] },
  rosemead: { city: "Rosemead", ids: ["san-gabriel"] },
  duarte: { city: "Duarte", ids: ["san-gabriel"] },
  "el monte": { city: "El Monte", ids: ["san-gabriel"] },
  "simi valley": { city: "Simi Valley", ids: ["simi-valley"] },
  moorpark: { city: "Moorpark", ids: ["simi-valley"] },
  "westlake village": { city: "Westlake Village", ids: ["simi-valley"] },
  camarillo: { city: "Camarillo", ids: ["simi-valley"] },
  "thousand oaks": { city: "Thousand Oaks", ids: ["simi-valley"] },
  "west hills": { city: "West Hills", ids: ["simi-valley"] },
  fillmore: { city: "Fillmore", ids: ["simi-valley"] },
  temecula: { city: "Temecula", ids: ["temecula"] },
  murrieta: { city: "Murrieta", ids: ["temecula"] },
  wildomar: { city: "Wildomar", ids: ["temecula"] },
  hemet: { city: "Hemet", ids: ["temecula"] },
  winchester: { city: "Winchester", ids: ["temecula"] },
  "glenoak hills": { city: "Glenoak Hills", ids: ["temecula"] },
  "lake elsinore": { city: "Lake Elsinore", ids: ["temecula"] },
  "temescal valley": { city: "Temescal Valley", ids: ["temecula"] },
  menifee: { city: "Menifee", ids: ["temecula"] },
  fallbrook: { city: "Fallbrook", ids: ["temecula"] },
  "west hollywood": { city: "West Hollywood", ids: ["west-hollywood"] },
  "beverly hills": { city: "Beverly Hills", ids: ["west-hollywood"] },
  "century city": { city: "Century City", ids: ["west-hollywood"] },
  "fairfax district": {
    city: "Fairfax District",
    ids: ["west-hollywood"],
  },
  "park la brea": { city: "Park La Brea", ids: ["west-hollywood"] },
  "miracle mile": { city: "Miracle Mile", ids: ["west-hollywood"] },
  beverlywood: { city: "Beverlywood", ids: ["west-hollywood"] },
  carthay: { city: "Carthay", ids: ["west-hollywood"] },
  "beverly grove": { city: "Beverly Grove", ids: ["west-hollywood"] },
  "hancock park": { city: "Hancock Park", ids: ["west-hollywood"] },
  whittier: { city: "Whittier", ids: ["whittier"] },
  "la habra": { city: "La Habra", ids: ["whittier"] },
  "la mirada": { city: "La Mirada", ids: ["whittier"] },
  "santa fe springs": { city: "Santa Fe Springs", ids: ["whittier"] },
  "woodland hills": { city: "Woodland Hills", ids: ["woodland-hills"] },
  calabasas: { city: "Calabasas", ids: ["woodland-hills"] },
  "agoura hills": { city: "Agoura Hills", ids: ["woodland-hills"] },
  topanga: { city: "Topanga", ids: ["woodland-hills"] },
};

import { buildCareGuide } from "./lib/quiz.js";
import {
  directoryLinkHtml,
  displayOfficeName,
  escapeHtml,
  phoneHref,
} from "./lib/format.js";
import {
  distanceKm,
  geolocationErrorMessage,
  rankByDistance,
  tiedNearest,
} from "./lib/nearest.js";
import { matchCities, matchZips, placeQueryKind } from "./lib/places.js";
import {
  MAX_ASSIGN_MILES,
  ZIP_ROUTING,
  referralHref,
  routeZip,
} from "./zip-routing.js";

("use strict");
const OFFICES = Object.fromEntries(OFFICE_DATA.offices.map((o) => [o.id, o]));
const esc = escapeHtml;
document.getElementById("zip").disabled = false;
const arrow =
  '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>';
function lookupZip(value) {
  const route = routeZip(value);
  if (route.kind === "invalid")
    return { status: "invalid", zip: route.zip, offices: [] };
  if (
    route.kind === "alliance" ||
    route.kind === "overlap" ||
    route.kind === "unlisted"
  ) {
    const ids = route.kind === "unlisted" ? [route.id] : route.ids;
    return {
      status: ids.length > 1 ? "overlap" : "covered",
      zip: route.zip,
      offices: ids.map((id) => OFFICES[id]),
    };
  }
  return { status: "uncovered", zip: route.zip, offices: [] };
}
let selectedOfficeId = null;
const emptyContact = document.getElementById("contact-panel").innerHTML;
function syncMobileBar() {
  const bar = document.getElementById("mobile-action-bar");
  if (!bar) return;
  const call = document.getElementById("mobile-call");
  const office = selectedOfficeId ? OFFICES[selectedOfficeId] : null;
  if (!office) {
    bar.hidden = true;
    document.body.classList.remove("office-ready");
    return;
  }
  if (call) {
    if (office.phone) {
      call.href = phoneHref(office);
      call.hidden = false;
      call.setAttribute(
        "aria-label",
        "Call " + displayOfficeName(office) + " at " + office.phone,
      );
    } else {
      call.hidden = true;
      call.removeAttribute("href");
    }
  }
  bar.hidden = false;
  document.body.classList.add("office-ready");
}
function setOffice(id, moveFocus = false) {
  const o = OFFICES[id];
  if (!o) return;
  selectedOfficeId = id;
  document.getElementById("contact-panel").innerHTML =
    `<h3>${esc(displayOfficeName(o))}</h3><p class="office-service-areas">Serving ${esc(o.areas.join(", "))}.</p><div class="contact-card-actions">${o.phone ? `<a class="button consultation" href="${phoneHref(o)}">Call ${esc(o.phone)}</a>` : ""}<button class="button inquiry-trigger" id="inquiry-open" type="button" aria-haspopup="dialog" aria-controls="inquiry-dialog">Submit an inquiry</button></div><p class="micro">Inquiry placeholder. Nothing is sent.</p>`;
  document.dispatchEvent(new Event("officechange"));
  syncMobileBar();
  if (moveFocus) window.startCareQuestions();
}
function clearOffice() {
  selectedOfficeId = null;
  document.getElementById("contact-panel").innerHTML = emptyContact;
  document.dispatchEvent(new Event("officechange"));
  syncMobileBar();
  if (window.resetCareFlow) window.resetCareFlow();
}
function resultCard(o) {
  return `<article class="result-office"><h3>${esc(displayOfficeName(o))}</h3><p class="areas">Serving ${esc(o.areas.join(", "))}.</p>${o.phone ? `<a class="office-direct-phone" href="${phoneHref(o)}">${esc(o.phone)}<span class="sr-only">, call ${esc(displayOfficeName(o))}</span></a>` : ""}<a class="button select-office" data-office="${esc(o.id)}" href="#care-questions">Confirm this office ${arrow}</a></article>`;
}
function zipPrompt(city) {
  return `<div class="city-ambiguity"><p class="overlap-notice">${esc(city)} is served by more than 1 local team. Enter the ZIP where care is needed and we’ll continue.</p><form id="main-city-zip-form" novalidate><label for="main-city-zip">ZIP where care is needed</label><div class="city-zip-row"><input id="main-city-zip" inputmode="numeric" maxlength="5" autocomplete="postal-code" aria-describedby="main-city-zip-error"><button class="button" type="submit">Continue</button></div><p id="main-city-zip-error" class="field-error" role="alert"></p></form></div>`;
}
function showLookup(markup) {
  const results = document.getElementById("lookup-results");
  results.innerHTML = markup;
  results.scrollIntoView({
    block: "start",
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
  });
  results.focus({ preventScroll: true });
}
function continueWithOffice(id) {
  document.getElementById("lookup-results").innerHTML = "";
  setOffice(id, true);
}
const cityInput = document.getElementById("zip"),
  citySuggestions = document.getElementById("city-suggestions");
let activeCitySuggestion = -1;
function closeCitySuggestions() {
  activeCitySuggestion = -1;
  citySuggestions.hidden = true;
  citySuggestions.replaceChildren();
  cityInput.setAttribute("aria-expanded", "false");
  cityInput.removeAttribute("aria-activedescendant");
}
function cityMatches(query) {
  return matchCities(query, CITY_OFFICES);
}
function zipMatches(query) {
  return matchZips(query, ZIP_ROUTING, MAX_ASSIGN_MILES);
}
function selectCitySuggestion(place) {
  cityInput.value = place;
  closeCitySuggestions();
  runLookup();
}
function directoryLink(zip) {
  return directoryLinkHtml(zip, referralHref(zip));
}
function showZipReferral(message, zip, kind) {
  const text =
    kind === "referral"
      ? "This area is served by another FirstLight office."
      : "Sorry, this ZIP code isn't in our service area yet.";
  message.innerHTML = esc(text) + " " + directoryLink(zip);
}
function renderCitySuggestions() {
  const query = cityInput.value.trim();
  const kind = placeQueryKind(query);
  const message = document.getElementById("zip-message");
  if (!kind || !query) {
    closeCitySuggestions();
    return [];
  }
  if (kind === "zip" && /^[0-9]{5}$/.test(query)) {
    const route = routeZip(query);
    if (route.kind === "referral" || route.kind === "outside") {
      closeCitySuggestions();
      showZipReferral(message, query, route.kind);
      if (route.kind === "outside")
        cityInput.setAttribute("aria-invalid", "true");
      else cityInput.removeAttribute("aria-invalid");
      return [];
    }
  }
  const matches =
    kind === "zip"
      ? zipMatches(query)
      : kind === "city"
        ? cityMatches(query)
        : [];
  if (!matches.length) {
    closeCitySuggestions();
    cityInput.setAttribute("aria-invalid", "true");
    showUnsupportedPlace(message, kind, query);
    return matches;
  }
  message.textContent = "";
  cityInput.removeAttribute("aria-invalid");
  citySuggestions.replaceChildren(
    ...matches.map((item, index) => {
      const label = kind === "zip" ? item.label : item;
      const value = kind === "zip" ? item.zip : item;
      const option = document.createElement("li");
      option.id = `city-suggestion-${index}`;
      option.setAttribute("role", "option");
      option.setAttribute("aria-selected", "false");
      option.textContent = label;
      option.addEventListener("mousedown", (event) => event.preventDefault());
      option.addEventListener("click", () => selectCitySuggestion(value));
      return option;
    }),
  );
  citySuggestions.hidden = false;
  cityInput.setAttribute("aria-expanded", "true");
  return matches;
}
function showUnsupportedPlace(message, kind, zip) {
  const text =
    kind === "zip"
      ? "Sorry, this ZIP code isn't in our service area yet."
      : "Sorry, this city isn't in our service area yet.";
  message.innerHTML =
    esc(text) + " " + directoryLink(kind === "zip" ? zip : "");
}
function moveCitySuggestion(direction) {
  const options = citySuggestions.querySelectorAll('[role="option"]');
  if (!options.length) return false;
  activeCitySuggestion =
    activeCitySuggestion === -1
      ? direction > 0
        ? 0
        : options.length - 1
      : (activeCitySuggestion + direction + options.length) % options.length;
  options.forEach((option, index) => {
    const active = index === activeCitySuggestion;
    option.setAttribute("aria-selected", String(active));
    if (active) {
      cityInput.setAttribute("aria-activedescendant", option.id);
      option.scrollIntoView({ block: "nearest" });
    }
  });
  return true;
}
function runLookup(event) {
  if (event) event.preventDefault();
  closeCitySuggestions();
  const input = document.getElementById("zip"),
    message = document.getElementById("zip-message"),
    value = input.value.trim(),
    kind = placeQueryKind(value);
  message.textContent = "";
  input.removeAttribute("aria-invalid");
  document.getElementById("lookup-results").innerHTML = "";
  clearOffice();
  if (!value) {
    input.setAttribute("aria-invalid", "true");
    message.textContent = "Enter a city we serve or a 5-digit ZIP code.";
    input.focus();
    return;
  }
  if (kind === "zip" && /^[0-9]{5}$/.test(value)) {
    const route = routeZip(value);
    if (route.kind === "alliance") {
      continueWithOffice(route.ids[0]);
      return;
    }
    if (route.kind === "overlap") {
      showLookup(
        `<div class="fallback"><h3>This ZIP needs a closer look.</h3><p class="overlap-notice">${esc(value)} is listed for more than 1 local team, so it can’t be matched automatically. Search by city instead.</p></div>`,
      );
      return;
    }
    if (route.kind === "unlisted") {
      continueWithOffice(route.id);
      return;
    }
    showZipReferral(message, value, route.kind);
    if (route.kind === "outside") input.setAttribute("aria-invalid", "true");
    return;
  }
  if (kind === "zip") {
    if (!zipMatches(value).length) {
      input.setAttribute("aria-invalid", "true");
      showUnsupportedPlace(message, "zip", value);
    } else renderCitySuggestions();
    return;
  }
  const query = value.toLocaleLowerCase("en-US"),
    exact = CITY_OFFICES[query],
    matches = exact
      ? [exact]
      : Object.values(CITY_OFFICES).filter(
          (c) =>
            query.length >= 3 &&
            c.city.toLocaleLowerCase("en-US").includes(query),
        );
  const ids = [...new Set(matches.flatMap((c) => c.ids))];
  if (!ids.length) {
    if (!cityMatches(value).length) {
      input.setAttribute("aria-invalid", "true");
      showUnsupportedPlace(message, "city", "");
    } else renderCitySuggestions();
    return;
  }
  const city = exact?.city || value;
  if (ids.length > 1) {
    showLookup(zipPrompt(city));
    return;
  }
  continueWithOffice(ids[0]);
}
document.addEventListener("submit", (event) => {
  if (event.target.id !== "main-city-zip-form") return;
  event.preventDefault();
  const field = document.getElementById("main-city-zip"),
    z = field.value.trim();
  if (!/^[0-9]{5}$/.test(z)) {
    field.setAttribute("aria-invalid", "true");
    document.getElementById("main-city-zip-error").textContent =
      "Enter a 5-digit ZIP code, using numbers only.";
    field.focus();
    return;
  }
  document.getElementById("zip").value = z;
  runLookup();
});
document.getElementById("area-next").addEventListener("click", runLookup);
cityInput.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown" && moveCitySuggestion(1)) {
    event.preventDefault();
    return;
  }
  if (event.key === "ArrowUp" && moveCitySuggestion(-1)) {
    event.preventDefault();
    return;
  }
  if (event.key === "Escape" && !citySuggestions.hidden) {
    event.preventDefault();
    closeCitySuggestions();
    return;
  }
  if (event.key === "Enter") {
    event.preventDefault();
    const active = citySuggestions.querySelector('[aria-selected="true"]');
    if (active) {
      selectCitySuggestion(active.textContent);
      return;
    }
    runLookup();
  }
});
cityInput.addEventListener("input", () => {
  document.getElementById("zip-message").textContent = "";
  cityInput.removeAttribute("aria-invalid");
  document.getElementById("lookup-results").innerHTML = "";
  clearOffice();
  renderCitySuggestions();
});
cityInput.addEventListener("blur", () => {
  window.setTimeout(closeCitySuggestions, 120);
});
document.addEventListener("click", (event) => {
  if (!event.target.closest("#zip, #city-suggestions, #locate-button"))
    closeCitySuggestions();
});
(() => {
  const locateButton = document.getElementById("locate-button");
  const locateMessage = document.getElementById("zip-message");
  let locateToken = 0;
  function stopLocating() {
    locateToken += 1;
    locateButton.removeAttribute("aria-busy");
  }
  function locateError(error) {
    locateMessage.textContent = geolocationErrorMessage(error);
  }
  cityInput.addEventListener("input", stopLocating);
  locateButton.addEventListener("click", () => {
    const token = ++locateToken;
    closeCitySuggestions();
    clearOffice();
    document.getElementById("lookup-results").innerHTML = "";
    cityInput.removeAttribute("aria-invalid");
    if (!navigator.geolocation) {
      locateButton.removeAttribute("aria-busy");
      locateError({ code: 0 });
      return;
    }
    locateButton.setAttribute("aria-busy", "true");
    locateMessage.textContent = "Finding your location.";
    try {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (token !== locateToken) return;
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          locateButton.removeAttribute("aria-busy");
          if (
            !Number.isFinite(latitude) ||
            !Number.isFinite(longitude) ||
            Math.abs(latitude) > 90 ||
            Math.abs(longitude) > 180
          ) {
            locateError({ code: 2 });
            return;
          }
          // Reverse geocoding belongs here. Set reversedZip to the ZIP from
          // latitude and longitude. runLookup() then uses the same routing as
          // a typed ZIP. No location request leaves this page today.
          // Until a ZIP is known, the nearest-office match below uses the
          // coordinates already stored with each office.
          let reversedZip = "";
          if (/^[0-9]{5}$/.test(reversedZip)) {
            cityInput.value = reversedZip;
            locateButton.removeAttribute("aria-busy");
            runLookup();
            return;
          }
          const ranked = rankByDistance(
            OFFICE_DATA.offices.map((office) => ({
              office,
              km: distanceKm(
                latitude,
                longitude,
                OFFICE_EXTRAS[office.id].latitude,
                OFFICE_EXTRAS[office.id].longitude,
              ),
            })),
          );
          if (!ranked.length) {
            locateError({ code: 2 });
            return;
          }
          const nearest = tiedNearest(ranked);
          locateMessage.textContent = "";
          if (nearest.length === 1) {
            cityInput.value = "";
            continueWithOffice(nearest[0].office.id);
            return;
          }
          locateMessage.textContent =
            "More than 1 team is near this spot. Enter the ZIP where care is needed.";
          showLookup(zipPrompt("Your area"));
        },
        (error) => {
          if (token !== locateToken) return;
          locateButton.removeAttribute("aria-busy");
          locateError(error);
        },
        { enableHighAccuracy: false, timeout: 10000, maximumAge: 0 },
      );
    } catch {
      locateButton.removeAttribute("aria-busy");
      locateError({ code: 0 });
    }
  });
})();
document.addEventListener("click", (event) => {
  const a = event.target.closest(".select-office");
  if (!a) return;
  event.preventDefault();
  setOffice(a.dataset.office, true);
});
document.addEventListener("click", (event) => {
  if (event.target.closest("#return-to-zip")) {
    event.preventDefault();
    goCareStep(1);
    document.getElementById("zip").focus({ preventScroll: true });
  }
});
window.lookupZip = lookupZip;

function socialIcon(platform) {
  const paths = {
    Instagram:
      "M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5ZM16.5 7.5h.01M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
    LinkedIn: "M5 9v12M5 4v.01M10 21V9m0 5c0-6 9-6 9 0v7",
    X: "m4 3 16 18M20 3 4 21M7 3H4l13 18h3",
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${paths[platform] || "M3 12h18M12 3v18"}"/></svg>`;
}
function socialProfiles(o) {
  const e = OFFICE_EXTRAS[o.id],
    links = e.socials;
  if (!links.length)
    return '<p class="social-unverified micro">Local social profiles have not yet been confirmed for this office.</p>';
  return `<details class="social-profiles"><summary>Office social profiles</summary><p class="micro">Optional links for ${esc(displayOfficeName(o))}. Each opens a new tab.</p><ul class="social-links">${links.map((x) => `<li><a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(displayOfficeName(o))} on ${esc(x.platform)} (opens in a new tab)">${socialIcon(x.platform)}<span>${esc(x.platform)}</span></a></li>`).join("")}</ul></details>`;
}
// Local, optional guide. Never send, persist, or put care/financial answers in a URL.
const CARE_QUESTIONS = [
  [
    "who",
    "Who are you finding help for?",
    "Answer about the adult who needs care. No names are needed. For 2 people in 1 home, answer the remaining questions about the person with greater needs. Each person needs a separate assessment.",
    [
      ["self", "Myself"],
      ["loved", "A family member or friend"],
      ["couple", "2 people in the same home, such as a couple"],
      ["other", "Someone else"],
    ],
  ],
  [
    "daily",
    "What everyday help would be useful?",
    "A care plan can combine practical support and hands-on help.",
    [
      ["companion", "Company, meals or light household tasks"],
      ["personal", "Help with bathing, dressing or toileting"],
      ["both", "Both kinds of help"],
    ],
  ],
  [
    "memory",
    "What best describes their memory needs?",
    "This guide does not diagnose dementia. You do not need to share medical details.",
    [
      ["none", "No memory concerns"],
      ["concerns", "Some memory changes or concerns"],
      ["diagnosed", "A dementia diagnosis has been made"],
    ],
  ],
  [
    "recovery",
    "Is this after a hospital stay or surgery?",
    "This can also include recovery after an illness or injury.",
    [
      ["yes", "Yes"],
      ["no", "No"],
    ],
  ],
  [
    "schedule",
    "When might help be needed?",
    "Choose all that apply. Overnight or 24-hour care is a schedule, not a separate service.",
    [
      ["occasional", "A few hours or occasional visits"],
      ["regular", "Regular daytime visits"],
      ["overnight", "Overnight care"],
      ["aroundclock", "24-hour care (day and night)"],
      ["respite", "Give our family caregiver a break"],
    ],
  ],
  [
    "veteran",
    "Is the person a Veteran or a surviving spouse?",
    "This is only a starting point. Military service alone does not establish benefit eligibility.",
    [
      ["veteran", "A Veteran"],
      ["spouse", "A surviving spouse of a Veteran"],
      ["no", "Neither"],
    ],
  ],
  [
    "ltc",
    "Do they have long-term care insurance?",
    "This is different from regular health insurance. No policy numbers or documents are needed.",
    [
      ["yes", "Yes"],
      ["no", "No"],
    ],
  ],
  [
    "pay",
    "How are they thinking about paying for care?",
    "No balances, income amounts or financial records are requested.",
    [
      ["private", "Income, savings or other assets"],
      ["family", "Family members will help pay"],
      ["insurance", "An existing long-term care insurance policy"],
      ["va", "Veterans benefits"],
      ["home", "Home equity or selling a home"],
      ["waiting", "Waiting for insurance, a home sale or benefits"],
      ["options", "Not sure how to pay. I would like to explore options"],
    ],
  ],
];
let careAnswers = {},
  questionIndex = 0,
  guideCompleted = false,
  contactUnlocked = false,
  currentCareStep = 1,
  careZip = "",
  askingLocation = true;
window.buildCareGuide = buildCareGuide;
function moveCareFocus(element) {
  element.scrollIntoView({
    block: "start",
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
  });
  element.focus({ preventScroll: true });
}
function updateCareSteps() {
  document.querySelectorAll("[data-go-step]").forEach((b) => {
    const n = Number(b.dataset.goStep);
    b.disabled = n === 2 ? !guideCompleted : false;
    if (b.closest(".step-nav")) {
      if (n === currentCareStep) b.setAttribute("aria-current", "step");
      else b.removeAttribute("aria-current");
      b.classList.toggle("is-complete", n < currentCareStep);
    }
  });
}
function goCareStep(step, focus = true) {
  if (step > 2) step = 2;
  if (step === 2 && !guideCompleted) return;
  currentCareStep = step;
  document.getElementById("care-questions").hidden = step !== 1;
  document.getElementById("care-summary").hidden = step !== 2;
  updateCareSteps();
  if (step === 2 && window.prefillCareContact) window.prefillCareContact();
  if (focus)
    moveCareFocus(
      document.getElementById(step === 1 ? "quiz-title" : "summary-title"),
    );
}
function renderCareQuestion(focus = false) {
  const total = CARE_QUESTIONS.length + 1,
    n = askingLocation ? 1 : questionIndex + 2;
  document.getElementById("question-area").hidden = !askingLocation;
  document.getElementById("care-quiz").hidden = askingLocation;
  document
    .querySelectorAll("#care-quiz .wizard-question")
    .forEach((field, i) => {
      field.hidden = askingLocation || i !== questionIndex;
      field.disabled =
        askingLocation || i !== questionIndex || !selectedOfficeId;
    });
  document.getElementById("question-count").textContent =
    "Question " + n + " of " + total;
  const progress = document.getElementById("question-progress");
  progress.max = total;
  progress.value = n;
  progress.textContent = n + " of " + total;
  const dots = document.getElementById("question-dots");
  if (dots) {
    if (dots.childElementCount !== total) {
      dots.replaceChildren();
      for (let i = 0; i < total; i += 1) {
        const dot = document.createElement("span");
        dot.className = "question-dot";
        dots.append(dot);
      }
    }
    [...dots.children].forEach((dot, i) => {
      dot.classList.toggle("is-done", i < n - 1);
      dot.classList.toggle("is-current", i === n - 1);
    });
  }
  const scheduleDone = document.getElementById("quiz-schedule-done"),
    isScheduleQuestion =
      !askingLocation && CARE_QUESTIONS[questionIndex][0] === "schedule";
  scheduleDone.hidden = !isScheduleQuestion;
  scheduleDone.disabled = !careAnswers.schedule?.length;
  if (focus)
    moveCareFocus(
      document.getElementById(
        askingLocation
          ? "area-title"
          : "question-title-" + CARE_QUESTIONS[questionIndex][0],
      ),
    );
}
window.startCareQuestions = () => {
  const raw = document.getElementById("zip").value.trim();
  careZip = /^[0-9]{5}$/.test(raw) ? raw : "";
  askingLocation = false;
  questionIndex = 0;
  guideCompleted = false;
  contactUnlocked = false;
  goCareStep(1, false);
  renderCareQuestion(true);
};
window.resetCareFlow = () => {
  guideCompleted = false;
  contactUnlocked = false;
  askingLocation = true;
  questionIndex = 0;
  currentCareStep = 1;
  document.getElementById("care-summary-content").textContent = "";
  goCareStep(1, false);
  renderCareQuestion();
};
function answerLabel(q) {
  const value = careAnswers[q[0]],
    label = (v) =>
      q[3].find((x) => x[0] === v)?.[1] ||
      (v === "unsure" ? "Not sure / prefer not to say" : "Skipped");
  return Array.isArray(value)
    ? value.length
      ? value.map(label).join("; ")
      : "Skipped"
    : label(value);
}
function renderCareSummary() {
  const o = OFFICES[selectedOfficeId],
    g = buildCareGuide(careAnswers);
  if (!o) return;
  const sourceLink = (p) =>
    p.source
      ? '<a class="source-link" href="' +
        esc(p.source) +
        '" target="_blank" rel="noopener noreferrer">' +
        esc(p.sourceName) +
        ' <span class="sr-only">(opens in a new tab)</span><span aria-hidden="true">↗</span></a>'
      : "";
  document.getElementById("care-summary-content").innerHTML =
    '<div class="summary-block"><h3>Services you may need</h3>' +
    (g.care.length
      ? '<p>A plan can combine these types of support. Each description opens in a new tab so your guide stays here.</p><ul class="summary-card-grid">' +
        g.care
          .map(
            (c) =>
              '<li><h4><a href="services.html#' +
              esc(c.id) +
              '" target="_blank" rel="noopener noreferrer">' +
              esc(c.name) +
              ' <span class="sr-only">(opens in a new tab)</span><span aria-hidden="true">↗</span></a></h4><p>' +
              esc(c.reason) +
              "</p></li>",
          )
          .join("") +
        "</ul>"
      : "<p>Your answers do not point to a particular care type yet. It is okay to ask your local team to help you work this out.</p>") +
    '<p class="schedule-note">' +
    esc(g.schedule) +
    '</p></div><div class="summary-block"><h3>Programs and payment options you may qualify for</h3><p>These are topics to ask your doctor, health plan, county or the VA about, not eligibility decisions. We have not asked your age, Medicare or Medi-Cal enrollment, finances or full care needs. This page does not confirm that any FirstLight location participates in, accepts or bills any program. GUIDE and Medicare Advantage, including SCAN, are different routes that cannot be combined.</p>' +
    (g.programs.length
      ? '<ul class="program-list">' +
        g.programs
          .map(
            (p) =>
              '<li data-program="' +
              esc(p.id) +
              '"><h4>' +
              esc(p.name) +
              '</h4><p class="program-reason">' +
              esc(p.reason) +
              "</p><p>" +
              esc(p.detail) +
              "</p>" +
              sourceLink(p) +
              (p.countyLinks
                ? '<details class="county-resources"><summary>Find your county agency</summary><div class="county-program-links">' +
                  p.countyLinks
                    .map(
                      ([name, url]) =>
                        '<a href="' +
                        esc(url) +
                        '" target="_blank" rel="noopener noreferrer">' +
                        esc(name) +
                        '<span class="sr-only"> (opens in a new tab)</span><span aria-hidden="true"> ↗</span></a>',
                    )
                    .join("") +
                  "</div></details>"
                : "") +
              "</li>",
          )
          .join("") +
        "</ul>"
      : "<p>No specific funding topic was identified. You can still ask about costs and whether any guidance is available.</p>") +
    '<p class="guide-disclaimer">The doctor, plan, county, VA or qualified professional must confirm what applies. Free guidance does not mean care, financial products or filing services are free. Do not change assets, insurance or financial arrangements based on this guide.</p></div><details class="answer-review"><summary>Review the answers behind this guide</summary><dl>' +
    CARE_QUESTIONS.map(
      (q) =>
        "<div><dt>" +
        esc(q[1]) +
        "</dt><dd>" +
        esc(answerLabel(q)) +
        "</dd></div>",
    ).join("") +
    '</dl></details><p class="privacy-note">This summary is built on your device. Nothing is saved or sent. Your answers are cleared when you leave this page.</p>';
}
function advanceQuestion() {
  const key = CARE_QUESTIONS[questionIndex][0],
    field = document.getElementById("question-" + key),
    checked = field.querySelector("input:checked");
  careAnswers[key] =
    key === "schedule"
      ? Array.from(field.querySelectorAll("input:checked")).map((e) => e.value)
      : checked?.value || "skipped";
  if (questionIndex < CARE_QUESTIONS.length - 1) {
    questionIndex++;
    renderCareQuestion(true);
  } else {
    guideCompleted = true;
    renderCareSummary();
    goCareStep(2);
  }
}
document.getElementById("care-quiz").addEventListener("change", (event) => {
  if (!event.target.name?.startsWith("quiz-")) return;
  const key = event.target.name.slice(5);
  if (key === "schedule") {
    const all = Array.from(
      document.querySelectorAll("#question-schedule input"),
    );
    if (event.target.value === "unsure" && event.target.checked)
      all.forEach((e) => {
        if (e !== event.target) e.checked = false;
      });
    else if (event.target.checked)
      document.getElementById("quiz-schedule-unsure").checked = false;
    careAnswers.schedule = all.filter((e) => e.checked).map((e) => e.value);
    document.getElementById("quiz-schedule-done").disabled =
      careAnswers.schedule.length === 0;
  } else careAnswers[key] = event.target.value;
  guideCompleted = false;
  contactUnlocked = false;
  updateCareSteps();
});
document.getElementById("care-quiz").addEventListener("click", (event) => {
  const input = event.target;
  if (
    !(input instanceof HTMLInputElement) ||
    input.type !== "radio" ||
    !input.name.startsWith("quiz-")
  )
    return;
  queueMicrotask(() => {
    if (input.checked && !input.closest(".wizard-question").hidden)
      advanceQuestion();
  });
});
document.getElementById("quiz-schedule-done").addEventListener("click", () => {
  if (careAnswers.schedule?.length) advanceQuestion();
});
document.getElementById("quiz-back").addEventListener("click", () => {
  if (questionIndex === 0) {
    askingLocation = true;
    renderCareQuestion(true);
    return;
  }
  questionIndex--;
  renderCareQuestion(true);
});
document.getElementById("edit-answers").addEventListener("click", () => {
  questionIndex = 0;
  askingLocation = true;
  guideCompleted = false;
  goCareStep(1, false);
  renderCareQuestion(true);
});
document.addEventListener("click", (event) => {
  const b = event.target.closest("[data-go-step]");
  if (!b || b.disabled) return;
  event.preventDefault();
  goCareStep(Number(b.dataset.goStep));
});
window.addEventListener("pagehide", () => {
  careAnswers = {};
  document.getElementById("care-quiz").reset();
  questionIndex = 0;
  askingLocation = true;
  selectedOfficeId = null;
  syncMobileBar();
  careZip = "";
  document.getElementById("zip").value = "";
  document.getElementById("lookup-results").textContent = "";
  window.resetCareFlow();
  renderCareQuestion();
});
updateCareSteps();

(() => {
  const dialog = document.getElementById("inquiry-dialog"),
    form = document.getElementById("inquiry-form"),
    errors = document.getElementById("inquiry-errors"),
    confirmation = document.getElementById("inquiry-confirmation");
  let opener = null,
    stamp = "";
  function note() {
    const o = OFFICES[selectedOfficeId];
    if (!o) return "";
    const g = buildCareGuide(careAnswers);
    return [
      "Care conversation for " + displayOfficeName(o) + ".",
      "Care ZIP: " + (careZip || "not provided") + ".",
      ...(careAnswers.who === "couple"
        ? [
            "2 people in the same home need support. Quiz answers describe the person with greater needs. Each person needs a separate care assessment and benefits review.",
          ]
        : []),
      ...CARE_QUESTIONS.map((q) => q[1] + " " + answerLabel(q)),
      "Suggested services: " +
        (g.care.map((x) => x.name).join(", ") ||
          "To discuss with the local team") +
        ".",
      "Programs and payment topics: " +
        (g.programs.map((x) => x.name).join(", ") ||
          "Costs and available guidance") +
        ".",
      "A discussion guide only, not an assessment or eligibility decision. Placeholder only. Nothing sent.",
    ].join("\n");
  }
  function prefill() {
    const o = OFFICES[selectedOfficeId];
    if (!o) return;
    const next = JSON.stringify([selectedOfficeId, careZip, careAnswers]);
    document.getElementById("inquiry-office").value = displayOfficeName(o);
    document.getElementById("inquiry-zip").value = careZip || "Not provided";
    if (next !== stamp) {
      document.getElementById("inquiry-message").value = note();
      stamp = next;
    }
  }
  window.prefillCareContact = prefill;
  function clearErrors() {
    errors.hidden = true;
    errors.textContent = "";
    form
      .querySelectorAll("[aria-invalid]")
      .forEach((e) => e.removeAttribute("aria-invalid"));
    form.querySelectorAll(".field-error").forEach((e) => {
      e.hidden = true;
      e.textContent = "";
    });
  }
  function open(button) {
    opener = button;
    prefill();
    clearErrors();
    form.hidden = false;
    confirmation.hidden = true;
    dialog.showModal();
    document.body.classList.add("inquiry-open");
    dialog.scrollTop = 0;
    document.getElementById("inquiry-title").focus({ preventScroll: true });
  }
  function close(restore = true) {
    if (dialog.open) dialog.close();
    document.body.classList.remove("inquiry-open");
    if (restore) {
      const target = opener?.isConnected
        ? opener
        : document.getElementById("contact-title");
      target.focus({ preventScroll: true });
      target.scrollIntoView({ block: "nearest", behavior: "instant" });
    }
  }
  document.addEventListener("click", (event) => {
    const button = event.target.closest("#inquiry-open, #mobile-inquiry");
    if (button && selectedOfficeId) {
      event.preventDefault();
      open(button);
    }
  });
  document
    .getElementById("inquiry-close")
    .addEventListener("click", () => close());
  document
    .getElementById("inquiry-confirm-close")
    .addEventListener("click", () => close());
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    close();
  });
  dialog.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const items = [
      ...dialog.querySelectorAll(
        'button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),a[href],[tabindex="0"]',
      ),
    ].filter((e) => e.getClientRects().length);
    const first = items[0],
      last = items[items.length - 1];
    if (!first) return;
    if (!items.includes(document.activeElement)) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
    } else if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();
    const invalid = [],
      name = document.getElementById("inquiry-name"),
      phone = document.getElementById("inquiry-phone"),
      email = document.getElementById("inquiry-email");
    if (!name.value.trim()) invalid.push([name, "Enter a name for this demo."]);
    const n = phone.value.replace(/\D/g, "");
    if (n.length < 10 || n.length > 15 || !/^[+()0-9.\s-]+$/.test(phone.value))
      invalid.push([phone, "Enter a phone number with 10 to 15 digits."]);
    if (email.value && email.validity.typeMismatch)
      invalid.push([email, "Enter a valid email address, or leave it blank."]);
    if (invalid.length) {
      for (const [input, message] of invalid) {
        input.setAttribute("aria-invalid", "true");
        const error = document.getElementById(input.id + "-error");
        error.textContent = message;
        error.hidden = false;
      }
      errors.innerHTML =
        "<strong>Please check these fields.</strong><ul>" +
        invalid
          .map(
            ([input, message]) =>
              '<li><a href="#' + input.id + '">' + esc(message) + "</a></li>",
          )
          .join("") +
        "</ul>";
      errors.hidden = false;
      errors.focus();
      errors.scrollIntoView({ block: "nearest" });
      return;
    }
    form.reset();
    stamp = "";
    form.hidden = true;
    confirmation.hidden = false;
    confirmation.focus();
    confirmation.scrollIntoView({ block: "nearest" });
  });
  errors.addEventListener("click", (event) => {
    const a = event.target.closest("a");
    if (a) {
      event.preventDefault();
      document.getElementById(a.hash.slice(1))?.focus();
    }
  });
  document.addEventListener("officechange", () => {
    stamp = "";
    if (dialog.open) close(false);
  });
  window.addEventListener("pagehide", () => {
    close(false);
    form.reset();
    stamp = "";
    opener = null;
    clearErrors();
    confirmation.hidden = true;
    form.hidden = false;
  });
  const params = new URLSearchParams(window.location.search),
    id = params.get("office");
  if (id) {
    if (Object.hasOwn(OFFICES, id)) {
      const z = params.get("zip") || "";
      if (
        /^[0-9]{5}$/.test(z) &&
        (OFFICE_DATA.zipToOfficeIds[z] || []).includes(id)
      )
        document.getElementById("zip").value = z;
      setOffice(id, true);
    } else
      document.getElementById("zip-message").textContent =
        "That link was not recognized. Enter a city or ZIP to continue.";
  }
  renderCareQuestion();
})();
