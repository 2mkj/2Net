import { createVNode as _createVNode, mergeProps as _mergeProps, resolveDirective as _resolveDirective } from "vue";
// Components
import { makeSelectionControlProps, VSelectionControl } from "../VSelectionControl/VSelectionControl.mjs"; // Composables

import { useProxiedModel } from "../../composables/proxiedModel.mjs";
import { IconValue } from "../../composables/icons.mjs"; // Utilities

import { computed } from 'vue';
import { defineComponent, pick, propsFactory, useRender } from "../../util/index.mjs"; // Types

export const makeVCheckboxBtnProps = propsFactory({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: IconValue,
    default: '$checkboxIndeterminate'
  },
  ...makeSelectionControlProps({
    falseIcon: '$checkboxOff',
    trueIcon: '$checkboxOn'
  })
});
export const VCheckboxBtn = defineComponent({
  name: 'VCheckboxBtn',
  props: makeVCheckboxBtnProps(),
  emits: {
    'update:modelValue': value => true,
    'update:indeterminate': val => true
  },

  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const indeterminate = useProxiedModel(props, 'indeterminate');

    function onChange(v) {
      if (indeterminate.value) {
        indeterminate.value = false;
      }

      emit('update:modelValue', v);
    }

    const falseIcon = computed(() => {
      return props.indeterminate ? props.indeterminateIcon : props.falseIcon;
    });
    const trueIcon = computed(() => {
      return props.indeterminate ? props.indeterminateIcon : props.trueIcon;
    });
    useRender(() => _createVNode(VSelectionControl, _mergeProps(props, {
      "class": "v-checkbox-btn",
      "type": "checkbox",
      "inline": true,
      "onUpdate:modelValue": onChange,
      "falseIcon": falseIcon.value,
      "trueIcon": trueIcon.value,
      "aria-checked": props.indeterminate ? 'mixed' : undefined
    }), slots));
    return {};
  }

});
export function filterCheckboxBtnProps(props) {
  return pick(props, Object.keys(VCheckboxBtn.props));
}
//# sourceMappingURL=VCheckboxBtn.mjs.map