import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
// Styles
import "./VSheet.css"; // Composables

import { makeBorderProps, useBorder } from "../../composables/border.mjs";
import { makeDimensionProps, useDimension } from "../../composables/dimensions.mjs";
import { makeElevationProps, useElevation } from "../../composables/elevation.mjs";
import { makeLocationProps, useLocation } from "../../composables/location.mjs";
import { makePositionProps, usePosition } from "../../composables/position.mjs";
import { makeRoundedProps, useRounded } from "../../composables/rounded.mjs";
import { makeTagProps } from "../../composables/tag.mjs";
import { makeThemeProps, provideTheme } from "../../composables/theme.mjs";
import { useBackgroundColor } from "../../composables/color.mjs"; // Utilities

import { defineComponent } from "../../util/index.mjs";
import { toRef } from 'vue';
export const VSheet = defineComponent({
  name: 'VSheet',
  props: {
    color: String,
    ...makeBorderProps(),
    ...makeDimensionProps(),
    ...makeElevationProps(),
    ...makeLocationProps(),
    ...makePositionProps(),
    ...makeRoundedProps(),
    ...makeTagProps(),
    ...makeThemeProps()
  },

  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, 'color'));
    const {
      borderClasses
    } = useBorder(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    return () => _createVNode(props.tag, {
      "class": ['v-sheet', themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value],
      "style": [backgroundColorStyles.value, dimensionStyles.value, locationStyles.value]
    }, slots);
  }

});
//# sourceMappingURL=VSheet.mjs.map