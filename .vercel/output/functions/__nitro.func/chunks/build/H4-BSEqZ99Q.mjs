import { computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { u as useAppConfig, a2 as useRuntimeConfig, A as tv } from './server.mjs';
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
    "base": "text-lg text-highlighted font-bold mt-6 mb-2 scroll-mt-[calc(24px+45px+var(--ui-header-height))] lg:scroll-mt-[calc(24px+var(--ui-header-height))] [&>a]:focus-visible:outline-primary",
    "link": ""
  }
};
const _sfc_main = {
  __name: "ProseH4",
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
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.h4 || {} })());
    const generate = computed(() => props.id && typeof headings?.anchorLinks === "object" && headings.anchorLinks.h4);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h4${ssrRenderAttrs(mergeProps({
        id: __props.id,
        class: ui.value.base({ class: props.class })
      }, _attrs))}>`);
      if (__props.id && generate.value) {
        _push(`<a${ssrRenderAttr("href", `#${__props.id}`)} class="${ssrRenderClass(ui.value.link({ class: props.ui?.link }))}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</h4>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@3.2.0_@babel+parser@7.28.0_@netlify+blobs@9.1.2_db0@0.3.2_better-sqlite3@1_abd900d3314e4a9a03512da03be3832c/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=H4-BSEqZ99Q.mjs.map
