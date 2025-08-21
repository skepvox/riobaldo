import { F as useAsyncData, G as queryCollection, c as createError, H as useSeoMeta, I as _sfc_main$5 } from './server.mjs';
import { _ as _sfc_main$1 } from './PageHero-BzzvU71F.mjs';
import { _ as _sfc_main$3, a as _sfc_main$2, b as _sfc_main$1$1 } from './BlogPosts-C-SY9Ddb.mjs';
import { M as Motion } from './index-CSv99nHV.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, mergeProps, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { f as formatDate } from './date-CqB7IzHh.mjs';
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
import 'hey-listen';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("blog-page", () => {
      return queryCollection("pages").path("/blog").first();
    })), __temp = await __temp, __restore(), __temp);
    if (!page.value) {
      throw createError({
        statusCode: 404,
        statusMessage: "Página não encontrada",
        fatal: true
      });
    }
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "blogs",
      () => queryCollection("blog").order("date", "DESC").all()
    )), __temp = await __temp, __restore(), __temp);
    if (!posts.value) {
      throw createError({
        statusCode: 404,
        statusMessage: "Posts do blog não encontrados",
        fatal: true
      });
    }
    useSeoMeta({
      title: page.value?.seo?.title || page.value?.title,
      ogTitle: page.value?.seo?.title || page.value?.title,
      description: page.value?.seo?.description || page.value?.description,
      ogDescription: page.value?.seo?.description || page.value?.description,
      ogUrl: "https://riobaldo.com/blog",
      twitterTitle: page.value?.seo?.title || page.value?.title,
      twitterDescription: page.value?.seo?.description || page.value?.description
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPage = _sfc_main$5;
      const _component_UPageHero = _sfc_main$1;
      const _component_UPageSection = _sfc_main$3;
      const _component_UBlogPosts = _sfc_main$2;
      const _component_Motion = Motion;
      const _component_UBlogPost = _sfc_main$1$1;
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
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UPageSection, { ui: {
                container: "!pt-0"
              } }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UBlogPosts, { orientation: "vertical" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(posts), (post, index) => {
                            _push4(ssrRenderComponent(_component_Motion, {
                              key: index,
                              initial: { opacity: 0, transform: "translateY(10px)" },
                              "while-in-view": { opacity: 1, transform: "translateY(0)" },
                              transition: { delay: 0.2 * index },
                              "in-view-options": { once: true }
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_UBlogPost, mergeProps({
                                    variant: "naked",
                                    orientation: "horizontal",
                                    to: post.path
                                  }, { ref_for: true }, { ...post, date: unref(formatDate)(post.date) }, {
                                    ui: {
                                      root: "md:grid md:grid-cols-2 group overflow-visible transition-all duration-300",
                                      image: "group-hover/blog-post:scale-105 rounded-lg shadow-lg border-4 border-muted ring-2 ring-default",
                                      header: index % 2 === 0 ? "sm:-rotate-1 overflow-visible" : "sm:rotate-1 overflow-visible"
                                    }
                                  }), null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_UBlogPost, mergeProps({
                                      variant: "naked",
                                      orientation: "horizontal",
                                      to: post.path
                                    }, { ref_for: true }, { ...post, date: unref(formatDate)(post.date) }, {
                                      ui: {
                                        root: "md:grid md:grid-cols-2 group overflow-visible transition-all duration-300",
                                        image: "group-hover/blog-post:scale-105 rounded-lg shadow-lg border-4 border-muted ring-2 ring-default",
                                        header: index % 2 === 0 ? "sm:-rotate-1 overflow-visible" : "sm:rotate-1 overflow-visible"
                                      }
                                    }), null, 16, ["to", "ui"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(posts), (post, index) => {
                              return openBlock(), createBlock(_component_Motion, {
                                key: index,
                                initial: { opacity: 0, transform: "translateY(10px)" },
                                "while-in-view": { opacity: 1, transform: "translateY(0)" },
                                transition: { delay: 0.2 * index },
                                "in-view-options": { once: true }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UBlogPost, mergeProps({
                                    variant: "naked",
                                    orientation: "horizontal",
                                    to: post.path
                                  }, { ref_for: true }, { ...post, date: unref(formatDate)(post.date) }, {
                                    ui: {
                                      root: "md:grid md:grid-cols-2 group overflow-visible transition-all duration-300",
                                      image: "group-hover/blog-post:scale-105 rounded-lg shadow-lg border-4 border-muted ring-2 ring-default",
                                      header: index % 2 === 0 ? "sm:-rotate-1 overflow-visible" : "sm:rotate-1 overflow-visible"
                                    }
                                  }), null, 16, ["to", "ui"])
                                ]),
                                _: 2
                              }, 1032, ["transition"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UBlogPosts, { orientation: "vertical" }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(posts), (post, index) => {
                            return openBlock(), createBlock(_component_Motion, {
                              key: index,
                              initial: { opacity: 0, transform: "translateY(10px)" },
                              "while-in-view": { opacity: 1, transform: "translateY(0)" },
                              transition: { delay: 0.2 * index },
                              "in-view-options": { once: true }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UBlogPost, mergeProps({
                                  variant: "naked",
                                  orientation: "horizontal",
                                  to: post.path
                                }, { ref_for: true }, { ...post, date: unref(formatDate)(post.date) }, {
                                  ui: {
                                    root: "md:grid md:grid-cols-2 group overflow-visible transition-all duration-300",
                                    image: "group-hover/blog-post:scale-105 rounded-lg shadow-lg border-4 border-muted ring-2 ring-default",
                                    header: index % 2 === 0 ? "sm:-rotate-1 overflow-visible" : "sm:rotate-1 overflow-visible"
                                  }
                                }), null, 16, ["to", "ui"])
                              ]),
                              _: 2
                            }, 1032, ["transition"]);
                          }), 128))
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
                createVNode(_component_UPageHero, {
                  title: unref(page).title,
                  description: unref(page).description,
                  links: unref(page).links,
                  ui: {
                    title: "!mx-0 text-left",
                    description: "!mx-0 text-left",
                    links: "justify-start"
                  }
                }, null, 8, ["title", "description", "links"]),
                createVNode(_component_UPageSection, { ui: {
                  container: "!pt-0"
                } }, {
                  default: withCtx(() => [
                    createVNode(_component_UBlogPosts, { orientation: "vertical" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(posts), (post, index) => {
                          return openBlock(), createBlock(_component_Motion, {
                            key: index,
                            initial: { opacity: 0, transform: "translateY(10px)" },
                            "while-in-view": { opacity: 1, transform: "translateY(0)" },
                            transition: { delay: 0.2 * index },
                            "in-view-options": { once: true }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UBlogPost, mergeProps({
                                variant: "naked",
                                orientation: "horizontal",
                                to: post.path
                              }, { ref_for: true }, { ...post, date: unref(formatDate)(post.date) }, {
                                ui: {
                                  root: "md:grid md:grid-cols-2 group overflow-visible transition-all duration-300",
                                  image: "group-hover/blog-post:scale-105 rounded-lg shadow-lg border-4 border-muted ring-2 ring-default",
                                  header: index % 2 === 0 ? "sm:-rotate-1 overflow-visible" : "sm:rotate-1 overflow-visible"
                                }
                              }), null, 16, ["to", "ui"])
                            ]),
                            _: 2
                          }, 1032, ["transition"]);
                        }), 128))
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
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-FblmMTiq.mjs.map
