import { u as useAppConfig, A as tv, m as _sfc_main$u, e as _sfc_main$t, j as _sfc_main$r } from './server.mjs';
import { useSlots, computed, unref, mergeProps, withCtx, createVNode, renderSlot, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';

const theme = {
  "slots": {
    "root": "relative group/user",
    "wrapper": "",
    "name": "font-medium",
    "description": "text-muted",
    "avatar": "shrink-0"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "flex items-center"
      },
      "vertical": {
        "root": "flex flex-col"
      }
    },
    "to": {
      "true": {
        "name": [
          "text-default peer-hover:text-highlighted",
          "transition-colors"
        ],
        "description": [
          "peer-hover:text-toned",
          "transition-colors"
        ],
        "avatar": "transform transition-transform duration-200 group-hover/user:scale-115"
      },
      "false": {
        "name": "text-highlighted",
        "description": ""
      }
    },
    "size": {
      "3xs": {
        "root": "gap-1",
        "wrapper": "flex items-center gap-1",
        "name": "text-xs",
        "description": "text-xs"
      },
      "2xs": {
        "root": "gap-1.5",
        "wrapper": "flex items-center gap-1.5",
        "name": "text-xs",
        "description": "text-xs"
      },
      "xs": {
        "root": "gap-1.5",
        "wrapper": "flex items-center gap-1.5",
        "name": "text-xs",
        "description": "text-xs"
      },
      "sm": {
        "root": "gap-2",
        "name": "text-xs",
        "description": "text-xs"
      },
      "md": {
        "root": "gap-2",
        "name": "text-sm",
        "description": "text-xs"
      },
      "lg": {
        "root": "gap-2.5",
        "name": "text-sm",
        "description": "text-sm"
      },
      "xl": {
        "root": "gap-2.5",
        "name": "text-base",
        "description": "text-sm"
      },
      "2xl": {
        "root": "gap-3",
        "name": "text-base",
        "description": "text-base"
      },
      "3xl": {
        "root": "gap-3",
        "name": "text-lg",
        "description": "text-base"
      }
    }
  },
  "defaultVariants": {
    "size": "md"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UUser",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    name: { type: String, required: false },
    description: { type: String, required: false },
    avatar: { type: Object, required: false },
    chip: { type: [Boolean, Object], required: false },
    size: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    to: { type: null, required: false },
    target: { type: null, required: false },
    onClick: { type: Function, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.user || {} })({
      size: props.size,
      orientation: props.orientation,
      to: !!props.to || !!props.onClick
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UChip = _sfc_main$u;
      const _component_UAvatar = _sfc_main$t;
      const _component_ULink = _sfc_main$r;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        class: ui.value.root({ class: [props.ui?.root, props.class] }),
        onClick: __props.onClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "avatar", {}, () => {
              if (__props.chip && __props.avatar) {
                _push2(ssrRenderComponent(_component_UChip, mergeProps({ inset: "" }, typeof __props.chip === "object" ? __props.chip : {}, { size: __props.size }), {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UAvatar, mergeProps({ alt: __props.name }, __props.avatar, {
                        size: __props.size,
                        class: ui.value.avatar({ class: props.ui?.avatar })
                      }), null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UAvatar, mergeProps({ alt: __props.name }, __props.avatar, {
                          size: __props.size,
                          class: ui.value.avatar({ class: props.ui?.avatar })
                        }), null, 16, ["alt", "size", "class"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else if (__props.avatar) {
                _push2(ssrRenderComponent(_component_UAvatar, mergeProps({ alt: __props.name }, __props.avatar, {
                  size: __props.size,
                  class: ui.value.avatar({ class: props.ui?.avatar })
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`<div class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId}>`);
            if (__props.to) {
              _push2(ssrRenderComponent(_component_ULink, mergeProps({ "aria-label": __props.name }, { to: __props.to, target: __props.target, ..._ctx.$attrs }, {
                class: "focus:outline-none peer",
                tabindex: "-1",
                raw: ""
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="absolute inset-0" aria-hidden="true"${_scopeId2}></span>`);
                  } else {
                    return [
                      createVNode("span", {
                        class: "absolute inset-0",
                        "aria-hidden": "true"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              if (__props.name || !!slots.name) {
                _push2(`<p class="${ssrRenderClass(ui.value.name({ class: props.ui?.name }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "name", {}, () => {
                  _push2(`${ssrInterpolate(__props.name)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.description || !!slots.description) {
                _push2(`<p class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                  _push2(`${ssrInterpolate(__props.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              renderSlot(_ctx.$slots, "avatar", {}, () => [
                __props.chip && __props.avatar ? (openBlock(), createBlock(_component_UChip, mergeProps({
                  key: 0,
                  inset: ""
                }, typeof __props.chip === "object" ? __props.chip : {}, { size: __props.size }), {
                  default: withCtx(() => [
                    createVNode(_component_UAvatar, mergeProps({ alt: __props.name }, __props.avatar, {
                      size: __props.size,
                      class: ui.value.avatar({ class: props.ui?.avatar })
                    }), null, 16, ["alt", "size", "class"])
                  ]),
                  _: 1
                }, 16, ["size"])) : __props.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                  key: 1,
                  alt: __props.name
                }, __props.avatar, {
                  size: __props.size,
                  class: ui.value.avatar({ class: props.ui?.avatar })
                }), null, 16, ["alt", "size", "class"])) : createCommentVNode("", true)
              ]),
              createVNode("div", {
                class: ui.value.wrapper({ class: props.ui?.wrapper })
              }, [
                __props.to ? (openBlock(), createBlock(_component_ULink, mergeProps({
                  key: 0,
                  "aria-label": __props.name
                }, { to: __props.to, target: __props.target, ..._ctx.$attrs }, {
                  class: "focus:outline-none peer",
                  tabindex: "-1",
                  raw: ""
                }), {
                  default: withCtx(() => [
                    createVNode("span", {
                      class: "absolute inset-0",
                      "aria-hidden": "true"
                    })
                  ]),
                  _: 1
                }, 16, ["aria-label"])) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "default", {}, () => [
                  __props.name || !!slots.name ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: ui.value.name({ class: props.ui?.name })
                  }, [
                    renderSlot(_ctx.$slots, "name", {}, () => [
                      createTextVNode(toDisplayString(__props.name), 1)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  __props.description || !!slots.description ? (openBlock(), createBlock("p", {
                    key: 1,
                    class: ui.value.description({ class: props.ui?.description })
                  }, [
                    renderSlot(_ctx.$slots, "description", {}, () => [
                      createTextVNode(toDisplayString(__props.description), 1)
                    ])
                  ], 2)) : createCommentVNode("", true)
                ])
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@3.2.0_@babel+parser@7.28.0_@netlify+blobs@9.1.2_db0@0.3.2_better-sqlite3@1_abd900d3314e4a9a03512da03be3832c/node_modules/@nuxt/ui-pro/dist/runtime/components/User.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const formatDate = (dateString) => {
  const parts = dateString.split("-");
  const year = parseInt(parts[0] || "0");
  const month = parseInt(parts[1] || "0");
  const day = parseInt(parts[2] || "0");
  const date = new Date(year, month - 1, day, 12, 0, 0);
  const dayNum = date.getDate();
  const monthName = date.toLocaleDateString("pt-BR", { month: "long" });
  const yearNum = date.getFullYear();
  const shortMonth = monthName.substring(0, 3);
  return `${dayNum} ${shortMonth} ${yearNum}`.toUpperCase();
};

export { _sfc_main as _, formatDate as f };
//# sourceMappingURL=date-CqB7IzHh.mjs.map
