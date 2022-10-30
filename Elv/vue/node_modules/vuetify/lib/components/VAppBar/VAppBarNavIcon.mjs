import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
// Components
import { VBtn } from "../VBtn/index.mjs"; // Composables

import { IconValue } from "../../composables/icons.mjs"; // Utilities

import { defineComponent, useRender } from "../../util/index.mjs";
export const VAppBarNavIcon = defineComponent({
  name: 'VAppBarNavIcon',
  props: {
    icon: {
      type: IconValue,
      default: '$menu'
    }
  },

  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => _createVNode(VBtn, {
      "class": "v-app-bar-nav-icon",
      "icon": props.icon
    }, slots));
    return {};
  }

});
//# sourceMappingURL=VAppBarNavIcon.mjs.map