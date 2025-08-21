import { u as useAppConfig, a2 as useRuntimeConfig, A as tv, _ as _sfc_main$w } from './server.mjs';
import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@intlify/utils';
import 'vue-router';
import '@iconify/utils';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'better-sqlite3';
import 'node:url';
import 'ipx';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'reka-ui';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '@vercel/analytics/nuxt';
import 'minimark/hast';
import 'vaul-vue';
import 'reka-ui/namespaced';

const theme = {
  "slots": {
    "base": [
      "relative text-xl text-highlighted font-bold mt-8 mb-3 scroll-mt-[calc(32px+45px+var(--ui-header-height))] lg:scroll-mt-[calc(32px+var(--ui-header-height))] [&>a]:focus-visible:outline-primary [&>a>code]:border-dashed hover:[&>a>code]:border-primary hover:[&>a>code]:text-primary [&>a>code]:text-lg/6 [&>a>code]:font-bold",
      "[&>a>code]:transition-colors"
    ],
    "leading": [
      "absolute -ms-8 top-0.5 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-1 bg-elevated hover:text-primary rounded-md hidden lg:flex text-muted",
      "transition"
    ],
    "leadingIcon": "size-4 shrink-0",
    "link": "group lg:ps-2 lg:-ms-2"
  }
};
const _sfc_main = {
  __name: "ProseH3",
  __ssrInlineRender: true,
  props: {
    id: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const { headings } = useRuntimeConfig().public.mdc;
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.h3 || {} })());
    const generate = computed(() => props.id && typeof headings?.anchorLinks === "object" && headings.anchorLinks.h3);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$w;
      _push(`<h3${ssrRenderAttrs(mergeProps({
        id: __props.id,
        class: ui.value.base({ class: props.class })
      }, _attrs))}>`);
      if (__props.id && generate.value) {
        _push(`<a${ssrRenderAttr("href", `#${__props.id}`)} class="${ssrRenderClass(ui.value.link({ class: props.ui?.link }))}"><span class="${ssrRenderClass(ui.value.leading({ class: props.ui?.leading }))}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: unref(appConfig).ui.icons.hash,
          class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
        }, null, _parent));
        _push(`</span>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</h3>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@3.2.0_@babel+parser@7.28.0_@netlify+blobs@9.1.2_db0@0.3.2_better-sqlite3@1_abd900d3314e4a9a03512da03be3832c/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=H3-RJsYvXgb.mjs.map
