import { createVNode as _createVNode } from "vue";
// Styles
import "./VTable.css"; // Composables

import { makeDensityProps, useDensity } from "../../composables/density.mjs";
import { makeTagProps } from "../../composables/tag.mjs";
import { makeThemeProps, provideTheme } from "../../composables/theme.mjs"; // Utilities

import { convertToUnit, defineComponent, useRender } from "../../util/index.mjs";
export const VTable = defineComponent({
  name: 'VTable',
  props: {
    fixedHeader: Boolean,
    fixedFooter: Boolean,
    height: [Number, String],
    ...makeDensityProps(),
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
      densityClasses
    } = useDensity(props);
    useRender(() => {
      var _slots$top, _slots$bottom;

      return _createVNode(props.tag, {
        "class": ['v-table', {
          'v-table--fixed-height': !!props.height,
          'v-table--fixed-header': props.fixedHeader,
          'v-table--fixed-footer': props.fixedFooter,
          'v-table--has-top': !!slots.top,
          'v-table--has-bottom': !!slots.bottom
        }, themeClasses.value, densityClasses.value]
      }, {
        default: () => [(_slots$top = slots.top) == null ? void 0 : _slots$top.call(slots), slots.default && _createVNode("div", {
          "class": "v-table__wrapper",
          "style": {
            height: convertToUnit(props.height)
          }
        }, [_createVNode("table", null, [slots.default()])]), (_slots$bottom = slots.bottom) == null ? void 0 : _slots$bottom.call(slots)]
      });
    });
    return {};
  }

});
//# sourceMappingURL=VTable.mjs.map