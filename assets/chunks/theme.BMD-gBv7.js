function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import { d as defineComponent, o as openBlock, c as createElementBlock, r as renderSlot, n as normalizeClass, a as createTextVNode, t as toDisplayString, b as createBlock, w as withCtx, e as createCommentVNode, T as Transition, _ as _export_sfc, u as useData$1, i as isExternal, f as treatAsHtml, g as withBase, h as ref, j as inBrowser, k as computed, l as onMounted, m as createBaseVNode, p as unref, q as pushScopeId, s as popScopeId, v as isActive, x as useMediaQuery, y as watch, z as watchEffect, A as onUnmounted, B as watchPostEffect, C as onUpdated, D as getScrollOffset, E as resolveComponent, F as Fragment, G as renderList, H as shallowRef, I as onContentUpdated, J as createVNode, K as resolveDynamicComponent, L as EXTERNAL_URL_RE, M as useRoute, N as mergeProps, O as inject, P as useWindowSize, Q as normalizeStyle, R as onClickOutside, S as onKeyStroke, U as nextTick, V as useWindowScroll, W as readonly, X as useScrollLock, Y as provide, Z as withKeys, $ as toHandlers, a0 as withModifiers, a1 as useSlots, a2 as __vitePreload, a3 as withDirectives, a4 as vShow, a5 as createSlots, a6 as normalizeProps, a7 as guardReactiveProps, a8 as h } from "./framework.Cac4KkLP.js";
const _sfc_main$$ = /* @__PURE__ */ defineComponent({
  __name: "VPBadge",
  props: {
    text: {},
    type: { default: "tip" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(["VPBadge", _ctx.type])
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(_ctx.text), 1)
        ])
      ], 2);
    };
  }
});
const _hoisted_1$N = {
  key: 0,
  class: "VPBackdrop"
};
const _sfc_main$_ = /* @__PURE__ */ defineComponent({
  __name: "VPBackdrop",
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "fade" }, {
        default: withCtx(() => [
          _ctx.show ? (openBlock(), createElementBlock("div", _hoisted_1$N)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const VPBackdrop = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["__scopeId", "data-v-5aae56a5"]]);
const useData = useData$1;
function throttleAndDebounce(fn, delay) {
  let timeoutId;
  let called = false;
  return () => {
    if (timeoutId)
      clearTimeout(timeoutId);
    if (!called) {
      fn();
      (called = true) && setTimeout(() => called = false, delay);
    } else
      timeoutId = setTimeout(fn, delay);
  };
}
function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}
function normalizeLink$1(url) {
  const { pathname, search, hash, protocol } = new URL(url, "http://a.com");
  if (isExternal(url) || url.startsWith("#") || !protocol.startsWith("http") || !treatAsHtml(pathname))
    return url;
  const { site } = useData();
  const normalizedPath = pathname.endsWith("/") || pathname.endsWith(".html") ? url : url.replace(/(?:(^\.+)\/)?.*$/, `$1${pathname.replace(/(\.md)?$/, site.value.cleanUrls ? "" : ".html")}${search}${hash}`);
  return withBase(normalizedPath);
}
const hashRef = ref(inBrowser ? location.hash : "");
if (inBrowser) {
  window.addEventListener("hashchange", () => {
    hashRef.value = location.hash;
  });
}
function useLangs({ removeCurrent = true, correspondingLink = false } = {}) {
  const { site, localeIndex, page, theme: theme2 } = useData();
  const currentLang = computed(() => {
    var _a, _b;
    return {
      label: (_a = site.value.locales[localeIndex.value]) == null ? void 0 : _a.label,
      link: ((_b = site.value.locales[localeIndex.value]) == null ? void 0 : _b.link) || (localeIndex.value === "root" ? "/" : `/${localeIndex.value}/`)
    };
  });
  const localeLinks = computed(() => Object.entries(site.value.locales).flatMap(([key, value]) => removeCurrent && currentLang.value.label === value.label ? [] : {
    text: value.label,
    link: normalizeLink(value.link || (key === "root" ? "/" : `/${key}/`), theme2.value.i18nRouting !== false && correspondingLink, page.value.relativePath.slice(currentLang.value.link.length - 1), !site.value.cleanUrls) + hashRef.value
  }));
  return { localeLinks, currentLang };
}
function normalizeLink(link, addPath, path, addExt) {
  return addPath ? link.replace(/\/$/, "") + ensureStartingSlash(path.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, addExt ? ".html" : "")) : link;
}
const _withScopeId$h = (n) => (pushScopeId("data-v-e476d98e"), n = n(), popScopeId(), n);
const _hoisted_1$M = { class: "NotFound" };
const _hoisted_2$x = { class: "code" };
const _hoisted_3$o = { class: "title" };
const _hoisted_4$e = /* @__PURE__ */ _withScopeId$h(() => /* @__PURE__ */ createBaseVNode("div", { class: "divider" }, null, -1));
const _hoisted_5$c = { class: "quote" };
const _hoisted_6$8 = { class: "action" };
const _hoisted_7$6 = ["href", "aria-label"];
const _sfc_main$Z = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { localeLinks } = useLangs({ removeCurrent: false });
    const root = ref("/");
    onMounted(() => {
      var _a;
      const path = window.location.pathname.replace(site.value.base, "").replace(/(^.*?\/).*$/, "/$1");
      if (localeLinks.value.length) {
        root.value = ((_a = localeLinks.value.find(({ link }) => link.startsWith(path))) == null ? void 0 : _a.link) || localeLinks.value[0].link;
      }
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e;
      return openBlock(), createElementBlock("div", _hoisted_1$M, [
        createBaseVNode("p", _hoisted_2$x, toDisplayString(((_a = unref(theme2).notFound) == null ? void 0 : _a.code) ?? "404"), 1),
        createBaseVNode("h1", _hoisted_3$o, toDisplayString(((_b = unref(theme2).notFound) == null ? void 0 : _b.title) ?? "PAGE NOT FOUND"), 1),
        _hoisted_4$e,
        createBaseVNode("blockquote", _hoisted_5$c, toDisplayString(((_c = unref(theme2).notFound) == null ? void 0 : _c.quote) ?? "But if you don't change your direction, and if you keep looking, you may end up where you are heading."), 1),
        createBaseVNode("div", _hoisted_6$8, [
          createBaseVNode("a", {
            class: "link",
            href: unref(withBase)(root.value),
            "aria-label": ((_d = unref(theme2).notFound) == null ? void 0 : _d.linkLabel) ?? "go to home"
          }, toDisplayString(((_e = unref(theme2).notFound) == null ? void 0 : _e.linkText) ?? "Take me home"), 9, _hoisted_7$6)
        ])
      ]);
    };
  }
});
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["__scopeId", "data-v-e476d98e"]]);
function getSidebar(_sidebar, path) {
  if (Array.isArray(_sidebar))
    return addBase(_sidebar);
  if (_sidebar == null)
    return [];
  path = ensureStartingSlash(path);
  const dir = Object.keys(_sidebar).sort((a, b) => {
    return b.split("/").length - a.split("/").length;
  }).find((dir2) => {
    return path.startsWith(ensureStartingSlash(dir2));
  });
  const sidebar = dir ? _sidebar[dir] : [];
  return Array.isArray(sidebar) ? addBase(sidebar) : addBase(sidebar.items, sidebar.base);
}
function getSidebarGroups(sidebar) {
  const groups = [];
  let lastGroupIndex = 0;
  for (const index in sidebar) {
    const item = sidebar[index];
    if (item.items) {
      lastGroupIndex = groups.push(item);
      continue;
    }
    if (!groups[lastGroupIndex]) {
      groups.push({ items: [] });
    }
    groups[lastGroupIndex].items.push(item);
  }
  return groups;
}
function getFlatSideBarLinks(sidebar) {
  const links = [];
  function recursivelyExtractLinks(items) {
    for (const item of items) {
      if (item.text && item.link) {
        links.push({
          text: item.text,
          link: item.link,
          docFooterText: item.docFooterText
        });
      }
      if (item.items) {
        recursivelyExtractLinks(item.items);
      }
    }
  }
  recursivelyExtractLinks(sidebar);
  return links;
}
function hasActiveLink(path, items) {
  if (Array.isArray(items)) {
    return items.some((item) => hasActiveLink(path, item));
  }
  return isActive(path, items.link) ? true : items.items ? hasActiveLink(path, items.items) : false;
}
function addBase(items, _base) {
  return [...items].map((_item) => {
    const item = { ..._item };
    const base = item.base || _base;
    if (base && item.link)
      item.link = base + item.link;
    if (item.items)
      item.items = addBase(item.items, base);
    return item;
  });
}
function useSidebar() {
  const { frontmatter, page, theme: theme2 } = useData();
  const is960 = useMediaQuery("(min-width: 960px)");
  const isOpen = ref(false);
  const _sidebar = computed(() => {
    const sidebarConfig = theme2.value.sidebar;
    const relativePath = page.value.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const sidebar = ref(_sidebar.value);
  watch(_sidebar, (next, prev) => {
    if (JSON.stringify(next) !== JSON.stringify(prev))
      sidebar.value = _sidebar.value;
  });
  const hasSidebar = computed(() => {
    return frontmatter.value.sidebar !== false && sidebar.value.length > 0 && frontmatter.value.layout !== "home";
  });
  const leftAside = computed(() => {
    if (hasAside)
      return frontmatter.value.aside == null ? theme2.value.aside === "left" : frontmatter.value.aside === "left";
    return false;
  });
  const hasAside = computed(() => {
    if (frontmatter.value.layout === "home")
      return false;
    if (frontmatter.value.aside != null)
      return !!frontmatter.value.aside;
    return theme2.value.aside !== false;
  });
  const isSidebarEnabled = computed(() => hasSidebar.value && is960.value);
  const sidebarGroups = computed(() => {
    return hasSidebar.value ? getSidebarGroups(sidebar.value) : [];
  });
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    sidebarGroups,
    hasSidebar,
    hasAside,
    leftAside,
    isSidebarEnabled,
    open,
    close,
    toggle
  };
}
function useCloseSidebarOnEscape(isOpen, close) {
  let triggerElement;
  watchEffect(() => {
    triggerElement = isOpen.value ? document.activeElement : void 0;
  });
  onMounted(() => {
    window.addEventListener("keyup", onEscape);
  });
  onUnmounted(() => {
    window.removeEventListener("keyup", onEscape);
  });
  function onEscape(e) {
    if (e.key === "Escape" && isOpen.value) {
      close();
      triggerElement == null ? void 0 : triggerElement.focus();
    }
  }
}
function useSidebarControl(item) {
  const { page } = useData();
  const collapsed = ref(false);
  const collapsible = computed(() => {
    return item.value.collapsed != null;
  });
  const isLink = computed(() => {
    return !!item.value.link;
  });
  const isActiveLink = ref(false);
  const updateIsActiveLink = () => {
    isActiveLink.value = isActive(page.value.relativePath, item.value.link);
  };
  watch([page, item, hashRef], updateIsActiveLink);
  onMounted(updateIsActiveLink);
  const hasActiveLink$1 = computed(() => {
    if (isActiveLink.value) {
      return true;
    }
    return item.value.items ? hasActiveLink(page.value.relativePath, item.value.items) : false;
  });
  const hasChildren = computed(() => {
    return !!(item.value.items && item.value.items.length);
  });
  watchEffect(() => {
    collapsed.value = !!(collapsible.value && item.value.collapsed);
  });
  watchPostEffect(() => {
    (isActiveLink.value || hasActiveLink$1.value) && (collapsed.value = false);
  });
  function toggle() {
    if (collapsible.value) {
      collapsed.value = !collapsed.value;
    }
  }
  return {
    collapsed,
    collapsible,
    isLink,
    isActiveLink,
    hasActiveLink: hasActiveLink$1,
    hasChildren,
    toggle
  };
}
function useAside() {
  const { hasSidebar } = useSidebar();
  const is960 = useMediaQuery("(min-width: 960px)");
  const is1280 = useMediaQuery("(min-width: 1280px)");
  const isAsideEnabled = computed(() => {
    if (!is1280.value && !is960.value) {
      return false;
    }
    return hasSidebar.value ? is1280.value : is960.value;
  });
  return {
    isAsideEnabled
  };
}
const resolvedHeaders = [];
function resolveTitle(theme2) {
  return typeof theme2.outline === "object" && !Array.isArray(theme2.outline) && theme2.outline.label || theme2.outlineTitle || "On this page";
}
function getHeaders(range) {
  const headers = [
    ...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")
  ].filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      element: el,
      title: serializeHeader(el),
      link: "#" + el.id,
      level
    };
  });
  return resolveHeaders(headers, range);
}
function serializeHeader(h2) {
  let ret = "";
  for (const node of h2.childNodes) {
    if (node.nodeType === 1) {
      if (node.classList.contains("VPBadge") || node.classList.contains("header-anchor") || node.classList.contains("ignore-header")) {
        continue;
      }
      ret += node.textContent;
    } else if (node.nodeType === 3) {
      ret += node.textContent;
    }
  }
  return ret.trim();
}
function resolveHeaders(headers, range) {
  if (range === false) {
    return [];
  }
  const levelsRange = (typeof range === "object" && !Array.isArray(range) ? range.level : range) || 2;
  const [high, low] = typeof levelsRange === "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange;
  headers = headers.filter((h2) => h2.level >= high && h2.level <= low);
  resolvedHeaders.length = 0;
  for (const { element, link } of headers) {
    resolvedHeaders.push({ element, link });
  }
  const ret = [];
  outer:
    for (let i = 0; i < headers.length; i++) {
      const cur = headers[i];
      if (i === 0) {
        ret.push(cur);
      } else {
        for (let j = i - 1; j >= 0; j--) {
          const prev = headers[j];
          if (prev.level < cur.level) {
            (prev.children || (prev.children = [])).push(cur);
            continue outer;
          }
        }
        ret.push(cur);
      }
    }
  return ret;
}
function useActiveAnchor(container, marker) {
  const { isAsideEnabled } = useAside();
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  let prevActiveLink = null;
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  function setActiveLink() {
    if (!isAsideEnabled.value) {
      return;
    }
    const scrollY = window.scrollY;
    const innerHeight2 = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight2 - offsetHeight) < 1;
    const headers = resolvedHeaders.map(({ element, link }) => ({
      link,
      top: getAbsoluteTop(element)
    })).filter(({ top }) => !Number.isNaN(top)).sort((a, b) => a.top - b.top);
    if (!headers.length) {
      activateLink(null);
      return;
    }
    if (scrollY < 1) {
      activateLink(null);
      return;
    }
    if (isBottom) {
      activateLink(headers[headers.length - 1].link);
      return;
    }
    let activeLink = null;
    for (const { link, top } of headers) {
      if (top > scrollY + getScrollOffset() + 4) {
        break;
      }
      activeLink = link;
    }
    activateLink(activeLink);
  }
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    if (hash == null) {
      prevActiveLink = null;
    } else {
      prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    }
    const activeLink = prevActiveLink;
    if (activeLink) {
      activeLink.classList.add("active");
      marker.value.style.top = activeLink.offsetTop + 39 + "px";
      marker.value.style.opacity = "1";
    } else {
      marker.value.style.top = "33px";
      marker.value.style.opacity = "0";
    }
  }
}
function getAbsoluteTop(element) {
  let offsetTop = 0;
  while (element !== document.body) {
    if (element === null) {
      return NaN;
    }
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}
const _hoisted_1$L = ["href", "title"];
const _sfc_main$Y = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineItem",
  props: {
    headers: {},
    root: { type: Boolean }
  },
  setup(__props) {
    function onClick({ target: el }) {
      const id = el.href.split("#")[1];
      const heading = document.getElementById(decodeURIComponent(id));
      heading == null ? void 0 : heading.focus({ preventScroll: true });
    }
    return (_ctx, _cache) => {
      const _component_VPDocOutlineItem = resolveComponent("VPDocOutlineItem", true);
      return openBlock(), createElementBlock("ul", {
        class: normalizeClass(["VPDocOutlineItem", _ctx.root ? "root" : "nested"])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.headers, ({ children, link, title }) => {
          return openBlock(), createElementBlock("li", null, [
            createBaseVNode("a", {
              class: "outline-link",
              href: link,
              onClick,
              title
            }, toDisplayString(title), 9, _hoisted_1$L),
            (children == null ? void 0 : children.length) ? (openBlock(), createBlock(_component_VPDocOutlineItem, {
              key: 0,
              headers: children
            }, null, 8, ["headers"])) : createCommentVNode("", true)
          ]);
        }), 256))
      ], 2);
    };
  }
});
const VPDocOutlineItem = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["__scopeId", "data-v-a088e582"]]);
const _withScopeId$g = (n) => (pushScopeId("data-v-645a1e5e"), n = n(), popScopeId(), n);
const _hoisted_1$K = { class: "content" };
const _hoisted_2$w = {
  class: "outline-title",
  role: "heading",
  "aria-level": "2"
};
const _hoisted_3$n = { "aria-labelledby": "doc-outline-aria-label" };
const _hoisted_4$d = /* @__PURE__ */ _withScopeId$g(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "visually-hidden",
  id: "doc-outline-aria-label"
}, " Table of Contents for current page ", -1));
const _sfc_main$X = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideOutline",
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const container = ref();
    const marker = ref();
    useActiveAnchor(container, marker);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPDocAsideOutline", { "has-outline": headers.value.length > 0 }]),
        ref_key: "container",
        ref: container,
        role: "navigation"
      }, [
        createBaseVNode("div", _hoisted_1$K, [
          createBaseVNode("div", {
            class: "outline-marker",
            ref_key: "marker",
            ref: marker
          }, null, 512),
          createBaseVNode("div", _hoisted_2$w, toDisplayString(unref(resolveTitle)(unref(theme2))), 1),
          createBaseVNode("nav", _hoisted_3$n, [
            _hoisted_4$d,
            createVNode(VPDocOutlineItem, {
              headers: headers.value,
              root: true
            }, null, 8, ["headers"])
          ])
        ])
      ], 2);
    };
  }
});
const VPDocAsideOutline = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["__scopeId", "data-v-645a1e5e"]]);
const _hoisted_1$J = { class: "VPDocAsideCarbonAds" };
const _sfc_main$W = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideCarbonAds",
  props: {
    carbonAds: {}
  },
  setup(__props) {
    const VPCarbonAds = () => null;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$J, [
        createVNode(unref(VPCarbonAds), { "carbon-ads": _ctx.carbonAds }, null, 8, ["carbon-ads"])
      ]);
    };
  }
});
const _withScopeId$f = (n) => (pushScopeId("data-v-578eff5a"), n = n(), popScopeId(), n);
const _hoisted_1$I = { class: "VPDocAside" };
const _hoisted_2$v = /* @__PURE__ */ _withScopeId$f(() => /* @__PURE__ */ createBaseVNode("div", { class: "spacer" }, null, -1));
const _sfc_main$V = /* @__PURE__ */ defineComponent({
  __name: "VPDocAside",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$I, [
        renderSlot(_ctx.$slots, "aside-top", {}, void 0, true),
        renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true),
        createVNode(VPDocAsideOutline),
        renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true),
        _hoisted_2$v,
        renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true),
        unref(theme2).carbonAds ? (openBlock(), createBlock(_sfc_main$W, {
          key: 0,
          "carbon-ads": unref(theme2).carbonAds
        }, null, 8, ["carbon-ads"])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true),
        renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
      ]);
    };
  }
});
const VPDocAside = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["__scopeId", "data-v-578eff5a"]]);
function useEditLink() {
  const { theme: theme2, page } = useData();
  return computed(() => {
    const { text = "Edit this page", pattern = "" } = theme2.value.editLink || {};
    let url;
    if (typeof pattern === "function") {
      url = pattern(page.value);
    } else {
      url = pattern.replace(/:path/g, page.value.filePath);
    }
    return { url, text };
  });
}
function usePrevNext() {
  const { page, theme: theme2, frontmatter } = useData();
  return computed(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const sidebar = getSidebar(theme2.value.sidebar, page.value.relativePath);
    const links = getFlatSideBarLinks(sidebar);
    const candidates = uniqBy(links, (link) => link.link.replace(/[?#].*$/, ""));
    const index = candidates.findIndex((link) => {
      return isActive(page.value.relativePath, link.link);
    });
    const hidePrev = ((_a = theme2.value.docFooter) == null ? void 0 : _a.prev) === false && !frontmatter.value.prev || frontmatter.value.prev === false;
    const hideNext = ((_b = theme2.value.docFooter) == null ? void 0 : _b.next) === false && !frontmatter.value.next || frontmatter.value.next === false;
    return {
      prev: hidePrev ? void 0 : {
        text: (typeof frontmatter.value.prev === "string" ? frontmatter.value.prev : typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.text : void 0) ?? ((_c = candidates[index - 1]) == null ? void 0 : _c.docFooterText) ?? ((_d = candidates[index - 1]) == null ? void 0 : _d.text),
        link: (typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.link : void 0) ?? ((_e = candidates[index - 1]) == null ? void 0 : _e.link)
      },
      next: hideNext ? void 0 : {
        text: (typeof frontmatter.value.next === "string" ? frontmatter.value.next : typeof frontmatter.value.next === "object" ? frontmatter.value.next.text : void 0) ?? ((_f = candidates[index + 1]) == null ? void 0 : _f.docFooterText) ?? ((_g = candidates[index + 1]) == null ? void 0 : _g.text),
        link: (typeof frontmatter.value.next === "object" ? frontmatter.value.next.link : void 0) ?? ((_h = candidates[index + 1]) == null ? void 0 : _h.link)
      }
    };
  });
}
function uniqBy(array, keyFn) {
  const seen = /* @__PURE__ */ new Set();
  return array.filter((item) => {
    const k = keyFn(item);
    return seen.has(k) ? false : seen.add(k);
  });
}
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  __name: "VPLink",
  props: {
    tag: {},
    href: {},
    noIcon: { type: Boolean },
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props;
    const tag = computed(() => props.tag ?? (props.href ? "a" : "span"));
    const isExternal2 = computed(() => props.href && EXTERNAL_URL_RE.test(props.href));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(tag.value), {
        class: normalizeClass(["VPLink", {
          link: _ctx.href,
          "vp-external-link-icon": isExternal2.value,
          "no-icon": _ctx.noIcon
        }]),
        href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
        target: _ctx.target ?? (isExternal2.value ? "_blank" : void 0),
        rel: _ctx.rel ?? (isExternal2.value ? "noreferrer" : void 0)
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "href", "target", "rel"]);
    };
  }
});
const _hoisted_1$H = { class: "VPLastUpdated" };
const _hoisted_2$u = ["datetime"];
const _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooterLastUpdated",
  setup(__props) {
    const { theme: theme2, page, frontmatter, lang } = useData();
    const date = computed(
      () => new Date(frontmatter.value.lastUpdated ?? page.value.lastUpdated)
    );
    const isoDatetime = computed(() => date.value.toISOString());
    const datetime = ref("");
    onMounted(() => {
      watchEffect(() => {
        var _a, _b, _c;
        datetime.value = new Intl.DateTimeFormat(
          ((_b = (_a = theme2.value.lastUpdated) == null ? void 0 : _a.formatOptions) == null ? void 0 : _b.forceLocale) ? lang.value : void 0,
          ((_c = theme2.value.lastUpdated) == null ? void 0 : _c.formatOptions) ?? {
            dateStyle: "short",
            timeStyle: "short"
          }
        ).format(date.value);
      });
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("p", _hoisted_1$H, [
        createTextVNode(toDisplayString(((_a = unref(theme2).lastUpdated) == null ? void 0 : _a.text) || unref(theme2).lastUpdatedText || "Last updated") + ": ", 1),
        createBaseVNode("time", { datetime: isoDatetime.value }, toDisplayString(datetime.value), 9, _hoisted_2$u)
      ]);
    };
  }
});
const VPDocFooterLastUpdated = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-270fbc60"]]);
const _withScopeId$e = (n) => (pushScopeId("data-v-f4c4c115"), n = n(), popScopeId(), n);
const _hoisted_1$G = {
  key: 0,
  class: "VPDocFooter"
};
const _hoisted_2$t = {
  key: 0,
  class: "edit-info"
};
const _hoisted_3$m = {
  key: 0,
  class: "edit-link"
};
const _hoisted_4$c = /* @__PURE__ */ _withScopeId$e(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-square-pen edit-link-icon" }, null, -1));
const _hoisted_5$b = {
  key: 1,
  class: "last-updated"
};
const _hoisted_6$7 = {
  key: 1,
  class: "prev-next"
};
const _hoisted_7$5 = { class: "pager" };
const _hoisted_8$4 = ["innerHTML"];
const _hoisted_9$1 = ["innerHTML"];
const _hoisted_10$1 = { class: "pager" };
const _hoisted_11 = ["innerHTML"];
const _hoisted_12 = ["innerHTML"];
const _sfc_main$S = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooter",
  setup(__props) {
    const { theme: theme2, page, frontmatter } = useData();
    const editLink = useEditLink();
    const control = usePrevNext();
    const hasEditLink = computed(() => {
      return theme2.value.editLink && frontmatter.value.editLink !== false;
    });
    const hasLastUpdated = computed(() => {
      return page.value.lastUpdated && frontmatter.value.lastUpdated !== false;
    });
    const showFooter = computed(() => {
      return hasEditLink.value || hasLastUpdated.value || control.value.prev || control.value.next;
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return showFooter.value ? (openBlock(), createElementBlock("footer", _hoisted_1$G, [
        renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true),
        hasEditLink.value || hasLastUpdated.value ? (openBlock(), createElementBlock("div", _hoisted_2$t, [
          hasEditLink.value ? (openBlock(), createElementBlock("div", _hoisted_3$m, [
            createVNode(_sfc_main$U, {
              class: "edit-link-button",
              href: unref(editLink).url,
              "no-icon": true
            }, {
              default: withCtx(() => [
                _hoisted_4$c,
                createTextVNode(" " + toDisplayString(unref(editLink).text), 1)
              ]),
              _: 1
            }, 8, ["href"])
          ])) : createCommentVNode("", true),
          hasLastUpdated.value ? (openBlock(), createElementBlock("div", _hoisted_5$b, [
            createVNode(VPDocFooterLastUpdated)
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        ((_a = unref(control).prev) == null ? void 0 : _a.link) || ((_b = unref(control).next) == null ? void 0 : _b.link) ? (openBlock(), createElementBlock("nav", _hoisted_6$7, [
          createBaseVNode("div", _hoisted_7$5, [
            ((_c = unref(control).prev) == null ? void 0 : _c.link) ? (openBlock(), createBlock(_sfc_main$U, {
              key: 0,
              class: "pager-link prev",
              href: unref(control).prev.link
            }, {
              default: withCtx(() => {
                var _a2;
                return [
                  createBaseVNode("span", {
                    class: "desc",
                    innerHTML: ((_a2 = unref(theme2).docFooter) == null ? void 0 : _a2.prev) || "Previous page"
                  }, null, 8, _hoisted_8$4),
                  createBaseVNode("span", {
                    class: "title",
                    innerHTML: unref(control).prev.text
                  }, null, 8, _hoisted_9$1)
                ];
              }),
              _: 1
            }, 8, ["href"])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_10$1, [
            ((_d = unref(control).next) == null ? void 0 : _d.link) ? (openBlock(), createBlock(_sfc_main$U, {
              key: 0,
              class: "pager-link next",
              href: unref(control).next.link
            }, {
              default: withCtx(() => {
                var _a2;
                return [
                  createBaseVNode("span", {
                    class: "desc",
                    innerHTML: ((_a2 = unref(theme2).docFooter) == null ? void 0 : _a2.next) || "Next page"
                  }, null, 8, _hoisted_11),
                  createBaseVNode("span", {
                    class: "title",
                    innerHTML: unref(control).next.text
                  }, null, 8, _hoisted_12)
                ];
              }),
              _: 1
            }, 8, ["href"])) : createCommentVNode("", true)
          ])
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});
const VPDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-f4c4c115"]]);
const _withScopeId$d = (n) => (pushScopeId("data-v-68270971"), n = n(), popScopeId(), n);
const _hoisted_1$F = { class: "container" };
const _hoisted_2$s = /* @__PURE__ */ _withScopeId$d(() => /* @__PURE__ */ createBaseVNode("div", { class: "aside-curtain" }, null, -1));
const _hoisted_3$l = { class: "aside-container" };
const _hoisted_4$b = { class: "aside-content" };
const _hoisted_5$a = { class: "content" };
const _hoisted_6$6 = { class: "content-container" };
const _hoisted_7$4 = { class: "main" };
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "VPDoc",
  setup(__props) {
    const { theme: theme2 } = useData();
    const route = useRoute();
    const { hasSidebar, hasAside, leftAside } = useSidebar();
    const pageName = computed(
      () => route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
    );
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPDoc", { "has-sidebar": unref(hasSidebar), "has-aside": unref(hasAside) }])
      }, [
        renderSlot(_ctx.$slots, "doc-top", {}, void 0, true),
        createBaseVNode("div", _hoisted_1$F, [
          unref(hasAside) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["aside", { "left-aside": unref(leftAside) }])
          }, [
            _hoisted_2$s,
            createBaseVNode("div", _hoisted_3$l, [
              createBaseVNode("div", _hoisted_4$b, [
                createVNode(VPDocAside, null, {
                  "aside-top": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
                  ]),
                  "aside-bottom": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
                  ]),
                  "aside-outline-before": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
                  ]),
                  "aside-outline-after": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
                  ]),
                  "aside-ads-before": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
                  ]),
                  "aside-ads-after": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
                  ]),
                  _: 3
                })
              ])
            ])
          ], 2)) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_5$a, [
            createBaseVNode("div", _hoisted_6$6, [
              renderSlot(_ctx.$slots, "doc-before", {}, void 0, true),
              createBaseVNode("main", _hoisted_7$4, [
                createVNode(_component_Content, {
                  class: normalizeClass(["vp-doc", [
                    pageName.value,
                    unref(theme2).externalLinkIcon && "external-link-icon-enabled"
                  ]])
                }, null, 8, ["class"])
              ]),
              createVNode(VPDocFooter, null, {
                "doc-footer-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
                ]),
                _: 3
              }),
              renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
            ])
          ])
        ]),
        renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
      ], 2);
    };
  }
});
const VPDoc = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__scopeId", "data-v-68270971"]]);
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "VPButton",
  props: {
    tag: {},
    size: { default: "medium" },
    theme: { default: "brand" },
    text: {},
    href: {},
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props;
    const isExternal2 = computed(
      () => props.href && EXTERNAL_URL_RE.test(props.href)
    );
    const component = computed(() => {
      return props.tag || props.href ? "a" : "button";
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(component.value), {
        class: normalizeClass(["VPButton", [_ctx.size, _ctx.theme]]),
        href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
        target: props.target ?? (isExternal2.value ? "_blank" : void 0),
        rel: props.rel ?? (isExternal2.value ? "noreferrer" : void 0)
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.text), 1)
        ]),
        _: 1
      }, 8, ["class", "href", "target", "rel"]);
    };
  }
});
const VPButton = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-4f8f1385"]]);
const _hoisted_1$E = ["src", "alt"];
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "VPImage",
  props: {
    image: {},
    alt: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VPImage = resolveComponent("VPImage", true);
      return _ctx.image ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        typeof _ctx.image === "string" || "src" in _ctx.image ? (openBlock(), createElementBlock("img", mergeProps({
          key: 0,
          class: "VPImage"
        }, typeof _ctx.image === "string" ? _ctx.$attrs : { ..._ctx.image, ..._ctx.$attrs }, {
          src: unref(withBase)(typeof _ctx.image === "string" ? _ctx.image : _ctx.image.src),
          alt: _ctx.alt ?? (typeof _ctx.image === "string" ? "" : _ctx.image.alt || "")
        }), null, 16, _hoisted_1$E)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(_component_VPImage, mergeProps({
            class: "dark",
            image: _ctx.image.dark,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, 16, ["image", "alt"]),
          createVNode(_component_VPImage, mergeProps({
            class: "light",
            image: _ctx.image.light,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, 16, ["image", "alt"])
        ], 64))
      ], 64)) : createCommentVNode("", true);
    };
  }
});
const VPImage = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-6e5ecf35"]]);
const _withScopeId$c = (n) => (pushScopeId("data-v-9d0de262"), n = n(), popScopeId(), n);
const _hoisted_1$D = { class: "container" };
const _hoisted_2$r = { class: "main" };
const _hoisted_3$k = {
  key: 0,
  class: "name"
};
const _hoisted_4$a = ["innerHTML"];
const _hoisted_5$9 = ["innerHTML"];
const _hoisted_6$5 = ["innerHTML"];
const _hoisted_7$3 = {
  key: 0,
  class: "actions"
};
const _hoisted_8$3 = {
  key: 0,
  class: "image"
};
const _hoisted_9 = { class: "image-container" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId$c(() => /* @__PURE__ */ createBaseVNode("div", { class: "image-bg" }, null, -1));
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  __name: "VPHero",
  props: {
    name: {},
    text: {},
    tagline: {},
    image: {},
    actions: {}
  },
  setup(__props) {
    const heroImageSlotExists = inject("hero-image-slot-exists");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPHero", { "has-image": _ctx.image || unref(heroImageSlotExists) }])
      }, [
        createBaseVNode("div", _hoisted_1$D, [
          createBaseVNode("div", _hoisted_2$r, [
            renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true),
            renderSlot(_ctx.$slots, "home-hero-info", {}, () => [
              _ctx.name ? (openBlock(), createElementBlock("h1", _hoisted_3$k, [
                createBaseVNode("span", {
                  innerHTML: _ctx.name,
                  class: "clip"
                }, null, 8, _hoisted_4$a)
              ])) : createCommentVNode("", true),
              _ctx.text ? (openBlock(), createElementBlock("p", {
                key: 1,
                innerHTML: _ctx.text,
                class: "text"
              }, null, 8, _hoisted_5$9)) : createCommentVNode("", true),
              _ctx.tagline ? (openBlock(), createElementBlock("p", {
                key: 2,
                innerHTML: _ctx.tagline,
                class: "tagline"
              }, null, 8, _hoisted_6$5)) : createCommentVNode("", true)
            ], true),
            renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true),
            _ctx.actions ? (openBlock(), createElementBlock("div", _hoisted_7$3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.actions, (action) => {
                return openBlock(), createElementBlock("div", {
                  key: action.link,
                  class: "action"
                }, [
                  createVNode(VPButton, {
                    tag: "a",
                    size: "medium",
                    theme: action.theme,
                    text: action.text,
                    href: action.link,
                    target: action.target,
                    rel: action.rel
                  }, null, 8, ["theme", "text", "href", "target", "rel"])
                ]);
              }), 128))
            ])) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)
          ]),
          _ctx.image || unref(heroImageSlotExists) ? (openBlock(), createElementBlock("div", _hoisted_8$3, [
            createBaseVNode("div", _hoisted_9, [
              _hoisted_10,
              renderSlot(_ctx.$slots, "home-hero-image", {}, () => [
                _ctx.image ? (openBlock(), createBlock(VPImage, {
                  key: 0,
                  class: "image-src",
                  image: _ctx.image
                }, null, 8, ["image"])) : createCommentVNode("", true)
              ], true)
            ])
          ])) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});
