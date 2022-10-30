import { createVNode as _createVNode } from "vue";
// Composables
import { makeVariantProps } from "../../composables/variant.mjs";
import { provideDefaults } from "../../composables/defaults.mjs"; // Utilities

import { defineComponent, useRender } from "../../util/index.mjs";
import { toRef } from 'vue';
export const VToolbarItems = defineComponent({
  name: 'VToolbarItems',
  props: makeVariantProps({
    variant: 'text'
  }),

  setup(props, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        color: toRef(props, 'color'),
        height: 'inherit',
        variant: toRef(props, 'variant')
      }
    });
    useRender(() => {
      var _slots$default;

      return _createVNode("div", {
        "class": "v-toolbar-items"
      }, [(_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots)]);
    });
    return {};
  }

});
//# sourceMappingURL=VToolbarItems.mjs.map