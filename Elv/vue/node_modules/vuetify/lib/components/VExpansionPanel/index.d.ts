import * as vue from 'vue';
import { PropType, JSXComponent } from 'vue';

declare const VExpansionPanels: vue.DefineComponent<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: StringConstructor;
    disabled: BooleanConstructor;
    color: StringConstructor;
    variant: {
        type: PropType<"default" | "inset" | "accordion" | "popout">;
        default: string;
        validator: (v: any) => boolean;
    };
    readonly: BooleanConstructor;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (val: unknown) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: StringConstructor;
    disabled: BooleanConstructor;
    color: StringConstructor;
    variant: {
        type: PropType<"default" | "inset" | "accordion" | "popout">;
        default: string;
        validator: (v: any) => boolean;
    };
    readonly: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((val: unknown) => any) | undefined;
}, {
    disabled: boolean;
    multiple: boolean;
    readonly: boolean;
    tag: string;
    variant: "default" | "inset" | "accordion" | "popout";
    modelValue: any;
}>;
declare type VExpansionPanels = InstanceType<typeof VExpansionPanels>;

declare type IconValue = string | JSXComponent;
declare const IconValue: PropType<IconValue>;

declare const VExpansionPanel: vue.DefineComponent<{
    color: StringConstructor;
    expandIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    collapseIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    hideActions: BooleanConstructor;
    ripple: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    readonly: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    eager: BooleanConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    title: StringConstructor;
    text: StringConstructor;
    bgColor: StringConstructor;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'group:selected': (val: {
        value: boolean;
    }) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    color: StringConstructor;
    expandIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    collapseIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    hideActions: BooleanConstructor;
    ripple: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    readonly: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    eager: BooleanConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    title: StringConstructor;
    text: StringConstructor;
    bgColor: StringConstructor;
}>> & {
    "onGroup:selected"?: ((val: {
        value: boolean;
    }) => any) | undefined;
}, {
    eager: boolean;
    disabled: boolean;
    readonly: boolean;
    tag: string;
    rounded: string | number | boolean;
    ripple: boolean | Record<string, any>;
    collapseIcon: IconValue;
    expandIcon: IconValue;
    hideActions: boolean;
}>;
declare type VExpansionPanel = InstanceType<typeof VExpansionPanel>;

declare const VExpansionPanelText: vue.DefineComponent<{
    eager: BooleanConstructor;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    eager: BooleanConstructor;
}>>, {
    eager: boolean;
}>;
declare type VExpansionPanelText = InstanceType<typeof VExpansionPanelText>;

declare const VExpansionPanelTitle: vue.DefineComponent<{
    color: StringConstructor;
    expandIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    collapseIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    hideActions: BooleanConstructor;
    ripple: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    readonly: BooleanConstructor;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    color: StringConstructor;
    expandIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    collapseIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    hideActions: BooleanConstructor;
    ripple: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    readonly: BooleanConstructor;
}>>, {
    readonly: boolean;
    ripple: boolean | Record<string, any>;
    collapseIcon: IconValue;
    expandIcon: IconValue;
    hideActions: boolean;
}>;
declare type VExpansionPanelTitle = InstanceType<typeof VExpansionPanelTitle>;

export { VExpansionPanel, VExpansionPanelText, VExpansionPanelTitle, VExpansionPanels };
