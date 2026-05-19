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

const SEARCH_INDEX_URL_ATTR = "data-registry-search-url";

const ensureSearchOverlay = () => {
  let overlay = document.querySelector("[data-registry-search]");
  if (overlay) return overlay;

  overlay = document.createElement("div");
  overlay.className = "registry-search";
  overlay.setAttribute("data-registry-search", "");
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Search registry");
  overlay.hidden = true;
  overlay.innerHTML = `
    <div class="registry-search__backdrop" data-registry-search-close></div>
    <div class="registry-search__panel" role="document">
      <div class="registry-search__input-row">
        <input type="search" class="registry-search__input"
               placeholder="Search packages, targets, tags…"
               autocomplete="off" autocorrect="off"
               spellcheck="false"
               data-registry-search-input>
        <kbd class="registry-search__hint">ESC</kbd>
      </div>
      <ul class="registry-search__results" data-registry-search-results
          role="listbox"></ul>
      <div class="registry-search__empty" data-registry-search-empty hidden>
        No matches. Try a target file name like
        <code>tsconfig.json</code> or an ecosystem like <code>rust</code>.
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  return overlay;
};

let searchIndexPromise = null;
const loadSearchIndex = (url) => {
  if (searchIndexPromise) return searchIndexPromise;
  searchIndexPromise = fetch(url, { credentials: "omit" })
    .then((res) => {
      if (!res.ok) throw new Error(`failed to load index: ${res.status}`);
      return res.json();
    })
    .catch((err) => {
      searchIndexPromise = null;
      throw err;
    });
  return searchIndexPromise;
};

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

const renderResults = (resultsEl, hits, emptyEl) => {
  resultsEl.innerHTML = "";
  if (hits.length === 0) {
    emptyEl.hidden = false;
    return;
  }
  emptyEl.hidden = true;
  const fragment = document.createDocumentFragment();
  for (const [i, hit] of hits.entries()) {
    const li = document.createElement("li");
    li.className = "registry-search__hit";
    li.setAttribute("role", "option");
    li.setAttribute("data-registry-search-index", String(i));
    li.innerHTML = `
      <a href="${escapeHtml(hit.docsUrl)}" class="registry-search__link">
        <span class="registry-search__name">${escapeHtml(hit.name)}</span>
        <span class="registry-search__version">@${escapeHtml(hit.version)}</span>
        <span class="registry-search__eco">${escapeHtml(hit.ecosystem)}</span>
        ${hit.description ? `<span class="registry-search__desc">${escapeHtml(hit.description)}</span>` : ""}
        <span class="registry-search__targets">${hit.targets.slice(0, 4).map((t) => `<code>${escapeHtml(t)}</code>`).join(" ")}</span>
      </a>
    `;
    fragment.appendChild(li);
  }
  resultsEl.appendChild(fragment);
};

const filterHits = (hits, queryRaw) => {
  const query = queryRaw.trim().toLowerCase();
  if (query === "") return hits.slice(0, 12);
  return hits
    .filter((h) => h.haystack.includes(query))
    .slice(0, 30);
};

const bindRegistrySearch = () => {
  const triggerLink = document.querySelector(`[${SEARCH_INDEX_URL_ATTR}]`);
  const url = triggerLink?.getAttribute(SEARCH_INDEX_URL_ATTR);
  if (!url) return; // no search index available on this page

  const overlay = ensureSearchOverlay();
  const input = overlay.querySelector("[data-registry-search-input]");
  const resultsEl = overlay.querySelector("[data-registry-search-results]");
  const emptyEl = overlay.querySelector("[data-registry-search-empty]");
  if (
    !(input instanceof HTMLInputElement)
    || !(resultsEl instanceof HTMLElement)
    || !(emptyEl instanceof HTMLElement)
  ) return;

  let cachedHits = null;
  let selectedIndex = 0;

  const open = () => {
    overlay.hidden = false;
    document.documentElement.classList.add("registry-search-open");
    void loadSearchIndex(url).then((data) => {
      cachedHits = Array.isArray(data?.hits) ? data.hits : [];
      renderResults(resultsEl, filterHits(cachedHits, input.value), emptyEl);
    }).catch(() => {
      emptyEl.hidden = false;
      emptyEl.textContent = "Search index unavailable.";
    });
    window.requestAnimationFrame(() => input.focus());
  };

  const close = () => {
    overlay.hidden = true;
    document.documentElement.classList.remove("registry-search-open");
    input.value = "";
    renderResults(resultsEl, [], emptyEl);
  };

  overlay.addEventListener("click", (e) => {
    const target = e.target;
    if (target instanceof HTMLElement && target.matches("[data-registry-search-close]")) {
      close();
    }
  });

  input.addEventListener("input", () => {
    if (!cachedHits) return;
    selectedIndex = 0;
    renderResults(resultsEl, filterHits(cachedHits, input.value), emptyEl);
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
      return;
    }
    const items = resultsEl.querySelectorAll(".registry-search__hit");
    if (items.length === 0) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      selectedIndex = (selectedIndex + 1) % items.length;
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      selectedIndex = (selectedIndex - 1 + items.length) % items.length;
    } else if (event.key === "Enter") {
      event.preventDefault();
      const link = items[selectedIndex]?.querySelector("a");
      if (link instanceof HTMLAnchorElement) link.click();
      return;
    } else {
      return;
    }
    for (const [i, el] of items.entries()) {
      el.classList.toggle("is-active", i === selectedIndex);
    }
    items[selectedIndex]?.scrollIntoView({ block: "nearest" });
  });

  document.addEventListener("keydown", (event) => {
    if (overlay.hidden) {
      if (event.key === "/" && !event.metaKey && !event.ctrlKey && !event.altKey) {
        const target = event.target;
        if (target instanceof HTMLElement) {
          const tag = target.tagName;
          if (tag === "INPUT" || tag === "TEXTAREA" || target.isContentEditable) return;
        }
        event.preventDefault();
        open();
      }
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        open();
      }
    } else if (event.key === "Escape") {
      event.preventDefault();
      close();
    }
  });

  // Auto-open via #/search hash so we can deep-link from the navbar.
  if (window.location.hash === "#/search") open();
};

const focusSearchOnSlash = () => {
  document.addEventListener("keydown", (event) => {
    if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
    const target = event.target;
    if (target instanceof HTMLElement) {
      const tag = target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || target.isContentEditable) return;
    }
    // If the registry-search overlay was bound, it already handles "/".
    if (document.querySelector(`[${SEARCH_INDEX_URL_ATTR}]`)) return;
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
  bindRegistrySearch();
  focusSearchOnSlash();
});
