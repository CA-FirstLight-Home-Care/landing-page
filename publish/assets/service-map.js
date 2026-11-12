// Service area map for the locations page.
// This file does not ask for the visitor's location. The locate button on
// the search field is separate, and it runs only after a click.
// Tiles are the OpenStreetMap France raster map. It is OpenStreetMap data,
// free, and needs no API key. CARTO's public raster tiles now draw an
// "API key required" watermark. The volunteer tile.openstreetmap.org server
// blocks app use under its tile policy, so this page does not call it.

const AREA_COLORS = {
  burbank: "#0e7a57",
  "chino-hills": "#1d4e89",
  glendale: "#b45309",
  irvine: "#0f766e",
  "marina-del-rey": "#6d28d9",
  montclair: "#9a3412",
  pasadena: "#3f6212",
  "rancho-cucamonga": "#9f1239",
  "san-clemente": "#0369a1",
  "san-gabriel": "#a16207",
  "simi-valley": "#4338ca",
  temecula: "#be185d",
  "west-hollywood": "#0f4c5c",
  whittier: "#4d7c0f",
  "woodland-hills": "#7c2d12",
};

(() => {
  const mapEl = document.getElementById("service-map");
  const activate = document.getElementById("service-map-activate");
  const status = document.getElementById("service-map-status");
  const legend = document.getElementById("service-map-legend");
  if (!mapEl || !legend) return;

  let map = null;
  let started = false;
  const markers = new Map();
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  function officeRecord(id) {
    const card = document.getElementById("location-" + id);
    if (!card) return null;
    const phoneLink = card.querySelector('a[href^="tel:"]');
    return {
      id,
      name: card.querySelector("h2").textContent.trim(),
      phone: phoneLink ? phoneLink.textContent.trim() : "",
      phoneHref: phoneLink ? phoneLink.getAttribute("href") : "",
      areas: card.querySelector(".location-areas").textContent.trim(),
    };
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function popupHtml(record) {
    const phone = record.phoneHref
      ? `<p><a href="${escapeHtml(record.phoneHref)}">${escapeHtml(record.phone)}</a></p>`
      : "";
    return (
      `<div class="area-popup">` +
      `<h3>${escapeHtml(record.name)}</h3>` +
      phone +
      `<p>${escapeHtml(record.areas)}</p>` +
      `<a class="area-popup-start" href="index.html?office=${encodeURIComponent(record.id)}">Start the care guide</a>` +
      `</div>`
    );
  }

  function setMoving(on) {
    if (!map) return;
    if (on) map.dragging.enable();
    else map.dragging.disable();
    mapEl.classList.toggle("is-moving", on);
    if (activate) {
      activate.textContent = on ? "Done moving the map" : "Tap to move the map";
      activate.setAttribute("aria-pressed", on ? "true" : "false");
    }
    if (status && coarse) {
      status.textContent = on
        ? "The map is ready to drag. Choose Done moving the map when you want to scroll the page."
        : "Tap a color to see that team. Use the button before you drag the map, so the rest of the page can still scroll.";
    }
  }

  function openOffice(id) {
    const marker = markers.get(id);
    if (!map || !marker) return;
    map.panTo(marker.getLatLng(), { animate: !reduceMotion });
    marker.openPopup();
  }

  function loadStyle(href) {
    if (document.querySelector(`link[href="${href}"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(src));
      document.body.appendChild(script);
    });
  }

  function initMap() {
    const Leaflet = window.L;
    if (!Leaflet || typeof SERVICE_AREAS === "undefined") return;
    map = Leaflet.map(mapEl, {
      scrollWheelZoom: false,
      dragging: !coarse,
      zoomControl: true,
      attributionControl: true,
      zoomAnimation: !reduceMotion,
      fadeAnimation: !reduceMotion,
      markerZoomAnimation: !reduceMotion,
    });
    mapEl.classList.toggle("is-moving", !coarse);
    Leaflet.tileLayer(
      "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",
      {
        subdomains: "abc",
        maxZoom: 20,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://www.openstreetmap.fr/">OpenStreetMap France</a>',
      },
    ).addTo(map);
    const tilePane = map.getPane("tilePane");
    if (tilePane) tilePane.setAttribute("aria-hidden", "true");
    map.on("tileload", (event) => {
      event.tile.alt = "";
    });

    const slots = new Map();
    let bounds = null;
    for (const feature of SERVICE_AREAS.features) {
      const id = feature.properties.id;
      const record = officeRecord(id);
      if (!record || !OFFICE_POINTS[id]) continue;
      const color = AREA_COLORS[id] || "#046a38";
      const layer = Leaflet.geoJSON(feature, {
        style: {
          color,
          weight: 2,
          opacity: 0.95,
          fillColor: color,
          fillOpacity: 0.4,
        },
      }).addTo(map);
      const nextBounds = layer.getBounds();
      bounds = bounds ? bounds.extend(nextBounds) : nextBounds;
      const labelPath = (shape) => {
        const path = shape.getElement();
        if (!path || path.dataset.labeled === "yes") return;
        path.dataset.labeled = "yes";
        path.tabIndex = 0;
        path.setAttribute("role", "button");
        path.setAttribute("aria-label", record.name + " service area");
        path.addEventListener("keydown", (event) => {
          if (event.key !== "Enter" && event.key !== " ") return;
          event.preventDefault();
          openOffice(id);
        });
      };
      layer.eachLayer((shape) => {
        labelPath(shape);
        shape.on("add", () => labelPath(shape));
      });
      layer.on("click", () => openOffice(id));

      const point = OFFICE_POINTS[id];
      const key = point.latitude.toFixed(3) + "," + point.longitude.toFixed(3);
      const slot = slots.get(key) || 0;
      slots.set(key, slot + 1);
      const marker = Leaflet.marker([point.latitude, point.longitude], {
        // Pins sit on top of each other at a regional zoom, so they are visual.
        // The legend buttons and the area shapes are the keyboard controls.
        keyboard: false,
        interactive: false,
        title: record.name,
        icon: Leaflet.divIcon({
          className: "area-marker",
          html: `<span style="background:${color}"></span>`,
          iconSize: [22, 22],
          iconAnchor: [11 - slot * 16, 11],
        }),
      });
      const popupWidth = Math.max(150, Math.min(240, mapEl.clientWidth - 134));
      marker.bindPopup(popupHtml(record), {
        maxWidth: popupWidth,
        minWidth: Math.min(160, popupWidth),
        autoPan: true,
        keepInView: true,
        autoPanPaddingTopLeft: [64, 12],
        autoPanPaddingBottomRight: [8, 12],
      });
      marker.addTo(map);
      const pin = marker.getElement();
      if (pin) {
        pin.tabIndex = 0;
        pin.setAttribute("role", "button");
        pin.setAttribute("aria-label", record.name);
        pin.addEventListener("keydown", (event) => {
          if (event.key !== "Enter" && event.key !== " ") return;
          event.preventDefault();
          openOffice(id);
        });
      }
      markers.set(id, marker);

      const item = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "service-map-legend-button";
      button.dataset.office = id;
      const swatch = document.createElement("span");
      swatch.className = "service-map-swatch";
      swatch.style.background = color;
      swatch.setAttribute("aria-hidden", "true");
      button.append(swatch, document.createTextNode(record.name));
      button.addEventListener("click", () => openOffice(id));
      item.append(button);
      legend.append(item);
    }
    if (bounds && bounds.isValid()) {
      map.fitBounds(bounds, {
        padding: [28, 28],
        animate: false,
      });
    }
    legend.hidden = false;
    setMoving(!coarse);
    if (activate) {
      activate.addEventListener("click", () => {
        const moving = mapEl.classList.contains("is-moving");
        setMoving(!moving);
      });
    }
  }

  function start() {
    if (started) return;
    started = true;
    loadStyle("assets/leaflet.min.css");
    loadStyle("assets/service-map.css");
    Promise.all([
      loadScript("assets/leaflet.min.js"),
      loadScript("assets/service-areas.js"),
    ])
      .then(initMap)
      .catch(() => {
        if (status) {
          status.hidden = false;
          status.textContent =
            "The map could not load. The office list below still has every team.";
        }
      });
  }

  if (!("IntersectionObserver" in window)) {
    start();
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      start();
    },
    { rootMargin: "400px" },
  );
  observer.observe(mapEl);
})();