const VPHero = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["__scopeId", "data-v-9d0de262"]]);
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "VPHomeHero",
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _cache) => {
      return unref(fm).hero ? (openBlock(), createBlock(VPHero, {
        key: 0,
        class: "VPHomeHero",
        name: unref(fm).hero.name,
        text: unref(fm).hero.text,
        tagline: unref(fm).hero.tagline,
        image: unref(fm).hero.image,
        actions: unref(fm).hero.actions
      }, {
        "home-hero-info-before": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-info-before")
        ]),
        "home-hero-info": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-info")
        ]),
        "home-hero-info-after": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-info-after")
        ]),
        "home-hero-actions-after": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-actions-after")
        ]),
        "home-hero-image": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-image")
        ]),
        _: 3
      }, 8, ["name", "text", "tagline", "image", "actions"])) : createCommentVNode("", true);
    };
  }
});
const _withScopeId$b = (n) => (pushScopeId("data-v-78f47d09"), n = n(), popScopeId(), n);
const _hoisted_1$C = { class: "box" };
const _hoisted_2$q = {
  key: 0,
  class: "icon"
};
const _hoisted_3$j = ["innerHTML"];
const _hoisted_4$9 = ["innerHTML"];
const _hoisted_5$8 = ["innerHTML"];
const _hoisted_6$4 = {
  key: 4,
  class: "link-text"
};
const _hoisted_7$2 = { class: "link-text-value" };
const _hoisted_8$2 = /* @__PURE__ */ _withScopeId$b(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-arrow-right link-text-icon" }, null, -1));
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "VPFeature",
  props: {
    icon: {},
    title: {},
    details: {},
    link: {},
    linkText: {},
    rel: {},
    target: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$U, {
        class: "VPFeature",
        href: _ctx.link,
        rel: _ctx.rel,
        target: _ctx.target,
        "no-icon": true,
        tag: _ctx.link ? "a" : "div"
      }, {
        default: withCtx(() => [
          createBaseVNode("article", _hoisted_1$C, [
            typeof _ctx.icon === "object" && _ctx.icon.wrap ? (openBlock(), createElementBlock("div", _hoisted_2$q, [
              createVNode(VPImage, {
                image: _ctx.icon,
                alt: _ctx.icon.alt,
                height: _ctx.icon.height || 48,
                width: _ctx.icon.width || 48
              }, null, 8, ["image", "alt", "height", "width"])
            ])) : typeof _ctx.icon === "object" ? (openBlock(), createBlock(VPImage, {
              key: 1,
              image: _ctx.icon,
              alt: _ctx.icon.alt,
              height: _ctx.icon.height || 48,
              width: _ctx.icon.width || 48
            }, null, 8, ["image", "alt", "height", "width"])) : _ctx.icon ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: "icon",
              innerHTML: _ctx.icon
            }, null, 8, _hoisted_3$j)) : createCommentVNode("", true),
            createBaseVNode("h2", {
              class: "title",
              innerHTML: _ctx.title
            }, null, 8, _hoisted_4$9),
            _ctx.details ? (openBlock(), createElementBlock("p", {
              key: 3,
              class: "details",
              innerHTML: _ctx.details
            }, null, 8, _hoisted_5$8)) : createCommentVNode("", true),
            _ctx.linkText ? (openBlock(), createElementBlock("div", _hoisted_6$4, [
              createBaseVNode("p", _hoisted_7$2, [
                createTextVNode(toDisplayString(_ctx.linkText) + " ", 1),
                _hoisted_8$2
              ])
            ])) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      }, 8, ["href", "rel", "target", "tag"]);
    };
  }
});
const VPFeature = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-78f47d09"]]);
const _hoisted_1$B = {
  key: 0,
  class: "VPFeatures"
};
const _hoisted_2$p = { class: "container" };
const _hoisted_3$i = { class: "items" };
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "VPFeatures",
  props: {
    features: {}
  },
  setup(__props) {
    const props = __props;
    const grid = computed(() => {
      const length = props.features.length;
      if (!length) {
        return;
      } else if (length === 2) {
        return "grid-2";
      } else if (length === 3) {
        return "grid-3";
      } else if (length % 3 === 0) {
        return "grid-6";
      } else if (length > 3) {
        return "grid-4";
      }
    });
    return (_ctx, _cache) => {
      return _ctx.features ? (openBlock(), createElementBlock("div", _hoisted_1$B, [
        createBaseVNode("div", _hoisted_2$p, [
          createBaseVNode("div", _hoisted_3$i, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.features, (feature) => {
              return openBlock(), createElementBlock("div", {
                key: feature.title,
                class: normalizeClass(["item", [grid.value]])
              }, [
                createVNode(VPFeature, {
                  icon: feature.icon,
                  title: feature.title,
                  details: feature.details,
                  link: feature.link,
                  "link-text": feature.linkText,
                  rel: feature.rel,
                  target: feature.target
                }, null, 8, ["icon", "title", "details", "link", "link-text", "rel", "target"])
              ], 2);
            }), 128))
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const VPFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-bf187130"]]);
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeatures",
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _cache) => {
      return unref(fm).features ? (openBlock(), createBlock(VPFeatures, {
        key: 0,
        class: "VPHomeFeatures",
        features: unref(fm).features
      }, null, 8, ["features"])) : createCommentVNode("", true);
    };
  }
});
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "VPHomeContent",
  setup(__props) {
    const { width: vw } = useWindowSize({ includeScrollbar: false });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "vp-doc container",
        style: normalizeStyle(unref(vw) ? { "--vp-offset": `calc(50% - ${unref(vw) / 2}px)` } : {})
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 4);
    };
  }
});
const VPHomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-34af5da5"]]);
const _hoisted_1$A = { class: "VPHome" };
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "VPHome",
  setup(__props) {
    const { frontmatter } = useData();
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("div", _hoisted_1$A, [
        renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true),
        createVNode(_sfc_main$N, null, {
          "home-hero-info-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true)
          ]),
          "home-hero-info": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
          ]),
          "home-hero-info-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true)
          ]),
          "home-hero-actions-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)
          ]),
          "home-hero-image": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
          ]),
          _: 3
        }),
        renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true),
        renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true),
        createVNode(_sfc_main$K),
        renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true),
        unref(frontmatter).markdownStyles !== false ? (openBlock(), createBlock(VPHomeContent, { key: 0 }, {
          default: withCtx(() => [
            createVNode(_component_Content)
          ]),
          _: 1
        })) : (openBlock(), createBlock(_component_Content, { key: 1 }))
      ]);
    };
  }
});
const VPHome = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__scopeId", "data-v-3ca76961"]]);
const _sfc_main$H = {};
const _hoisted_1$z = { class: "VPPage" };
function _sfc_render$1(_ctx, _cache) {
  const _component_Content = resolveComponent("Content");
  return openBlock(), createElementBlock("div", _hoisted_1$z, [
    renderSlot(_ctx.$slots, "page-top"),
    createVNode(_component_Content),
    renderSlot(_ctx.$slots, "page-bottom")
  ]);
}
const VPPage = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$1]]);
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "VPContent",
  setup(__props) {
    const { page, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPContent", {
          "has-sidebar": unref(hasSidebar),
          "is-home": unref(frontmatter).layout === "home"
        }]),
        id: "VPContent"
      }, [
        unref(page).isNotFound ? renderSlot(_ctx.$slots, "not-found", { key: 0 }, () => [
          createVNode(NotFound)
        ], true) : unref(frontmatter).layout === "page" ? (openBlock(), createBlock(VPPage, { key: 1 }, {
          "page-top": withCtx(() => [
            renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
          ]),
          "page-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
          ]),
          _: 3
        })) : unref(frontmatter).layout === "home" ? (openBlock(), createBlock(VPHome, { key: 2 }, {
          "home-hero-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
          ]),
          "home-hero-info-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true)
          ]),
          "home-hero-info": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
          ]),
          "home-hero-info-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true)
          ]),
          "home-hero-actions-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)
          ]),
          "home-hero-image": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
          ]),
          "home-hero-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
          ]),
          "home-features-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
          ]),
          "home-features-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
          ]),
          _: 3
        })) : unref(frontmatter).layout && unref(frontmatter).layout !== "doc" ? (openBlock(), createBlock(resolveDynamicComponent(unref(frontmatter).layout), { key: 3 })) : (openBlock(), createBlock(VPDoc, { key: 4 }, {
          "doc-top": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
          ]),
          "doc-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
          ]),
          "doc-footer-before": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
          ]),
          "doc-before": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
          ]),
          "doc-after": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
          ]),
          "aside-top": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
          ]),
          "aside-outline-before": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
          ]),
          "aside-outline-after": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
          ]),
          "aside-ads-before": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
          ]),
          "aside-ads-after": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
          ]),
          "aside-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
          ]),
          _: 3
        }))
      ], 2);
    };
  }
});
const VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-46f1df28"]]);
const _hoisted_1$y = { class: "container" };
const _hoisted_2$o = ["innerHTML"];
const _hoisted_3$h = ["innerHTML"];
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "VPFooter",
  setup(__props) {
    const { theme: theme2, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _cache) => {
      return unref(theme2).footer && unref(frontmatter).footer !== false ? (openBlock(), createElementBlock("footer", {
        key: 0,
        class: normalizeClass(["VPFooter", { "has-sidebar": unref(hasSidebar) }])
      }, [
        createBaseVNode("div", _hoisted_1$y, [
          unref(theme2).footer.message ? (openBlock(), createElementBlock("p", {
            key: 0,
            class: "message",
            innerHTML: unref(theme2).footer.message
          }, null, 8, _hoisted_2$o)) : createCommentVNode("", true),
          unref(theme2).footer.copyright ? (openBlock(), createElementBlock("p", {
            key: 1,
            class: "copyright",
            innerHTML: unref(theme2).footer.copyright
          }, null, 8, _hoisted_3$h)) : createCommentVNode("", true)
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-9980e494"]]);
function useLocalNav() {
  const { theme: theme2, frontmatter } = useData();
  const headers = shallowRef([]);
  const hasLocalNav = computed(() => {
    return headers.value.length > 0;
  });
  onContentUpdated(() => {
    headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
  });
  return {
    headers,
    hasLocalNav
  };
}
const _withScopeId$a = (n) => (pushScopeId("data-v-2079d3b9"), n = n(), popScopeId(), n);
const _hoisted_1$x = /* @__PURE__ */ _withScopeId$a(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-chevron-right icon" }, null, -1));
const _hoisted_2$n = { class: "header" };
const _hoisted_3$g = { class: "outline" };
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNavOutlineDropdown",
  props: {
    headers: {},
    navHeight: {}
  },
  setup(__props) {
    const props = __props;
    const { theme: theme2 } = useData();
    const open = ref(false);
    const vh = ref(0);
    const main = ref();
    const items = ref();
    onClickOutside(main, () => {
      open.value = false;
    });
    onKeyStroke("Escape", () => {
      open.value = false;
    });
    onContentUpdated(() => {
      open.value = false;
    });
    function toggle() {
      open.value = !open.value;
      vh.value = window.innerHeight + Math.min(window.scrollY - props.navHeight, 0);
    }
    function onItemClick(e) {
      if (e.target.classList.contains("outline-link")) {
        if (items.value) {
          items.value.style.transition = "none";
        }
        nextTick(() => {
          open.value = false;
        });
      }
    }
    function scrollToTop() {
      open.value = false;
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "VPLocalNavOutlineDropdown",
        style: normalizeStyle({ "--vp-vh": vh.value + "px" }),
        ref_key: "main",
        ref: main
      }, [
        _ctx.headers.length > 0 ? (openBlock(), createElementBlock("button", {
          key: 0,
          onClick: toggle,
          class: normalizeClass({ open: open.value })
        }, [
          createTextVNode(toDisplayString(unref(resolveTitle)(unref(theme2))) + " ", 1),
          _hoisted_1$x
        ], 2)) : (openBlock(), createElementBlock("button", {
          key: 1,
          onClick: scrollToTop
        }, toDisplayString(unref(theme2).returnToTopLabel || "Return to top"), 1)),
        createVNode(Transition, { name: "flyout" }, {
          default: withCtx(() => [
            open.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref_key: "items",
              ref: items,
              class: "items",
              onClick: onItemClick
            }, [
              createBaseVNode("div", _hoisted_2$n, [
                createBaseVNode("a", {
                  class: "top-link",
                  href: "#",
                  onClick: scrollToTop
                }, toDisplayString(unref(theme2).returnToTopLabel || "Return to top"), 1)
              ]),
              createBaseVNode("div", _hoisted_3$g, [
                createVNode(VPDocOutlineItem, { headers: _ctx.headers }, null, 8, ["headers"])
              ])
            ], 512)) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 4);
    };
  }
});
const VPLocalNavOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-2079d3b9"]]);
const _withScopeId$9 = (n) => (pushScopeId("data-v-bc19262c"), n = n(), popScopeId(), n);
const _hoisted_1$w = { class: "container" };
const _hoisted_2$m = ["aria-expanded"];
const _hoisted_3$f = /* @__PURE__ */ _withScopeId$9(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-align-left menu-icon" }, null, -1));
const _hoisted_4$8 = { class: "menu-text" };
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNav",
  props: {
    open: { type: Boolean }
  },
  emits: ["open-menu"],
  setup(__props) {
    const { theme: theme2, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    const { headers } = useLocalNav();
    const { y } = useWindowScroll();
    const navHeight = ref(0);
    onMounted(() => {
      navHeight.value = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--vp-nav-height"
        )
      );
    });
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const empty = computed(() => {
      return headers.value.length === 0;
    });
    const emptyAndNoSidebar = computed(() => {
      return empty.value && !hasSidebar.value;
    });
    const classes = computed(() => {
      return {
        VPLocalNav: true,
        "has-sidebar": hasSidebar.value,
        empty: empty.value,
        fixed: emptyAndNoSidebar.value
      };
    });
    return (_ctx, _cache) => {
      return unref(frontmatter).layout !== "home" && (!emptyAndNoSidebar.value || unref(y) >= navHeight.value) ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(classes.value)
      }, [
        createBaseVNode("div", _hoisted_1$w, [
          unref(hasSidebar) ? (openBlock(), createElementBlock("button", {
            key: 0,
            class: "menu",
            "aria-expanded": _ctx.open,
            "aria-controls": "VPSidebarNav",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("open-menu"))
          }, [
            _hoisted_3$f,
            createBaseVNode("span", _hoisted_4$8, toDisplayString(unref(theme2).sidebarMenuLabel || "Menu"), 1)
          ], 8, _hoisted_2$m)) : createCommentVNode("", true),
          createVNode(VPLocalNavOutlineDropdown, {
            headers: unref(headers),
            navHeight: navHeight.value
          }, null, 8, ["headers", "navHeight"])
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-bc19262c"]]);
function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  const route = useRoute();
  watch(() => route.path, closeScreen);
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
const _sfc_main$C = {};
const _hoisted_1$v = {
  class: "VPSwitch",
  type: "button",
  role: "switch"
};
const _hoisted_2$l = { class: "check" };
const _hoisted_3$e = {
  key: 0,
  class: "icon"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("button", _hoisted_1$v, [
    createBaseVNode("span", _hoisted_2$l, [
      _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_3$e, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])) : createCommentVNode("", true)
    ])
  ]);
}
const VPSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render], ["__scopeId", "data-v-45278f36"]]);
const _withScopeId$8 = (n) => (pushScopeId("data-v-aefec510"), n = n(), popScopeId(), n);
const _hoisted_1$u = /* @__PURE__ */ _withScopeId$8(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-sun sun" }, null, -1));
const _hoisted_2$k = /* @__PURE__ */ _withScopeId$8(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-moon moon" }, null, -1));
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "VPSwitchAppearance",
  setup(__props) {
    const { isDark, theme: theme2 } = useData();
    const toggleAppearance = inject("toggle-appearance", () => {
      isDark.value = !isDark.value;
    });
    const switchTitle = computed(() => {
      return isDark.value ? theme2.value.lightModeSwitchTitle || "Switch to light theme" : theme2.value.darkModeSwitchTitle || "Switch to dark theme";
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VPSwitch, {
        title: switchTitle.value,
        class: "VPSwitchAppearance",
        "aria-checked": unref(isDark),
        onClick: unref(toggleAppearance)
      }, {
        default: withCtx(() => [
          _hoisted_1$u,
          _hoisted_2$k
        ]),
        _: 1
      }, 8, ["title", "aria-checked", "onClick"]);
    };
  }
});
const VPSwitchAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-aefec510"]]);
const _hoisted_1$t = {
  key: 0,
  class: "VPNavBarAppearance"
};
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarAppearance",
  setup(__props) {
    const { site } = useData();
    return (_ctx, _cache) => {
      return unref(site).appearance && unref(site).appearance !== "force-dark" ? (openBlock(), createElementBlock("div", _hoisted_1$t, [
        createVNode(VPSwitchAppearance)
      ])) : createCommentVNode("", true);
    };
  }
});
const VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-632dc8b9"]]);
const focusedElement = ref();
let active = false;
let listeners = 0;
function useFlyout(options) {
  const focus = ref(false);
  if (inBrowser) {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a, _b, _c;
      if (el === options.el.value || ((_a = options.el.value) == null ? void 0 : _a.contains(el))) {
        focus.value = true;
        (_b = options.onFocus) == null ? void 0 : _b.call(options);
      } else {
        focus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return readonly(focus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _hoisted_1$s = { class: "VPMenuLink" };
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "VPMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$s, [
        createVNode(_sfc_main$U, {
          class: normalizeClass({ active: unref(isActive)(unref(page).relativePath, _ctx.item.activeMatch || _ctx.item.link, !!_ctx.item.activeMatch) }),
          href: _ctx.item.link,
          target: _ctx.item.target,
          rel: _ctx.item.rel
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.item.text), 1)
          ]),
          _: 1
        }, 8, ["class", "href", "target", "rel"])
      ]);
    };
  }
});
const VPMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-4174e14e"]]);
const _hoisted_1$r = { class: "VPMenuGroup" };
const _hoisted_2$j = {
  key: 0,
  class: "title"
};
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "VPMenuGroup",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$r, [
        _ctx.text ? (openBlock(), createElementBlock("p", _hoisted_2$j, toDisplayString(_ctx.text), 1)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
          return openBlock(), createElementBlock(Fragment, null, [
            "link" in item ? (openBlock(), createBlock(VPMenuLink, {
              key: 0,
              item
            }, null, 8, ["item"])) : createCommentVNode("", true)
          ], 64);
        }), 256))
      ]);
    };
  }
});
const VPMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-6f4f184d"]]);
const _hoisted_1$q = { class: "VPMenu" };
const _hoisted_2$i = {
  key: 0,
  class: "items"
};
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "VPMenu",
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$q, [
        _ctx.items ? (openBlock(), createElementBlock("div", _hoisted_2$i, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
            return openBlock(), createElementBlock(Fragment, {
              key: item.text
            }, [
              "link" in item ? (openBlock(), createBlock(VPMenuLink, {
                key: 0,
                item
              }, null, 8, ["item"])) : (openBlock(), createBlock(VPMenuGroup, {
                key: 1,
                text: item.text,
                items: item.items
              }, null, 8, ["text", "items"]))
            ], 64);
          }), 128))
        ])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
