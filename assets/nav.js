(() => {
  const input = document.querySelector(".nav-toggle-input");
  const nav = document.getElementById("site-nav");
  if (!input || !nav) return;

  const desktop = window.matchMedia("(min-width: 701px)");

  function headerOffset() {
    const header = document.querySelector(".header");
    const height = header
      ? Math.ceil(header.getBoundingClientRect().height)
      : 84;
    document.documentElement.style.setProperty(
      "--mobile-header-height",
      height + "px",
    );
  }

  function sync() {
    headerOffset();
    const open = input.checked && !desktop.matches;
    if (desktop.matches && input.checked) input.checked = false;
    document.body.classList.toggle("nav-open", open);
  }

  input.addEventListener("change", () => {
    sync();
    if (input.checked) {
      const first = nav.querySelector("a");
      if (first) first.focus({ preventScroll: true });
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !input.checked) return;
    input.checked = false;
    sync();
    input.focus();
  });

  nav.addEventListener("click", (event) => {
    if (!event.target.closest("a") || !input.checked) return;
    input.checked = false;
    sync();
  });

  const onDesktop = () => sync();
  if (typeof desktop.addEventListener === "function") {
    desktop.addEventListener("change", onDesktop);
  } else if (typeof desktop.addListener === "function") {
    desktop.addListener(onDesktop);
  }

  window.addEventListener("resize", headerOffset);
  sync();
})();
