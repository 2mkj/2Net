import { createVNode as _createVNode, mergeProps as _mergeProps, resolveDirective as _resolveDirective } from "vue";
// Styles
import "./VCheckbox.css"; // Components

import { filterInputProps, makeVInputProps, VInput } from "../VInput/VInput.mjs";
import { filterCheckboxBtnProps, makeVCheckboxBtnProps, VCheckboxBtn } from "./VCheckboxBtn.mjs"; // Utilities

import { computed } from 'vue';
import { defineComponent, filterInputAttrs, getUid, useRender } from "../../util/index.mjs";
export const VCheckbox = defineComponent({
  name: 'VCheckbox',
  inheritAttrs: false,
  props: { ...makeVInputProps(),
    ...makeVCheckboxBtnProps()
  },

  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const uid = getUid();
    const id = computed(() => props.id || `checkbox-${uid}`);
    useRender(() => {
      const [inputAttrs, controlAttrs] = filterInputAttrs(attrs);
      const [inputProps, _1] = filterInputProps(props);
      const [checkboxProps, _2] = filterCheckboxBtnProps(props);
      return _createVNode(VInput, _mergeProps({
        "class": "v-checkbox"
      }, inputAttrs, inputProps, {
        "id": id.value
      }), { ...slots,
        default: _ref2 => {
          let {
            id,
            isDisabled,
            isReadonly
          } = _ref2;
          return _createVNode(VCheckboxBtn, _mergeProps(checkboxProps, {
            "id": id.value,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value
          }, controlAttrs), slots);
        }
      });
    });
    return {};
  }

});
//# sourceMappingURL=VCheckbox.mjs.map