const VPMenu = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-f7a45937"]]);
const _withScopeId$7 = (n) => (pushScopeId("data-v-6dd6b830"), n = n(), popScopeId(), n);
const _hoisted_1$p = ["aria-expanded", "aria-label"];
const _hoisted_2$h = {
  key: 0,
  class: "text"
};
const _hoisted_3$d = ["innerHTML"];
const _hoisted_4$7 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-chevron-down text-icon" }, null, -1));
const _hoisted_5$7 = {
  key: 1,
  class: "vpi-more-horizontal icon"
};
const _hoisted_6$3 = { class: "menu" };
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "VPFlyout",
  props: {
    icon: {},
    button: {},
    label: {},
    items: {}
  },
  setup(__props) {
    const open = ref(false);
    const el = ref();
    useFlyout({ el, onBlur });
    function onBlur() {
      open.value = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "VPFlyout",
        ref_key: "el",
        ref: el,
        onMouseenter: _cache[1] || (_cache[1] = ($event) => open.value = true),
        onMouseleave: _cache[2] || (_cache[2] = ($event) => open.value = false)
      }, [
        createBaseVNode("button", {
          type: "button",
          class: "button",
          "aria-haspopup": "true",
          "aria-expanded": open.value,
          "aria-label": _ctx.label,
          onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
        }, [
          _ctx.button || _ctx.icon ? (openBlock(), createElementBlock("span", _hoisted_2$h, [
            _ctx.icon ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass([_ctx.icon, "option-icon"])
            }, null, 2)) : createCommentVNode("", true),
            _ctx.button ? (openBlock(), createElementBlock("span", {
              key: 1,
              innerHTML: _ctx.button
            }, null, 8, _hoisted_3$d)) : createCommentVNode("", true),
            _hoisted_4$7
          ])) : (openBlock(), createElementBlock("span", _hoisted_5$7))
        ], 8, _hoisted_1$p),
        createBaseVNode("div", _hoisted_6$3, [
          createVNode(VPMenu, { items: _ctx.items }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            _: 3
          }, 8, ["items"])
        ])
      ], 544);
    };
  }
});
const VPFlyout = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-6dd6b830"]]);
const _hoisted_1$o = ["href", "aria-label", "innerHTML"];
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLink",
  props: {
    icon: {},
    link: {},
    ariaLabel: {}
  },
  setup(__props) {
    const props = __props;
    const svg = computed(() => {
      if (typeof props.icon === "object")
        return props.icon.svg;
      return `<span class="vpi-social-${props.icon}" />`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: "VPSocialLink no-icon",
        href: _ctx.link,
        "aria-label": _ctx.ariaLabel ?? (typeof _ctx.icon === "string" ? _ctx.icon : ""),
        target: "_blank",
        rel: "noopener",
        innerHTML: svg.value
      }, null, 8, _hoisted_1$o);
    };
  }
});
const VPSocialLink = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-219c289b"]]);
const _hoisted_1$n = { class: "VPSocialLinks" };
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLinks",
  props: {
    links: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$n, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.links, ({ link, icon, ariaLabel }) => {
          return openBlock(), createBlock(VPSocialLink, {
            key: link,
            icon,
            link,
            ariaLabel
          }, null, 8, ["icon", "link", "ariaLabel"]);
        }), 128))
      ]);
    };
  }
});
const VPSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-4d9d7801"]]);
const _hoisted_1$m = {
  key: 0,
  class: "group translations"
};
const _hoisted_2$g = { class: "trans-title" };
const _hoisted_3$c = {
  key: 1,
  class: "group"
};
const _hoisted_4$6 = { class: "item appearance" };
const _hoisted_5$6 = { class: "label" };
const _hoisted_6$2 = { class: "appearance-action" };
const _hoisted_7$1 = {
  key: 2,
  class: "group"
};
const _hoisted_8$1 = { class: "item social-links" };
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarExtra",
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const hasExtraContent = computed(
      () => localeLinks.value.length && currentLang.value.label || site.value.appearance || theme2.value.socialLinks
    );
    return (_ctx, _cache) => {
      return hasExtraContent.value ? (openBlock(), createBlock(VPFlyout, {
        key: 0,
        class: "VPNavBarExtra",
        label: "extra navigation"
      }, {
        default: withCtx(() => [
          unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createElementBlock("div", _hoisted_1$m, [
            createBaseVNode("p", _hoisted_2$g, toDisplayString(unref(currentLang).label), 1),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
              return openBlock(), createBlock(VPMenuLink, {
                key: locale.link,
                item: locale
              }, null, 8, ["item"]);
            }), 128))
          ])) : createCommentVNode("", true),
          unref(site).appearance && unref(site).appearance !== "force-dark" ? (openBlock(), createElementBlock("div", _hoisted_3$c, [
            createBaseVNode("div", _hoisted_4$6, [
              createBaseVNode("p", _hoisted_5$6, toDisplayString(unref(theme2).darkModeSwitchLabel || "Appearance"), 1),
              createBaseVNode("div", _hoisted_6$2, [
                createVNode(VPSwitchAppearance)
              ])
            ])
          ])) : createCommentVNode("", true),
          unref(theme2).socialLinks ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
            createBaseVNode("div", _hoisted_8$1, [
              createVNode(VPSocialLinks, {
                class: "social-links-list",
                links: unref(theme2).socialLinks
              }, null, 8, ["links"])
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
const VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-51b1c64a"]]);
const _withScopeId$6 = (n) => (pushScopeId("data-v-51c438c1"), n = n(), popScopeId(), n);
const _hoisted_1$l = ["aria-expanded"];
const _hoisted_2$f = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("span", { class: "container" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "top" }),
  /* @__PURE__ */ createBaseVNode("span", { class: "middle" }),
  /* @__PURE__ */ createBaseVNode("span", { class: "bottom" })
], -1));
const _hoisted_3$b = [
  _hoisted_2$f
];
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarHamburger",
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: normalizeClass(["VPNavBarHamburger", { active: _ctx.active }]),
        "aria-label": "mobile navigation",
        "aria-expanded": _ctx.active,
        "aria-controls": "VPNavScreen",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
      }, _hoisted_3$b, 10, _hoisted_1$l);
    };
  }
});
const VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-51c438c1"]]);
const _hoisted_1$k = ["innerHTML"];
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$U, {
        class: normalizeClass({
          VPNavBarMenuLink: true,
          active: unref(isActive)(
            unref(page).relativePath,
            _ctx.item.activeMatch || _ctx.item.link,
            !!_ctx.item.activeMatch
          )
        }),
        href: _ctx.item.link,
        noIcon: _ctx.item.noIcon,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        tabindex: "0"
      }, {
        default: withCtx(() => [
          createBaseVNode("span", {
            innerHTML: _ctx.item.text
          }, null, 8, _hoisted_1$k)
        ]),
        _: 1
      }, 8, ["class", "href", "noIcon", "target", "rel"]);
    };
  }
});
const VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-20d3dafa"]]);
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuGroup",
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    const { page } = useData();
    const isChildActive = (navItem) => {
      if ("link" in navItem) {
        return isActive(
          page.value.relativePath,
          navItem.link,
          !!props.item.activeMatch
        );
      } else {
        return navItem.items.some(isChildActive);
      }
    };
    const childrenActive = computed(() => isChildActive(props.item));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VPFlyout, {
        class: normalizeClass({
          VPNavBarMenuGroup: true,
          active: unref(isActive)(
            unref(page).relativePath,
            _ctx.item.activeMatch,
            !!_ctx.item.activeMatch
          ) || childrenActive.value
        }),
        button: _ctx.item.text,
        items: _ctx.item.items
      }, null, 8, ["class", "button", "items"]);
    };
  }
});
const _withScopeId$5 = (n) => (pushScopeId("data-v-05bd997a"), n = n(), popScopeId(), n);
const _hoisted_1$j = {
  key: 0,
  "aria-labelledby": "main-nav-aria-label",
  class: "VPNavBarMenu"
};
const _hoisted_2$e = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("span", {
  id: "main-nav-aria-label",
  class: "visually-hidden"
}, "Main Navigation", -1));
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenu",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => {
      return unref(theme2).nav ? (openBlock(), createElementBlock("nav", _hoisted_1$j, [
        _hoisted_2$e,
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(theme2).nav, (item) => {
          return openBlock(), createElementBlock(Fragment, {
            key: item.text
          }, [
            "link" in item ? (openBlock(), createBlock(VPNavBarMenuLink, {
              key: 0,
              item
            }, null, 8, ["item"])) : (openBlock(), createBlock(_sfc_main$q, {
              key: 1,
              item
            }, null, 8, ["item"]))
          ], 64);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
const VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-05bd997a"]]);
function createSearchTranslate(defaultTranslations) {
  const { localeIndex, theme: theme2 } = useData();
  function translate(key) {
    var _a, _b, _c;
    const keyPath = key.split(".");
    const themeObject = (_a = theme2.value.search) == null ? void 0 : _a.options;
    const isObject = themeObject && typeof themeObject === "object";
    const locales = isObject && ((_c = (_b = themeObject.locales) == null ? void 0 : _b[localeIndex.value]) == null ? void 0 : _c.translations) || null;
    const translations = isObject && themeObject.translations || null;
    let localeResult = locales;
    let translationResult = translations;
    let defaultResult = defaultTranslations;
    const lastKey = keyPath.pop();
    for (const k of keyPath) {
      let fallbackResult = null;
      const foundInFallback = defaultResult == null ? void 0 : defaultResult[k];
      if (foundInFallback) {
        fallbackResult = defaultResult = foundInFallback;
      }
      const foundInTranslation = translationResult == null ? void 0 : translationResult[k];
      if (foundInTranslation) {
        fallbackResult = translationResult = foundInTranslation;
      }
      const foundInLocale = localeResult == null ? void 0 : localeResult[k];
      if (foundInLocale) {
        fallbackResult = localeResult = foundInLocale;
      }
      if (!foundInFallback) {
        defaultResult = fallbackResult;
      }
      if (!foundInTranslation) {
        translationResult = fallbackResult;
      }
      if (!foundInLocale) {
        localeResult = fallbackResult;
      }
    }
    return (localeResult == null ? void 0 : localeResult[lastKey]) ?? (translationResult == null ? void 0 : translationResult[lastKey]) ?? (defaultResult == null ? void 0 : defaultResult[lastKey]) ?? "";
  }
  return translate;
}
const _hoisted_1$i = ["aria-label"];
const _hoisted_2$d = { class: "DocSearch-Button-Container" };
const _hoisted_3$a = /* @__PURE__ */ createBaseVNode("span", { class: "vp-icon DocSearch-Search-Icon" }, null, -1);
const _hoisted_4$5 = { class: "DocSearch-Button-Placeholder" };
const _hoisted_5$5 = /* @__PURE__ */ createBaseVNode("span", { class: "DocSearch-Button-Keys" }, [
  /* @__PURE__ */ createBaseVNode("kbd", { class: "DocSearch-Button-Key" }),
  /* @__PURE__ */ createBaseVNode("kbd", { class: "DocSearch-Button-Key" }, "K")
], -1);
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearchButton",
  setup(__props) {
    const defaultTranslations = {
      button: {
        buttonText: "Search",
        buttonAriaLabel: "Search"
      }
    };
    const translate = createSearchTranslate(defaultTranslations);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: "DocSearch DocSearch-Button",
        "aria-label": unref(translate)("button.buttonAriaLabel")
      }, [
        createBaseVNode("span", _hoisted_2$d, [
          _hoisted_3$a,
          createBaseVNode("span", _hoisted_4$5, toDisplayString(unref(translate)("button.buttonText")), 1)
        ]),
        _hoisted_5$5
      ], 8, _hoisted_1$i);
    };
  }
});
const _hoisted_1$h = { class: "VPNavBarSearch" };
const _hoisted_2$c = { id: "local-search" };
const _hoisted_3$9 = {
  key: 1,
  id: "docsearch"
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearch",
  setup(__props) {
    const VPLocalSearchBox = () => null;
    const VPAlgoliaSearchBox = () => null;
    const { theme: theme2 } = useData();
    const loaded = ref(false);
    const actuallyLoaded = ref(false);
    onMounted(() => {
      {
        return;
      }
    });
    function load() {
      if (!loaded.value) {
        loaded.value = true;
        setTimeout(poll, 16);
      }
    }
    function poll() {
      const e = new Event("keydown");
      e.key = "k";
      e.metaKey = true;
      window.dispatchEvent(e);
      setTimeout(() => {
        if (!document.querySelector(".DocSearch-Modal")) {
          poll();
        }
      }, 16);
    }
    const showSearch = ref(false);
    const provider = "";
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", _hoisted_1$h, [
        unref(provider) === "local" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          showSearch.value ? (openBlock(), createBlock(unref(VPLocalSearchBox), {
            key: 0,
            onClose: _cache[0] || (_cache[0] = ($event) => showSearch.value = false)
          })) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_2$c, [
            createVNode(_sfc_main$o, {
              onClick: _cache[1] || (_cache[1] = ($event) => showSearch.value = true)
            })
          ])
        ], 64)) : unref(provider) === "algolia" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          loaded.value ? (openBlock(), createBlock(unref(VPAlgoliaSearchBox), {
            key: 0,
            algolia: ((_a = unref(theme2).search) == null ? void 0 : _a.options) ?? unref(theme2).algolia,
            onVnodeBeforeMount: _cache[2] || (_cache[2] = ($event) => actuallyLoaded.value = true)
          }, null, 8, ["algolia"])) : createCommentVNode("", true),
          !actuallyLoaded.value ? (openBlock(), createElementBlock("div", _hoisted_3$9, [
            createVNode(_sfc_main$o, { onClick: load })
          ])) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ]);
    };
  }
});
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSocialLinks",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => {
      return unref(theme2).socialLinks ? (openBlock(), createBlock(VPSocialLinks, {
        key: 0,
        class: "VPNavBarSocialLinks",
        links: unref(theme2).socialLinks
      }, null, 8, ["links"])) : createCommentVNode("", true);
    };
  }
});
const VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-dedde283"]]);
const _hoisted_1$g = ["href", "rel", "target"];
const _hoisted_2$b = { key: 1 };
const _hoisted_3$8 = { key: 2 };
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTitle",
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    const { currentLang } = useLangs();
    const link = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? theme2.value.logoLink : (_a = theme2.value.logoLink) == null ? void 0 : _a.link;
      }
    );
    const rel = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? void 0 : (_a = theme2.value.logoLink) == null ? void 0 : _a.rel;
      }
    );
    const target = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? void 0 : (_a = theme2.value.logoLink) == null ? void 0 : _a.target;
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPNavBarTitle", { "has-sidebar": unref(hasSidebar) }])
      }, [
        createBaseVNode("a", {
          class: "title",
          href: link.value ?? unref(normalizeLink$1)(unref(currentLang).link),
          rel: rel.value,
          target: target.value
        }, [
          renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true),
          unref(theme2).logo ? (openBlock(), createBlock(VPImage, {
            key: 0,
            class: "logo",
            image: unref(theme2).logo
          }, null, 8, ["image"])) : createCommentVNode("", true),
          unref(theme2).siteTitle ? (openBlock(), createElementBlock("span", _hoisted_2$b, toDisplayString(unref(theme2).siteTitle), 1)) : unref(theme2).siteTitle === void 0 ? (openBlock(), createElementBlock("span", _hoisted_3$8, toDisplayString(unref(site).title), 1)) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
        ], 8, _hoisted_1$g)
      ], 2);
    };
  }
});
const VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-1f66e29d"]]);
const _hoisted_1$f = { class: "items" };
const _hoisted_2$a = { class: "title" };
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTranslations",
  setup(__props) {
    const { theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    return (_ctx, _cache) => {
      return unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createBlock(VPFlyout, {
        key: 0,
        class: "VPNavBarTranslations",
        icon: "vpi-languages",
        label: unref(theme2).langMenuLabel || "Change language"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$f, [
            createBaseVNode("p", _hoisted_2$a, toDisplayString(unref(currentLang).label), 1),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
              return openBlock(), createBlock(VPMenuLink, {
                key: locale.link,
                item: locale
              }, null, 8, ["item"]);
            }), 128))
          ])
        ]),
        _: 1
      }, 8, ["label"])) : createCommentVNode("", true);
    };
  }
});
const VPNavBarTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-cdd1ebb1"]]);
const _withScopeId$4 = (n) => (pushScopeId("data-v-0724480d"), n = n(), popScopeId(), n);
const _hoisted_1$e = { class: "wrapper" };
const _hoisted_2$9 = { class: "container" };
const _hoisted_3$7 = { class: "title" };
const _hoisted_4$4 = { class: "content" };
const _hoisted_5$4 = { class: "content-body" };
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "divider" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "divider-line" })
], -1));
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "VPNavBar",
  props: {
    isScreenOpen: { type: Boolean }
  },
  emits: ["toggle-screen"],
  setup(__props) {
    const { y } = useWindowScroll();
    const { hasSidebar } = useSidebar();
    const { frontmatter } = useData();
    const classes = ref({});
    watchPostEffect(() => {
      classes.value = {
        "has-sidebar": hasSidebar.value,
        "home": frontmatter.value.layout === "home",
        "top": y.value === 0
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPNavBar", classes.value])
      }, [
        createBaseVNode("div", _hoisted_1$e, [
          createBaseVNode("div", _hoisted_2$9, [
            createBaseVNode("div", _hoisted_3$7, [
              createVNode(VPNavBarTitle, null, {
                "nav-bar-title-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
                ]),
                "nav-bar-title-after": withCtx(() => [
                  renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
                ]),
                _: 3
              })
            ]),
            createBaseVNode("div", _hoisted_4$4, [
              createBaseVNode("div", _hoisted_5$4, [
                renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true),
                createVNode(_sfc_main$n, { class: "search" }),
                createVNode(VPNavBarMenu, { class: "menu" }),
                createVNode(VPNavBarTranslations, { class: "translations" }),
                createVNode(VPNavBarAppearance, { class: "appearance" }),
                createVNode(VPNavBarSocialLinks, { class: "social-links" }),
                createVNode(VPNavBarExtra, { class: "extra" }),
                renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true),
                createVNode(VPNavBarHamburger, {
                  class: "hamburger",
                  active: _ctx.isScreenOpen,
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle-screen"))
                }, null, 8, ["active"])
              ])
            ])
          ])
        ]),
        _hoisted_6$1
      ], 2);
    };
  }
});
const VPNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-0724480d"]]);
const _hoisted_1$d = {
  key: 0,
  class: "VPNavScreenAppearance"
};
const _hoisted_2$8 = { class: "text" };
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenAppearance",
  setup(__props) {
    const { site, theme: theme2 } = useData();
    return (_ctx, _cache) => {
      return unref(site).appearance && unref(site).appearance !== "force-dark" ? (openBlock(), createElementBlock("div", _hoisted_1$d, [
        createBaseVNode("p", _hoisted_2$8, toDisplayString(unref(theme2).darkModeSwitchLabel || "Appearance"), 1),
        createVNode(VPSwitchAppearance)
      ])) : createCommentVNode("", true);
    };
  }
});
const VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-fec9f026"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$U, {
        class: "VPNavScreenMenuLink",
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        onClick: unref(closeScreen)
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.item.text), 1)
        ]),
        _: 1
      }, 8, ["href", "target", "rel", "onClick"]);
    };
  }
});
const VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-4c992c12"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$U, {
        class: "VPNavScreenMenuGroupLink",
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        onClick: unref(closeScreen)
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.item.text), 1)
        ]),
        _: 1
      }, 8, ["href", "target", "rel", "onClick"]);
    };
  }
});
const VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-a904b7fb"]]);
const _hoisted_1$c = { class: "VPNavScreenMenuGroupSection" };
const _hoisted_2$7 = {
  key: 0,
  class: "title"
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        _ctx.text ? (openBlock(), createElementBlock("p", _hoisted_2$7, toDisplayString(_ctx.text), 1)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
          return openBlock(), createBlock(VPNavScreenMenuGroupLink, {
            key: item.text,
            item
          }, null, 8, ["item"]);
        }), 128))
      ]);
    };
  }
});
const VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-2db9a0ce"]]);
const _withScopeId$3 = (n) => (pushScopeId("data-v-41dd50df"), n = n(), popScopeId(), n);
const _hoisted_1$b = ["aria-controls", "aria-expanded"];
const _hoisted_2$6 = ["innerHTML"];
const _hoisted_3$6 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-plus button-icon" }, null, -1));
const _hoisted_4$3 = ["id"];
const _hoisted_5$3 = {
  key: 1,
  class: "group"
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroup",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const groupId = computed(
      () => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`
    );
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPNavScreenMenuGroup", { open: isOpen.value }])
      }, [
        createBaseVNode("button", {
          class: "button",
          "aria-controls": groupId.value,
          "aria-expanded": isOpen.value,
          onClick: toggle
        }, [
          createBaseVNode("span", {
            class: "button-text",
            innerHTML: _ctx.text
          }, null, 8, _hoisted_2$6),
          _hoisted_3$6
        ], 8, _hoisted_1$b),
        createBaseVNode("div", {
          id: groupId.value,
          class: "items"
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
            return openBlock(), createElementBlock(Fragment, {
              key: item.text
            }, [
              "link" in item ? (openBlock(), createElementBlock("div", {
                key: item.text,
                class: "item"
              }, [
                createVNode(VPNavScreenMenuGroupLink, { item }, null, 8, ["item"])
              ])) : (openBlock(), createElementBlock("div", _hoisted_5$3, [
                createVNode(VPNavScreenMenuGroupSection, {
                  text: item.text,
                  items: item.items
                }, null, 8, ["text", "items"])
              ]))
            ], 64);
          }), 128))
        ], 8, _hoisted_4$3)
      ], 2);
    };
  }
});
const VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-41dd50df"]]);
const _hoisted_1$a = {
  key: 0,
  class: "VPNavScreenMenu"
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenu",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => {
      return unref(theme2).nav ? (openBlock(), createElementBlock("nav", _hoisted_1$a, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(theme2).nav, (item) => {
          return openBlock(), createElementBlock(Fragment, {
            key: item.text
          }, [
            "link" in item ? (openBlock(), createBlock(VPNavScreenMenuLink, {
              key: 0,
              item
            }, null, 8, ["item"])) : (openBlock(), createBlock(VPNavScreenMenuGroup, {
              key: 1,
              text: item.text || "",
              items: item.items
            }, null, 8, ["text", "items"]))
          ], 64);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenSocialLinks",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => {
      return unref(theme2).socialLinks ? (openBlock(), createBlock(VPSocialLinks, {
        key: 0,
        class: "VPNavScreenSocialLinks",
        links: unref(theme2).socialLinks
      }, null, 8, ["links"])) : createCommentVNode("", true);
    };
  }
});
const _withScopeId$2 = (n) => (pushScopeId("data-v-7b8c0ce5"), n = n(), popScopeId(), n);
const _hoisted_1$9 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-languages icon lang" }, null, -1));
const _hoisted_2$5 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-chevron-down icon chevron" }, null, -1));
const _hoisted_3$5 = { class: "list" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenTranslations",
  setup(__props) {
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const isOpen = ref(false);
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    return (_ctx, _cache) => {
      return unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["VPNavScreenTranslations", { open: isOpen.value }])
      }, [
        createBaseVNode("button", {
          class: "title",
          onClick: toggle
        }, [
          _hoisted_1$9,
          createTextVNode(" " + toDisplayString(unref(currentLang).label) + " ", 1),
          _hoisted_2$5
        ]),
        createBaseVNode("ul", _hoisted_3$5, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
            return openBlock(), createElementBlock("li", {
              key: locale.link,
              class: "item"
            }, [
              createVNode(_sfc_main$U, {
                class: "link",
                href: locale.link
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(locale.text), 1)
                ]),
                _: 2
              }, 1032, ["href"])
            ]);
          }), 128))
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const VPNavScreenTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-7b8c0ce5"]]);
const _hoisted_1$8 = { class: "container" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreen",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = ref(null);
    const isLocked = useScrollLock(inBrowser ? document.body : null);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "fade",
        onEnter: _cache[0] || (_cache[0] = ($event) => isLocked.value = true),
        onAfterLeave: _cache[1] || (_cache[1] = ($event) => isLocked.value = false)
      }, {
        default: withCtx(() => [
          _ctx.open ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "VPNavScreen",
            ref_key: "screen",
            ref: screen,
            id: "VPNavScreen"
          }, [
            createBaseVNode("div", _hoisted_1$8, [
              renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true),
              createVNode(_sfc_main$d, { class: "menu" }),
              createVNode(VPNavScreenTranslations, { class: "translations" }),
              createVNode(VPNavScreenAppearance, { class: "appearance" }),
              createVNode(_sfc_main$c, { class: "social-links" }),
              renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
            ])
          ], 512)) : createCommentVNode("", true)
        ]),
        _: 3
      });
    };
  }
});
const VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-7f64798c"]]);
const _hoisted_1$7 = {
  key: 0,
  class: "VPNav"
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "VPNav",
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    const { frontmatter } = useData();
    const hasNavbar = computed(() => {
      return frontmatter.value.navbar !== false;
    });
    provide("close-screen", closeScreen);
    watchEffect(() => {
      if (inBrowser) {
        document.documentElement.classList.toggle("hide-nav", !hasNavbar.value);
      }
    });
    return (_ctx, _cache) => {
      return hasNavbar.value ? (openBlock(), createElementBlock("header", _hoisted_1$7, [
        createVNode(VPNavBar, {
          "is-screen-open": unref(isScreenOpen),
          onToggleScreen: unref(toggleScreen)
        }, {
          "nav-bar-title-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
          ]),
          "nav-bar-title-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
          ]),
          "nav-bar-content-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
          ]),
          "nav-bar-content-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["is-screen-open", "onToggleScreen"]),
        createVNode(VPNavScreen, { open: unref(isScreenOpen) }, {
          "nav-screen-content-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
          ]),
          "nav-screen-content-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["open"])
      ])) : createCommentVNode("", true);
    };
  }
});
const VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-ea148854"]]);
const _withScopeId$1 = (n) => (pushScopeId("data-v-84b46cca"), n = n(), popScopeId(), n);
const _hoisted_1$6 = ["role", "tabindex"];
const _hoisted_2$4 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, null, -1));
const _hoisted_3$4 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-chevron-right caret-icon" }, null, -1));
const _hoisted_4$2 = [
  _hoisted_3$4
];
const _hoisted_5$2 = {
  key: 1,
  class: "items"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItem",
  props: {
    item: {},
    depth: {}
  },
  setup(__props) {
    const props = __props;
    const {
      collapsed,
      collapsible,
      isLink,
      isActiveLink,
      hasActiveLink: hasActiveLink2,
      hasChildren,
      toggle
    } = useSidebarControl(computed(() => props.item));
    const sectionTag = computed(() => hasChildren.value ? "section" : `div`);
    const linkTag = computed(() => isLink.value ? "a" : "div");
    const textTag = computed(() => {
      return !hasChildren.value ? "p" : props.depth + 2 === 7 ? "p" : `h${props.depth + 2}`;
    });
    const itemRole = computed(() => isLink.value ? void 0 : "button");
    const classes = computed(() => [
      [`level-${props.depth}`],
      { collapsible: collapsible.value },
      { collapsed: collapsed.value },
      { "is-link": isLink.value },
      { "is-active": isActiveLink.value },
      { "has-active": hasActiveLink2.value }
    ]);
    function onItemInteraction(e) {
      if ("key" in e && e.key !== "Enter") {
        return;
      }
      !props.item.link && toggle();
    }
    function onCaretClick() {
      props.item.link && toggle();
    }
    return (_ctx, _cache) => {
      const _component_VPSidebarItem = resolveComponent("VPSidebarItem", true);
      return openBlock(), createBlock(resolveDynamicComponent(sectionTag.value), {
        class: normalizeClass(["VPSidebarItem", classes.value])
      }, {
        default: withCtx(() => [
          _ctx.item.text ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            class: "item",
            role: itemRole.value
          }, toHandlers(
            _ctx.item.items ? { click: onItemInteraction, keydown: onItemInteraction } : {},
            true
          ), {
            tabindex: _ctx.item.items && 0
          }), [
            _hoisted_2$4,
            _ctx.item.link ? (openBlock(), createBlock(_sfc_main$U, {
              key: 0,
              tag: linkTag.value,
              class: "link",
              href: _ctx.item.link,
              rel: _ctx.item.rel,
              target: _ctx.item.target
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                  class: "text",
                  innerHTML: _ctx.item.text
                }, null, 8, ["innerHTML"]))
              ]),
              _: 1
            }, 8, ["tag", "href", "rel", "target"])) : (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
              key: 1,
              class: "text",
              innerHTML: _ctx.item.text
            }, null, 8, ["innerHTML"])),
            _ctx.item.collapsed != null && _ctx.item.items && _ctx.item.items.length ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: "caret",
              role: "button",
              "aria-label": "toggle section",
              onClick: onCaretClick,
              onKeydown: withKeys(onCaretClick, ["enter"]),
              tabindex: "0"
            }, _hoisted_4$2, 32)) : createCommentVNode("", true)
          ], 16, _hoisted_1$6)) : createCommentVNode("", true),
          _ctx.item.items && _ctx.item.items.length ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
            _ctx.depth < 5 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.item.items, (i) => {
              return openBlock(), createBlock(_component_VPSidebarItem, {
                key: i.text,
                item: i,
                depth: _ctx.depth + 1
              }, null, 8, ["item", "depth"]);
            }), 128)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const VPSidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-84b46cca"]]);
const _withScopeId = (n) => (pushScopeId("data-v-3f58d2a6"), n = n(), popScopeId(), n);
const _hoisted_1$5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "curtain" }, null, -1));
const _hoisted_2$3 = {
  class: "nav",
  id: "VPSidebarNav",
  "aria-labelledby": "sidebar-aria-label",
  tabindex: "-1"
};
const _hoisted_3$3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "visually-hidden",
  id: "sidebar-aria-label"
}, " Sidebar Navigation ", -1));
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const { sidebarGroups, hasSidebar } = useSidebar();
    const props = __props;
    const navEl = ref(null);
    const isLocked = useScrollLock(inBrowser ? document.body : null);
    watch(
      [props, navEl],
      () => {
        var _a;
        if (props.open) {
          isLocked.value = true;
          (_a = navEl.value) == null ? void 0 : _a.focus();
        } else
          isLocked.value = false;
      },
      { immediate: true, flush: "post" }
    );
    return (_ctx, _cache) => {
      return unref(hasSidebar) ? (openBlock(), createElementBlock("aside", {
        key: 0,
        class: normalizeClass(["VPSidebar", { open: _ctx.open }]),
        ref_key: "navEl",
        ref: navEl,
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["stop"]))
      }, [
        _hoisted_1$5,
        createBaseVNode("nav", _hoisted_2$3, [
          _hoisted_3$3,
          renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sidebarGroups), (item) => {
            return openBlock(), createElementBlock("div", {
              key: item.text,
              class: "group"
            }, [
              createVNode(VPSidebarItem, {
                item,
                depth: 0
              }, null, 8, ["item"])
            ]);
          }), 128)),
          renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-3f58d2a6"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "VPSkipLink",
  setup(__props) {
    const route = useRoute();
    const backToTop = ref();
    watch(() => route.path, () => backToTop.value.focus());
    function focusOnTargetAnchor({ target }) {
      const el = document.getElementById(
        decodeURIComponent(target.hash).slice(1)
      );
      if (el) {
        const removeTabIndex = () => {
          el.removeAttribute("tabindex");
          el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1");
        el.addEventListener("blur", removeTabIndex);
        el.focus();
        window.scrollTo(0, 0);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("span", {
          ref_key: "backToTop",
          ref: backToTop,
          tabindex: "-1"
        }, null, 512),
        createBaseVNode("a", {
          href: "#VPContent",
          class: "VPSkipLink visually-hidden",
          onClick: focusOnTargetAnchor
        }, " Skip to content ")
      ], 64);
    };
  }
});
const VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-e8152104"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    const route = useRoute();
    watch(() => route.path, closeSidebar);
    useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);
    const { frontmatter } = useData();
    const slots = useSlots();
    const heroImageSlotExists = computed(() => !!slots["home-hero-image"]);
    provide("hero-image-slot-exists", heroImageSlotExists);
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return unref(frontmatter).layout !== false ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["Layout", unref(frontmatter).pageClass])
      }, [
        renderSlot(_ctx.$slots, "layout-top", {}, void 0, true),
        createVNode(VPSkipLink),
        createVNode(VPBackdrop, {
          class: "backdrop",
          show: unref(isSidebarOpen),
          onClick: unref(closeSidebar)
        }, null, 8, ["show", "onClick"]),
        createVNode(VPNav, null, {
          "nav-bar-title-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
          ]),
          "nav-bar-title-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
          ]),
          "nav-bar-content-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
          ]),
          "nav-bar-content-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
          ]),
          "nav-screen-content-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
          ]),
          "nav-screen-content-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
          ]),
          _: 3
        }),
        createVNode(VPLocalNav, {
          open: unref(isSidebarOpen),
          onOpenMenu: unref(openSidebar)
        }, null, 8, ["open", "onOpenMenu"]),
        createVNode(VPSidebar, { open: unref(isSidebarOpen) }, {
          "sidebar-nav-before": withCtx(() => [
            renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true)
          ]),
          "sidebar-nav-after": withCtx(() => [
            renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["open"]),
        createVNode(VPContent, null, {
          "page-top": withCtx(() => [
            renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
          ]),
          "page-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
          ]),
          "not-found": withCtx(() => [
            renderSlot(_ctx.$slots, "not-found", {}, void 0, true)
          ]),
          "home-hero-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
          ]),
          "home-hero-info-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true)
          ]),
          "home-hero-info": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
          ]),
          "home-hero-info-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true)
          ]),
          "home-hero-actions-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)
          ]),
          "home-hero-image": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
          ]),
          "home-hero-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
          ]),
          "home-features-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
          ]),
          "home-features-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
          ]),
          "doc-footer-before": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
          ]),
          "doc-before": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
          ]),
          "doc-after": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
          ]),
          "doc-top": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
          ]),
          "doc-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
          ]),
          "aside-top": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
          ]),
          "aside-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
          ]),
          "aside-outline-before": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
          ]),
          "aside-outline-after": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
          ]),
          "aside-ads-before": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
          ]),
          "aside-ads-after": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
          ]),
          _: 3
        }),
        createVNode(VPFooter),
        renderSlot(_ctx.$slots, "layout-bottom", {}, void 0, true)
      ], 2)) : (openBlock(), createBlock(_component_Content, { key: 1 }));
    };
  }
});
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-7cb4efe6"]]);
const theme = {
  Layout,
  enhanceApp: ({ app }) => {
    app.component("Badge", _sfc_main$$);
  }
};
/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */
var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var isSupported = function isSupported2(node) {
  return node.tagName === "IMG";
};
var isNodeList = function isNodeList2(selector) {
  return NodeList.prototype.isPrototypeOf(selector);
};
var isNode = function isNode2(selector) {
  return selector && selector.nodeType === 1;
};
var isSvg = function isSvg2(image) {
  var source = image.currentSrc || image.src;
  return source.substr(-4).toLowerCase() === ".svg";
};
var getImagesFromSelector = function getImagesFromSelector2(selector) {
  try {
    if (Array.isArray(selector)) {
      return selector.filter(isSupported);
    }
    if (isNodeList(selector)) {
      return [].slice.call(selector).filter(isSupported);
    }
    if (isNode(selector)) {
      return [selector].filter(isSupported);
    }
    if (typeof selector === "string") {
      return [].slice.call(document.querySelectorAll(selector)).filter(isSupported);
    }
    return [];
  } catch (err) {
    throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom");
  }
};
var createOverlay = function createOverlay2(background) {
  var overlay = document.createElement("div");
  overlay.classList.add("medium-zoom-overlay");
  overlay.style.background = background;
  return overlay;
};
var cloneTarget = function cloneTarget2(template) {
  var _template$getBounding = template.getBoundingClientRect(), top = _template$getBounding.top, left = _template$getBounding.left, width = _template$getBounding.width, height = _template$getBounding.height;
  var clone = template.cloneNode();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
  clone.removeAttribute("id");
  clone.style.position = "absolute";
  clone.style.top = top + scrollTop + "px";
  clone.style.left = left + scrollLeft + "px";
  clone.style.width = width + "px";
  clone.style.height = height + "px";
  clone.style.transform = "";
  return clone;
};
var createCustomEvent = function createCustomEvent2(type, params) {
  var eventParams = _extends({
    bubbles: false,
    cancelable: false,
    detail: void 0
  }, params);
  if (typeof window.CustomEvent === "function") {
    return new CustomEvent(type, eventParams);
  }
  var customEvent = document.createEvent("CustomEvent");
  customEvent.initCustomEvent(type, eventParams.bubbles, eventParams.cancelable, eventParams.detail);
  return customEvent;
};
var mediumZoom = function mediumZoom2(selector) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var Promise2 = window.Promise || function Promise3(fn) {
    function noop() {
    }
    fn(noop, noop);
  };
  var _handleClick = function _handleClick2(event) {
    var target = event.target;
    if (target === overlay) {
      close();
      return;
    }
    if (images.indexOf(target) === -1) {
      return;
    }
    toggle({ target });
  };
  var _handleScroll = function _handleScroll2() {
    if (isAnimating || !active2.original) {
      return;
    }
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (Math.abs(scrollTop - currentScroll) > zoomOptions.scrollOffset) {
      setTimeout(close, 150);
    }
  };
  var _handleKeyUp = function _handleKeyUp2(event) {
    var key = event.key || event.keyCode;
    if (key === "Escape" || key === "Esc" || key === 27) {
      close();
    }
  };
  var update = function update2() {
    var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var newOptions = options2;
    if (options2.background) {
      overlay.style.background = options2.background;
    }
    if (options2.container && options2.container instanceof Object) {
      newOptions.container = _extends({}, zoomOptions.container, options2.container);
    }
    if (options2.template) {
      var template = isNode(options2.template) ? options2.template : document.querySelector(options2.template);
      newOptions.template = template;
    }
    zoomOptions = _extends({}, zoomOptions, newOptions);
    images.forEach(function(image) {
      image.dispatchEvent(createCustomEvent("medium-zoom:update", {
        detail: { zoom }
      }));
    });
    return zoom;
  };
  var clone = function clone2() {
    var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return mediumZoom2(_extends({}, zoomOptions, options2));
  };
  var attach = function attach2() {
    for (var _len = arguments.length, selectors = Array(_len), _key = 0; _key < _len; _key++) {
      selectors[_key] = arguments[_key];
    }
    var newImages = selectors.reduce(function(imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []);
    newImages.filter(function(newImage) {
      return images.indexOf(newImage) === -1;
    }).forEach(function(newImage) {
      images.push(newImage);
      newImage.classList.add("medium-zoom-image");
    });
    eventListeners.forEach(function(_ref) {
      var type = _ref.type, listener = _ref.listener, options2 = _ref.options;
      newImages.forEach(function(image) {
        image.addEventListener(type, listener, options2);
      });
    });
    return zoom;
  };
  var detach = function detach2() {
    for (var _len2 = arguments.length, selectors = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      selectors[_key2] = arguments[_key2];
    }
    if (active2.zoomed) {
      close();
    }
    var imagesToDetach = selectors.length > 0 ? selectors.reduce(function(imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []) : images;
    imagesToDetach.forEach(function(image) {
      image.classList.remove("medium-zoom-image");
      image.dispatchEvent(createCustomEvent("medium-zoom:detach", {
        detail: { zoom }
      }));
    });
    images = images.filter(function(image) {
      return imagesToDetach.indexOf(image) === -1;
    });
    return zoom;
  };
  var on = function on2(type, listener) {
    var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    images.forEach(function(image) {
      image.addEventListener("medium-zoom:" + type, listener, options2);
    });
    eventListeners.push({ type: "medium-zoom:" + type, listener, options: options2 });
    return zoom;
  };
  var off = function off2(type, listener) {
    var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    images.forEach(function(image) {
      image.removeEventListener("medium-zoom:" + type, listener, options2);
    });
    eventListeners = eventListeners.filter(function(eventListener) {
      return !(eventListener.type === "medium-zoom:" + type && eventListener.listener.toString() === listener.toString());
    });
    return zoom;
  };
  var open = function open2() {
    var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, target = _ref2.target;
    var _animate = function _animate2() {
      var container = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      var viewportWidth = void 0;
      var viewportHeight = void 0;
      if (zoomOptions.container) {
        if (zoomOptions.container instanceof Object) {
          container = _extends({}, container, zoomOptions.container);
          viewportWidth = container.width - container.left - container.right - zoomOptions.margin * 2;
          viewportHeight = container.height - container.top - container.bottom - zoomOptions.margin * 2;
        } else {
          var zoomContainer = isNode(zoomOptions.container) ? zoomOptions.container : document.querySelector(zoomOptions.container);
          var _zoomContainer$getBou = zoomContainer.getBoundingClientRect(), _width = _zoomContainer$getBou.width, _height = _zoomContainer$getBou.height, _left = _zoomContainer$getBou.left, _top = _zoomContainer$getBou.top;
          container = _extends({}, container, {
            width: _width,
            height: _height,
            left: _left,
            top: _top
          });
        }
      }
      viewportWidth = viewportWidth || container.width - zoomOptions.margin * 2;
      viewportHeight = viewportHeight || container.height - zoomOptions.margin * 2;
      var zoomTarget = active2.zoomedHd || active2.original;
      var naturalWidth = isSvg(zoomTarget) ? viewportWidth : zoomTarget.naturalWidth || viewportWidth;
      var naturalHeight = isSvg(zoomTarget) ? viewportHeight : zoomTarget.naturalHeight || viewportHeight;
      var _zoomTarget$getBoundi = zoomTarget.getBoundingClientRect(), top = _zoomTarget$getBoundi.top, left = _zoomTarget$getBoundi.left, width = _zoomTarget$getBoundi.width, height = _zoomTarget$getBoundi.height;
      var scaleX = Math.min(Math.max(width, naturalWidth), viewportWidth) / width;
      var scaleY = Math.min(Math.max(height, naturalHeight), viewportHeight) / height;
      var scale = Math.min(scaleX, scaleY);
      var translateX = (-left + (viewportWidth - width) / 2 + zoomOptions.margin + container.left) / scale;
      var translateY = (-top + (viewportHeight - height) / 2 + zoomOptions.margin + container.top) / scale;
      var transform = "scale(" + scale + ") translate3d(" + translateX + "px, " + translateY + "px, 0)";
      active2.zoomed.style.transform = transform;
      if (active2.zoomedHd) {
        active2.zoomedHd.style.transform = transform;
      }
    };
    return new Promise2(function(resolve) {
      if (target && images.indexOf(target) === -1) {
        resolve(zoom);
        return;
      }
      var _handleOpenEnd = function _handleOpenEnd2() {
        isAnimating = false;
        active2.zoomed.removeEventListener("transitionend", _handleOpenEnd2);
        active2.original.dispatchEvent(createCustomEvent("medium-zoom:opened", {
          detail: { zoom }
        }));
        resolve(zoom);
      };
      if (active2.zoomed) {
        resolve(zoom);
        return;
      }
      if (target) {
        active2.original = target;
      } else if (images.length > 0) {
        var _images = images;
        active2.original = _images[0];
      } else {
        resolve(zoom);
        return;
      }
      active2.original.dispatchEvent(createCustomEvent("medium-zoom:open", {
        detail: { zoom }
      }));
      scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      isAnimating = true;
      active2.zoomed = cloneTarget(active2.original);
      document.body.appendChild(overlay);
      if (zoomOptions.template) {
        var template = isNode(zoomOptions.template) ? zoomOptions.template : document.querySelector(zoomOptions.template);
        active2.template = document.createElement("div");
        active2.template.appendChild(template.content.cloneNode(true));
        document.body.appendChild(active2.template);
      }
      if (active2.original.parentElement && active2.original.parentElement.tagName === "PICTURE" && active2.original.currentSrc) {
        active2.zoomed.src = active2.original.currentSrc;
      }
      document.body.appendChild(active2.zoomed);
      window.requestAnimationFrame(function() {
        document.body.classList.add("medium-zoom--opened");
      });
      active2.original.classList.add("medium-zoom-image--hidden");
      active2.zoomed.classList.add("medium-zoom-image--opened");
      active2.zoomed.addEventListener("click", close);
      active2.zoomed.addEventListener("transitionend", _handleOpenEnd);
      if (active2.original.getAttribute("data-zoom-src")) {
        active2.zoomedHd = active2.zoomed.cloneNode();
        active2.zoomedHd.removeAttribute("srcset");
        active2.zoomedHd.removeAttribute("sizes");
        active2.zoomedHd.removeAttribute("loading");
        active2.zoomedHd.src = active2.zoomed.getAttribute("data-zoom-src");
        active2.zoomedHd.onerror = function() {
          clearInterval(getZoomTargetSize);
          console.warn("Unable to reach the zoom image target " + active2.zoomedHd.src);
          active2.zoomedHd = null;
          _animate();
        };
        var getZoomTargetSize = setInterval(function() {
          if (active2.zoomedHd.complete) {
            clearInterval(getZoomTargetSize);
            active2.zoomedHd.classList.add("medium-zoom-image--opened");
            active2.zoomedHd.addEventListener("click", close);
            document.body.appendChild(active2.zoomedHd);
            _animate();
          }
        }, 10);
      } else if (active2.original.hasAttribute("srcset")) {
        active2.zoomedHd = active2.zoomed.cloneNode();
        active2.zoomedHd.removeAttribute("sizes");
        active2.zoomedHd.removeAttribute("loading");
        var loadEventListener = active2.zoomedHd.addEventListener("load", function() {
          active2.zoomedHd.removeEventListener("load", loadEventListener);
          active2.zoomedHd.classList.add("medium-zoom-image--opened");
          active2.zoomedHd.addEventListener("click", close);
          document.body.appendChild(active2.zoomedHd);
          _animate();
        });
      } else {
        _animate();
      }
    });
  };
  var close = function close2() {
    return new Promise2(function(resolve) {
      if (isAnimating || !active2.original) {
        resolve(zoom);
        return;
      }
      var _handleCloseEnd = function _handleCloseEnd2() {
        active2.original.classList.remove("medium-zoom-image--hidden");
        document.body.removeChild(active2.zoomed);
        if (active2.zoomedHd) {
          document.body.removeChild(active2.zoomedHd);
        }
        document.body.removeChild(overlay);
        active2.zoomed.classList.remove("medium-zoom-image--opened");
        if (active2.template) {
          document.body.removeChild(active2.template);
        }
        isAnimating = false;
        active2.zoomed.removeEventListener("transitionend", _handleCloseEnd2);
        active2.original.dispatchEvent(createCustomEvent("medium-zoom:closed", {
          detail: { zoom }
        }));
        active2.original = null;
        active2.zoomed = null;
        active2.zoomedHd = null;
        active2.template = null;
        resolve(zoom);
      };
      isAnimating = true;
      document.body.classList.remove("medium-zoom--opened");
      active2.zoomed.style.transform = "";
      if (active2.zoomedHd) {
        active2.zoomedHd.style.transform = "";
      }
      if (active2.template) {
        active2.template.style.transition = "opacity 150ms";
        active2.template.style.opacity = 0;
      }
      active2.original.dispatchEvent(createCustomEvent("medium-zoom:close", {
        detail: { zoom }
      }));
      active2.zoomed.addEventListener("transitionend", _handleCloseEnd);
    });
  };
  var toggle = function toggle2() {
    var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, target = _ref3.target;
    if (active2.original) {
      return close();
    }
    return open({ target });
  };
  var getOptions = function getOptions2() {
    return zoomOptions;
  };
  var getImages = function getImages2() {
    return images;
  };
  var getZoomedImage = function getZoomedImage2() {
    return active2.original;
  };
  var images = [];
  var eventListeners = [];
  var isAnimating = false;
  var scrollTop = 0;
  var zoomOptions = options;
  var active2 = {
    original: null,
    zoomed: null,
    zoomedHd: null,
    template: null
    // If the selector is omitted, it's replaced by the options
  };
  if (Object.prototype.toString.call(selector) === "[object Object]") {
    zoomOptions = selector;
  } else if (selector || typeof selector === "string") {
    attach(selector);
  }
  zoomOptions = _extends({
    margin: 0,
    background: "#fff",
    scrollOffset: 40,
    container: null,
    template: null
  }, zoomOptions);
  var overlay = createOverlay(zoomOptions.background);
  document.addEventListener("click", _handleClick);
  document.addEventListener("keyup", _handleKeyUp);
  document.addEventListener("scroll", _handleScroll);
  window.addEventListener("resize", close);
  var zoom = {
    open,
    close,
    toggle,
    update,
    clone,
    attach,
    detach,
    on,
    off,
    getOptions,
    getImages,
    getZoomedImage
  };
  return zoom;
};
function styleInject(css2, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css2 || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css2;
  } else {
    style.appendChild(document.createTextNode(css2));
  }
}
var css = ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";
styleInject(css);
const defaultSelector = ":not(a) > img:not(.image-src, .visitor, .vp-sponsor-grid-image)";
const mediumZoomSymbol = Symbol("medium-zoom");
const createMediumZoomProvider = (app, router) => {
  const zoom = mediumZoom();
  zoom.refresh = (selector = defaultSelector) => {
    zoom.detach();
    zoom.attach(selector);
  };
  app.provide(mediumZoomSymbol, zoom);
  watch(
    () => router.route.path,
    // 使用 nextTick 时在 dev 环境下第一次进入页面无法触发
    () => setTimeout(() => zoom.refresh())
  );
};
const d = ["id", "host", "repo", "repoid", "category", "categoryid", "mapping", "term", "strict", "reactionsenabled", "emitmetadata", "inputposition", "theme", "lang", "loading"], l = /* @__PURE__ */ defineComponent({
  __name: "Giscus",
  props: {
    id: {},
    host: {},
    repo: {},
    repoId: {},
    category: {},
    categoryId: {},
    mapping: {},
    term: {},
    theme: {},
    strict: {},
    reactionsEnabled: {},
    emitMetadata: {},
    inputPosition: {},
    lang: {},
    loading: {}
  },
  setup(s) {
    const t = ref(false);
    return onMounted(() => {
      t.value = true, __vitePreload(() => import("./giscus-BNK3dBIH.GOgO_0L-.js"), true ? __vite__mapDeps([]) : void 0);
    }), (e, m) => t.value ? (openBlock(), createElementBlock("giscus-widget", {
      key: 0,
      id: e.id,
      host: e.host,
      repo: e.repo,
      repoid: e.repoId,
      category: e.category,
      categoryid: e.categoryId,
      mapping: e.mapping,
      term: e.term,
      strict: e.strict,
      reactionsenabled: e.reactionsEnabled,
      emitmetadata: e.emitMetadata,
      inputposition: e.inputPosition,
      theme: e.theme,
      lang: e.lang,
      loading: e.loading
    }, null, 8, d)) : createCommentVNode("", true);
  }
});
function useFormatPath() {
  const { site } = useData$1();
  const route = useRoute();
  return computed(() => route.path.replace(site.value.base.replace(/\/$/, ""), ""));
}
function usePageId() {
  const { frontmatter } = useData$1();
  const formatPath = useFormatPath();
  return computed(() => frontmatter.value.pageId || formatPath.value);
}
const _hoisted_1$4 = ["src"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MNavVisitor",
  setup(__props) {
    const DEV = inject("DEV");
    const { theme: theme2 } = useData$1();
    const { visitor } = theme2.value;
    return (_ctx, _cache) => {
      return !unref(DEV) && unref(visitor) ? (openBlock(), createElementBlock("img", {
        key: 0,
        class: "visitor",
        src: `https://visitor-badge.laobi.icu/badge?page_id=${unref(visitor).badgeId}`,
        onerror: "this.style.display='none'"
      }, null, 8, _hoisted_1$4)) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$3 = {
  key: 0,
  class: "m-doc-footer"
};
const _hoisted_2$2 = { class: "m-doc-footer-message" };
const _hoisted_3$2 = ["src"];
const _hoisted_4$1 = { key: 1 };
const _hoisted_5$1 = {
  key: 0,
  class: "m-doc-footer-copyright"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MDocFooter",
  setup(__props) {
    const DEV = inject("DEV");
    const { theme: theme2 } = useData$1();
    const { footer, visitor } = theme2.value;
    const { hasSidebar } = useSidebar();
    const pageId = usePageId();
    const isDocFooterVisible = computed(() => {
      return !DEV || footer.message || footer.copyright || visitor.badgeId;
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return isDocFooterVisible.value ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$2, [
          !unref(DEV) && unref(visitor) ? (openBlock(), createElementBlock("img", {
            key: 0,
            class: "visitor",
            src: `https://visitor-badge.laobi.icu/badge?page_id=${unref(visitor).badgeId}.${unref(pageId)}`,
            title: "当前页面累计访问数",
            onerror: "this.style.display='none'"
          }, null, 8, _hoisted_3$2)) : createCommentVNode("", true),
          ((_a = unref(footer)) == null ? void 0 : _a.message) ? (openBlock(), createElementBlock("p", _hoisted_4$1, toDisplayString(unref(footer).message), 1)) : createCommentVNode("", true)
        ]),
        ((_b = unref(footer)) == null ? void 0 : _b.copyright) ? (openBlock(), createElementBlock("p", _hoisted_5$1, toDisplayString(unref(footer).copyright), 1)) : createCommentVNode("", true)
      ], 512)), [
        [vShow, unref(hasSidebar)]
      ]) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$2 = { class: "doc-comments" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MLayout",
  setup(__props) {
    const { Layout: Layout2 } = theme;
    const { isDark, theme: theme$1, frontmatter } = useData$1();
    const pageId = usePageId();
    const { comment } = theme$1.value;
    const enableTransitions = () => "startViewTransition" in document && window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    function updateMetaThemeColor() {
      if (inBrowser) {
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        metaThemeColor.setAttribute("content", isDark.value ? "#1b1b1f" : "#3eaf7c");
      }
    }
    updateMetaThemeColor();
    provide("toggle-appearance", async ({ clientX: x, clientY: y }) => {
      if (!enableTransitions()) {
        isDark.value = !isDark.value;
        updateMetaThemeColor();
        return;
      }
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${Math.hypot(
          Math.max(x, innerWidth - x),
          Math.max(y, innerHeight - y)
        )}px at ${x}px ${y}px)`
      ];
      await document.startViewTransition(async () => {
        isDark.value = !isDark.value;
        updateMetaThemeColor();
        await nextTick();
      }).ready;
      document.documentElement.animate(
        { clipPath: isDark.value ? clipPath.reverse() : clipPath },
        {
          duration: 300,
          easing: "ease-in",
          pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`
        }
      );
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Layout2), normalizeProps(guardReactiveProps(_ctx.$attrs)), createSlots({
        "nav-bar-title-after": withCtx(() => [
          createVNode(_sfc_main$4)
        ]),
        "doc-after": withCtx(() => [
          createVNode(_sfc_main$3)
        ]),
        _: 2
      }, [
        unref(comment) && unref(frontmatter).comment !== false ? {
          name: "doc-footer-before",
          fn: withCtx(() => [
            createBaseVNode("div", _hoisted_1$2, [
              createVNode(unref(l), mergeProps({
                id: "comments",
                mapping: "specific",
                term: unref(pageId),
                strict: "1",
                reactionsEnabled: "1",
                emitMetadata: "0",
                inputPosition: "top",
                theme: unref(isDark) ? "dark" : "light",
                lang: "zh-CN",
                loading: "lazy"
              }, { ...unref(comment) }), null, 16, ["term", "theme"])
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1040);
    };
  }
});
const rControl = /[\u0000-\u001f]/g;
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g;
const rCombining = /[\u0300-\u036F]/g;
const slugify = (str) => str.normalize("NFKD").replace(rCombining, "").replace(rControl, "").replace(rSpecial, "-").replace(/-{2,}/g, "-").replace(/^-+|-+$/g, "").replace(/^(\d)/, "_$1").toLowerCase();
const _hoisted_1$1 = ["href"];
const _hoisted_2$1 = { class: "box" };
const _hoisted_3$1 = { class: "box-header" };
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = {
  key: 1,
  class: "icon"
};
const _hoisted_6 = ["src", "alt"];
const _hoisted_7 = ["id"];
const _hoisted_8 = {
  key: 0,
  class: "desc"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MNavLink",
  props: {
    icon: {},
    title: {},
    desc: {},
    link: {}
  },
  setup(__props) {
    const props = __props;
    const formatTitle = computed(() => {
      if (!props.title) {
        return "";
      }
      return slugify(props.title);
    });
    const svg = computed(() => {
      if (typeof props.icon === "object")
        return props.icon.svg;
      return "";
    });
    return (_ctx, _cache) => {
      return _ctx.link ? (openBlock(), createElementBlock("a", {
        key: 0,
        class: "m-nav-link",
        href: _ctx.link,
        target: "_blank",
        rel: "noreferrer"
      }, [
        createBaseVNode("article", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            svg.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "icon",
              innerHTML: svg.value
            }, null, 8, _hoisted_4)) : _ctx.icon && typeof _ctx.icon === "string" ? (openBlock(), createElementBlock("div", _hoisted_5, [
              createBaseVNode("img", {
                src: unref(withBase)(_ctx.icon),
                alt: _ctx.title,
                onerror: "this.parentElement.style.display='none'"
              }, null, 8, _hoisted_6)
            ])) : createCommentVNode("", true),
            _ctx.title ? (openBlock(), createElementBlock("h5", {
              key: 2,
              id: formatTitle.value,
              class: "title"
            }, toDisplayString(_ctx.title), 9, _hoisted_7)) : createCommentVNode("", true)
          ]),
          _ctx.desc ? (openBlock(), createElementBlock("p", _hoisted_8, toDisplayString(_ctx.desc), 1)) : createCommentVNode("", true)
        ])
      ], 8, _hoisted_1$1)) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1 = ["id"];
