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

const enhanceSearchAccessibility = () => {
  const overlay = document.querySelector(".search-modal-overlay");
  const modal = document.querySelector(".search-modal");
  const input = document.querySelector(".search-input");
  const closeButton = document.querySelector(".search-close");

  if (!(overlay instanceof HTMLElement) || !(modal instanceof HTMLElement)) return;

  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-label", "Search documentation");
  modal.setAttribute("tabindex", "-1");
  overlay.setAttribute("aria-hidden", overlay.classList.contains("open") ? "false" : "true");

  if (input instanceof HTMLInputElement) {
    input.id ||= "registry-docs-search-input";
    input.setAttribute("aria-label", "Search documentation");
  }

  if (closeButton instanceof HTMLButtonElement) {
    closeButton.setAttribute("aria-label", "Close search");
  }

  let wasOpen = overlay.classList.contains("open");
  let previousSearchFocus = null;

  const searchTriggers = Array.from(
    document.querySelectorAll(".search-button, [data-mobile-search]"),
  ).filter((trigger) => trigger instanceof HTMLElement);

  const isVisibleTrigger = (trigger) =>
    trigger.isConnected &&
    !trigger.hidden &&
    trigger.getClientRects().length > 0 &&
    getComputedStyle(trigger).visibility !== "hidden";

  const fallbackFocusTarget = () => searchTriggers.find(isVisibleTrigger) ?? null;

  const rememberSearchFocus = (target) => {
    previousSearchFocus =
      target instanceof HTMLElement &&
      target !== document.body &&
      target !== document.documentElement
        ? target
        : fallbackFocusTarget();
  };

  const restoreSearchFocus = () => {
    const target =
      previousSearchFocus?.isConnected && previousSearchFocus instanceof HTMLElement
        ? previousSearchFocus
        : fallbackFocusTarget();

    if (!target || typeof target.focus !== "function") return;

    requestAnimationFrame(() => target.focus({ preventScroll: true }));
  };

  for (const trigger of searchTriggers) {
    trigger.addEventListener(
      "click",
      () => {
        rememberSearchFocus(trigger);
      },
      true,
    );
  }

  document.addEventListener(
    "keydown",
    (event) => {
      const opensSearch =
        (event.key === "/" && !(event.target instanceof HTMLInputElement)) ||
        ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k");

      if (opensSearch) {
        rememberSearchFocus(document.activeElement);
      }
    },
    true,
  );

  const syncDialogState = () => {
    const isOpen = overlay.classList.contains("open");
    overlay.setAttribute("aria-hidden", isOpen ? "false" : "true");

    if (wasOpen && !isOpen) {
      restoreSearchFocus();
    }

    wasOpen = isOpen;
  };

  new MutationObserver(syncDialogState).observe(overlay, {
    attributeFilter: ["class"],
    attributes: true,
  });
};

const removeMobileMenuAffordance = () => {
  document.querySelector("[data-mobile-menu]")?.remove();
};

const initRegistryUi = () => {
  markActiveNav();
  bindPackageFilter();
  enhanceSearchAccessibility();
  removeMobileMenuAffordance();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initRegistryUi);
} else {
  initRegistryUi();
}
