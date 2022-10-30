import * as vue from 'vue';
import { PropType } from 'vue';

declare const VNavigationDrawer: vue.DefineComponent<{
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    name: {
        type: StringConstructor;
    };
    order: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    disableResizeWatcher: BooleanConstructor;
    disableRouteWatcher: BooleanConstructor;
    expandOnHover: BooleanConstructor;
    floating: BooleanConstructor;
    modelValue: {
        type: PropType<boolean | null>;
        default: null;
    };
    permanent: BooleanConstructor;
    rail: BooleanConstructor;
    railWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    scrim: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    image: StringConstructor;
    temporary: BooleanConstructor;
    touchless: BooleanConstructor;
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    location: {
        type: PropType<"end" | "start" | "left" | "bottom" | "right">;
        default: string;
        validator: (value: any) => boolean;
    };
    sticky: BooleanConstructor;
}, {
    isStuck: vue.Ref<boolean | "top" | "bottom">;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (val: boolean) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    name: {
        type: StringConstructor;
    };
    order: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    disableResizeWatcher: BooleanConstructor;
    disableRouteWatcher: BooleanConstructor;
    expandOnHover: BooleanConstructor;
    floating: BooleanConstructor;
    modelValue: {
        type: PropType<boolean | null>;
        default: null;
    };
    permanent: BooleanConstructor;
    rail: BooleanConstructor;
    railWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    scrim: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    image: StringConstructor;
    temporary: BooleanConstructor;
    touchless: BooleanConstructor;
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    location: {
        type: PropType<"end" | "start" | "left" | "bottom" | "right">;
        default: string;
        validator: (value: any) => boolean;
    };
    sticky: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((val: boolean) => any) | undefined;
}, {
    absolute: boolean;
    location: "end" | "start" | "left" | "bottom" | "right";
    width: string | number;
    order: string | number;
    temporary: boolean;
    tag: string;
    sticky: boolean;
    rounded: string | number | boolean;
    floating: boolean;
    modelValue: boolean | null;
    scrim: string | boolean;
    touchless: boolean;
    disableResizeWatcher: boolean;
    disableRouteWatcher: boolean;
    expandOnHover: boolean;
    permanent: boolean;
    rail: boolean;
    railWidth: string | number;
}>;
declare type VNavigationDrawer = InstanceType<typeof VNavigationDrawer>;

export { VNavigationDrawer };