const _hoisted_2 = ["href"];
const _hoisted_3 = { class: "m-nav-links" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MNavLinks",
  props: {
    title: {},
    items: {}
  },
  setup(__props) {
    const props = __props;
    const formatTitle = computed(() => {
      return slugify(props.title);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _ctx.title ? (openBlock(), createElementBlock("h2", {
          key: 0,
          id: formatTitle.value,
          tabindex: "-1"
        }, [
          createTextVNode(toDisplayString(_ctx.title) + " ", 1),
          createBaseVNode("a", {
            class: "header-anchor",
            href: `#${formatTitle.value}`,
            "aria-hidden": "true"
          }, null, 8, _hoisted_2)
        ], 8, _hoisted_1)) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, ({ icon, title, desc, link }) => {
            return openBlock(), createBlock(_sfc_main$1, {
              key: link,
              icon,
              title,
              desc,
              link
            }, null, 8, ["icon", "title", "desc", "link"]);
          }), 128))
        ])
      ], 64);
    };
  }
});
let homePageStyle;
const RawTheme = {
  extends: theme,
  Layout: () => {
    var _a;
    const props = {};
    const { frontmatter } = useData$1();
    if ((_a = frontmatter.value) == null ? void 0 : _a.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }
    return h(_sfc_main$2, props);
  },
  enhanceApp({ app, router }) {
    createMediumZoomProvider(app, router);
    app.provide("DEV", false);
    app.component("MNavLinks", _sfc_main);
    if (typeof window !== "undefined") {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(
          /* /vitepress-nav-template/ 是为了兼容 GitHub Pages */
          location.pathname === "/" || location.pathname === "/vitepress-nav-template/"
        ),
        { immediate: true }
      );
    }
  }
};
if (typeof window !== "undefined") {
  const browser = navigator.userAgent.toLowerCase();
  if (browser.includes("chrome")) {
    document.documentElement.classList.add("browser-chrome");
  } else if (browser.includes("firefox")) {
    document.documentElement.classList.add("browser-firefox");
  } else if (browser.includes("safari")) {
    document.documentElement.classList.add("browser-safari");
  }
}
function updateHomePageStyle(value) {
  if (value) {
    if (homePageStyle)
      return;
    homePageStyle = document.createElement("style");
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`;
    document.body.appendChild(homePageStyle);
  } else {
    if (!homePageStyle)
      return;
    homePageStyle.remove();
    homePageStyle = void 0;
  }
}
export {
  RawTheme as R
};
