import { u as useAppConfig, A as tv, g as _sfc_main$q, f as useLocale, t as tv$1, j as _sfc_main$r, p as pickLinkProps, k as _sfc_main$s, _ as _sfc_main$w, e as _sfc_main$t, h as get } from './server.mjs';
import { useSlots, computed, unref, mergeProps, withCtx, createBlock, createCommentVNode, createVNode, openBlock, renderSlot, createTextVNode, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';

const theme$1 = {
  "slots": {
    "root": "relative border-b border-default py-8",
    "container": "",
    "wrapper": "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",
    "headline": "mb-2.5 text-sm font-semibold text-primary flex items-center gap-1.5",
    "title": "text-3xl sm:text-4xl text-pretty font-bold text-highlighted",
    "description": "text-lg text-pretty text-muted",
    "links": "flex flex-wrap items-center gap-1.5"
  },
  "variants": {
    "title": {
      "true": {
        "description": "mt-4"
      }
    }
  }
};
const _sfc_main$1 = {
  __name: "UPageHeader",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    headline: { type: String, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    links: { type: Array, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.uiPro?.pageHeader || {} })({
      title: !!props.title || !!slots.title
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$q;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.headline || !!slots.headline) {
              _push2(`<div class="${ssrRenderClass(ui.value.headline({ class: props.ui?.headline }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "headline", {}, () => {
                _push2(`${ssrInterpolate(__props.headline)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId}><div class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId}>`);
            if (__props.title || !!slots.title) {
              _push2(`<h1 class="${ssrRenderClass(ui.value.title({ class: props.ui?.title }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(__props.title)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</h1>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.links?.length || !!slots.links) {
              _push2(`<div class="${ssrRenderClass(ui.value.links({ class: props.ui?.links }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(__props.links, (link, index) => {
                  _push2(ssrRenderComponent(_component_UButton, mergeProps({
                    key: index,
                    color: "neutral",
                    variant: "outline"
                  }, { ref_for: true }, link), null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (__props.description || !!slots.description) {
              _push2(`<div class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                _push2(`${ssrInterpolate(__props.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              __props.headline || !!slots.headline ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.headline({ class: props.ui?.headline })
              }, [
                renderSlot(_ctx.$slots, "headline", {}, () => [
                  createTextVNode(toDisplayString(__props.headline), 1)
                ])
              ], 2)) : createCommentVNode("", true),
              createVNode("div", {
                class: ui.value.container({ class: props.ui?.container })
              }, [
                createVNode("div", {
                  class: ui.value.wrapper({ class: props.ui?.wrapper })
                }, [
                  __props.title || !!slots.title ? (openBlock(), createBlock("h1", {
                    key: 0,
                    class: ui.value.title({ class: props.ui?.title })
                  }, [
                    renderSlot(_ctx.$slots, "title", {}, () => [
                      createTextVNode(toDisplayString(__props.title), 1)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  __props.links?.length || !!slots.links ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: ui.value.links({ class: props.ui?.links })
                  }, [
                    renderSlot(_ctx.$slots, "links", {}, () => [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                        return openBlock(), createBlock(_component_UButton, mergeProps({
                          key: index,
                          color: "neutral",
                          variant: "outline"
                        }, { ref_for: true }, link), null, 16);
                      }), 128))
                    ])
                  ], 2)) : createCommentVNode("", true)
                ], 2),
                __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.description({ class: props.ui?.description })
                }, [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "default")
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@3.2.0_@babel+parser@7.28.0_@netlify+blobs@9.1.2_db0@0.3.2_better-sqlite3@1_abd900d3314e4a9a03512da03be3832c/node_modules/@nuxt/ui-pro/dist/runtime/components/PageHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "relative min-w-0",
    "list": "flex items-center gap-1.5",
    "item": "flex min-w-0",
    "link": "group relative flex items-center gap-1.5 text-sm min-w-0 focus-visible:outline-primary",
    "linkLeadingIcon": "shrink-0 size-5",
    "linkLeadingAvatar": "shrink-0",
    "linkLeadingAvatarSize": "2xs",
    "linkLabel": "truncate",
    "separator": "flex",
    "separatorIcon": "shrink-0 size-5 text-muted"
  },
  "variants": {
    "active": {
      "true": {
        "link": "text-primary font-semibold"
      },
      "false": {
        "link": "text-muted font-medium"
      }
    },
    "disabled": {
      "true": {
        "link": "cursor-not-allowed opacity-75"
      }
    },
    "to": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "disabled": false,
      "active": false,
      "to": true,
      "class": {
        "link": [
          "hover:text-default",
          "transition-colors"
        ]
      }
    }
  ]
};
const _sfc_main = {
  __name: "UBreadcrumb",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "nav" },
    items: { type: Array, required: false },
    separatorIcon: { type: String, required: false },
    labelKey: { type: String, required: false, default: "label" },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const { dir } = useLocale();
    const appConfig = useAppConfig();
    const separatorIcon = computed(() => props.separatorIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight));
    const ui = computed(() => tv$1({ extend: tv$1(theme), ...appConfig.ui?.breadcrumb || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "aria-label": "breadcrumb",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ol class="${ssrRenderClass(ui.value.list({ class: props.ui?.list }))}"${_scopeId}><!--[-->`);
            ssrRenderList(__props.items, (item, index) => {
              _push2(`<!--[--><li class="${ssrRenderClass(ui.value.item({ class: [props.ui?.item, item.ui?.item] }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$r, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                default: withCtx(({ active, ...slotProps }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$s, mergeProps({ ref_for: true }, slotProps, {
                      as: "span",
                      "aria-current": active && index === __props.items.length - 1 ? "page" : void 0,
                      class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: index === __props.items.length - 1, disabled: !!item.disabled, to: !!item.to })
                    }), {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, item.slot || "item", {
                            item,
                            index
                          }, () => {
                            ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                              item,
                              active: index === __props.items.length - 1,
                              index
                            }, () => {
                              if (item.icon) {
                                _push4(ssrRenderComponent(_sfc_main$w, {
                                  name: item.icon,
                                  class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, item.ui?.linkLeadingIcon], active: index === __props.items.length - 1 })
                                }, null, _parent4, _scopeId3));
                              } else if (item.avatar) {
                                _push4(ssrRenderComponent(_sfc_main$t, mergeProps({
                                  size: props.ui?.linkLeadingAvatarSize || ui.value.linkLeadingAvatarSize()
                                }, { ref_for: true }, item.avatar, {
                                  class: ui.value.linkLeadingAvatar({ class: [props.ui?.linkLeadingAvatar, item.ui?.linkLeadingAvatar], active: index === __props.items.length - 1 })
                                }), null, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            if (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"]) {
                              _push4(`<span class="${ssrRenderClass(ui.value.linkLabel({ class: [props.ui?.linkLabel, item.ui?.linkLabel] }))}"${_scopeId3}>`);
                              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                item,
                                active: index === __props.items.length - 1,
                                index
                              }, () => {
                                _push4(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                              }, _push4, _parent4, _scopeId3);
                              _push4(`</span>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                              item,
                              active: index === __props.items.length - 1,
                              index
                            }, null, _push4, _parent4, _scopeId3);
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, item.slot || "item", {
                              item,
                              index
                            }, () => [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                                item,
                                active: index === __props.items.length - 1,
                                index
                              }, () => [
                                item.icon ? (openBlock(), createBlock(_sfc_main$w, {
                                  key: 0,
                                  name: item.icon,
                                  class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, item.ui?.linkLeadingIcon], active: index === __props.items.length - 1 })
                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$t, mergeProps({
                                  key: 1,
                                  size: props.ui?.linkLeadingAvatarSize || ui.value.linkLeadingAvatarSize()
                                }, { ref_for: true }, item.avatar, {
                                  class: ui.value.linkLeadingAvatar({ class: [props.ui?.linkLeadingAvatar, item.ui?.linkLeadingAvatar], active: index === __props.items.length - 1 })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ]),
                              unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ui.value.linkLabel({ class: [props.ui?.linkLabel, item.ui?.linkLabel] })
                              }, [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                  item,
                                  active: index === __props.items.length - 1,
                                  index
                                }, () => [
                                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                ])
                              ], 2)) : createCommentVNode("", true),
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                                item,
                                active: index === __props.items.length - 1,
                                index
                              })
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$s, mergeProps({ ref_for: true }, slotProps, {
                        as: "span",
                        "aria-current": active && index === __props.items.length - 1 ? "page" : void 0,
                        class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: index === __props.items.length - 1, disabled: !!item.disabled, to: !!item.to })
                      }), {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, item.slot || "item", {
                            item,
                            index
                          }, () => [
                            renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                              item,
                              active: index === __props.items.length - 1,
                              index
                            }, () => [
                              item.icon ? (openBlock(), createBlock(_sfc_main$w, {
                                key: 0,
                                name: item.icon,
                                class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, item.ui?.linkLeadingIcon], active: index === __props.items.length - 1 })
                              }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$t, mergeProps({
                                key: 1,
                                size: props.ui?.linkLeadingAvatarSize || ui.value.linkLeadingAvatarSize()
                              }, { ref_for: true }, item.avatar, {
                                class: ui.value.linkLeadingAvatar({ class: [props.ui?.linkLeadingAvatar, item.ui?.linkLeadingAvatar], active: index === __props.items.length - 1 })
                              }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                            ]),
                            unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ui.value.linkLabel({ class: [props.ui?.linkLabel, item.ui?.linkLabel] })
                            }, [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                item,
                                active: index === __props.items.length - 1,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                              item,
                              active: index === __props.items.length - 1,
                              index
                            })
                          ])
                        ]),
                        _: 2
                      }, 1040, ["aria-current", "class"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
              if (index < __props.items.length - 1) {
                _push2(`<li role="presentation" aria-hidden="true" class="${ssrRenderClass(ui.value.separator({ class: [props.ui?.separator, item.ui?.separator] }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "separator", {}, () => {
                  _push2(ssrRenderComponent(_sfc_main$w, {
                    name: separatorIcon.value,
                    class: ui.value.separatorIcon({ class: [props.ui?.separatorIcon, item.ui?.separatorIcon] })
                  }, null, _parent2, _scopeId));
                }, _push2, _parent2, _scopeId);
                _push2(`</li>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></ol>`);
          } else {
            return [
              createVNode("ol", {
                class: ui.value.list({ class: props.ui?.list })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                  return openBlock(), createBlock(Fragment, { key: index }, [
                    createVNode("li", {
                      class: ui.value.item({ class: [props.ui?.item, item.ui?.item] })
                    }, [
                      createVNode(_sfc_main$r, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                        default: withCtx(({ active, ...slotProps }) => [
                          createVNode(_sfc_main$s, mergeProps({ ref_for: true }, slotProps, {
                            as: "span",
                            "aria-current": active && index === __props.items.length - 1 ? "page" : void 0,
                            class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: index === __props.items.length - 1, disabled: !!item.disabled, to: !!item.to })
                          }), {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, item.slot || "item", {
                                item,
                                index
                              }, () => [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                                  item,
                                  active: index === __props.items.length - 1,
                                  index
                                }, () => [
                                  item.icon ? (openBlock(), createBlock(_sfc_main$w, {
                                    key: 0,
                                    name: item.icon,
                                    class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, item.ui?.linkLeadingIcon], active: index === __props.items.length - 1 })
                                  }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$t, mergeProps({
                                    key: 1,
                                    size: props.ui?.linkLeadingAvatarSize || ui.value.linkLeadingAvatarSize()
                                  }, { ref_for: true }, item.avatar, {
                                    class: ui.value.linkLeadingAvatar({ class: [props.ui?.linkLeadingAvatar, item.ui?.linkLeadingAvatar], active: index === __props.items.length - 1 })
                                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                ]),
                                unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: ui.value.linkLabel({ class: [props.ui?.linkLabel, item.ui?.linkLabel] })
                                }, [
                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                    item,
                                    active: index === __props.items.length - 1,
                                    index
                                  }, () => [
                                    createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                  ])
                                ], 2)) : createCommentVNode("", true),
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                                  item,
                                  active: index === __props.items.length - 1,
                                  index
                                })
                              ])
                            ]),
                            _: 2
                          }, 1040, ["aria-current", "class"])
                        ]),
                        _: 2
                      }, 1040)
                    ], 2),
                    index < __props.items.length - 1 ? (openBlock(), createBlock("li", {
                      key: 0,
                      role: "presentation",
                      "aria-hidden": "true",
                      class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator] })
                    }, [
                      renderSlot(_ctx.$slots, "separator", {}, () => [
                        createVNode(_sfc_main$w, {
                          name: separatorIcon.value,
                          class: ui.value.separatorIcon({ class: [props.ui?.separatorIcon, item.ui?.separatorIcon] })
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 64);
                }), 128))
              ], 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@3.2.0_@babel+parser@7.28.0_@netlify+blobs@9.1.2_db0@0.3.2_better-sqlite3@12.2._ed31a72b5066dafc351ea9873dbff10b/node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=Breadcrumb-BxYSdDkj.mjs.map
