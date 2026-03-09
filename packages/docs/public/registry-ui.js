const normalizePath = (value) =>
  value.replace(/index\.html$/, "").replace(/\/+$/, "") || "/";

const markActiveNav = () => {
  const currentPath = normalizePath(window.location.pathname);

  for (const link of document.querySelectorAll("[data-registry-nav]")) {
    const match = link.getAttribute("data-registry-nav") || "/";
    const normalizedMatch = normalizePath(match);
    const isActive =
      normalizedMatch === "/"
        ? currentPath === "/"
        : currentPath === normalizedMatch || currentPath.startsWith(`${normalizedMatch}/`);

    link.classList.toggle("is-active", isActive);
  }
};

const bindPackageFilter = () => {
  const input = document.querySelector("[data-package-filter]");
  if (!(input instanceof HTMLInputElement)) return;

  const cards = Array.from(document.querySelectorAll("[data-package-card]"));
  const count = document.querySelector("[data-package-count]");

  const update = () => {
    const query = input.value.trim().toLowerCase();
    let visible = 0;

    for (const card of cards) {
      const haystack = (card.getAttribute("data-search") || "").toLowerCase();
      const matches = query.length === 0 || haystack.includes(query);

      card.toggleAttribute("hidden", !matches);
      if (matches) visible += 1;
    }

    if (count) {
      count.textContent = String(visible);
    }
  };

  input.addEventListener("input", update);
  update();
};

document.addEventListener("DOMContentLoaded", () => {
  markActiveNav();
  bindPackageFilter();
});
