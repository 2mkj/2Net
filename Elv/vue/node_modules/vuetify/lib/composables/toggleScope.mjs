import { effectScope, watch } from 'vue';
export function useToggleScope(source, cb) {
  let scope;
  watch(source, active => {
    if (active && !scope) {
      scope = effectScope();
      scope.run(cb);
    } else {
      var _scope;

      (_scope = scope) == null ? void 0 : _scope.stop();
      scope = undefined;
    }
  }, {
    immediate: true
  });
}
//# sourceMappingURL=toggleScope.mjs.map