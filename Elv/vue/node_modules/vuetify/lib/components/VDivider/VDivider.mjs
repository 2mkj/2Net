import { createVNode as _createVNode } from "vue";
// Styles
import "./VDivider.css"; // Composables

import { makeThemeProps, provideTheme } from "../../composables/theme.mjs";
import { useBackgroundColor } from "../../composables/color.mjs"; // Utilities

import { computed, toRef } from 'vue';
import { convertToUnit, defineComponent, useRender } from "../../util/index.mjs"; // Types

export const VDivider = defineComponent({
  name: 'VDivider',
  props: {
    color: String,
    inset: Boolean,
    length: [Number, String],
    thickness: [Number, String],
    vertical: Boolean,
    ...makeThemeProps()
  },

  setup(props, _ref) {
    let {
      attrs
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, 'color'));
    const dividerStyles = computed(() => {
      const styles = {};

      if (props.length) {
        styles[props.vertical ? 'maxHeight' : 'maxWidth'] = convertToUnit(props.length);
      }

      if (props.thickness) {
        styles[props.vertical ? 'borderRightWidth' : 'borderTopWidth'] = convertToUnit(props.thickness);
      }

      return styles;
    });
    useRender(() => _createVNode("hr", {
      "class": [{
        'v-divider': true,
        'v-divider--inset': props.inset,
        'v-divider--vertical': props.vertical
      }, themeClasses.value, backgroundColorClasses.value],
      "style": [dividerStyles.value, backgroundColorStyles.value],
      "aria-orientation": !attrs.role || attrs.role === 'separator' ? props.vertical ? 'vertical' : 'horizontal' : undefined,
      "role": `${attrs.role || 'separator'}`
    }, null));
    return {};
  }

});
//# sourceMappingURL=VDivider.mjs.map