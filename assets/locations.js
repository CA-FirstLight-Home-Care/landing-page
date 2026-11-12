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
const OFFICE_POINTS = {
  burbank: { city: "Burbank", latitude: 34.1526952, longitude: -118.2545802 },
  "chino-hills": {
    city: "Chino Hills",
    latitude: 33.998530636966,
    longitude: -117.835669785771,
  },
  glendale: { city: "Glendale", latitude: 34.1526952, longitude: -118.2545802 },
  irvine: {
    city: "Irvine",
    latitude: 33.685401562787,
    longitude: -117.854637244791,
  },
  "marina-del-rey": {
    city: "Marina del Rey",
    latitude: 34.004781960048,
    longitude: -118.420533312205,
  },
  montclair: {
    city: "Montclair",
    latitude: 34.002809662445,
    longitude: -117.721704541492,
  },
  pasadena: {
    city: "Pasadena",
    latitude: 34.12649869219,
    longitude: -118.051557789705,
  },
  "rancho-cucamonga": {
    city: "Rancho Cucamonga",
    latitude: 34.098166160904,
    longitude: -117.594704760959,
  },
  "san-clemente": {
    city: "San Clemente",
    latitude: 33.493906926548,
    longitude: -117.662745489939,
  },
  "san-gabriel": {
    city: "San Gabriel",
    latitude: 34.12649869219,
    longitude: -118.051557789705,
  },
  "simi-valley": {
    city: "Simi Valley",
    latitude: 34.284039722323,
    longitude: -118.778917020277,
  },
  temecula: {
    city: "Temecula",
    latitude: 33.503253833958,
    longitude: -117.166589226428,
  },
  "west-hollywood": {
    city: "West Hollywood",
    latitude: 34.052026374304,
    longitude: -118.376062806873,
  },
  whittier: {
    city: "Whittier",
    latitude: 33.969242350063,
    longitude: -118.032727291698,
  },
  "woodland-hills": {
    city: "Woodland Hills",
    latitude: 34.173351278311,
    longitude: -118.594229818015,
  },
};
(() => {
  const input = document.getElementById("location-search"),
    clear = document.getElementById("location-search-clear"),
    status = document.getElementById("locations-count"),
    placeMessage = document.getElementById("location-place-message"),
    suggestions = document.getElementById("location-suggestions"),
    locateButton = document.getElementById("location-locate"),
    empty = document.querySelector(".locations-empty"),
    cards = Array.from(document.querySelectorAll(".location-card")),
    prompt = document.getElementById("city-ambiguity"),
    promptText = document.getElementById("city-ambiguity-message"),
    zipInput = document.getElementById("city-zip"),
    zipError = document.getElementById("city-zip-error"),
    notice = document.getElementById("zip-office-notice");
  let activeCity = null;
  let activeSuggestion = -1;
  let locateToken = 0;
  function placeQueryKind(value) {
    if (/[A-Za-z]/.test(value)) return "city";
    if (/^\d+/.test(value)) return "zip";
    return "";
  }
  function cityLabels(query) {
    const needle = query.toLocaleLowerCase("en-US");
    const cities = [
      ...new Map(
        Object.values(CITY_OFFICES).map((entry) => [entry.city, entry]),
      ).values(),
    ];
    const startsWith = cities.filter((entry) =>
      entry.city.toLocaleLowerCase("en-US").startsWith(needle),
    );
    const contains = cities.filter((entry) => {
      const city = entry.city.toLocaleLowerCase("en-US");
      return !city.startsWith(needle) && city.includes(needle);
    });
    return [...startsWith, ...contains].slice(0, 8).map((entry) => entry.city);
  }
  function zipLabels(query) {
    const digits = query.match(/^\d+/)[0];
    return Object.keys(ZIP_OFFICES)
      .filter((zip) => zip.startsWith(digits))
      .sort()
      .slice(0, 8);
  }
  function closeSuggestions() {
    activeSuggestion = -1;
    suggestions.hidden = true;
    suggestions.replaceChildren();
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");
  }
  function showUnsupported(kind) {
    const text =
      kind === "zip"
        ? "Sorry, this ZIP code isn't in our service area yet."
        : "Sorry, this city isn't in our service area yet.";
    // #other-directory is a placeholder until a real directory URL is chosen.
    placeMessage.innerHTML =
      text +
      ' <a href="#other-directory">Looking for a different area? Check our other directory here.</a>';
    input.setAttribute("aria-invalid", "true");
  }
  function renderSuggestions() {
    const query = input.value.trim();
    const kind = placeQueryKind(query);
    const labels =
      kind === "zip"
        ? zipLabels(query)
        : kind === "city"
          ? cityLabels(query)
          : [];
    if (!query || !kind || !labels.length) {
      closeSuggestions();
      return labels;
    }
    suggestions.replaceChildren(
      ...labels.map((label, index) => {
        const option = document.createElement("li");
        option.id = "location-suggestion-" + index;
        option.setAttribute("role", "option");
        option.setAttribute("aria-selected", "false");
        option.textContent = label;
        option.addEventListener("mousedown", (event) => event.preventDefault());
        option.addEventListener("click", () => chooseSuggestion(label));
        return option;
      }),
    );
    suggestions.hidden = false;
    input.setAttribute("aria-expanded", "true");
    return labels;
  }
  function chooseSuggestion(label) {
    input.value = label;
    pinnedOffices = null;
    closeSuggestions();
    placeMessage.textContent = "";
    input.removeAttribute("aria-invalid");
    filter();
  }
  let pinnedOffices = null;
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
      const match = pinnedOffices
        ? pinnedOffices.includes(card.dataset.office)
        : activeCity
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
    status.textContent =
      query || pinnedOffices
        ? count + " of 15 offices match your search."
        : "15 participating offices";
    clear.hidden = !query;
    empty.hidden = count !== 0;
    return count;
  }
  function refresh() {
    pinnedOffices = null;
    const labels = renderSuggestions();
    const count = filter();
    const query = input.value.trim();
    const kind = placeQueryKind(query);
    if (query && kind && !labels.length && count === 0) {
      showUnsupported(kind);
      empty.hidden = true;
      return;
    }
    placeMessage.textContent = "";
    input.removeAttribute("aria-invalid");
  }
  function moveSuggestion(direction) {
    const options = suggestions.querySelectorAll('[role="option"]');
    if (!options.length) return false;
    activeSuggestion =
      activeSuggestion === -1
        ? direction > 0
          ? 0
          : options.length - 1
        : (activeSuggestion + direction + options.length) % options.length;
    options.forEach((option, index) => {
      const active = index === activeSuggestion;
      option.setAttribute("aria-selected", String(active));
      if (active) {
        input.setAttribute("aria-activedescendant", option.id);
        option.scrollIntoView({ block: "nearest" });
      }
    });
    return true;
  }
  function reset() {
    input.value = "";
    zipInput.value = "";
    pinnedOffices = null;
    placeMessage.textContent = "";
    input.removeAttribute("aria-invalid");
    closeSuggestions();
    filter();
    input.focus();
  }
  input.addEventListener("input", refresh);
  input.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" && moveSuggestion(1)) {
      event.preventDefault();
      return;
    }
    if (event.key === "ArrowUp" && moveSuggestion(-1)) {
      event.preventDefault();
      return;
    }
    if (event.key === "Escape") {
      if (!suggestions.hidden) {
        event.preventDefault();
        closeSuggestions();
        return;
      }
      if (input.value) {
        event.preventDefault();
        reset();
      }
      return;
    }
    if (event.key === "Enter") {
      const active = suggestions.querySelector('[aria-selected="true"]');
      if (active) {
        event.preventDefault();
        chooseSuggestion(active.textContent);
        return;
      }
      if (activeCity) {
        event.preventDefault();
        zipInput.focus();
      }
    }
  });
  input.addEventListener("blur", () => {
    window.setTimeout(closeSuggestions, 120);
  });
  clear.addEventListener("click", reset);
  function stopLocating() {
    locateToken += 1;
    locateButton.removeAttribute("aria-busy");
  }
  function distanceKm(lat1, lon1, lat2, lon2) {
    const r = Math.PI / 180;
    const x = (lat2 - lat1) * r;
    const y = (lon2 - lon1) * r;
    const h =
      Math.sin(x / 2) ** 2 +
      Math.cos(lat1 * r) * Math.cos(lat2 * r) * Math.sin(y / 2) ** 2;
    return 6371 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(Math.max(0, 1 - h)));
  }
  input.addEventListener("input", stopLocating);
  locateButton.addEventListener("click", () => {
    const token = ++locateToken;
    closeSuggestions();
    if (!navigator.geolocation) {
      locateButton.removeAttribute("aria-busy");
      placeMessage.textContent =
        "This browser cannot share your location. You can type a city or ZIP instead.";
      return;
    }
    locateButton.setAttribute("aria-busy", "true");
    placeMessage.textContent = "Finding your location.";
    input.removeAttribute("aria-invalid");
    try {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (token !== locateToken) return;
          locateButton.removeAttribute("aria-busy");
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          if (
            !Number.isFinite(latitude) ||
            !Number.isFinite(longitude) ||
            Math.abs(latitude) > 90 ||
            Math.abs(longitude) > 180
          ) {
            placeMessage.textContent =
              "Your location could not be found. You can type a city or ZIP instead.";
            return;
          }
          // Reverse geocoding belongs here. A future call can turn latitude
          // and longitude into a city or ZIP, assign that text to the input,
          // and then call refresh(). No location request leaves this page.
          // Until that call exists, the nearest-office match below uses the
          // coordinates stored with each office.
          const ranked = Object.entries(OFFICE_POINTS)
            .map(([id, point]) => ({
              id,
              city: point.city,
              km: distanceKm(
                latitude,
                longitude,
                point.latitude,
                point.longitude,
              ),
            }))
            .filter((item) => Number.isFinite(item.km))
            .sort((a, b) => a.km - b.km);
          if (!ranked.length) {
            placeMessage.textContent =
              "Your location could not be found. You can type a city or ZIP instead.";
            return;
          }
          const nearest = ranked.filter(
            (item) => Math.abs(item.km - ranked[0].km) < 0.05,
          );
          if (nearest.length === 1) {
            input.value = nearest[0].city;
            pinnedOffices = null;
            placeMessage.textContent = "";
            closeSuggestions();
            filter();
            return;
          }
          pinnedOffices = nearest.map((item) => item.id);
          input.value = "";
          placeMessage.textContent =
            "More than 1 team is near this spot. Enter the ZIP where care is needed.";
          filter();
        },
        (error) => {
          if (token !== locateToken) return;
          locateButton.removeAttribute("aria-busy");
          const messages = {
            1: "Location permission was denied. You can type a city or ZIP instead.",
            2: "Your location could not be found. You can type a city or ZIP instead.",
            3: "Finding your location took too long. You can type a city or ZIP instead.",
          };
          placeMessage.textContent =
            messages[error && error.code] ||
            "This browser cannot share your location. You can type a city or ZIP instead.";
        },
        { enableHighAccuracy: false, timeout: 10000, maximumAge: 0 },
      );
    } catch {
      locateButton.removeAttribute("aria-busy");
      placeMessage.textContent =
        "This browser cannot share your location. You can type a city or ZIP instead.";
    }
  });

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
      pinnedOffices = null;
      placeMessage.textContent = "";
      input.removeAttribute("aria-invalid");
      closeSuggestions();
      filter();
      status.focus();
      input.focus();
    });
  document.querySelector(".locations-filter").hidden = false;
  window.addEventListener("pagehide", () => {
    input.value = "";
    zipInput.value = "";
    pinnedOffices = null;
    placeMessage.textContent = "";
    closeSuggestions();
    locateButton.removeAttribute("aria-busy");
    filter();
  });
})();
