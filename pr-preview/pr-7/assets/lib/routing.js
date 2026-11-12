// ZIP routing. The sheet data stays in assets/zip-routing.js.
// random is a function that returns a number from 0 up to, but not including, 1.

export const MAX_ASSIGN_MILES = 30;

export function referralHref(zip, base) {
  if (!/^\d{5}$/.test(String(zip || ""))) return base;
  return base + "?loc=" + zip;
}

export function createRouteZip(routing, options = {}) {
  const random = options.random || Math.random;
  const picks = options.picks || new Map();
  const nonAlliance = new Set(routing.nonAllianceZips);

  return function routeZip(value) {
    const zip = String(value || "").trim();
    if (!/^\d{5}$/.test(zip)) return { kind: "invalid", zip };
    const alliance = routing.allianceZips[zip];
    if (alliance) {
      return {
        kind: alliance.length > 1 ? "overlap" : "alliance",
        zip,
        ids: alliance.slice(),
      };
    }
    if (nonAlliance.has(zip)) return { kind: "referral", zip };
    const unlisted = routing.unlistedSoCal[zip];
    if (unlisted) {
      if (unlisted.d > MAX_ASSIGN_MILES) return { kind: "outside", zip };
      if (!picks.has(zip)) {
        const ids = unlisted.o;
        picks.set(zip, ids[Math.floor(random() * ids.length)]);
      }
      return {
        kind: "unlisted",
        zip,
        id: picks.get(zip),
        ids: unlisted.o.slice(),
        city: unlisted.c,
      };
    }
    return { kind: "outside", zip };
  };
}
