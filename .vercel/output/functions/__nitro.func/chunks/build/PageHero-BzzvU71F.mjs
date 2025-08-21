import { u as useAppConfig, A as tv, E as _sfc_main$j, g as _sfc_main$q } from './server.mjs';
import { useSlots, computed, unref, mergeProps, withCtx, createBlock, createCommentVNode, renderSlot, openBlock, createTextVNode, toDisplayString, Fragment, renderList, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';

const theme = {
  "slots": {
    "root": "relative isolate",
    "container": "flex flex-col lg:grid py-24 sm:py-32 lg:py-40 gap-16 sm:gap-y-24",
    "wrapper": "",
    "header": "",
    "headline": "mb-4",
    "title": "text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted",
    "description": "text-lg sm:text-xl/8 text-muted",
    "body": "mt-10",
    "footer": "mt-10",
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
        "headline": "justify-center",
        "wrapper": "text-center",
        "description": "text-balance",
        "links": "justify-center"
      }
    },
    "reverse": {
      "true": {
        "wrapper": "order-last"
      }
    },
    "headline": {
      "true": {
        "headline": "font-semibold text-primary flex items-center gap-1.5"
      }
    },
    "title": {
      "true": {
        "description": "mt-6"
      }
    }
  }
};
const _sfc_main = {
  __name: "UPageHero",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    headline: { type: String, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    links: { type: Array, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    reverse: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.pageHero || {} })({
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
                  if (!!slots.header || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.body || !!slots.footer || (__props.links?.length || !!slots.links)) {
                    _push3(`<div class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId2}>`);
                    if (!!slots.header || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description)) {
                      _push3(`<div class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                        if (__props.headline || !!slots.headline) {
                          _push3(`<div class="${ssrRenderClass(ui.value.headline({ class: props.ui?.headline, headline: !slots.headline }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "headline", {}, () => {
                            _push3(`${ssrInterpolate(__props.headline)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (__props.title || !!slots.title) {
                          _push3(`<h1 class="${ssrRenderClass(ui.value.title({ class: props.ui?.title }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                            _push3(`${ssrInterpolate(__props.title)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</h1>`);
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
                                size: "xl"
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
                    !!slots.header || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.body || !!slots.footer || (__props.links?.length || !!slots.links) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.wrapper({ class: props.ui?.wrapper })
                    }, [
                      !!slots.header || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ui.value.header({ class: props.ui?.header })
                      }, [
                        renderSlot(_ctx.$slots, "header", {}, () => [
                          __props.headline || !!slots.headline ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: ui.value.headline({ class: props.ui?.headline, headline: !slots.headline })
                          }, [
                            renderSlot(_ctx.$slots, "headline", {}, () => [
                              createTextVNode(toDisplayString(__props.headline), 1)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          __props.title || !!slots.title ? (openBlock(), createBlock("h1", {
                            key: 1,
                            class: ui.value.title({ class: props.ui?.title })
                          }, [
                            renderSlot(_ctx.$slots, "title", {}, () => [
                              createTextVNode(toDisplayString(__props.title), 1)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                            key: 2,
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
                                  size: "xl"
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
                  !!slots.header || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.body || !!slots.footer || (__props.links?.length || !!slots.links) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: ui.value.wrapper({ class: props.ui?.wrapper })
                  }, [
                    !!slots.header || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.header({ class: props.ui?.header })
                    }, [
                      renderSlot(_ctx.$slots, "header", {}, () => [
                        __props.headline || !!slots.headline ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: ui.value.headline({ class: props.ui?.headline, headline: !slots.headline })
                        }, [
                          renderSlot(_ctx.$slots, "headline", {}, () => [
                            createTextVNode(toDisplayString(__props.headline), 1)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        __props.title || !!slots.title ? (openBlock(), createBlock("h1", {
                          key: 1,
                          class: ui.value.title({ class: props.ui?.title })
                        }, [
                          renderSlot(_ctx.$slots, "title", {}, () => [
                            createTextVNode(toDisplayString(__props.title), 1)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                          key: 2,
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
                                size: "xl"
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@3.2.0_@babel+parser@7.28.0_@netlify+blobs@9.1.2_db0@0.3.2_better-sqlite3@1_abd900d3314e4a9a03512da03be3832c/node_modules/@nuxt/ui-pro/dist/runtime/components/PageHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=PageHero-BzzvU71F.mjs.map
