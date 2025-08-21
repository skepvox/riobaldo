import { u as useAppConfig, A as tv, j as _sfc_main$r } from './server.mjs';
import { computed, mergeProps, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
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
  "base": [
    "text-primary border-b border-transparent hover:border-primary font-medium focus-visible:outline-primary [&>code]:border-dashed hover:[&>code]:border-primary hover:[&>code]:text-primary",
    "transition-colors [&>code]:transition-colors"
  ]
};
const _sfc_main = {
  __name: "ProseA",
  __ssrInlineRender: true,
  props: {
    href: { type: String, required: false },
    target: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.a || {} }));
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULink = _sfc_main$r;
      _push(ssrRenderComponent(_component_ULink, mergeProps({
        href: __props.href,
        target: __props.target,
        class: ui.value({ class: props.class }),
        raw: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@3.2.0_@babel+parser@7.28.0_@netlify+blobs@9.1.2_db0@0.3.2_better-sqlite3@1_abd900d3314e4a9a03512da03be3832c/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/A.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=A-Du81YGPk.mjs.map
