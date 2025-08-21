import { J as useRoute, F as useAsyncData, G as queryCollection, c as createError, V as queryCollectionItemSurroundings, W as mapContentNavigation, H as useSeoMeta, E as _sfc_main$j, I as _sfc_main$5, g as _sfc_main$q, a0 as _sfc_main$7, r as reactivePick, x as useLocalePro, Z as useRouter, u as useAppConfig, $ as createReusableTemplate, A as tv, P as useNuxtApp, _ as _sfc_main$w } from './server.mjs';
import { defineComponent, inject, ref, computed, withAsyncContext, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, createTextVNode, useSlots, Fragment, renderList, withModifiers, renderSlot, toDisplayString, mergeProps, watch, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrRenderSlot, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { useForwardPropsEmits, CollapsibleRoot, CollapsibleTrigger, CollapsibleContent, Primitive } from 'reka-ui';
import { _ as _sfc_main$1$1, a as _sfc_main$3 } from './Breadcrumb-BxYSdDkj.mjs';
import { _ as _sfc_main$2$1, a as __nuxt_component_5 } from './ContentRenderer-DIa62TFr.mjs';
import { _ as _sfc_main$4 } from './Separator-CkH4gGaX.mjs';
import { _ as _sfc_main$6 } from './ContentSurround-R1GfcTL9.mjs';
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
import 'property-information';
import './node-Ta6SvKQA.mjs';

const theme$1 = {
  "slots": {
    "root": "hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--ui-header-height))] lg:sticky lg:top-(--ui-header-height) py-8 lg:ps-4 lg:-ms-4 lg:pe-6.5",
    "container": "relative",
    "top": "sticky -top-8 -mt-8 pointer-events-none z-[1]",
    "topHeader": "h-8 bg-default -mx-4 px-4",
    "topBody": "bg-default relative pointer-events-auto flex flex-col -mx-4 px-4",
    "topFooter": "h-8 bg-gradient-to-b from-default -mx-4 px-4"
  }
};
const _sfc_main$2 = {
  __name: "UPageAside",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "aside" },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.uiPro?.pageAside || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId}>`);
            if (!!slots.top) {
              _push2(`<div class="${ssrRenderClass(ui.value.top({ class: props.ui?.top }))}"${_scopeId}><div class="${ssrRenderClass(ui.value.topHeader({ class: props.ui?.topHeader }))}"${_scopeId}></div><div class="${ssrRenderClass(ui.value.topBody({ class: props.ui?.topBody }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "top", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div><div class="${ssrRenderClass(ui.value.topFooter({ class: props.ui?.topFooter }))}"${_scopeId}></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: ui.value.container({ class: props.ui?.container })
              }, [
                !!slots.top ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.top({ class: props.ui?.top })
                }, [
                  createVNode("div", {
                    class: ui.value.topHeader({ class: props.ui?.topHeader })
                  }, null, 2),
                  createVNode("div", {
                    class: ui.value.topBody({ class: props.ui?.topBody })
                  }, [
                    renderSlot(_ctx.$slots, "top")
                  ], 2),
                  createVNode("div", {
                    class: ui.value.topFooter({ class: props.ui?.topFooter })
                  }, null, 2)
                ], 2)) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "default"),
                renderSlot(_ctx.$slots, "bottom")
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@3.2.0_@babel+parser@7.28.0_@netlify+blobs@9.1.2_db0@0.3.2_better-sqlite3@1_abd900d3314e4a9a03512da03be3832c/node_modules/@nuxt/ui-pro/dist/runtime/components/PageAside.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
function useScrollspy() {
  const observer = ref();
  const visibleHeadings = ref([]);
  const activeHeadings = ref([]);
  function updateHeadings(headings) {
    headings.forEach((heading) => {
      if (!observer.value) {
        return;
      }
      observer.value.observe(heading);
    });
  }
  watch(visibleHeadings, (val, oldVal) => {
    if (val.length === 0) {
      activeHeadings.value = oldVal;
    } else {
      activeHeadings.value = val;
    }
  });
  return {
    visibleHeadings,
    activeHeadings,
    updateHeadings
  };
}
const theme = {
  "slots": {
    "root": "sticky top-(--ui-header-height) z-10 bg-default/75 lg:bg-[initial] backdrop-blur -mx-4 px-4 sm:px-6 sm:-mx-6 overflow-y-auto max-h-[calc(100vh-var(--ui-header-height))]",
    "container": "pt-4 sm:pt-6 pb-2.5 sm:pb-4.5 lg:py-8 border-b border-dashed border-default lg:border-0 flex flex-col",
    "top": "",
    "bottom": "hidden lg:flex lg:flex-col gap-6",
    "trigger": "group text-sm font-semibold flex-1 flex items-center gap-1.5 py-1.5 -mt-1.5 focus-visible:outline-primary",
    "title": "truncate",
    "trailing": "ms-auto inline-flex gap-1.5 items-center",
    "trailingIcon": "size-5 transform transition-transform duration-200 shrink-0 group-data-[state=open]:rotate-180 lg:hidden",
    "content": "data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden focus:outline-none",
    "list": "min-w-0",
    "listWithChildren": "ms-3",
    "item": "min-w-0",
    "itemWithChildren": "",
    "link": "group relative text-sm flex items-center focus-visible:outline-primary py-1",
    "linkText": "truncate",
    "indicator": "absolute ms-2.5 transition-[translate,height] duration-200 h-(--indicator-size) translate-y-(--indicator-position) w-px rounded-full"
  },
  "variants": {
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "highlightColor": {
      "primary": {
        "indicator": "bg-primary"
      },
      "secondary": {
        "indicator": "bg-secondary"
      },
      "success": {
        "indicator": "bg-success"
      },
      "info": {
        "indicator": "bg-info"
      },
      "warning": {
        "indicator": "bg-warning"
      },
      "error": {
        "indicator": "bg-error"
      },
      "neutral": {
        "indicator": "bg-inverted"
      }
    },
    "active": {
      "false": {
        "link": [
          "text-muted hover:text-default",
          "transition-colors"
        ]
      }
    },
    "highlight": {
      "true": {
        "list": "ms-2.5 ps-4 border-s border-default",
        "item": "-ms-px"
      }
    },
    "body": {
      "true": {
        "bottom": "mt-6"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "active": true,
      "class": {
        "link": "text-primary",
        "linkLeadingIcon": "text-primary"
      }
    },
    {
      "color": "secondary",
      "active": true,
      "class": {
        "link": "text-secondary",
        "linkLeadingIcon": "text-secondary"
      }
    },
    {
      "color": "success",
      "active": true,
      "class": {
        "link": "text-success",
        "linkLeadingIcon": "text-success"
      }
    },
    {
      "color": "info",
      "active": true,
      "class": {
        "link": "text-info",
        "linkLeadingIcon": "text-info"
      }
    },
    {
      "color": "warning",
      "active": true,
      "class": {
        "link": "text-warning",
        "linkLeadingIcon": "text-warning"
      }
    },
    {
      "color": "error",
      "active": true,
      "class": {
        "link": "text-error",
        "linkLeadingIcon": "text-error"
      }
    },
    {
      "color": "neutral",
      "active": true,
      "class": {
        "link": "text-highlighted",
        "linkLeadingIcon": "text-highlighted"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "highlightColor": "primary"
  }
};
const _sfc_main$1 = {
  __name: "UContentToc",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "nav" },
    trailingIcon: { type: String, required: false },
    title: { type: String, required: false },
    color: { type: null, required: false },
    highlight: { type: Boolean, required: false },
    highlightColor: { type: null, required: false },
    links: { type: Array, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false }
  },
  emits: ["update:open", "move"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "open", "defaultOpen"), emits);
    const { t } = useLocalePro();
    const router = useRouter();
    const appConfig = useAppConfig();
    const { activeHeadings, updateHeadings } = useScrollspy();
    const [DefineListTemplate, ReuseListTemplate] = createReusableTemplate({
      props: {
        links: Array,
        level: Number
      }
    });
    const [DefineTriggerTemplate, ReuseTriggerTemplate] = createReusableTemplate();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.contentToc || {} })({
      color: props.color,
      highlight: props.highlight,
      highlightColor: props.highlightColor || props.color
    }));
    function scrollToHeading(id) {
      const encodedId = encodeURIComponent(id);
      router.push(`#${encodedId}`);
      emits("move", id);
    }
    function flattenLinks(links) {
      return links.flatMap((link) => [link, ...link.children ? flattenLinks(link.children) : []]);
    }
    const indicatorStyle = computed(() => {
      if (!activeHeadings.value?.length) {
        return;
      }
      const flatLinks = flattenLinks(props.links || []);
      const activeIndex = flatLinks.findIndex((link) => activeHeadings.value.includes(link.id));
      const linkHeight = 28;
      const gapSize = 0;
      return {
        "--indicator-size": `${linkHeight * activeHeadings.value.length + gapSize * (activeHeadings.value.length - 1)}px`,
        "--indicator-position": activeIndex >= 0 ? `${activeIndex * (linkHeight + gapSize)}px` : "0px"
      };
    });
    const nuxtApp = useNuxtApp();
    nuxtApp.hooks.hook("page:loading:end", () => {
      const headings = Array.from((void 0).querySelectorAll("h2, h3"));
      updateHeadings(headings);
    });
    nuxtApp.hooks.hook("page:transition:finish", () => {
      const headings = Array.from((void 0).querySelectorAll("h2, h3"));
      updateHeadings(headings);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$w;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineListTemplate), null, {
        default: withCtx(({ links, level }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="${ssrRenderClass(level > 0 ? ui.value.listWithChildren({ class: props.ui?.listWithChildren }) : ui.value.list({ class: props.ui?.list }))}"${_scopeId}><!--[-->`);
            ssrRenderList(links, (link, index) => {
              _push2(`<li class="${ssrRenderClass(link.children && link.children.length > 0 ? ui.value.itemWithChildren({ class: [props.ui?.itemWithChildren, link.ui?.itemWithChildren] }) : ui.value.item({ class: [props.ui?.item, link.ui?.item] }))}"${_scopeId}><a${ssrRenderAttr("href", `#${link.id}`)} class="${ssrRenderClass(ui.value.link({ class: [props.ui?.link, link.ui?.link, link.class], active: unref(activeHeadings).includes(link.id) }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "link", { link }, () => {
                _push2(`<span class="${ssrRenderClass(ui.value.linkText({ class: [props.ui?.linkText, link.ui?.linkText] }))}"${_scopeId}>${ssrInterpolate(link.text)}</span>`);
              }, _push2, _parent2, _scopeId);
              _push2(`</a>`);
              if (link.children?.length) {
                _push2(ssrRenderComponent(unref(ReuseListTemplate), {
                  links: link.children,
                  level: level + 1
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              createVNode("ul", {
                class: level > 0 ? ui.value.listWithChildren({ class: props.ui?.listWithChildren }) : ui.value.list({ class: props.ui?.list })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(links, (link, index) => {
                  return openBlock(), createBlock("li", {
                    key: index,
                    class: link.children && link.children.length > 0 ? ui.value.itemWithChildren({ class: [props.ui?.itemWithChildren, link.ui?.itemWithChildren] }) : ui.value.item({ class: [props.ui?.item, link.ui?.item] })
                  }, [
                    createVNode("a", {
                      href: `#${link.id}`,
                      class: ui.value.link({ class: [props.ui?.link, link.ui?.link, link.class], active: unref(activeHeadings).includes(link.id) }),
                      onClick: withModifiers(($event) => scrollToHeading(link.id), ["prevent"])
                    }, [
                      renderSlot(_ctx.$slots, "link", { link }, () => [
                        createVNode("span", {
                          class: ui.value.linkText({ class: [props.ui?.linkText, link.ui?.linkText] })
                        }, toDisplayString(link.text), 3)
                      ])
                    ], 10, ["href", "onClick"]),
                    link.children?.length ? (openBlock(), createBlock(unref(ReuseListTemplate), {
                      key: 0,
                      links: link.children,
                      level: level + 1
                    }, null, 8, ["links", "level"])) : createCommentVNode("", true)
                  ], 2);
                }), 128))
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineTriggerTemplate), null, {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", { open }, null, _push2, _parent2, _scopeId);
            _push2(`<span class="${ssrRenderClass(ui.value.title({ class: props.ui?.title }))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", { open }, () => {
              _push2(`${ssrInterpolate(__props.title || unref(t)("contentToc.title"))}`);
            }, _push2, _parent2, _scopeId);
            _push2(`</span><span class="${ssrRenderClass(ui.value.trailing({ class: props.ui?.trailing }))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "trailing", { open }, () => {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
              }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
            _push2(`</span>`);
          } else {
            return [
              renderSlot(_ctx.$slots, "leading", { open }),
              createVNode("span", {
                class: ui.value.title({ class: props.ui?.title })
              }, [
                renderSlot(_ctx.$slots, "default", { open }, () => [
                  createTextVNode(toDisplayString(__props.title || unref(t)("contentToc.title")), 1)
                ])
              ], 2),
              createVNode("span", {
                class: ui.value.trailing({ class: props.ui?.trailing })
              }, [
                renderSlot(_ctx.$slots, "trailing", { open }, () => [
                  createVNode(_component_UIcon, {
                    name: __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                    class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                  }, null, 8, ["name", "class"])
                ])
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(CollapsibleRoot), mergeProps(unref(rootProps), {
        "default-open": __props.defaultOpen,
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId}>`);
            if (!!slots.top) {
              _push2(`<div class="${ssrRenderClass(ui.value.top({ class: props.ui?.top }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "top", { links: __props.links }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.links?.length) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(unref(CollapsibleTrigger), {
                class: ui.value.trigger({ class: "lg:hidden" })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(ReuseTriggerTemplate), { open }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(ReuseTriggerTemplate), { open }, null, 8, ["open"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(CollapsibleContent), {
                class: ui.value.content({ class: [props.ui?.content, "lg:hidden"] })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (__props.highlight) {
                      _push3(`<div class="${ssrRenderClass(ui.value.indicator({ class: props.ui?.indicator }))}" style="${ssrRenderStyle(indicatorStyle.value)}"${_scopeId2}></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    ssrRenderSlot(_ctx.$slots, "content", { links: __props.links }, () => {
                      _push3(ssrRenderComponent(unref(ReuseListTemplate), {
                        links: __props.links,
                        level: 0
                      }, null, _parent3, _scopeId2));
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      __props.highlight ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ui.value.indicator({ class: props.ui?.indicator }),
                        style: indicatorStyle.value
                      }, null, 6)) : createCommentVNode("", true),
                      renderSlot(_ctx.$slots, "content", { links: __props.links }, () => [
                        createVNode(unref(ReuseListTemplate), {
                          links: __props.links,
                          level: 0
                        }, null, 8, ["links"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<p class="${ssrRenderClass(ui.value.trigger({ class: "hidden lg:flex" }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(ReuseTriggerTemplate), { open }, null, _parent2, _scopeId));
              _push2(`</p><div class="${ssrRenderClass(ui.value.content({ class: [props.ui?.content, "hidden lg:flex"] }))}"${_scopeId}>`);
              if (__props.highlight) {
                _push2(`<div class="${ssrRenderClass(ui.value.indicator({ class: props.ui?.indicator }))}" style="${ssrRenderStyle(indicatorStyle.value)}"${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              ssrRenderSlot(_ctx.$slots, "content", { links: __props.links }, () => {
                _push2(ssrRenderComponent(unref(ReuseListTemplate), {
                  links: __props.links,
                  level: 0
                }, null, _parent2, _scopeId));
              }, _push2, _parent2, _scopeId);
              _push2(`</div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.bottom) {
              _push2(`<div class="${ssrRenderClass(ui.value.bottom({ class: props.ui?.bottom, body: !!slots.top || !!__props.links?.length }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "bottom", { links: __props.links }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: ui.value.container({ class: props.ui?.container })
              }, [
                !!slots.top ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.top({ class: props.ui?.top })
                }, [
                  renderSlot(_ctx.$slots, "top", { links: __props.links })
                ], 2)) : createCommentVNode("", true),
                __props.links?.length ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createVNode(unref(CollapsibleTrigger), {
                    class: ui.value.trigger({ class: "lg:hidden" })
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ReuseTriggerTemplate), { open }, null, 8, ["open"])
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  createVNode(unref(CollapsibleContent), {
                    class: ui.value.content({ class: [props.ui?.content, "lg:hidden"] })
                  }, {
                    default: withCtx(() => [
                      __props.highlight ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ui.value.indicator({ class: props.ui?.indicator }),
                        style: indicatorStyle.value
                      }, null, 6)) : createCommentVNode("", true),
                      renderSlot(_ctx.$slots, "content", { links: __props.links }, () => [
                        createVNode(unref(ReuseListTemplate), {
                          links: __props.links,
                          level: 0
                        }, null, 8, ["links"])
                      ])
                    ]),
                    _: 3
                  }, 8, ["class"]),
                  createVNode("p", {
                    class: ui.value.trigger({ class: "hidden lg:flex" })
                  }, [
                    createVNode(unref(ReuseTriggerTemplate), { open }, null, 8, ["open"])
                  ], 2),
                  createVNode("div", {
                    class: ui.value.content({ class: [props.ui?.content, "hidden lg:flex"] })
                  }, [
                    __props.highlight ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.indicator({ class: props.ui?.indicator }),
                      style: indicatorStyle.value
                    }, null, 6)) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "content", { links: __props.links }, () => [
                      createVNode(unref(ReuseListTemplate), {
                        links: __props.links,
                        level: 0
                      }, null, 8, ["links"])
                    ])
                  ], 2)
                ], 64)) : createCommentVNode("", true),
                !!slots.bottom ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: ui.value.bottom({ class: props.ui?.bottom, body: !!slots.top || !!__props.links?.length })
                }, [
                  renderSlot(_ctx.$slots, "bottom", { links: __props.links })
                ], 2)) : createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@3.2.0_@babel+parser@7.28.0_@netlify+blobs@9.1.2_db0@0.3.2_better-sqlite3@1_abd900d3314e4a9a03512da03be3832c/node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentToc.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function findPageBreadcrumb(navigation, path, options) {
  if (!navigation?.length || !path) {
    return [];
  }
  return navigation.reduce((breadcrumb, link) => {
    if (path && (path + "/").startsWith(link.path + "/")) {
      if (path !== link.path || options?.current || options?.indexAsChild) {
        breadcrumb.push(link);
      }
      if (link.children) {
        breadcrumb.push(...findPageBreadcrumb(link.children.filter((c) => c.path !== link.path || c.path === path && options?.current && options?.indexAsChild), path, options));
      }
    }
    return breadcrumb;
  }, []);
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const navigation = inject("navigation", ref([]));
    const route = useRoute();
    const path = computed(() => route.path.replace(/\/$/, ""));
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      path.value,
      () => queryCollection("filosofia").path(path.value).first(),
      "$TyKdQFv4X8"
    )), __temp = await __temp, __restore(), __temp);
    if (!page.value) {
      throw createError({ statusCode: 404, statusMessage: "Página não encontrada" });
    }
    const { data: surround } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `${path.value}-surround`,
      () => queryCollectionItemSurroundings("filosofia", path.value, {
        fields: ["title", "description"]
      })
    )), __temp = await __temp, __restore(), __temp);
    const breadcrumb = computed(() => {
      return mapContentNavigation(findPageBreadcrumb(navigation.value, path.value)).map((link) => ({
        label: link.label,
        // Only add 'to' for paths that have actual pages
        ...link.to === "/filosofia" ? { to: link.to } : {}
      }));
    });
    const asideNavigation = computed(() => {
      const filosofiaNav = navigation.value.find((item) => item.path === "/filosofia");
      return filosofiaNav?.children || [];
    });
    const title = computed(() => page.value?.title);
    const description = computed(() => page.value?.description);
    useSeoMeta({
      title: title.value,
      description: description.value,
      ogTitle: title.value,
      ogDescription: description.value
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$j;
      const _component_UPage = _sfc_main$5;
      const _component_UPageAside = _sfc_main$2;
      const _component_UContentNavigation = _sfc_main$7;
      const _component_UPageHeader = _sfc_main$1$1;
      const _component_UBreadcrumb = _sfc_main$3;
      const _component_UPageBody = _sfc_main$2$1;
      const _component_ContentRenderer = __nuxt_component_5;
      const _component_USeparator = _sfc_main$4;
      const _component_UContentSurround = _sfc_main$6;
      const _component_UContentToc = _sfc_main$1;
      const _component_UButton = _sfc_main$q;
      if (unref(page)) {
        _push(ssrRenderComponent(_component_UContainer, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UPage, null, {
                left: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UPageAside, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UContentNavigation, {
                            navigation: unref(asideNavigation),
                            "default-open": "",
                            "trailing-icon": "i-lucide-chevron-right",
                            ui: { linkTrailingIcon: "group-data-[state=open]:rotate-90" },
                            highlight: ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UContentNavigation, {
                              navigation: unref(asideNavigation),
                              "default-open": "",
                              "trailing-icon": "i-lucide-chevron-right",
                              ui: { linkTrailingIcon: "group-data-[state=open]:rotate-90" },
                              highlight: ""
                            }, null, 8, ["navigation"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UPageAside, null, {
                        default: withCtx(() => [
                          createVNode(_component_UContentNavigation, {
                            navigation: unref(asideNavigation),
                            "default-open": "",
                            "trailing-icon": "i-lucide-chevron-right",
                            ui: { linkTrailingIcon: "group-data-[state=open]:rotate-90" },
                            highlight: ""
                          }, null, 8, ["navigation"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UPage, null, {
                      right: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UContentToc, {
                            links: unref(page).body?.toc?.links,
                            highlight: ""
                          }, {
                            bottom: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (unref(page).body?.toc?.links?.length) {
                                  _push5(ssrRenderComponent(_component_USeparator, { type: "dashed" }, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`<div class="space-y-6"${_scopeId4}><div${_scopeId4}><h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-3"${_scopeId4}> Ferramentas de Leitura </h4><div class="space-y-2"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_UButton, {
                                  variant: "ghost",
                                  size: "sm",
                                  block: "",
                                  icon: "i-lucide-bookmark",
                                  color: "neutral"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Marcar página `);
                                    } else {
                                      return [
                                        createTextVNode(" Marcar página ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UButton, {
                                  variant: "ghost",
                                  size: "sm",
                                  block: "",
                                  icon: "i-lucide-file-text",
                                  color: "neutral"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Fazer anotações `);
                                    } else {
                                      return [
                                        createTextVNode(" Fazer anotações ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UButton, {
                                  variant: "ghost",
                                  size: "sm",
                                  block: "",
                                  icon: "i-lucide-highlighter",
                                  color: "neutral"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Destacar texto `);
                                    } else {
                                      return [
                                        createTextVNode(" Destacar texto ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div></div></div>`);
                              } else {
                                return [
                                  unref(page).body?.toc?.links?.length ? (openBlock(), createBlock(_component_USeparator, {
                                    key: 0,
                                    type: "dashed"
                                  })) : createCommentVNode("", true),
                                  createVNode("div", { class: "space-y-6" }, [
                                    createVNode("div", null, [
                                      createVNode("h4", { class: "text-sm font-semibold text-gray-900 dark:text-white mb-3" }, " Ferramentas de Leitura "),
                                      createVNode("div", { class: "space-y-2" }, [
                                        createVNode(_component_UButton, {
                                          variant: "ghost",
                                          size: "sm",
                                          block: "",
                                          icon: "i-lucide-bookmark",
                                          color: "neutral"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Marcar página ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UButton, {
                                          variant: "ghost",
                                          size: "sm",
                                          block: "",
                                          icon: "i-lucide-file-text",
                                          color: "neutral"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Fazer anotações ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UButton, {
                                          variant: "ghost",
                                          size: "sm",
                                          block: "",
                                          icon: "i-lucide-highlighter",
                                          color: "neutral"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Destacar texto ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UContentToc, {
                              links: unref(page).body?.toc?.links,
                              highlight: ""
                            }, {
                              bottom: withCtx(() => [
                                unref(page).body?.toc?.links?.length ? (openBlock(), createBlock(_component_USeparator, {
                                  key: 0,
                                  type: "dashed"
                                })) : createCommentVNode("", true),
                                createVNode("div", { class: "space-y-6" }, [
                                  createVNode("div", null, [
                                    createVNode("h4", { class: "text-sm font-semibold text-gray-900 dark:text-white mb-3" }, " Ferramentas de Leitura "),
                                    createVNode("div", { class: "space-y-2" }, [
                                      createVNode(_component_UButton, {
                                        variant: "ghost",
                                        size: "sm",
                                        block: "",
                                        icon: "i-lucide-bookmark",
                                        color: "neutral"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Marcar página ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UButton, {
                                        variant: "ghost",
                                        size: "sm",
                                        block: "",
                                        icon: "i-lucide-file-text",
                                        color: "neutral"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Fazer anotações ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UButton, {
                                        variant: "ghost",
                                        size: "sm",
                                        block: "",
                                        icon: "i-lucide-highlighter",
                                        color: "neutral"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Destacar texto ")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ])
                                ])
                              ]),
                              _: 1
                            }, 8, ["links"])
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UPageHeader, unref(page), {
                            headline: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UBreadcrumb, { items: unref(breadcrumb) }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UBreadcrumb, { items: unref(breadcrumb) }, null, 8, ["items"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UPageBody, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (unref(page).body) {
                                  _push5(ssrRenderComponent(_component_ContentRenderer, { value: unref(page) }, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(ssrRenderComponent(_component_USeparator, { class: "mt-12" }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UContentSurround, { surround: unref(surround) }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  unref(page).body ? (openBlock(), createBlock(_component_ContentRenderer, {
                                    key: 0,
                                    value: unref(page)
                                  }, null, 8, ["value"])) : createCommentVNode("", true),
                                  createVNode(_component_USeparator, { class: "mt-12" }),
                                  createVNode(_component_UContentSurround, { surround: unref(surround) }, null, 8, ["surround"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UPageHeader, unref(page), {
                              headline: withCtx(() => [
                                createVNode(_component_UBreadcrumb, { items: unref(breadcrumb) }, null, 8, ["items"])
                              ]),
                              _: 1
                            }, 16),
                            createVNode(_component_UPageBody, null, {
                              default: withCtx(() => [
                                unref(page).body ? (openBlock(), createBlock(_component_ContentRenderer, {
                                  key: 0,
                                  value: unref(page)
                                }, null, 8, ["value"])) : createCommentVNode("", true),
                                createVNode(_component_USeparator, { class: "mt-12" }),
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
                    return [
                      createVNode(_component_UPage, null, {
                        right: withCtx(() => [
                          createVNode(_component_UContentToc, {
                            links: unref(page).body?.toc?.links,
                            highlight: ""
                          }, {
                            bottom: withCtx(() => [
                              unref(page).body?.toc?.links?.length ? (openBlock(), createBlock(_component_USeparator, {
                                key: 0,
                                type: "dashed"
                              })) : createCommentVNode("", true),
                              createVNode("div", { class: "space-y-6" }, [
                                createVNode("div", null, [
                                  createVNode("h4", { class: "text-sm font-semibold text-gray-900 dark:text-white mb-3" }, " Ferramentas de Leitura "),
                                  createVNode("div", { class: "space-y-2" }, [
                                    createVNode(_component_UButton, {
                                      variant: "ghost",
                                      size: "sm",
                                      block: "",
                                      icon: "i-lucide-bookmark",
                                      color: "neutral"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Marcar página ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UButton, {
                                      variant: "ghost",
                                      size: "sm",
                                      block: "",
                                      icon: "i-lucide-file-text",
                                      color: "neutral"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Fazer anotações ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UButton, {
                                      variant: "ghost",
                                      size: "sm",
                                      block: "",
                                      icon: "i-lucide-highlighter",
                                      color: "neutral"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Destacar texto ")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          }, 8, ["links"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_UPageHeader, unref(page), {
                            headline: withCtx(() => [
                              createVNode(_component_UBreadcrumb, { items: unref(breadcrumb) }, null, 8, ["items"])
                            ]),
                            _: 1
                          }, 16),
                          createVNode(_component_UPageBody, null, {
                            default: withCtx(() => [
                              unref(page).body ? (openBlock(), createBlock(_component_ContentRenderer, {
                                key: 0,
                                value: unref(page)
                              }, null, 8, ["value"])) : createCommentVNode("", true),
                              createVNode(_component_USeparator, { class: "mt-12" }),
                              createVNode(_component_UContentSurround, { surround: unref(surround) }, null, 8, ["surround"])
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
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UPage, null, {
                  left: withCtx(() => [
                    createVNode(_component_UPageAside, null, {
                      default: withCtx(() => [
                        createVNode(_component_UContentNavigation, {
                          navigation: unref(asideNavigation),
                          "default-open": "",
                          "trailing-icon": "i-lucide-chevron-right",
                          ui: { linkTrailingIcon: "group-data-[state=open]:rotate-90" },
                          highlight: ""
                        }, null, 8, ["navigation"])
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_UPage, null, {
                      right: withCtx(() => [
                        createVNode(_component_UContentToc, {
                          links: unref(page).body?.toc?.links,
                          highlight: ""
                        }, {
                          bottom: withCtx(() => [
                            unref(page).body?.toc?.links?.length ? (openBlock(), createBlock(_component_USeparator, {
                              key: 0,
                              type: "dashed"
                            })) : createCommentVNode("", true),
                            createVNode("div", { class: "space-y-6" }, [
                              createVNode("div", null, [
                                createVNode("h4", { class: "text-sm font-semibold text-gray-900 dark:text-white mb-3" }, " Ferramentas de Leitura "),
                                createVNode("div", { class: "space-y-2" }, [
                                  createVNode(_component_UButton, {
                                    variant: "ghost",
                                    size: "sm",
                                    block: "",
                                    icon: "i-lucide-bookmark",
                                    color: "neutral"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Marcar página ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UButton, {
                                    variant: "ghost",
                                    size: "sm",
                                    block: "",
                                    icon: "i-lucide-file-text",
                                    color: "neutral"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Fazer anotações ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UButton, {
                                    variant: "ghost",
                                    size: "sm",
                                    block: "",
                                    icon: "i-lucide-highlighter",
                                    color: "neutral"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Destacar texto ")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["links"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_UPageHeader, unref(page), {
                          headline: withCtx(() => [
                            createVNode(_component_UBreadcrumb, { items: unref(breadcrumb) }, null, 8, ["items"])
                          ]),
                          _: 1
                        }, 16),
                        createVNode(_component_UPageBody, null, {
                          default: withCtx(() => [
                            unref(page).body ? (openBlock(), createBlock(_component_ContentRenderer, {
                              key: 0,
                              value: unref(page)
                            }, null, 8, ["value"])) : createCommentVNode("", true),
                            createVNode(_component_USeparator, { class: "mt-12" }),
                            createVNode(_component_UContentSurround, { surround: unref(surround) }, null, 8, ["surround"])
                          ]),
                          _: 1
                        })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/filosofia/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-BlixEOmu.mjs.map
