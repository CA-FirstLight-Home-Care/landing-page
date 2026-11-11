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
const ZIP_OFFICES = {
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
};
(() => {
  const input = document.getElementById("location-search"),
    clear = document.getElementById("location-search-clear"),
    status = document.getElementById("locations-count"),
    empty = document.querySelector(".locations-empty"),
    cards = Array.from(document.querySelectorAll(".location-card")),
    prompt = document.getElementById("city-ambiguity"),
    promptText = document.getElementById("city-ambiguity-message"),
    zipInput = document.getElementById("city-zip"),
    zipError = document.getElementById("city-zip-error"),
    notice = document.getElementById("zip-office-notice");
  let activeCity = null;
  function filter() {
    const query = input.value.trim().toLocaleLowerCase("en-US"),
      words = query.split(/\s+/).filter(Boolean),
      city = CITY_OFFICES[query];
    activeCity = city && city.ids.length > 1 ? city : null;
    prompt.hidden = !activeCity;
    zipError.hidden = true;
    zipInput.removeAttribute("aria-invalid");
    if (activeCity)
      promptText.textContent =
        activeCity.ids.length +
        " offices serve " +
        activeCity.city +
        ". Enter your ZIP code to find yours. We will not choose an office from the city name alone.";
    let count = 0;
    for (const card of cards) {
      const match = activeCity
        ? activeCity.ids.includes(card.dataset.office)
        : /^[0-9]{5}$/.test(query)
          ? (ZIP_OFFICES[query] || []).includes(card.dataset.office)
          : words.every((w) => card.dataset.search.includes(w));
      card.hidden = !match;
      if (match) count++;
    }

    const ids = /^[0-9]{5}$/.test(query) ? ZIP_OFFICES[query] || [] : [];
    notice.hidden = ids.length < 2;
    if (ids.length > 1)
      notice.textContent =
        "This ZIP is listed under " +
        ids.length +
        " offices in the source coverage sheet. We will not choose 1. Confirm the right office with 1 of the listed teams below.";
    status.textContent = query
      ? count + " of 15 offices match your search."
      : "15 participating offices";
    clear.hidden = !query;
    empty.hidden = count !== 0;
  }
  function reset() {
    input.value = "";
    zipInput.value = "";
    filter();
    input.focus();
  }
  input.addEventListener("input", filter);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && input.value) {
      event.preventDefault();
      reset();
    } else if (event.key === "Enter" && activeCity) {
      event.preventDefault();
      zipInput.focus();
    }
  });
  clear.addEventListener("click", reset);

  document
    .getElementById("city-zip-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const z = zipInput.value.trim();
      if (!/^[0-9]{5}$/.test(z)) {
        zipError.textContent = "Enter a 5-digit ZIP code, using numbers only.";
        zipError.hidden = false;
        zipInput.setAttribute("aria-invalid", "true");
        zipInput.focus();
        return;
      }
      input.value = z;
      filter();
      status.focus();
      input.focus();
    });
  document.querySelector(".locations-filter").hidden = false;
  window.addEventListener("pagehide", () => {
    input.value = "";
    zipInput.value = "";
    filter();
  });
})();
