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

const COPY_LABEL = "Copy";
const COPIED_LABEL = "Copied";

const attachCopyButtons = () => {
  const blocks = document.querySelectorAll(".content pre");
  for (const pre of blocks) {
    if (pre.parentElement?.classList.contains("reg-code-shell")) continue;
    if (pre.closest(".no-copy")) continue;

    const shell = document.createElement("div");
    shell.className = "reg-code-shell";
    pre.parentNode?.insertBefore(shell, pre);
    shell.appendChild(pre);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "reg-code-copy";
    button.textContent = COPY_LABEL;
    button.setAttribute("aria-label", "Copy code");
    button.addEventListener("click", async () => {
      const text = pre.innerText;
      try {
        await navigator.clipboard.writeText(text);
        button.dataset.state = "copied";
        button.textContent = COPIED_LABEL;
      } catch {
        button.dataset.state = "error";
        button.textContent = "Failed";
      }
      window.setTimeout(() => {
        button.removeAttribute("data-state");
        button.textContent = COPY_LABEL;
      }, 1800);
    });

    shell.appendChild(button);
  }
};

const focusSearchOnSlash = () => {
  document.addEventListener("keydown", (event) => {
    if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
    const target = event.target;
    if (target instanceof HTMLElement) {
      const tag = target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || target.isContentEditable) return;
    }
    const search = document.querySelector("input[type='search'], .package-search");
    if (search instanceof HTMLInputElement) {
      event.preventDefault();
      search.focus();
      search.select();
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  markActiveNav();
  bindPackageFilter();
  attachCopyButtons();
  focusSearchOnSlash();
});
