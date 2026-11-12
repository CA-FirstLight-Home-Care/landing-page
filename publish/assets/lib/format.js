export function displayOfficeName(office) {
  return String(office.shortName).replace(/\u2013|\u2014/g, " / ");
}

export function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );
}

export function phoneHref(office) {
  return "tel:+1" + office.phone.replace(/\D/g, "");
}

export function directoryLinkHtml(zip, href) {
  const label = /^[0-9]{5}$/.test(String(zip || ""))
    ? "Find your local FirstLight office"
    : "Looking for a different area? Check our other directory here.";
  return (
    '<a href="' +
    escapeHtml(href) +
    '" target="_blank" rel="noopener noreferrer">' +
    label +
    '<span class="sr-only"> (opens in a new tab)</span></a>'
  );
}
