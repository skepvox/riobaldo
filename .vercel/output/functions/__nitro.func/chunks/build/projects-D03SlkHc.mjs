import { F as useAsyncData, G as queryCollection, c as createError, u as useAppConfig, H as useSeoMeta, I as _sfc_main$5 } from './server.mjs';
import { _ as _sfc_main$1 } from './PageHero-BzzvU71F.mjs';
import { _ as __nuxt_component_2 } from './WorkInProgress-A4zmmxNr.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
import './index-CSv99nHV.mjs';
import 'hey-listen';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "projects",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("projects-page", () => {
      return queryCollection("pages").path("/projects").first();
    })), __temp = await __temp, __restore(), __temp);
    if (!page.value) {
      throw createError({
        statusCode: 404,
        statusMessage: "Página não encontrada",
        fatal: true
      });
    }
    const { data: projects } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("projects", () => {
      return queryCollection("projects").all();
    })), __temp = await __temp, __restore(), __temp);
    const { global } = useAppConfig();
    useSeoMeta({
      title: page.value?.seo?.title || page.value?.title,
      ogTitle: page.value?.seo?.title || page.value?.title,
      description: page.value?.seo?.description || page.value?.description,
      ogDescription: page.value?.seo?.description || page.value?.description,
      ogUrl: "https://riobaldo.com/projects",
      twitterTitle: page.value?.seo?.title || page.value?.title,
      twitterDescription: page.value?.seo?.description || page.value?.description
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPage = _sfc_main$5;
      const _component_UPageHero = _sfc_main$1;
      const _component_WorkInProgress = __nuxt_component_2;
      if (unref(page)) {
        _push(ssrRenderComponent(_component_UPage, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UPageHero, {
                title: unref(page).title,
                description: unref(page).description,
                links: unref(page).links,
                ui: {
                  title: "!mx-0 text-left",
                  description: "!mx-0 text-left",
                  links: "justify-start"
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_WorkInProgress, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_WorkInProgress)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UPageHero, {
                  title: unref(page).title,
                  description: unref(page).description,
                  links: unref(page).links,
                  ui: {
                    title: "!mx-0 text-left",
                    description: "!mx-0 text-left",
                    links: "justify-start"
                  }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_WorkInProgress)
                  ]),
                  _: 1
                }, 8, ["title", "description", "links"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-D03SlkHc.mjs.map
