import { createVNode as _createVNode } from "vue";
// Styles
import "./VLocaleProvider.css"; // Composables

import { provideLocale } from "../../composables/locale.mjs";
import { provideRtl } from "../../composables/rtl.mjs"; // Utilities

import { defineComponent, useRender } from "../../util/index.mjs";
export const VLocaleProvider = defineComponent({
  name: 'VLocaleProvider',
  props: {
    locale: String,
    fallbackLocale: String,
    messages: Object,
    rtl: {
      type: Boolean,
      default: undefined
    }
  },

  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const localeInstance = provideLocale(props);
    const {
      rtlClasses
    } = provideRtl(props, localeInstance);
    useRender(() => {
      var _slots$default;

      return _createVNode("div", {
        "class": ['v-locale-provider', rtlClasses.value]
      }, [(_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots)]);
    });
    return {};
  }

});
//# sourceMappingURL=VLocaleProvider.mjs.map