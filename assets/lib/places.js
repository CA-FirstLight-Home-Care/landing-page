export function placeQueryKind(value) {
  if (/[A-Za-z]/.test(value)) return "city";
  if (/^\d+/.test(value)) return "zip";
  return "";
}

export function matchCities(query, cityOffices, limit = 8) {
  const needle = query.toLocaleLowerCase("en-US");
  const cities = [
    ...new Map(
      Object.values(cityOffices).map((entry) => [entry.city, entry]),
    ).values(),
  ];
  const startsWith = cities.filter((entry) =>
    entry.city.toLocaleLowerCase("en-US").startsWith(needle),
  );
  const contains = cities.filter((entry) => {
    const city = entry.city.toLocaleLowerCase("en-US");
    return !city.startsWith(needle) && city.includes(needle);
  });
  return [...startsWith, ...contains]
    .slice(0, limit)
    .map((entry) => entry.city);
}

export function matchZips(query, routing, maxMiles, limit = 8) {
  const digits = query.match(/^\d+/)[0];
  const alliance = Object.keys(routing.allianceZips)
    .filter((zip) => zip.startsWith(digits))
    .map((zip) => ({ zip, label: zip }));
  const unlisted = Object.keys(routing.unlistedSoCal)
    .filter(
      (zip) =>
        zip.startsWith(digits) && routing.unlistedSoCal[zip].d <= maxMiles,
    )
    .map((zip) => ({
      zip,
      label: zip + ", " + routing.unlistedSoCal[zip].c,
    }));
  return [...alliance, ...unlisted]
    .sort((a, b) => a.zip.localeCompare(b.zip))
    .slice(0, limit);
}
