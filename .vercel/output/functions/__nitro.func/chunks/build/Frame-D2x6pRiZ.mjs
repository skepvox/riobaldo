import { a9 as __nuxt_component_0$2 } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "Frame",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: false },
    description: { type: String, required: false },
    bg: { type: String, required: false, default: "linear-gradient(to bottom right, #171717, #131313)" },
    icon: { type: String, required: false },
    logo: { type: String, required: false },
    image: { type: String, required: false },
    username: { type: String, required: false },
    socials: { type: Array, required: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "relative h-full w-full flex items-center justify-center bg-neutral-900 text-white border-2 border-white",
        style: { backgroundImage: __props.bg }
      }, _attrs))}>`);
      if (__props.image) {
        _push(`<div class="absolute inset-0 w-full h-full bg-center opacity-10" style="${ssrRenderStyle({ backgroundImage: `url(${__props.image})` })}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col items-center text-center"><h1 class="flex gap-4 text-7xl font-bold" style="${ssrRenderStyle({ "display": "block", "line-clamp": "2", "text-overflow": "ellipsis" })}">`);
      if (__props.icon) {
        _push(ssrRenderComponent(_component_Icon, { name: __props.icon }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(__props.title)}</h1><p class="text-2xl max-w-3xl" style="${ssrRenderStyle({ "display": "block", "line-clamp": "3", "text-overflow": "ellipsis" })}">${ssrInterpolate(__props.description)}</p></div>`);
      if (__props.logo) {
        _push(`<img${ssrRenderAttr("src", __props.logo)} class="absolute bottom-0 left-0 p-5" style="${ssrRenderStyle({ "height": "125px", "width": "153px" })}">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="absolute bottom-5 right-5 flex gap-4">`);
      if (__props.username) {
        _push(`<div class="absolute bottom-12 right-8 font-bold">${ssrInterpolate(__props.username)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.socials, (social) => {
        _push(ssrRenderComponent(_component_Icon, {
          key: social.name,
          name: social.icon,
          class: "w-7 h-7"
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt-og-image@5.1.9_@unhead+vue@2.0.14_vue@3.5.18_typescript@5.8.3___magicast@0.3.5_uns_08d54141688793fccc95149bbe32405f/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Frame.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Frame-D2x6pRiZ.mjs.map
