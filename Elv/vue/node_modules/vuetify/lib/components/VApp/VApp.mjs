import { createVNode as _createVNode } from "vue";
// Styles
import "./VApp.css"; // Composables

import { createLayout, makeLayoutProps } from "../../composables/layout.mjs";
import { makeThemeProps, provideTheme } from "../../composables/theme.mjs";
import { useRtl } from "../../composables/rtl.mjs"; // Utilities

import { defineComponent, useRender } from "../../util/index.mjs";
export const VApp = defineComponent({
  name: 'VApp',
  props: { ...makeLayoutProps({
      fullHeight: true
    }),
    ...makeThemeProps()
  },

  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const theme = provideTheme(props);
    const {
      layoutClasses,
      layoutStyles,
      getLayoutItem,
      items,
      layoutRef
    } = createLayout(props);
    const {
      rtlClasses
    } = useRtl();
    useRender(() => {
      var _slots$default;

      return _createVNode("div", {
        "ref": layoutRef,
        "class": ['v-application', theme.themeClasses.value, layoutClasses.value, rtlClasses.value],
        "style": layoutStyles.value
      }, [_createVNode("div", {
        "class": "v-application__wrap"
      }, [(_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots)])]);
    });
    return {
      getLayoutItem,
      items,
      theme
    };
  }

});
//# sourceMappingURL=VApp.mjs.map