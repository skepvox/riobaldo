import { M as Motion } from './index-CSv99nHV.mjs';
import { J as useRoute, u as useAppConfig, g as _sfc_main$q } from './server.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WorkInProgress",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const { global } = useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Motion = Motion;
      const _component_UButton = _sfc_main$q;
      _push(ssrRenderComponent(_component_Motion, mergeProps({
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
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: unref(global).available ? "success" : "error",
              variant: "ghost",
              class: "gap-2",
              to: _ctx.$route.path,
              label: "Work in Progress ..."
            }, {
              leading: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="relative flex size-2"${_scopeId2}><span class="${ssrRenderClass([unref(global).available ? "bg-success animate-ping" : "bg-error", "absolute inline-flex size-full rounded-full opacity-75"])}"${_scopeId2}></span><span class="${ssrRenderClass([unref(global).available ? "bg-success" : "bg-error", "relative inline-flex size-2 scale-90 rounded-full 'bg-success'"])}"${_scopeId2}></span></span>`);
                } else {
                  return [
                    createVNode("span", { class: "relative flex size-2" }, [
                      createVNode("span", {
                        class: ["absolute inline-flex size-full rounded-full opacity-75", unref(global).available ? "bg-success animate-ping" : "bg-error"]
                      }, null, 2),
                      createVNode("span", {
                        class: ["relative inline-flex size-2 scale-90 rounded-full 'bg-success'", unref(global).available ? "bg-success" : "bg-error"]
                      }, null, 2)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2" }, [
                createVNode(_component_UButton, {
                  color: unref(global).available ? "success" : "error",
                  variant: "ghost",
                  class: "gap-2",
                  to: _ctx.$route.path,
                  label: "Work in Progress ..."
                }, {
                  leading: withCtx(() => [
                    createVNode("span", { class: "relative flex size-2" }, [
                      createVNode("span", {
                        class: ["absolute inline-flex size-full rounded-full opacity-75", unref(global).available ? "bg-success animate-ping" : "bg-error"]
                      }, null, 2),
                      createVNode("span", {
                        class: ["relative inline-flex size-2 scale-90 rounded-full 'bg-success'", unref(global).available ? "bg-success" : "bg-error"]
                      }, null, 2)
                    ])
                  ]),
                  _: 1
                }, 8, ["color", "to"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WorkInProgress.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "WorkInProgress" });

export { __nuxt_component_2 as _ };
//# sourceMappingURL=WorkInProgress-A4zmmxNr.mjs.map
