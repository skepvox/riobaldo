import { J as useRoute, F as useAsyncData, G as queryCollection, c as createError, V as queryCollectionItemSurroundings, W as mapContentNavigation, X as findPageBreadcrumb, H as useSeoMeta, Y as _sfc_main$l, E as _sfc_main$j, I as _sfc_main$5, j as _sfc_main$r, _ as _sfc_main$w, M as ImageComponent, g as _sfc_main$q, P as useNuxtApp, Q as useOgImageRuntimeConfig, R as setHeadOgImagePrebuilt, S as getOgImagePath, U as createOgImageMeta, O as useToast } from './server.mjs';
import { f as formatDate, _ as _sfc_main$1 } from './date-CqB7IzHh.mjs';
import { _ as _sfc_main$2, a as __nuxt_component_5 } from './ContentRenderer-DIa62TFr.mjs';
import { _ as _sfc_main$3 } from './ContentSurround-R1GfcTL9.mjs';
import { defineComponent, withAsyncContext, inject, ref, computed, mergeProps, withCtx, unref, createVNode, createTextVNode, createBlock, createCommentVNode, openBlock, toDisplayString, toValue, useSSRContext } from 'vue';
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

function copyToClipboard(toCopy, message = "Copied to clipboard") {
  const toast = useToast();
  (void 0).clipboard.writeText(toCopy).then(() => {
    toast.add({ title: message, color: "success", icon: "i-lucide-check-circle" });
  });
}
function defineOgImage(_options = {}) {
  const nuxtApp = useNuxtApp();
  const route = useRoute();
  const basePath = route.path || "/";
  if (nuxtApp.payload.path === basePath) {
    const state = ref(false);
    state.value = true;
  }
  const { defaults } = useOgImageRuntimeConfig();
  const options = toValue(_options);
  if (options === false) {
    return;
  }
  const validOptions = options;
  for (const key in defaults) {
    if (validOptions[key] === void 0)
      validOptions[key] = defaults[key];
  }
  if (route.query)
    validOptions._query = route.query;
  if (validOptions.url) {
    setHeadOgImagePrebuilt(validOptions);
    return;
  }
  const path = getOgImagePath(basePath, validOptions);
  createOgImageMeta(path, validOptions, nuxtApp.ssrContext);
}
function defineOgImageComponent(component, props = {}, options = {}) {
  return defineOgImage({
    ...options,
    component,
    props
  });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      route.path,
      () => queryCollection("blog").path(route.path).first(),
      "$DquttgHoet"
    )), __temp = await __temp, __restore(), __temp);
    if (!page.value) throw createError({ statusCode: 404, statusMessage: "Página não encontrada", fatal: true });
    const { data: surround } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `${route.path}-surround`,
      () => queryCollectionItemSurroundings("blog", route.path, {
        fields: ["description"]
      })
    )), __temp = await __temp, __restore(), __temp);
    const navigation = inject("navigation", ref([]));
    const blogNavigation = computed(() => navigation.value.find((item) => item.path === "/blog")?.children || []);
    const breadcrumb = computed(() => mapContentNavigation(findPageBreadcrumb(blogNavigation?.value, page.value)).map(({ icon, ...link }) => link));
    if (page.value.image) {
      defineOgImage({ url: page.value.image });
    } else {
      defineOgImageComponent("Blog", {
        headline: breadcrumb.value.map((item) => item.label).join(" > ")
      }, {
        fonts: ["Geist:400", "Geist:600"]
      });
    }
    const title = page.value?.seo?.title || page.value?.title;
    const description = page.value?.seo?.description || page.value?.description;
    useSeoMeta({
      title,
      description,
      ogDescription: description,
      ogTitle: title,
      ogUrl: `https://riobaldo.com${route.path}`,
      twitterTitle: title,
      twitterDescription: description
    });
    const articleLink = computed(() => `${ void 0}`);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UMain = _sfc_main$l;
      const _component_UContainer = _sfc_main$j;
      const _component_UPage = _sfc_main$5;
      const _component_ULink = _sfc_main$r;
      const _component_UIcon = _sfc_main$w;
      const _component_NuxtImg = ImageComponent;
      const _component_UUser = _sfc_main$1;
      const _component_UPageBody = _sfc_main$2;
      const _component_ContentRenderer = __nuxt_component_5;
      const _component_UButton = _sfc_main$q;
      const _component_UContentSurround = _sfc_main$3;
      _push(ssrRenderComponent(_component_UMain, mergeProps({ class: "mt-20 px-2" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UContainer, { class: "relative min-h-screen" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(page)) {
                    _push3(ssrRenderComponent(_component_UPage, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ULink, {
                            to: "/blog",
                            class: "text-sm flex items-center gap-1"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UIcon, { name: "lucide:chevron-left" }, null, _parent5, _scopeId4));
                                _push5(` Blog `);
                              } else {
                                return [
                                  createVNode(_component_UIcon, { name: "lucide:chevron-left" }),
                                  createTextVNode(" Blog ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<div class="flex flex-col gap-3 mt-8"${_scopeId3}><div class="flex text-xs text-muted items-center justify-center gap-2"${_scopeId3}>`);
                          if (unref(page).date) {
                            _push4(`<span${_scopeId3}>${ssrInterpolate(unref(formatDate)(unref(page).date))}</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (unref(page).date && unref(page).minRead) {
                            _push4(`<span${_scopeId3}> - </span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (unref(page).minRead) {
                            _push4(`<span${_scopeId3}>${ssrInterpolate(unref(page).minRead)} MIN DE LEITURA </span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                          _push4(ssrRenderComponent(_component_NuxtImg, {
                            src: unref(page).image,
                            alt: unref(page).title,
                            class: "rounded-lg w-full h-[300px] object-cover object-center"
                          }, null, _parent4, _scopeId3));
                          _push4(`<h1 class="text-4xl text-center font-medium max-w-3xl mx-auto mt-4"${_scopeId3}>${ssrInterpolate(unref(page).title)}</h1><p class="text-muted text-center max-w-2xl mx-auto"${_scopeId3}>${ssrInterpolate(unref(page).description)}</p><div class="flex items-center justify-center gap-2 mt-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UUser, mergeProps({
                            orientation: "vertical",
                            color: "neutral",
                            variant: "outline",
                            class: "justify-center items-center text-center"
                          }, unref(page).author), null, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                          _push4(ssrRenderComponent(_component_UPageBody, { class: "max-w-3xl mx-auto" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (unref(page).body) {
                                  _push5(ssrRenderComponent(_component_ContentRenderer, { value: unref(page) }, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`<div class="flex items-center justify-end gap-2 text-sm text-muted"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_UButton, {
                                  size: "sm",
                                  variant: "link",
                                  color: "neutral",
                                  label: "Copiar link",
                                  onClick: ($event) => ("copyToClipboard" in _ctx ? _ctx.copyToClipboard : unref(copyToClipboard))(unref(articleLink), "Link do artigo copiado")
                                }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                                _push5(ssrRenderComponent(_component_UContentSurround, { surround: unref(surround) }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  unref(page).body ? (openBlock(), createBlock(_component_ContentRenderer, {
                                    key: 0,
                                    value: unref(page)
                                  }, null, 8, ["value"])) : createCommentVNode("", true),
                                  createVNode("div", { class: "flex items-center justify-end gap-2 text-sm text-muted" }, [
                                    createVNode(_component_UButton, {
                                      size: "sm",
                                      variant: "link",
                                      color: "neutral",
                                      label: "Copiar link",
                                      onClick: ($event) => ("copyToClipboard" in _ctx ? _ctx.copyToClipboard : unref(copyToClipboard))(unref(articleLink), "Link do artigo copiado")
                                    }, null, 8, ["onClick"])
                                  ]),
                                  createVNode(_component_UContentSurround, { surround: unref(surround) }, null, 8, ["surround"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ULink, {
                              to: "/blog",
                              class: "text-sm flex items-center gap-1"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UIcon, { name: "lucide:chevron-left" }),
                                createTextVNode(" Blog ")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "flex flex-col gap-3 mt-8" }, [
                              createVNode("div", { class: "flex text-xs text-muted items-center justify-center gap-2" }, [
                                unref(page).date ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(formatDate)(unref(page).date)), 1)) : createCommentVNode("", true),
                                unref(page).date && unref(page).minRead ? (openBlock(), createBlock("span", { key: 1 }, " - ")) : createCommentVNode("", true),
                                unref(page).minRead ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(page).minRead) + " MIN DE LEITURA ", 1)) : createCommentVNode("", true)
                              ]),
                              createVNode(_component_NuxtImg, {
                                src: unref(page).image,
                                alt: unref(page).title,
                                class: "rounded-lg w-full h-[300px] object-cover object-center"
                              }, null, 8, ["src", "alt"]),
                              createVNode("h1", { class: "text-4xl text-center font-medium max-w-3xl mx-auto mt-4" }, toDisplayString(unref(page).title), 1),
                              createVNode("p", { class: "text-muted text-center max-w-2xl mx-auto" }, toDisplayString(unref(page).description), 1),
                              createVNode("div", { class: "flex items-center justify-center gap-2 mt-2" }, [
                                createVNode(_component_UUser, mergeProps({
                                  orientation: "vertical",
                                  color: "neutral",
                                  variant: "outline",
                                  class: "justify-center items-center text-center"
                                }, unref(page).author), null, 16)
                              ])
                            ]),
                            createVNode(_component_UPageBody, { class: "max-w-3xl mx-auto" }, {
                              default: withCtx(() => [
                                unref(page).body ? (openBlock(), createBlock(_component_ContentRenderer, {
                                  key: 0,
                                  value: unref(page)
                                }, null, 8, ["value"])) : createCommentVNode("", true),
                                createVNode("div", { class: "flex items-center justify-end gap-2 text-sm text-muted" }, [
                                  createVNode(_component_UButton, {
                                    size: "sm",
                                    variant: "link",
                                    color: "neutral",
                                    label: "Copiar link",
                                    onClick: ($event) => ("copyToClipboard" in _ctx ? _ctx.copyToClipboard : unref(copyToClipboard))(unref(articleLink), "Link do artigo copiado")
                                  }, null, 8, ["onClick"])
                                ]),
                                createVNode(_component_UContentSurround, { surround: unref(surround) }, null, 8, ["surround"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(page) ? (openBlock(), createBlock(_component_UPage, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(_component_ULink, {
                          to: "/blog",
                          class: "text-sm flex items-center gap-1"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UIcon, { name: "lucide:chevron-left" }),
                            createTextVNode(" Blog ")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex flex-col gap-3 mt-8" }, [
                          createVNode("div", { class: "flex text-xs text-muted items-center justify-center gap-2" }, [
                            unref(page).date ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(formatDate)(unref(page).date)), 1)) : createCommentVNode("", true),
                            unref(page).date && unref(page).minRead ? (openBlock(), createBlock("span", { key: 1 }, " - ")) : createCommentVNode("", true),
                            unref(page).minRead ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(page).minRead) + " MIN DE LEITURA ", 1)) : createCommentVNode("", true)
                          ]),
                          createVNode(_component_NuxtImg, {
                            src: unref(page).image,
                            alt: unref(page).title,
                            class: "rounded-lg w-full h-[300px] object-cover object-center"
                          }, null, 8, ["src", "alt"]),
                          createVNode("h1", { class: "text-4xl text-center font-medium max-w-3xl mx-auto mt-4" }, toDisplayString(unref(page).title), 1),
                          createVNode("p", { class: "text-muted text-center max-w-2xl mx-auto" }, toDisplayString(unref(page).description), 1),
                          createVNode("div", { class: "flex items-center justify-center gap-2 mt-2" }, [
                            createVNode(_component_UUser, mergeProps({
                              orientation: "vertical",
                              color: "neutral",
                              variant: "outline",
                              class: "justify-center items-center text-center"
                            }, unref(page).author), null, 16)
                          ])
                        ]),
                        createVNode(_component_UPageBody, { class: "max-w-3xl mx-auto" }, {
                          default: withCtx(() => [
                            unref(page).body ? (openBlock(), createBlock(_component_ContentRenderer, {
                              key: 0,
                              value: unref(page)
                            }, null, 8, ["value"])) : createCommentVNode("", true),
                            createVNode("div", { class: "flex items-center justify-end gap-2 text-sm text-muted" }, [
                              createVNode(_component_UButton, {
                                size: "sm",
                                variant: "link",
                                color: "neutral",
                                label: "Copiar link",
                                onClick: ($event) => ("copyToClipboard" in _ctx ? _ctx.copyToClipboard : unref(copyToClipboard))(unref(articleLink), "Link do artigo copiado")
                              }, null, 8, ["onClick"])
                            ]),
                            createVNode(_component_UContentSurround, { surround: unref(surround) }, null, 8, ["surround"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UContainer, { class: "relative min-h-screen" }, {
                default: withCtx(() => [
                  unref(page) ? (openBlock(), createBlock(_component_UPage, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(_component_ULink, {
                        to: "/blog",
                        class: "text-sm flex items-center gap-1"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UIcon, { name: "lucide:chevron-left" }),
                          createTextVNode(" Blog ")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex flex-col gap-3 mt-8" }, [
                        createVNode("div", { class: "flex text-xs text-muted items-center justify-center gap-2" }, [
                          unref(page).date ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(formatDate)(unref(page).date)), 1)) : createCommentVNode("", true),
                          unref(page).date && unref(page).minRead ? (openBlock(), createBlock("span", { key: 1 }, " - ")) : createCommentVNode("", true),
                          unref(page).minRead ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(page).minRead) + " MIN DE LEITURA ", 1)) : createCommentVNode("", true)
                        ]),
                        createVNode(_component_NuxtImg, {
                          src: unref(page).image,
                          alt: unref(page).title,
                          class: "rounded-lg w-full h-[300px] object-cover object-center"
                        }, null, 8, ["src", "alt"]),
                        createVNode("h1", { class: "text-4xl text-center font-medium max-w-3xl mx-auto mt-4" }, toDisplayString(unref(page).title), 1),
                        createVNode("p", { class: "text-muted text-center max-w-2xl mx-auto" }, toDisplayString(unref(page).description), 1),
                        createVNode("div", { class: "flex items-center justify-center gap-2 mt-2" }, [
                          createVNode(_component_UUser, mergeProps({
                            orientation: "vertical",
                            color: "neutral",
                            variant: "outline",
                            class: "justify-center items-center text-center"
                          }, unref(page).author), null, 16)
                        ])
                      ]),
                      createVNode(_component_UPageBody, { class: "max-w-3xl mx-auto" }, {
                        default: withCtx(() => [
                          unref(page).body ? (openBlock(), createBlock(_component_ContentRenderer, {
                            key: 0,
                            value: unref(page)
                          }, null, 8, ["value"])) : createCommentVNode("", true),
                          createVNode("div", { class: "flex items-center justify-end gap-2 text-sm text-muted" }, [
                            createVNode(_component_UButton, {
                              size: "sm",
                              variant: "link",
                              color: "neutral",
                              label: "Copiar link",
                              onClick: ($event) => ("copyToClipboard" in _ctx ? _ctx.copyToClipboard : unref(copyToClipboard))(unref(articleLink), "Link do artigo copiado")
                            }, null, 8, ["onClick"])
                          ]),
                          createVNode(_component_UContentSurround, { surround: unref(surround) }, null, 8, ["surround"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-B8bNYpCI.mjs.map
