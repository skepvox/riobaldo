import { F as useAsyncData, G as queryCollection, c as createError, H as useSeoMeta, I as _sfc_main$5$1, u as useAppConfig, g as _sfc_main$q, j as _sfc_main$r, _ as _sfc_main$w, A as tv, e as _sfc_main$t, f as useLocale, r as reactivePick, t as tv$1, D as computedAsync, E as _sfc_main$j } from './server.mjs';
import { _ as _sfc_main$a } from './PageHero-BzzvU71F.mjs';
import { M as Motion } from './index-CSv99nHV.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createVNode, mergeProps, createBlock, openBlock, Fragment, renderList, createTextVNode, toDisplayString, computed, renderSlot, watch, ref, createCommentVNode, useSlots, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_2 } from './WorkInProgress-A4zmmxNr.mjs';
import { Primitive, useForwardProps } from 'reka-ui';
import { _ as _sfc_main$3$1, a as _sfc_main$d, b as _sfc_main$1$1 } from './BlogPosts-C-SY9Ddb.mjs';
import { _ as _sfc_main$b } from './Separator-CkH4gGaX.mjs';
import useEmblaCarousel from 'embla-carousel-vue';
import { _ as _sfc_main$c, f as formatDate } from './date-CqB7IzHh.mjs';
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
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '@vercel/analytics/nuxt';
import 'minimark/hast';
import 'vaul-vue';
import 'reka-ui/namespaced';
import 'hey-listen';

