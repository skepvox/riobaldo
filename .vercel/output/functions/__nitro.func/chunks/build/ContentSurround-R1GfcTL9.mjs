import { u as useAppConfig, $ as createReusableTemplate, A as tv, j as _sfc_main$r, _ as _sfc_main$w } from './server.mjs';
import { computed, unref, withCtx, renderSlot, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';

const theme = {
  "slots": {
    "root": "grid grid-cols-1 sm:grid-cols-2 gap-8",
    "link": [
      "group block px-6 py-8 rounded-lg border border-default hover:bg-elevated/50 focus-visible:outline-primary",
      "transition-colors"
    ],
    "linkLeading": [
      "inline-flex items-center rounded-full p-1.5 bg-elevated group-hover:bg-primary/10 ring ring-accented mb-4 group-hover:ring-primary/50",
      "transition"
    ],
    "linkLeadingIcon": [
      "size-5 shrink-0 text-highlighted group-hover:text-primary",
      "transition-[color,translate]"
    ],
    "linkTitle": "font-medium text-[15px] text-highlighted mb-1 truncate",
    "linkDescription": "text-sm text-muted line-clamp-2"
  },
  "variants": {
    "direction": {
      "left": {
        "linkLeadingIcon": [
          "group-active:-translate-x-0.5"
        ]
      },
      "right": {
        "link": "text-right",
        "linkLeadingIcon": [
          "group-active:translate-x-0.5"
        ]
      }
    }
  }
};
const _sfc_main = {
  __name: "UContentSurround",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    prevIcon: { type: String, required: false },
    nextIcon: { type: String, required: false },
    surround: { type: Array, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const [DefineLinkTemplate, ReuseLinkTemplate] = createReusableTemplate({
      props: {
        link: Object,
        icon: String,
        direction: String
      }
    });
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.contentSurround || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULink = _sfc_main$r;
      const _component_UIcon = _sfc_main$w;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineLinkTemplate), null, {
        default: withCtx(({ link, icon, direction }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (link) {
              _push2(ssrRenderComponent(_component_ULink, {
                to: link.path,
                raw: "",
                class: ui.value.link({ class: [props.ui?.link, link.ui?.link, link.class], direction })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "link", { link }, () => {
                      _push3(`<div class="${ssrRenderClass(ui.value.linkLeading({ class: [props.ui?.linkLeading, link.ui?.linkLeading] }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "link-leading", { link }, () => {
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: link.icon || icon,
                          class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, link.ui?.linkLeadingIcon], direction })
                        }, null, _parent3, _scopeId2));
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div><p class="${ssrRenderClass(ui.value.linkTitle({ class: [props.ui?.linkTitle, link.ui?.linkTitle] }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "link-title", { link }, () => {
                        _push3(`${ssrInterpolate(link.title)}`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</p><p class="${ssrRenderClass(ui.value.linkDescription({ class: [props.ui?.linkDescription, link.ui?.linkDescription] }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "link-description", { link }, () => {
                        _push3(`${ssrInterpolate(link.description)}`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</p>`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "link", { link }, () => [
                        createVNode("div", {
                          class: ui.value.linkLeading({ class: [props.ui?.linkLeading, link.ui?.linkLeading] })
                        }, [
                          renderSlot(_ctx.$slots, "link-leading", { link }, () => [
                            createVNode(_component_UIcon, {
                              name: link.icon || icon,
                              class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, link.ui?.linkLeadingIcon], direction })
                            }, null, 8, ["name", "class"])
                          ])
                        ], 2),
                        createVNode("p", {
                          class: ui.value.linkTitle({ class: [props.ui?.linkTitle, link.ui?.linkTitle] })
                        }, [
                          renderSlot(_ctx.$slots, "link-title", { link }, () => [
                            createTextVNode(toDisplayString(link.title), 1)
                          ])
                        ], 2),
                        createVNode("p", {
                          class: ui.value.linkDescription({ class: [props.ui?.linkDescription, link.ui?.linkDescription] })
                        }, [
                          renderSlot(_ctx.$slots, "link-description", { link }, () => [
                            createTextVNode(toDisplayString(link.description), 1)
                          ])
                        ], 2)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<span class="hidden lg:block"${_scopeId}> </span>`);
            }
          } else {
            return [
              link ? (openBlock(), createBlock(_component_ULink, {
                key: 0,
                to: link.path,
                raw: "",
                class: ui.value.link({ class: [props.ui?.link, link.ui?.link, link.class], direction })
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "link", { link }, () => [
                    createVNode("div", {
                      class: ui.value.linkLeading({ class: [props.ui?.linkLeading, link.ui?.linkLeading] })
                    }, [
                      renderSlot(_ctx.$slots, "link-leading", { link }, () => [
                        createVNode(_component_UIcon, {
                          name: link.icon || icon,
                          class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, link.ui?.linkLeadingIcon], direction })
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2),
                    createVNode("p", {
                      class: ui.value.linkTitle({ class: [props.ui?.linkTitle, link.ui?.linkTitle] })
                    }, [
                      renderSlot(_ctx.$slots, "link-title", { link }, () => [
                        createTextVNode(toDisplayString(link.title), 1)
                      ])
                    ], 2),
                    createVNode("p", {
                      class: ui.value.linkDescription({ class: [props.ui?.linkDescription, link.ui?.linkDescription] })
                    }, [
                      renderSlot(_ctx.$slots, "link-description", { link }, () => [
                        createTextVNode(toDisplayString(link.description), 1)
                      ])
                    ], 2)
                  ])
                ]),
                _: 2
              }, 1032, ["to", "class"])) : (openBlock(), createBlock("span", {
                key: 1,
                class: "hidden lg:block"
              }, " "))
            ];
          }
        }),
        _: 3
      }, _parent));
      if (__props.surround) {
        _push(ssrRenderComponent(unref(Primitive), {
          as: __props.as,
          class: ui.value.root({ class: [props.ui?.root, props.class] })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(ReuseLinkTemplate), {
                link: __props.surround[0],
                icon: __props.prevIcon || unref(appConfig).ui.icons.arrowLeft,
                direction: "left"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(ReuseLinkTemplate), {
                link: __props.surround[1],
                icon: __props.nextIcon || unref(appConfig).ui.icons.arrowRight,
                direction: "right"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(ReuseLinkTemplate), {
                  link: __props.surround[0],
                  icon: __props.prevIcon || unref(appConfig).ui.icons.arrowLeft,
                  direction: "left"
                }, null, 8, ["link", "icon"]),
                createVNode(unref(ReuseLinkTemplate), {
                  link: __props.surround[1],
                  icon: __props.nextIcon || unref(appConfig).ui.icons.arrowRight,
                  direction: "right"
                }, null, 8, ["link", "icon"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@3.2.0_@babel+parser@7.28.0_@netlify+blobs@9.1.2_db0@0.3.2_better-sqlite3@1_abd900d3314e4a9a03512da03be3832c/node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentSurround.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ContentSurround-R1GfcTL9.mjs.map
