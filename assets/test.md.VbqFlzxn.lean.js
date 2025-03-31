import { d as defineComponent, a9 as getCurrentInstance, J as createVNode, h as ref, o as openBlock, c as createElementBlock, m as createBaseVNode, r as renderSlot, Q as normalizeStyle, n as normalizeClass, _ as _export_sfc, w as withCtx, p as unref, aa as createStaticVNode, ab as _imports_0, a as createTextVNode } from "./chunks/framework.Cac4KkLP.js";
const _ = defineComponent({
  name: "CodePreview",
  props: {
    code: { type: String, required: true },
    lang: { type: String, required: true },
    meta: { type: String, required: true }
  },
  setup(e) {
    const o = ref(), d = ref(0), t = ref(false);
    return {
      codeEl: o,
      height: d,
      copied: t,
      toggleCode: () => {
        const s = o.value ? o.value.offsetHeight : 0;
        d.value = d.value === 0 ? s : 0;
      },
      copyCode: () => {
        if (!t.value) {
          try {
            navigator.clipboard.writeText(e.code);
          } catch (s) {
            console.log(s);
          }
          t.value = true, setTimeout(() => {
            t.value = false;
          }, 1e3);
        }
      }
    };
  }
});
const w = (e, o) => {
  const d = e.__vccOpts || e;
  for (const [t, r] of o)
    d[t] = r;
  return d;
}, C = { class: "mdp-demo__preview" }, f = { class: "mdp-demo__toolbar" }, y = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  height: "20",
  width: "20",
  stroke: "currentColor",
  "stroke-width": "2",
  viewBox: "0 0 24 24"
}, k = /* @__PURE__ */ createBaseVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4"
}, null, -1), M = [
  k
], S = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  height: "20",
  width: "20",
  stroke: "currentColor",
  "stroke-width": "2",
  viewBox: "0 0 24 24"
}, b = /* @__PURE__ */ createBaseVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"
}, null, -1), B = [
  b
], P = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "ionicon",
  viewBox: "0 0 512 512"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "46",
    d: "M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320"
  })
], -1), $ = [
  P
], q = { ref: "codeEl" };
function E(e, o, d, t, r, u) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["mdp-demo", e.height > 0 && "is-expanded"])
  }, [
    createBaseVNode("div", C, [
      renderSlot(e.$slots, "default")
    ]),
    createBaseVNode("div", f, [
      createBaseVNode("div", {
        class: "mdp-demo__btn mdp-demo__btn-copy",
        onClick: o[0] || (o[0] = (...s) => e.copyCode && e.copyCode(...s))
      }, [
        e.copied ? (openBlock(), createElementBlock("svg", y, M)) : (openBlock(), createElementBlock("svg", S, B))
      ]),
      createBaseVNode("div", {
        class: "mdp-demo__btn mdp-demo__btn-code",
        onClick: o[1] || (o[1] = (...s) => e.toggleCode && e.toggleCode(...s))
      }, $)
    ]),
    createBaseVNode("div", {
      class: "mdp-demo__code",
      style: normalizeStyle({ height: e.height + "px", visibility: e.height > 0 ? "visible" : "hidden" })
    }, [
      createBaseVNode("div", q, [
        renderSlot(e.$slots, "code")
      ], 512)
    ], 4)
  ], 2);
}
const H = /* @__PURE__ */ w(_, [["render", E]]), V = defineComponent({
  name: "CodePreviewWrapper",
  props: {
    code: { type: String, required: true },
    lang: { type: String, required: true },
    meta: { type: String, default: "" },
    component: { type: String, default: "CodePreview" }
  },
  setup(e, o) {
    const t = getCurrentInstance().appContext.app.component(e.component), r = t || H;
    return () => createVNode(
      r,
      {
        code: decodeURIComponent(e.code),
        lang: decodeURIComponent(e.lang),
        meta: decodeURIComponent(e.meta)
      },
      {
        default: o.slots.default,
        code: o.slots.code
      }
    );
  }
});
const _sfc_main$1 = {};
const _hoisted_1$1 = { class: "flex-row-center rounded-lg w-full h-40 bg-blue-500" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, "vue 组件预览测试");
}
const DemoBlockI7d8636d2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _hoisted_1 = /* @__PURE__ */ createStaticVNode("", 4);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "language-vue vp-adaptive-theme line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    title: "Copy Code",
    class: "copy"
  }),
  /* @__PURE__ */ createBaseVNode("span", { class: "lang" }, "vue"),
  /* @__PURE__ */ createBaseVNode("pre", { class: "shiki shiki-themes github-light github-dark vp-code" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "<"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "template"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  <"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "div"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " class"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "="),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, '"flex-row-center rounded-lg w-full h-40 bg-blue-500"'),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">vue 组件预览测试</"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "div"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "</"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "template"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
      ])
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", {
    class: "line-numbers-wrapper",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "1"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "2"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "3"),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const __pageData = JSON.parse('{"title":"功能测试页","description":"","frontmatter":{},"headers":[],"relativePath":"test.md","filePath":"test.md","lastUpdated":1743432071000}');
const __default__ = { name: "test.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        createVNode(unref(V), {
          lang: "vue",
          meta: "preview",
          code: "%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22flex-row-center%20rounded-lg%20w-full%20h-40%20bg-blue-500%22%3Evue%20%E7%BB%84%E4%BB%B6%E9%A2%84%E8%A7%88%E6%B5%8B%E8%AF%95%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E",
          component: "CodePreview"
        }, {
          code: withCtx(() => [
            _hoisted_5
          ]),
          default: withCtx(() => [
            createVNode(DemoBlockI7d8636d2)
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
