import { computed, mergeProps, unref, withCtx, renderSlot, createVNode, toDisplayString, useSlots, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { useForwardPropsEmits, CollapsibleRoot, CollapsibleTrigger, CollapsibleContent } from 'reka-ui';
import { x as useLocalePro, u as useAppConfig, A as tv, C as transformUI, _ as _sfc_main$w, r as reactivePick, t as tv$1 } from './server.mjs';
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

const theme$1 = {
  "slots": {
    "root": "",
    "content": "data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden"
  }
};
const _sfc_main$1 = {
  __name: "UCollapsible",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    unmountOnHide: { type: Boolean, required: false, default: true }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "defaultOpen", "open", "disabled", "unmountOnHide"), emits);
    const ui = computed(() => tv$1({ extend: tv$1(theme$1), ...appConfig.ui?.collapsible || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CollapsibleRoot), mergeProps(unref(rootProps), {
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(CollapsibleTrigger), { "as-child": "" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(CollapsibleContent), {
              class: ui.value.content({ class: props.ui?.content })
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "content", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "content")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(CollapsibleTrigger), {
                key: 0,
                "as-child": ""
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1024)) : createCommentVNode("", true),
              createVNode(unref(CollapsibleContent), {
                class: ui.value.content({ class: props.ui?.content })
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "content")
                ]),
                _: 3
              }, 8, ["class"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@3.2.0_@babel+parser@7.28.0_@netlify+blobs@9.1.2_db0@0.3.2_better-sqlite3@12.2._ed31a72b5066dafc351ea9873dbff10b/node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "my-5",
    "trigger": [
      "group relative rounded-xs inline-flex items-center gap-1.5 text-muted hover:text-default text-sm focus-visible:ring-2 focus-visible:ring-primary focus:outline-none",
      "transition-colors"
    ],
    "triggerIcon": "size-4 shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200",
    "triggerLabel": "truncate",
    "content": "*:first:mt-2.5 *:last:mb-0 *:my-1.5"
  }
};
const _sfc_main = {
  __name: "ProseCollapsible",
  __ssrInlineRender: true,
  props: {
    icon: { type: String, required: false },
    name: { type: String, required: false },
    openText: { type: String, required: false },
    closeText: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const { t } = useLocalePro();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.collapsible || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCollapsible = _sfc_main$1;
      const _component_UIcon = _sfc_main$w;
      _push(ssrRenderComponent(_component_UCollapsible, mergeProps({
        "unmount-on-hide": false,
        class: props.class,
        ui: unref(transformUI)(ui.value)
      }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="${ssrRenderClass(ui.value.trigger({ class: props.ui?.trigger }))}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: __props.icon || unref(appConfig).ui.icons.chevronDown,
              class: ui.value.triggerIcon({ class: props.ui?.triggerIcon })
            }, null, _parent2, _scopeId));
            _push2(`<span class="${ssrRenderClass(ui.value.triggerLabel({ class: props.ui?.triggerLabel }))}"${_scopeId}>${ssrInterpolate(open ? props.closeText || unref(t)("prose.collapsible.closeText") : props.openText || unref(t)("prose.collapsible.openText"))} ${ssrInterpolate(props.name || unref(t)("prose.collapsible.name"))}</span></button>`);
          } else {
            return [
              createVNode("button", {
                class: ui.value.trigger({ class: props.ui?.trigger })
              }, [
                createVNode(_component_UIcon, {
                  name: __props.icon || unref(appConfig).ui.icons.chevronDown,
                  class: ui.value.triggerIcon({ class: props.ui?.triggerIcon })
                }, null, 8, ["name", "class"]),
                createVNode("span", {
                  class: ui.value.triggerLabel({ class: props.ui?.triggerLabel })
                }, toDisplayString(open ? props.closeText || unref(t)("prose.collapsible.closeText") : props.openText || unref(t)("prose.collapsible.openText")) + " " + toDisplayString(props.name || unref(t)("prose.collapsible.name")), 3)
              ], 2)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@3.2.0_@babel+parser@7.28.0_@netlify+blobs@9.1.2_db0@0.3.2_better-sqlite3@1_abd900d3314e4a9a03512da03be3832c/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Collapsible.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Collapsible-DI3O96gH.mjs.map
