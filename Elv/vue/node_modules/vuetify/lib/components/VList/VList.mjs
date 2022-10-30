import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
// Styles
import "./VList.css"; // Components

import { VListChildren } from "./VListChildren.mjs"; // Composables

import { createList } from "./list.mjs";
import { makeBorderProps, useBorder } from "../../composables/border.mjs";
import { makeDensityProps, useDensity } from "../../composables/density.mjs";
import { makeDimensionProps, useDimension } from "../../composables/dimensions.mjs";
import { makeElevationProps, useElevation } from "../../composables/elevation.mjs";
import { makeItemsProps } from "../../composables/items.mjs";
import { makeNestedProps, useNested } from "../../composables/nested/nested.mjs";
import { makeRoundedProps, useRounded } from "../../composables/rounded.mjs";
import { makeTagProps } from "../../composables/tag.mjs";
import { makeThemeProps, provideTheme } from "../../composables/theme.mjs";
import { makeVariantProps } from "../../composables/variant.mjs";
import { provideDefaults } from "../../composables/defaults.mjs";
import { useBackgroundColor } from "../../composables/color.mjs"; // Utilities

import { computed, toRef } from 'vue';
import { genericComponent, getPropertyFromItem, pick, useRender } from "../../util/index.mjs"; // Types

function transformItem(props, item) {
  const type = getPropertyFromItem(item, props.itemType, 'item');
  const title = typeof item === 'string' ? item : getPropertyFromItem(item, props.itemTitle);
  const value = getPropertyFromItem(item, props.itemValue, undefined);
  const children = getPropertyFromItem(item, props.itemChildren);
  const itemProps = props.itemProps === true ? pick(item, ['children'])[1] : getPropertyFromItem(item, props.itemProps);
  const _props = {
    title,
    value,
    ...itemProps
  };
  return {
    type,
    title: _props.title,
    value: _props.value,
    props: _props,
    children: type === 'item' && children ? transformItems(props, children) : undefined,
    raw: item
  };
}

function transformItems(props, items) {
  const array = [];

  for (const item of items) {
    array.push(transformItem(props, item));
  }

  return array;
}

function useListItems(props) {
  const items = computed(() => transformItems(props, props.items));
  return {
    items
  };
}

export const VList = genericComponent()({
  name: 'VList',
  props: {
    activeColor: String,
    activeClass: String,
    bgColor: String,
    disabled: Boolean,
    lines: {
      type: [Boolean, String],
      default: 'one'
    },
    nav: Boolean,
    ...makeNestedProps({
      selectStrategy: 'single-leaf',
      openStrategy: 'list'
    }),
    ...makeBorderProps(),
    ...makeDensityProps(),
    ...makeDimensionProps(),
    ...makeElevationProps(),
    itemType: {
      type: String,
      default: 'type'
    },
    ...makeItemsProps(),
    ...makeRoundedProps(),
    ...makeTagProps(),
    ...makeThemeProps(),
    ...makeVariantProps({
      variant: 'text'
    })
  },
  emits: {
    'update:selected': val => true,
    'update:opened': val => true,
    'click:open': value => true,
    'click:select': value => true
  },

  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      items
    } = useListItems(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, 'bgColor'));
    const {
      borderClasses
    } = useBorder(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      open,
      select
    } = useNested(props);
    const lineClasses = computed(() => props.lines ? `v-list--${props.lines}-line` : undefined);
    const activeColor = toRef(props, 'activeColor');
    const color = toRef(props, 'color');
    createList();
    provideDefaults({
      VListGroup: {
        activeColor,
        color
      },
      VListItem: {
        activeClass: toRef(props, 'activeClass'),
        activeColor,
        color,
        density: toRef(props, 'density'),
        disabled: toRef(props, 'disabled'),
        lines: toRef(props, 'lines'),
        nav: toRef(props, 'nav'),
        variant: toRef(props, 'variant')
      }
    });
    useRender(() => _createVNode(props.tag, {
      "class": ['v-list', {
        'v-list--disabled': props.disabled,
        'v-list--nav': props.nav
      }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, densityClasses.value, elevationClasses.value, lineClasses.value, roundedClasses.value],
      "style": [backgroundColorStyles.value, dimensionStyles.value]
    }, {
      default: () => [_createVNode(VListChildren, {
        "items": items.value
      }, slots)]
    }));
    return {
      open,
      select
    };
  }

});
//# sourceMappingURL=VList.mjs.map