const _sfc_main$9 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UColorModeAvatar",
  __ssrInlineRender: true,
  props: {
    light: { type: String, required: true },
    dark: { type: String, required: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAvatar = _sfc_main$t;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UAvatar, mergeProps({
        src: __props.light,
        class: "dark:hidden"
      }, _ctx.$attrs), null, _parent));
      _push(ssrRenderComponent(_component_UAvatar, mergeProps({
        src: __props.dark,
        class: "hidden dark:block"
      }, _ctx.$attrs), null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@3.2.0_@babel+parser@7.28.0_@netlify+blobs@9.1.2_db0@0.3.2_better-sqlite3@1_abd900d3314e4a9a03512da03be3832c/node_modules/@nuxt/ui-pro/dist/runtime/components/color-mode/ColorModeAvatar.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const theme$2 = {
  "slots": {
    "root": "group relative flex items-center overflow-hidden gap-(--gap) [--gap:--spacing(16)] [--duration:20s]",
    "content": "flex items-center shrink-0 justify-around gap-(--gap) min-w-max"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "content": "w-full"
      },
      "vertical": {
        "content": "h-full"
      }
    },
    "pauseOnHover": {
      "true": {
        "content": "group-hover:[animation-play-state:paused]"
      }
    },
    "reverse": {
      "true": {
        "content": "[animation-direction:reverse]"
      }
    },
    "overlay": {
      "true": {
        "root": 'before:absolute before:pointer-events-none before:content-[""] before:z-2 before:from-default before:to-transparent after:absolute after:pointer-events-none after:content-[""] after:z-2 after:from-default after:to-transparent'
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "class": {
        "root": "flex-row",
        "content": "flex-row animate-[marquee_var(--duration)_linear_infinite] rtl:animate-[marquee-rtl_var(--duration)_linear_infinite] backface-hidden"
      }
    },
    {
      "orientation": "horizontal",
      "overlay": true,
      "class": {
        "root": "before:inset-y-0 before:left-0 before:h-full before:w-1/3 before:bg-gradient-to-r after:inset-y-0 after:right-0 after:h-full after:w-1/3 after:bg-gradient-to-l backface-hidden"
      }
    },
    {
      "orientation": "vertical",
      "class": {
        "root": "flex-col",
        "content": "flex-col animate-[marquee-vertical_var(--duration)_linear_infinite] rtl:animate-[marquee-vertical-rtl_var(--duration)_linear_infinite] h-[fit-content] backface-hidden"
      }
    },
    {
      "orientation": "vertical",
      "overlay": true,
      "class": {
        "root": "before:inset-x-0 before:top-0 before:w-full before:h-1/3 before:bg-gradient-to-b after:inset-x-0 after:bottom-0 after:w-full after:h-1/3 after:bg-gradient-to-t backface-hidden"
      }
    }
  ]
};
const _sfc_main$8 = {
  __name: "UPageMarquee",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    pauseOnHover: { type: Boolean, required: false },
    reverse: { type: Boolean, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    repeat: { type: Number, required: false, default: 4 },
    overlay: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme$2), ...appConfig.uiPro?.pageMarquee || {} })({
      pauseOnHover: props.pauseOnHover,
      orientation: props.orientation,
      reverse: props.reverse,
      overlay: props.overlay
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.repeat, (i) => {
              _push2(`<div class="${ssrRenderClass(ui.value.content({ class: [props.ui?.content] }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.repeat, (i) => {
                return openBlock(), createBlock("div", {
                  key: i,
                  class: ui.value.content({ class: [props.ui?.content] })
                }, [
                  renderSlot(_ctx.$slots, "default")
                ], 2);
              }), 128))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@3.2.0_@babel+parser@7.28.0_@netlify+blobs@9.1.2_db0@0.3.2_better-sqlite3@1_abd900d3314e4a9a03512da03be3832c/node_modules/@nuxt/ui-pro/dist/runtime/components/PageMarquee.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    const { footer, global } = useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageHero = _sfc_main$a;
      const _component_Motion = Motion;
      const _component_UColorModeAvatar = _sfc_main$9;
      const _component_WorkInProgress = __nuxt_component_2;
      const _component_UButton = _sfc_main$q;
      const _component_UPageMarquee = _sfc_main$8;
      _push(ssrRenderComponent(_component_UPageHero, mergeProps({ ui: {
        headline: "flex items-center justify-center",
        title: "text-shadow-md max-w-lg mx-auto",
        links: "mt-4 flex-col justify-center items-center"
      } }, _attrs), {
        headline: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Motion, {
              initial: {
                scale: 1.1,
                opacity: 0,
                filter: "blur(20px)"
              },
              animate: {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)"
              },
              transition: {
                duration: 0.6,
                delay: 0.1
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UColorModeAvatar, {
                    class: "size-18 ring ring-default ring-offset-3 ring-offset-(--ui-bg)",
                    light: unref(global).picture?.light,
                    dark: unref(global).picture?.dark,
                    alt: unref(global).picture?.alt
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UColorModeAvatar, {
                      class: "size-18 ring ring-default ring-offset-3 ring-offset-(--ui-bg)",
                      light: unref(global).picture?.light,
                      dark: unref(global).picture?.dark,
                      alt: unref(global).picture?.alt
                    }, null, 8, ["light", "dark", "alt"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Motion, {
                initial: {
                  scale: 1.1,
                  opacity: 0,
                  filter: "blur(20px)"
                },
                animate: {
                  scale: 1,
                  opacity: 1,
                  filter: "blur(0px)"
                },
                transition: {
                  duration: 0.6,
                  delay: 0.1
                }
              }, {
                default: withCtx(() => [
                  createVNode(_component_UColorModeAvatar, {
                    class: "size-18 ring ring-default ring-offset-3 ring-offset-(--ui-bg)",
                    light: unref(global).picture?.light,
                    dark: unref(global).picture?.dark,
                    alt: unref(global).picture?.alt
                  }, null, 8, ["light", "dark", "alt"])
                ]),
                _: 1
              })
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Motion, {
              initial: {
                scale: 1.1,
                opacity: 0,
                filter: "blur(20px)"
              },
              animate: {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)"
              },
              transition: {
                duration: 0.6,
                delay: 0.1
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.page.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.page.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Motion, {
                initial: {
                  scale: 1.1,
                  opacity: 0,
                  filter: "blur(20px)"
                },
                animate: {
                  scale: 1,
                  opacity: 1,
                  filter: "blur(0px)"
                },
                transition: {
                  duration: 0.6,
                  delay: 0.1
                }
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.page.title), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Motion, {
              initial: {
                scale: 1.1,
                opacity: 0,
                filter: "blur(20px)"
              },
              animate: {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)"
              },
              transition: {
                duration: 0.6,
                delay: 0.3
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.page.description)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.page.description), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Motion, {
                initial: {
                  scale: 1.1,
                  opacity: 0,
                  filter: "blur(20px)"
                },
                animate: {
                  scale: 1,
                  opacity: 1,
                  filter: "blur(0px)"
                },
                transition: {
                  duration: 0.6,
                  delay: 0.3
                }
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.page.description), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        links: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Motion, {
              initial: {
                scale: 1.1,
                opacity: 0,
                filter: "blur(20px)"
              },
              animate: {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)"
              },
              transition: {
                duration: 0.6,
                delay: 0.5
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
            _push2(`<div class="gap-x-4 inline-flex mt-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(footer)?.links, (link, index) => {
              _push2(ssrRenderComponent(_component_Motion, {
                key: index,
                initial: {
                  scale: 1.1,
                  opacity: 0,
                  filter: "blur(20px)"
                },
                animate: {
                  scale: 1,
                  opacity: 1,
                  filter: "blur(0px)"
                },
                transition: {
                  duration: 0.6,
                  delay: 0.5 + index * 0.1
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UButton, mergeProps({ ref_for: true }, { size: "md", color: "neutral", variant: "ghost", ...link }), null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UButton, mergeProps({ ref_for: true }, { size: "md", color: "neutral", variant: "ghost", ...link }), null, 16)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode(_component_Motion, {
                initial: {
                  scale: 1.1,
                  opacity: 0,
                  filter: "blur(20px)"
                },
                animate: {
                  scale: 1,
                  opacity: 1,
                  filter: "blur(0px)"
                },
                transition: {
                  duration: 0.6,
                  delay: 0.5
                }
              }, {
                default: withCtx(() => [
                  createVNode(_component_WorkInProgress)
                ]),
                _: 1
              }),
              createVNode("div", { class: "gap-x-4 inline-flex mt-4" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(footer)?.links, (link, index) => {
                  return openBlock(), createBlock(_component_Motion, {
                    key: index,
                    initial: {
                      scale: 1.1,
                      opacity: 0,
                      filter: "blur(20px)"
                    },
                    animate: {
                      scale: 1,
                      opacity: 1,
                      filter: "blur(0px)"
                    },
                    transition: {
                      duration: 0.6,
                      delay: 0.5 + index * 0.1
                    }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UButton, mergeProps({ ref_for: true }, { size: "md", color: "neutral", variant: "ghost", ...link }), null, 16)
                    ]),
                    _: 2
                  }, 1032, ["transition"]);
                }), 128))
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageMarquee, {
              "pause-on-hover": "",
              class: "py-2 -mx-4 sm:-mx-6 lg:-mx-8 [--duration:60s]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.page.hero.images, (img, index) => {
                    _push3(ssrRenderComponent(_component_Motion, {
                      key: index,
                      initial: {
                        scale: 1.1,
                        opacity: 0,
                        filter: "blur(20px)"
                      },
                      animate: {
                        scale: 1,
                        opacity: 1,
                        filter: "blur(0px)"
                      },
                      transition: {
                        duration: 0.6,
                        delay: index * 0.1
                      }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttrs(mergeProps({
                            width: "234",
                            height: "234",
                            class: ["rounded-lg", index % 2 === 0 ? "-rotate-2" : "rotate-2"]
                          }, { ref_for: true }, img))}${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", mergeProps({
                              width: "234",
                              height: "234",
                              class: ["rounded-lg", index % 2 === 0 ? "-rotate-2" : "rotate-2"]
                            }, { ref_for: true }, img), null, 16)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.page.hero.images, (img, index) => {
                      return openBlock(), createBlock(_component_Motion, {
                        key: index,
                        initial: {
                          scale: 1.1,
                          opacity: 0,
                          filter: "blur(20px)"
                        },
                        animate: {
                          scale: 1,
                          opacity: 1,
                          filter: "blur(0px)"
                        },
                        transition: {
                          duration: 0.6,
                          delay: index * 0.1
                        }
                      }, {
                        default: withCtx(() => [
                          createVNode("img", mergeProps({
                            width: "234",
                            height: "234",
                            class: ["rounded-lg", index % 2 === 0 ? "-rotate-2" : "rotate-2"]
                          }, { ref_for: true }, img), null, 16)
                        ]),
                        _: 2
                      }, 1032, ["transition"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPageMarquee, {
                "pause-on-hover": "",
                class: "py-2 -mx-4 sm:-mx-6 lg:-mx-8 [--duration:60s]"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.page.hero.images, (img, index) => {
                    return openBlock(), createBlock(_component_Motion, {
                      key: index,
                      initial: {
                        scale: 1.1,
                        opacity: 0,
                        filter: "blur(20px)"
                      },
                      animate: {
                        scale: 1,
                        opacity: 1,
                        filter: "blur(0px)"
                      },
                      transition: {
                        duration: 0.6,
                        delay: index * 0.1
                      }
                    }, {
                      default: withCtx(() => [
                        createVNode("img", mergeProps({
                          width: "234",
                          height: "234",
                          class: ["rounded-lg", index % 2 === 0 ? "-rotate-2" : "rotate-2"]
                        }, { ref_for: true }, img), null, 16)
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
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Hero.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$7, { __name: "LandingHero" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "About",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageSection = _sfc_main$3$1;
      _push(ssrRenderComponent(_component_UPageSection, mergeProps({
        title: _ctx.page.about.title,
        description: _ctx.page.about.description,
        ui: {
          container: "!p-0",
          title: "text-left text-xl sm:text-xl lg:text-2xl font-medium",
          description: "text-left mt-3 text-sm sm:text-md lg:text-sm text-muted"
        }
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/About.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$6, { __name: "LandingAbout" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "WorkExperience",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageSection = _sfc_main$3$1;
      const _component_Motion = Motion;
      const _component_USeparator = _sfc_main$b;
      const _component_ULink = _sfc_main$r;
      const _component_UIcon = _sfc_main$w;
      _push(ssrRenderComponent(_component_UPageSection, mergeProps({
        title: _ctx.page.experience.title,
        ui: {
          container: "!p-0 gap-4 sm:gap-4",
          title: "text-left text-xl sm:text-xl lg:text-2xl font-medium",
          description: "mt-2"
        }
      }, _attrs), {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.page.experience.items, (experience, index) => {
              _push2(ssrRenderComponent(_component_Motion, {
                key: index,
                initial: { opacity: 0, transform: "translateY(20px)" },
                "while-in-view": { opacity: 1, transform: "translateY(0)" },
                transition: { delay: 0.4 + 0.2 * index },
                "in-view-options": { once: true },
                class: "text-muted flex items-center text-nowrap gap-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p class="text-sm"${_scopeId2}>${ssrInterpolate(experience.date)}</p>`);
                    _push3(ssrRenderComponent(_component_USeparator, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ULink, {
                      class: "flex items-center gap-1",
                      to: experience.company.url,
                      target: "_blank"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="text-sm"${_scopeId3}>${ssrInterpolate(experience.position)}</span><div class="inline-flex items-center gap-1" style="${ssrRenderStyle({ color: experience.company.color })}"${_scopeId3}><span class="font-medium"${_scopeId3}>${ssrInterpolate(experience.company.name)}</span>`);
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: experience.company.logo
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("span", { class: "text-sm" }, toDisplayString(experience.position), 1),
                            createVNode("div", {
                              class: "inline-flex items-center gap-1",
                              style: { color: experience.company.color }
                            }, [
                              createVNode("span", { class: "font-medium" }, toDisplayString(experience.company.name), 1),
                              createVNode(_component_UIcon, {
                                name: experience.company.logo
                              }, null, 8, ["name"])
                            ], 4)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("p", { class: "text-sm" }, toDisplayString(experience.date), 1),
                      createVNode(_component_USeparator),
                      createVNode(_component_ULink, {
                        class: "flex items-center gap-1",
                        to: experience.company.url,
                        target: "_blank"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-sm" }, toDisplayString(experience.position), 1),
                          createVNode("div", {
                            class: "inline-flex items-center gap-1",
                            style: { color: experience.company.color }
                          }, [
                            createVNode("span", { class: "font-medium" }, toDisplayString(experience.company.name), 1),
                            createVNode(_component_UIcon, {
                              name: experience.company.logo
                            }, null, 8, ["name"])
                          ], 4)
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.page.experience.items, (experience, index) => {
                  return openBlock(), createBlock(_component_Motion, {
                    key: index,
                    initial: { opacity: 0, transform: "translateY(20px)" },
                    "while-in-view": { opacity: 1, transform: "translateY(0)" },
                    transition: { delay: 0.4 + 0.2 * index },
                    "in-view-options": { once: true },
                    class: "text-muted flex items-center text-nowrap gap-2"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-sm" }, toDisplayString(experience.date), 1),
                      createVNode(_component_USeparator),
                      createVNode(_component_ULink, {
                        class: "flex items-center gap-1",
                        to: experience.company.url,
                        target: "_blank"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-sm" }, toDisplayString(experience.position), 1),
                          createVNode("div", {
                            class: "inline-flex items-center gap-1",
                            style: { color: experience.company.color }
                          }, [
                            createVNode("span", { class: "font-medium" }, toDisplayString(experience.company.name), 1),
                            createVNode(_component_UIcon, {
                              name: experience.company.logo
                            }, null, 8, ["name"])
                          ], 4)
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]),
                    _: 2
                  }, 1032, ["transition"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/WorkExperience.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$5, { __name: "LandingWorkExperience" });
const theme$1 = {
  "slots": {
    "root": "relative focus:outline-none",
    "viewport": "overflow-hidden",
    "container": "flex items-start",
    "item": "min-w-0 shrink-0 basis-full",
    "controls": "",
    "arrows": "",
    "prev": "absolute rounded-full",
    "next": "absolute rounded-full",
    "dots": "absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3",
    "dot": [
      "cursor-pointer size-3 bg-accented rounded-full",
      "transition"
    ]
  },
  "variants": {
    "orientation": {
      "vertical": {
        "container": "flex-col -mt-4",
        "item": "pt-4",
        "prev": "top-4 sm:-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90",
        "next": "bottom-4 sm:-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90"
      },
      "horizontal": {
        "container": "flex-row -ms-4",
        "item": "ps-4",
        "prev": "start-4 sm:-start-12 top-1/2 -translate-y-1/2",
        "next": "end-4 sm:-end-12 top-1/2 -translate-y-1/2"
      }
    },
    "active": {
      "true": {
        "dot": "data-[state=active]:bg-inverted"
      }
    }
  }
};
const _sfc_main$4 = {
  __name: "UCarousel",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    prev: { type: Object, required: false },
    prevIcon: { type: String, required: false },
    next: { type: Object, required: false },
    nextIcon: { type: String, required: false },
    arrows: { type: Boolean, required: false, default: false },
    dots: { type: Boolean, required: false, default: false },
    orientation: { type: null, required: false, default: "horizontal" },
    items: { type: Array, required: false },
    autoplay: { type: [Boolean, Object], required: false, default: false },
    autoScroll: { type: [Boolean, Object], required: false, default: false },
    autoHeight: { type: [Boolean, Object], required: false, default: false },
    classNames: { type: [Boolean, Object], required: false, default: false },
    fade: { type: [Boolean, Object], required: false, default: false },
    wheelGestures: { type: Boolean, required: false, skipCheck: true, default: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    align: { type: [String, Function], required: false, default: "center" },
    containScroll: { type: [Boolean, String], required: false, default: "trimSnaps" },
    slidesToScroll: { type: [String, Number], required: false, default: 1 },
    dragFree: { type: Boolean, required: false, default: false },
    dragThreshold: { type: Number, required: false, default: 10 },
    inViewThreshold: { type: null, required: false, default: 0 },
    loop: { type: Boolean, required: false, default: false },
    skipSnaps: { type: Boolean, required: false, default: false },
    duration: { type: Number, required: false, default: 25 },
    startIndex: { type: Number, required: false, default: 0 },
    watchDrag: { type: [Boolean, Function], required: false, default: true },
    watchResize: { type: [Boolean, Function], required: false, default: true },
    watchSlides: { type: [Boolean, Function], required: false, default: true },
    watchFocus: { type: [Boolean, Function], required: false, default: true },
    active: { type: Boolean, required: false, default: true },
    breakpoints: { type: Object, required: false, default: () => ({}) }
  },
  emits: ["select"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const { dir, t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "active", "align", "breakpoints", "containScroll", "dragFree", "dragThreshold", "duration", "inViewThreshold", "loop", "skipSnaps", "slidesToScroll", "startIndex", "watchDrag", "watchResize", "watchSlides", "watchFocus"));
    const prevIcon = computed(() => props.prevIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowRight : appConfig.ui.icons.arrowLeft));
    const nextIcon = computed(() => props.nextIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowLeft : appConfig.ui.icons.arrowRight));
    const ui = computed(() => tv$1({ extend: tv$1(theme$1), ...appConfig.ui?.carousel || {} })({
      orientation: props.orientation
    }));
    const options = computed(() => ({
      ...props.fade ? { align: "center", containScroll: false } : {},
      ...rootProps.value,
      axis: props.orientation === "horizontal" ? "x" : "y",
      direction: dir.value === "rtl" ? "rtl" : "ltr"
    }));
    const plugins = computedAsync(async () => {
      const plugins2 = [];
      if (props.autoplay) {
        const AutoplayPlugin = await import('embla-carousel-autoplay').then((r) => r.default);
        plugins2.push(AutoplayPlugin(typeof props.autoplay === "boolean" ? {} : props.autoplay));
      }
      if (props.autoScroll) {
        const AutoScrollPlugin = await import('embla-carousel-auto-scroll').then((r) => r.default);
        plugins2.push(AutoScrollPlugin(typeof props.autoScroll === "boolean" ? {} : props.autoScroll));
      }
      if (props.autoHeight) {
        const AutoHeightPlugin = await import('embla-carousel-auto-height').then((r) => r.default);
        plugins2.push(AutoHeightPlugin(typeof props.autoHeight === "boolean" ? {} : props.autoHeight));
      }
      if (props.classNames) {
        const ClassNamesPlugin = await import('embla-carousel-class-names').then((r) => r.default);
        plugins2.push(ClassNamesPlugin(typeof props.classNames === "boolean" ? {} : props.classNames));
      }
      if (props.fade) {
        const FadePlugin = await import('embla-carousel-fade').then((r) => r.default);
        plugins2.push(FadePlugin(typeof props.fade === "boolean" ? {} : props.fade));
      }
      if (props.wheelGestures) {
        const { WheelGesturesPlugin } = await import('embla-carousel-wheel-gestures');
        plugins2.push(WheelGesturesPlugin(typeof props.wheelGestures === "boolean" ? {} : props.wheelGestures));
      }
      return plugins2;
    });
    const [emblaRef, emblaApi] = useEmblaCarousel(options.value, plugins.value);
    watch([options, plugins], () => {
      emblaApi.value?.reInit(options.value, plugins.value);
    });
    function scrollPrev() {
      emblaApi.value?.scrollPrev();
    }
    function scrollNext() {
      emblaApi.value?.scrollNext();
    }
    function scrollTo(index) {
      emblaApi.value?.scrollTo(index);
    }
    function onKeyDown(event) {
      const prevKey = props.orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
      const nextKey = props.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      if (event.key === prevKey) {
        event.preventDefault();
        scrollPrev();
        return;
      }
      if (event.key === nextKey) {
        event.preventDefault();
        scrollNext();
      }
    }
    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);
    const selectedIndex = ref(0);
    const scrollSnaps = ref([]);
    function isCarouselItem(item) {
      return typeof item === "object" && item !== null;
    }
    __expose({
      emblaRef,
      emblaApi
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        role: "region",
        "aria-roledescription": "carousel",
        tabindex: "0",
        class: ui.value.root({ class: [props.ui?.root, props.class] }),
        onKeydown: onKeyDown
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.viewport({ class: props.ui?.viewport }))}"${_scopeId}><div class="${ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId}><!--[-->`);
            ssrRenderList(__props.items, (item, index) => {
              _push2(`<div role="group" aria-roledescription="slide" class="${ssrRenderClass(ui.value.item({ class: [props.ui?.item, isCarouselItem(item) && item.ui?.item, isCarouselItem(item) && item.class] }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {
                item,
                index
              }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (__props.arrows || __props.dots) {
              _push2(`<div class="${ssrRenderClass(ui.value.controls({ class: props.ui?.controls }))}"${_scopeId}>`);
              if (__props.arrows) {
                _push2(`<div class="${ssrRenderClass(ui.value.arrows({ class: props.ui?.arrows }))}"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$q, mergeProps({
                  disabled: !canScrollPrev.value,
                  icon: prevIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.prev")
                }, typeof __props.prev === "object" ? __props.prev : void 0, {
                  class: ui.value.prev({ class: props.ui?.prev }),
                  onClick: scrollPrev
                }), null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$q, mergeProps({
                  disabled: !canScrollNext.value,
                  icon: nextIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.next")
                }, typeof __props.next === "object" ? __props.next : void 0, {
                  class: ui.value.next({ class: props.ui?.next }),
                  onClick: scrollNext
                }), null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.dots) {
                _push2(`<div class="${ssrRenderClass(ui.value.dots({ class: props.ui?.dots }))}"${_scopeId}><!--[-->`);
                ssrRenderList(scrollSnaps.value, (_2, index) => {
                  _push2(`<button${ssrRenderAttr("aria-label", unref(t)("carousel.goto", { slide: index + 1 }))} class="${ssrRenderClass(ui.value.dot({ class: props.ui?.dot, active: selectedIndex.value === index }))}"${ssrRenderAttr("data-state", selectedIndex.value === index ? "active" : void 0)}${_scopeId}></button>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                ref_key: "emblaRef",
                ref: emblaRef,
                class: ui.value.viewport({ class: props.ui?.viewport })
              }, [
                createVNode("div", {
                  class: ui.value.container({ class: props.ui?.container })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                    return openBlock(), createBlock("div", {
                      key: index,
                      role: "group",
                      "aria-roledescription": "slide",
                      class: ui.value.item({ class: [props.ui?.item, isCarouselItem(item) && item.ui?.item, isCarouselItem(item) && item.class] })
                    }, [
                      renderSlot(_ctx.$slots, "default", {
                        item,
                        index
                      })
                    ], 2);
                  }), 128))
                ], 2)
              ], 2),
              __props.arrows || __props.dots ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.controls({ class: props.ui?.controls })
              }, [
                __props.arrows ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.arrows({ class: props.ui?.arrows })
                }, [
                  createVNode(_sfc_main$q, mergeProps({
                    disabled: !canScrollPrev.value,
                    icon: prevIcon.value,
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.prev")
                  }, typeof __props.prev === "object" ? __props.prev : void 0, {
                    class: ui.value.prev({ class: props.ui?.prev }),
                    onClick: scrollPrev
                  }), null, 16, ["disabled", "icon", "aria-label", "class"]),
                  createVNode(_sfc_main$q, mergeProps({
                    disabled: !canScrollNext.value,
                    icon: nextIcon.value,
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.next")
                  }, typeof __props.next === "object" ? __props.next : void 0, {
                    class: ui.value.next({ class: props.ui?.next }),
                    onClick: scrollNext
                  }), null, 16, ["disabled", "icon", "aria-label", "class"])
                ], 2)) : createCommentVNode("", true),
                __props.dots ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: ui.value.dots({ class: props.ui?.dots })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(scrollSnaps.value, (_2, index) => {
                    return openBlock(), createBlock("button", {
                      key: index,
                      "aria-label": unref(t)("carousel.goto", { slide: index + 1 }),
                      class: ui.value.dot({ class: props.ui?.dot, active: selectedIndex.value === index }),
                      "data-state": selectedIndex.value === index ? "active" : void 0,
                      onClick: ($event) => scrollTo(index)
                    }, null, 10, ["aria-label", "data-state", "onClick"]);
                  }), 128))
                ], 2)) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@3.2.0_@babel+parser@7.28.0_@netlify+blobs@9.1.2_db0@0.3.2_better-sqlite3@12.2._ed31a72b5066dafc351ea9873dbff10b/node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "relative isolate rounded-xl overflow-hidden",
    "container": "flex flex-col lg:grid px-6 py-12 sm:px-12 sm:py-24 lg:px-16 lg:py-24 gap-8 sm:gap-16",
    "wrapper": "",
    "header": "",
    "title": "text-3xl sm:text-4xl text-pretty tracking-tight font-bold text-highlighted",
    "description": "text-base sm:text-lg text-muted",
    "body": "mt-8",
    "footer": "mt-8",
    "links": "flex flex-wrap gap-x-6 gap-y-3"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "container": "lg:grid-cols-2 lg:items-center",
        "description": "text-pretty"
      },
      "vertical": {
        "container": "",
        "title": "text-center",
        "description": "text-center text-balance",
        "links": "justify-center"
      }
    },
    "reverse": {
      "true": {
        "wrapper": "lg:order-last"
      }
    },
    "variant": {
      "solid": {
        "root": "bg-inverted text-inverted",
        "title": "text-inverted",
        "description": "text-dimmed"
      },
      "outline": {
        "root": "bg-default ring ring-default",
        "description": "text-muted"
      },
      "soft": {
        "root": "bg-elevated/50",
        "description": "text-toned"
      },
      "subtle": {
        "root": "bg-elevated/50 ring ring-default",
        "description": "text-toned"
      },
      "naked": {
        "description": "text-muted"
      }
    },
    "title": {
      "true": {
        "description": "mt-6"
      }
    }
  },
  "defaultVariants": {
    "variant": "outline"
  }
};
const _sfc_main$3 = {
  __name: "UPageCTA",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    reverse: { type: Boolean, required: false, default: false },
    variant: { type: null, required: false },
    links: { type: Array, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.pageCTA || {} })({
      variant: props.variant,
      orientation: props.orientation,
      reverse: props.reverse,
      title: !!props.title || !!slots.title
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$j;
      const _component_UButton = _sfc_main$q;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "top", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_component_UContainer, {
              class: ui.value.container({ class: props.ui?.container })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.body || !!slots.footer || (__props.links?.length || !!slots.links)) {
                    _push3(`<div class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId2}>`);
                    if (!!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description)) {
                      _push3(`<div class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                        if (__props.title || !!slots.title) {
                          _push3(`<h2 class="${ssrRenderClass(ui.value.title({ class: props.ui?.title }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                            _push3(`${ssrInterpolate(__props.title)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</h2>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (__props.description || !!slots.description) {
                          _push3(`<div class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                            _push3(`${ssrInterpolate(__props.description)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (!!slots.body) {
                      _push3(`<div class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "body", {}, null, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (!!slots.footer || (__props.links?.length || !!slots.links)) {
                      _push3(`<div class="${ssrRenderClass(ui.value.footer({ class: props.ui?.footer }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
                        if (__props.links?.length || !!slots.links) {
                          _push3(`<div class="${ssrRenderClass(ui.value.links({ class: props.ui?.links }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                            _push3(`<!--[-->`);
                            ssrRenderList(__props.links, (link, index) => {
                              _push3(ssrRenderComponent(_component_UButton, mergeProps({
                                key: index,
                                size: "lg"
                              }, { ref_for: true }, link), null, _parent3, _scopeId2));
                            });
                            _push3(`<!--]-->`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!!slots.default) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  } else if (__props.orientation === "horizontal") {
                    _push3(`<div class="hidden lg:block"${_scopeId2}></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.body || !!slots.footer || (__props.links?.length || !!slots.links) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.wrapper({ class: props.ui?.wrapper })
                    }, [
                      !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ui.value.header({ class: props.ui?.header })
                      }, [
                        renderSlot(_ctx.$slots, "header", {}, () => [
                          __props.title || !!slots.title ? (openBlock(), createBlock("h2", {
                            key: 0,
                            class: ui.value.title({ class: props.ui?.title })
                          }, [
                            renderSlot(_ctx.$slots, "title", {}, () => [
                              createTextVNode(toDisplayString(__props.title), 1)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: ui.value.description({ class: props.ui?.description })
                          }, [
                            renderSlot(_ctx.$slots, "description", {}, () => [
                              createTextVNode(toDisplayString(__props.description), 1)
                            ])
                          ], 2)) : createCommentVNode("", true)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      !!slots.body ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: ui.value.body({ class: props.ui?.body })
                      }, [
                        renderSlot(_ctx.$slots, "body")
                      ], 2)) : createCommentVNode("", true),
                      !!slots.footer || (__props.links?.length || !!slots.links) ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: ui.value.footer({ class: props.ui?.footer })
                      }, [
                        renderSlot(_ctx.$slots, "footer", {}, () => [
                          __props.links?.length || !!slots.links ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: ui.value.links({ class: props.ui?.links })
                          }, [
                            renderSlot(_ctx.$slots, "links", {}, () => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                                return openBlock(), createBlock(_component_UButton, mergeProps({
                                  key: index,
                                  size: "lg"
                                }, { ref_for: true }, link), null, 16);
                              }), 128))
                            ])
                          ], 2)) : createCommentVNode("", true)
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ], 2)) : createCommentVNode("", true),
                    !!slots.default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : __props.orientation === "horizontal" ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "hidden lg:block"
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "top"),
              createVNode(_component_UContainer, {
                class: ui.value.container({ class: props.ui?.container })
              }, {
                default: withCtx(() => [
                  !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.body || !!slots.footer || (__props.links?.length || !!slots.links) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: ui.value.wrapper({ class: props.ui?.wrapper })
                  }, [
                    !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.header({ class: props.ui?.header })
                    }, [
                      renderSlot(_ctx.$slots, "header", {}, () => [
                        __props.title || !!slots.title ? (openBlock(), createBlock("h2", {
                          key: 0,
                          class: ui.value.title({ class: props.ui?.title })
                        }, [
                          renderSlot(_ctx.$slots, "title", {}, () => [
                            createTextVNode(toDisplayString(__props.title), 1)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: ui.value.description({ class: props.ui?.description })
                        }, [
                          renderSlot(_ctx.$slots, "description", {}, () => [
                            createTextVNode(toDisplayString(__props.description), 1)
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    !!slots.body ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: ui.value.body({ class: props.ui?.body })
                    }, [
                      renderSlot(_ctx.$slots, "body")
                    ], 2)) : createCommentVNode("", true),
                    !!slots.footer || (__props.links?.length || !!slots.links) ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: ui.value.footer({ class: props.ui?.footer })
                    }, [
                      renderSlot(_ctx.$slots, "footer", {}, () => [
                        __props.links?.length || !!slots.links ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: ui.value.links({ class: props.ui?.links })
                        }, [
                          renderSlot(_ctx.$slots, "links", {}, () => [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                              return openBlock(), createBlock(_component_UButton, mergeProps({
                                key: index,
                                size: "lg"
                              }, { ref_for: true }, link), null, 16);
                            }), 128))
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 2)) : createCommentVNode("", true),
                  !!slots.default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : __props.orientation === "horizontal" ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "hidden lg:block"
                  })) : createCommentVNode("", true)
                ]),
                _: 3
              }, 8, ["class"]),
              renderSlot(_ctx.$slots, "bottom")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@3.2.0_@babel+parser@7.28.0_@netlify+blobs@9.1.2_db0@0.3.2_better-sqlite3@1_abd900d3314e4a9a03512da03be3832c/node_modules/@nuxt/ui-pro/dist/runtime/components/PageCTA.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Testimonials",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageSection = _sfc_main$3$1;
      const _component_UCarousel = _sfc_main$4;
      const _component_UPageCTA = _sfc_main$3;
      const _component_UUser = _sfc_main$c;
      _push(ssrRenderComponent(_component_UPageSection, mergeProps({ ui: {
        container: "px-0 !pt-0"
      } }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCarousel, {
              items: _ctx.page.testimonials,
              autoplay: { delay: 4e3 },
              loop: "",
              dots: "",
              ui: {
                viewport: "-mx-4 sm:-mx-12 lg:-mx-16 bg-elevated/50 max-w-(--ui-container)"
              }
            }, {
              default: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UPageCTA, {
                    description: item.quote,
                    variant: "naked",
                    class: "rounded-none",
                    ui: {
                      container: "sm:py-12 lg:py-12 sm:gap-8",
                      description: "!text-base text-balance before:content-[open-quote] before:text-5xl lg:before:text-7xl before:inline-block before:text-dimmed before:absolute before:-ml-6 lg:before:-ml-10 before:-mt-2 lg:before:-mt-4 after:content-[close-quote] after:text-5xl lg:after:text-7xl after:inline-block after:text-dimmed after:absolute after:mt-1 lg:after:mt-0 after:ml-1 lg:after:ml-2"
                    }
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UUser, mergeProps(item.author, {
                          size: "xl",
                          class: "justify-center"
                        }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UUser, mergeProps(item.author, {
                            size: "xl",
                            class: "justify-center"
                          }), null, 16)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UPageCTA, {
                      description: item.quote,
                      variant: "naked",
                      class: "rounded-none",
                      ui: {
                        container: "sm:py-12 lg:py-12 sm:gap-8",
                        description: "!text-base text-balance before:content-[open-quote] before:text-5xl lg:before:text-7xl before:inline-block before:text-dimmed before:absolute before:-ml-6 lg:before:-ml-10 before:-mt-2 lg:before:-mt-4 after:content-[close-quote] after:text-5xl lg:after:text-7xl after:inline-block after:text-dimmed after:absolute after:mt-1 lg:after:mt-0 after:ml-1 lg:after:ml-2"
                      }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UUser, mergeProps(item.author, {
                          size: "xl",
                          class: "justify-center"
                        }), null, 16)
                      ]),
                      _: 2
                    }, 1032, ["description"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCarousel, {
                items: _ctx.page.testimonials,
                autoplay: { delay: 4e3 },
                loop: "",
                dots: "",
                ui: {
                  viewport: "-mx-4 sm:-mx-12 lg:-mx-16 bg-elevated/50 max-w-(--ui-container)"
                }
              }, {
                default: withCtx(({ item }) => [
                  createVNode(_component_UPageCTA, {
                    description: item.quote,
                    variant: "naked",
                    class: "rounded-none",
                    ui: {
                      container: "sm:py-12 lg:py-12 sm:gap-8",
                      description: "!text-base text-balance before:content-[open-quote] before:text-5xl lg:before:text-7xl before:inline-block before:text-dimmed before:absolute before:-ml-6 lg:before:-ml-10 before:-mt-2 lg:before:-mt-4 after:content-[close-quote] after:text-5xl lg:after:text-7xl after:inline-block after:text-dimmed after:absolute after:mt-1 lg:after:mt-0 after:ml-1 lg:after:ml-2"
                    }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UUser, mergeProps(item.author, {
                        size: "xl",
                        class: "justify-center"
                      }), null, 16)
                    ]),
                    _: 2
                  }, 1032, ["description"])
                ]),
                _: 1
              }, 8, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Testimonials.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$2, { __name: "LandingTestimonials" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Blog",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "index-blogs",
      () => queryCollection("blog").order("date", "DESC").limit(3).all()
    )), __temp = await __temp, __restore(), __temp);
    if (!posts.value) {
      throw createError({ statusCode: 404, statusMessage: "Posts do blog não encontrados", fatal: true });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageSection = _sfc_main$3$1;
      const _component_WorkInProgress = __nuxt_component_2;
      const _component_UBlogPosts = _sfc_main$d;
      const _component_UBlogPost = _sfc_main$1$1;
      const _component_UButton = _sfc_main$q;
      const _component_UIcon = _sfc_main$w;
      _push(ssrRenderComponent(_component_UPageSection, mergeProps({
        title: _ctx.page.blog.title,
        ui: {
          container: "px-0 !pt-0 sm:gap-6 lg:gap-8",
          title: "text-left text-xl sm:text-xl lg:text-2xl font-medium",
          description: "text-left mt-2 text-sm sm:text-md lg:text-sm text-muted"
        }
      }, _attrs), {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_WorkInProgress, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_WorkInProgress)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UBlogPosts, {
              orientation: "vertical",
              class: "gap-4 lg:gap-y-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(posts), (post, index) => {
                    _push3(ssrRenderComponent(_component_UBlogPost, mergeProps({
                      key: index,
                      orientation: "horizontal",
                      variant: "naked"
                    }, { ref_for: true }, post, {
                      to: post.path,
                      ui: {
                        root: "group relative lg:items-start lg:flex ring-0 hover:ring-0",
                        body: "!px-0",
                        header: "hidden"
                      }
                    }), {
                      date: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(formatDate)(post.date))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(formatDate)(post.date)), 1)
                          ];
                        }
                      }),
                      footer: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UButton, {
                            size: "xs",
                            variant: "link",
                            class: "px-0 gap-0",
                            label: "Ler artigo"
                          }, {
                            trailing: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UIcon, {
                                  name: "i-lucide-arrow-right",
                                  class: "size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UIcon, {
                                    name: "i-lucide-arrow-right",
                                    class: "size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UButton, {
                              size: "xs",
                              variant: "link",
                              class: "px-0 gap-0",
                              label: "Ler artigo"
                            }, {
                              trailing: withCtx(() => [
                                createVNode(_component_UIcon, {
                                  name: "i-lucide-arrow-right",
                                  class: "size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(posts), (post, index) => {
                      return openBlock(), createBlock(_component_UBlogPost, mergeProps({
                        key: index,
                        orientation: "horizontal",
                        variant: "naked"
                      }, { ref_for: true }, post, {
                        to: post.path,
                        ui: {
                          root: "group relative lg:items-start lg:flex ring-0 hover:ring-0",
                          body: "!px-0",
                          header: "hidden"
                        }
                      }), {
                        date: withCtx(() => [
                          createTextVNode(toDisplayString(unref(formatDate)(post.date)), 1)
                        ]),
                        footer: withCtx(() => [
                          createVNode(_component_UButton, {
                            size: "xs",
                            variant: "link",
                            class: "px-0 gap-0",
                            label: "Ler artigo"
                          }, {
                            trailing: withCtx(() => [
                              createVNode(_component_UIcon, {
                                name: "i-lucide-arrow-right",
                                class: "size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1040, ["to"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UBlogPosts, {
                orientation: "vertical",
                class: "gap-4 lg:gap-y-4"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(posts), (post, index) => {
                    return openBlock(), createBlock(_component_UBlogPost, mergeProps({
                      key: index,
                      orientation: "horizontal",
                      variant: "naked"
                    }, { ref_for: true }, post, {
                      to: post.path,
                      ui: {
                        root: "group relative lg:items-start lg:flex ring-0 hover:ring-0",
                        body: "!px-0",
                        header: "hidden"
                      }
                    }), {
                      date: withCtx(() => [
                        createTextVNode(toDisplayString(unref(formatDate)(post.date)), 1)
                      ]),
                      footer: withCtx(() => [
                        createVNode(_component_UButton, {
                          size: "xs",
                          variant: "link",
                          class: "px-0 gap-0",
                          label: "Ler artigo"
                        }, {
                          trailing: withCtx(() => [
                            createVNode(_component_UIcon, {
                              name: "i-lucide-arrow-right",
                              class: "size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1040, ["to"]);
                  }), 128))
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Blog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$1, { __name: "LandingBlog" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("index", () => {
      return queryCollection("index").first();
    })), __temp = await __temp, __restore(), __temp);
    if (!page.value) {
      throw createError({
        statusCode: 404,
        statusMessage: "Página não encontrada",
        fatal: true
      });
    }
    useSeoMeta({
      title: page.value?.seo.title || page.value?.title,
      ogTitle: page.value?.seo.title || page.value?.title,
      description: page.value?.seo.description || page.value?.description,
      ogDescription: page.value?.seo.description || page.value?.description,
      ogUrl: "https://riobaldo.com/",
      twitterTitle: page.value?.seo.title || page.value?.title,
      twitterDescription: page.value?.seo.description || page.value?.description
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPage = _sfc_main$5$1;
      const _component_LandingHero = __nuxt_component_1;
      const _component_UPageSection = _sfc_main$3$1;
      const _component_LandingAbout = __nuxt_component_3;
      const _component_LandingWorkExperience = __nuxt_component_4;
      const _component_LandingTestimonials = __nuxt_component_5;
      const _component_LandingBlog = __nuxt_component_6;
      if (unref(page)) {
        _push(ssrRenderComponent(_component_UPage, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_LandingHero, { page: unref(page) }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UPageSection, { ui: {
                container: "!pt-0 lg:grid lg:grid-cols-2 lg:gap-8"
              } }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_LandingAbout, { page: unref(page) }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_LandingWorkExperience, { page: unref(page) }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_LandingAbout, { page: unref(page) }, null, 8, ["page"]),
                      createVNode(_component_LandingWorkExperience, { page: unref(page) }, null, 8, ["page"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_LandingTestimonials, { page: unref(page) }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_LandingBlog, { page: unref(page) }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_LandingHero, { page: unref(page) }, null, 8, ["page"]),
                createVNode(_component_UPageSection, { ui: {
                  container: "!pt-0 lg:grid lg:grid-cols-2 lg:gap-8"
                } }, {
                  default: withCtx(() => [
                    createVNode(_component_LandingAbout, { page: unref(page) }, null, 8, ["page"]),
                    createVNode(_component_LandingWorkExperience, { page: unref(page) }, null, 8, ["page"])
                  ]),
                  _: 1
                }),
                createVNode(_component_LandingTestimonials, { page: unref(page) }, null, 8, ["page"]),
                createVNode(_component_LandingBlog, { page: unref(page) }, null, 8, ["page"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DqewxbMT.mjs.map
