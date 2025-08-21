import { J as useRoute, F as useAsyncData, G as queryCollection, c as createError, I as _sfc_main$5, E as _sfc_main$j, a1 as __nuxt_component_6, _ as _sfc_main$w } from './server.mjs';
import { _ as _sfc_main$1, a as _sfc_main$2 } from './Breadcrumb-BxYSdDkj.mjs';
import { _ as _sfc_main$2$1, a as __nuxt_component_5 } from './ContentRenderer-DIa62TFr.mjs';
import { defineComponent, withAsyncContext, computed, withCtx, unref, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import 'property-information';
import './node-Ta6SvKQA.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      route.path,
      () => queryCollection("matematica").path(route.path).first(),
      "$lVPagc62H2"
    )), __temp = await __temp, __restore(), __temp);
    if (!page.value) {
      throw createError({ statusCode: 404, statusMessage: "Página não encontrada" });
    }
    const breadcrumbs = computed(() => {
      const parts = route.path.split("/").filter(Boolean);
      const crumbs = [
        { label: "Início", to: "/" },
        { label: "Matemática", to: "/matematica" }
      ];
      if (parts[1]) {
        const moduleNum = parts[1].match(/\d+/)?.[0];
        crumbs.push({
          label: `Módulo ${moduleNum}`
          // No 'to' - this is not a navigable page
        });
      }
      if (parts[2]) {
        const chapterNum = parts[2].match(/\d+/)?.[0];
        crumbs.push({
          label: `Capítulo ${chapterNum}`
          // No 'to' - this is not a navigable page
        });
      }
      return crumbs;
    });
    const { data: navigation } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("math-navigation", async () => {
      const allContent = await queryCollection("matematica").order("path", "ASC").all();
      const currentIndex = allContent.findIndex((item) => item.path === route.path);
      return {
        prev: currentIndex > 0 ? allContent[currentIndex - 1] : null,
        next: currentIndex < allContent.length - 1 ? allContent[currentIndex + 1] : null
      };
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPage = _sfc_main$5;
      const _component_UPageHeader = _sfc_main$1;
      const _component_UBreadcrumb = _sfc_main$2;
      const _component_UPageBody = _sfc_main$2$1;
      const _component_UContainer = _sfc_main$j;
      const _component_ContentRenderer = __nuxt_component_5;
      const _component_NuxtLink = __nuxt_component_6;
      const _component_UIcon = _sfc_main$w;
      _push(ssrRenderComponent(_component_UPage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageHeader, null, {
              headline: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UBreadcrumb, { links: unref(breadcrumbs) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UBreadcrumb, { links: unref(breadcrumbs) }, null, 8, ["links"])
                  ];
                }
              }),
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(page).title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(page).title), 1)
                  ];
                }
              }),
              description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(page).description)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(page).description), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UContainer, { ui: { constrained: "max-w-4xl" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="prose prose-primary dark:prose-invert max-w-none"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ContentRenderer, { value: unref(page) }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"${_scopeId3}><div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId3}>`);
                        if (unref(navigation)?.prev) {
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            to: unref(navigation).prev.path,
                            class: "group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UIcon, {
                                  name: "i-heroicons-arrow-left-20-solid",
                                  class: "w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0"
                                }, null, _parent5, _scopeId4));
                                _push5(`<div class="text-left"${_scopeId4}><p class="text-sm text-gray-500 dark:text-gray-400"${_scopeId4}>Anterior</p><p class="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"${_scopeId4}>${ssrInterpolate(unref(navigation).prev.title)}</p></div>`);
                              } else {
                                return [
                                  createVNode(_component_UIcon, {
                                    name: "i-heroicons-arrow-left-20-solid",
                                    class: "w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0"
                                  }),
                                  createVNode("div", { class: "text-left" }, [
                                    createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Anterior"),
                                    createVNode("p", { class: "font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" }, toDisplayString(unref(navigation).prev.title), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<div${_scopeId3}></div>`);
                        }
                        if (unref(navigation)?.next) {
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            to: unref(navigation).next.path,
                            class: "group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors md:flex-row-reverse md:text-right"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UIcon, {
                                  name: "i-heroicons-arrow-right-20-solid",
                                  class: "w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0"
                                }, null, _parent5, _scopeId4));
                                _push5(`<div${_scopeId4}><p class="text-sm text-gray-500 dark:text-gray-400"${_scopeId4}>Próximo</p><p class="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"${_scopeId4}>${ssrInterpolate(unref(navigation).next.title)}</p></div>`);
                              } else {
                                return [
                                  createVNode(_component_UIcon, {
                                    name: "i-heroicons-arrow-right-20-solid",
                                    class: "w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0"
                                  }),
                                  createVNode("div", null, [
                                    createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Próximo"),
                                    createVNode("p", { class: "font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" }, toDisplayString(unref(navigation).next.title), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "prose prose-primary dark:prose-invert max-w-none" }, [
                            createVNode(_component_ContentRenderer, { value: unref(page) }, null, 8, ["value"])
                          ]),
                          createVNode("div", { class: "mt-12 pt-8 border-t border-gray-200 dark:border-gray-800" }, [
                            createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                              unref(navigation)?.prev ? (openBlock(), createBlock(_component_NuxtLink, {
                                key: 0,
                                to: unref(navigation).prev.path,
                                class: "group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UIcon, {
                                    name: "i-heroicons-arrow-left-20-solid",
                                    class: "w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0"
                                  }),
                                  createVNode("div", { class: "text-left" }, [
                                    createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Anterior"),
                                    createVNode("p", { class: "font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" }, toDisplayString(unref(navigation).prev.title), 1)
                                  ])
                                ]),
                                _: 1
                              }, 8, ["to"])) : (openBlock(), createBlock("div", { key: 1 })),
                              unref(navigation)?.next ? (openBlock(), createBlock(_component_NuxtLink, {
                                key: 2,
                                to: unref(navigation).next.path,
                                class: "group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors md:flex-row-reverse md:text-right"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UIcon, {
                                    name: "i-heroicons-arrow-right-20-solid",
                                    class: "w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0"
                                  }),
                                  createVNode("div", null, [
                                    createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Próximo"),
                                    createVNode("p", { class: "font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" }, toDisplayString(unref(navigation).next.title), 1)
                                  ])
                                ]),
                                _: 1
                              }, 8, ["to"])) : createCommentVNode("", true)
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UContainer, { ui: { constrained: "max-w-4xl" } }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "prose prose-primary dark:prose-invert max-w-none" }, [
                          createVNode(_component_ContentRenderer, { value: unref(page) }, null, 8, ["value"])
                        ]),
                        createVNode("div", { class: "mt-12 pt-8 border-t border-gray-200 dark:border-gray-800" }, [
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                            unref(navigation)?.prev ? (openBlock(), createBlock(_component_NuxtLink, {
                              key: 0,
                              to: unref(navigation).prev.path,
                              class: "group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UIcon, {
                                  name: "i-heroicons-arrow-left-20-solid",
                                  class: "w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0"
                                }),
                                createVNode("div", { class: "text-left" }, [
                                  createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Anterior"),
                                  createVNode("p", { class: "font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" }, toDisplayString(unref(navigation).prev.title), 1)
                                ])
                              ]),
                              _: 1
                            }, 8, ["to"])) : (openBlock(), createBlock("div", { key: 1 })),
                            unref(navigation)?.next ? (openBlock(), createBlock(_component_NuxtLink, {
                              key: 2,
                              to: unref(navigation).next.path,
                              class: "group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors md:flex-row-reverse md:text-right"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UIcon, {
                                  name: "i-heroicons-arrow-right-20-solid",
                                  class: "w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0"
                                }),
                                createVNode("div", null, [
                                  createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Próximo"),
                                  createVNode("p", { class: "font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" }, toDisplayString(unref(navigation).next.title), 1)
                                ])
                              ]),
                              _: 1
                            }, 8, ["to"])) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPageHeader, null, {
                headline: withCtx(() => [
                  createVNode(_component_UBreadcrumb, { links: unref(breadcrumbs) }, null, 8, ["links"])
                ]),
                title: withCtx(() => [
                  createTextVNode(toDisplayString(unref(page).title), 1)
                ]),
                description: withCtx(() => [
                  createTextVNode(toDisplayString(unref(page).description), 1)
                ]),
                _: 1
              }),
              createVNode(_component_UPageBody, null, {
                default: withCtx(() => [
                  createVNode(_component_UContainer, { ui: { constrained: "max-w-4xl" } }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "prose prose-primary dark:prose-invert max-w-none" }, [
                        createVNode(_component_ContentRenderer, { value: unref(page) }, null, 8, ["value"])
                      ]),
                      createVNode("div", { class: "mt-12 pt-8 border-t border-gray-200 dark:border-gray-800" }, [
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                          unref(navigation)?.prev ? (openBlock(), createBlock(_component_NuxtLink, {
                            key: 0,
                            to: unref(navigation).prev.path,
                            class: "group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UIcon, {
                                name: "i-heroicons-arrow-left-20-solid",
                                class: "w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0"
                              }),
                              createVNode("div", { class: "text-left" }, [
                                createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Anterior"),
                                createVNode("p", { class: "font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" }, toDisplayString(unref(navigation).prev.title), 1)
                              ])
                            ]),
                            _: 1
                          }, 8, ["to"])) : (openBlock(), createBlock("div", { key: 1 })),
                          unref(navigation)?.next ? (openBlock(), createBlock(_component_NuxtLink, {
                            key: 2,
                            to: unref(navigation).next.path,
                            class: "group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors md:flex-row-reverse md:text-right"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UIcon, {
                                name: "i-heroicons-arrow-right-20-solid",
                                class: "w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0"
                              }),
                              createVNode("div", null, [
                                createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Próximo"),
                                createVNode("p", { class: "font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" }, toDisplayString(unref(navigation).next.title), 1)
                              ])
                            ]),
                            _: 1
                          }, 8, ["to"])) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/matematica/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-DYAzLQ2z.mjs.map
