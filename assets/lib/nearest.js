export const NEAREST_TIE_KM = 0.05;

export function distanceKm(lat1, lon1, lat2, lon2) {
  const r = Math.PI / 180;
  const x = (lat2 - lat1) * r;
  const y = (lon2 - lon1) * r;
  const h =
    Math.sin(x / 2) ** 2 +
    Math.cos(lat1 * r) * Math.cos(lat2 * r) * Math.sin(y / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(Math.max(0, 1 - h)));
}

export function rankByDistance(items) {
  return items
    .filter((item) => Number.isFinite(item.km))
    .sort((a, b) => a.km - b.km);
}

export function tiedNearest(ranked, tieKm = NEAREST_TIE_KM) {
  if (!ranked.length) return [];
  return ranked.filter((item) => Math.abs(item.km - ranked[0].km) < tieKm);
}

export function geolocationErrorMessage(error) {
  const messages = {
    1: "Location permission was denied. You can type a city or ZIP instead.",
    2: "Your location could not be found. You can type a city or ZIP instead.",
    3: "Finding your location took too long. You can type a city or ZIP instead.",
  };
  return (
    messages[error && error.code] ||
    "This browser cannot share your location. You can type a city or ZIP instead."
  );
}
