import * as vue from 'vue';
import { JSXComponent, PropType } from 'vue';

declare const block: readonly ["top", "bottom"];
declare const inline: readonly ["start", "end", "left", "right"];
declare type Tblock = typeof block[number];
declare type Tinline = typeof inline[number];
declare type Anchor = Tblock | Tinline | 'center' | 'center center' | `${Tblock} ${Tinline | 'center'}` | `${Tinline} ${Tblock | 'center'}`;

declare type IconValue = string | JSXComponent;
declare const IconValue: PropType<IconValue>;

declare const VBadge: vue.DefineComponent<{
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        });
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    location: {
        type: vue.PropType<Anchor | (Anchor & {})>;
        default: Anchor | (Anchor & {});
    };
    bordered: BooleanConstructor;
    color: StringConstructor;
    content: (StringConstructor | NumberConstructor)[];
    dot: BooleanConstructor;
    floating: BooleanConstructor;
    icon: vue.PropType<IconValue>;
    inline: BooleanConstructor;
    label: {
        type: StringConstructor;
        default: string;
    };
    max: (StringConstructor | NumberConstructor)[];
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    offsetX: (StringConstructor | NumberConstructor)[];
    offsetY: (StringConstructor | NumberConstructor)[];
    textColor: StringConstructor;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        });
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    location: {
        type: vue.PropType<Anchor | (Anchor & {})>;
        default: Anchor | (Anchor & {});
    };
    bordered: BooleanConstructor;
    color: StringConstructor;
    content: (StringConstructor | NumberConstructor)[];
    dot: BooleanConstructor;
    floating: BooleanConstructor;
    icon: vue.PropType<IconValue>;
    inline: BooleanConstructor;
    label: {
        type: StringConstructor;
        default: string;
    };
    max: (StringConstructor | NumberConstructor)[];
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    offsetX: (StringConstructor | NumberConstructor)[];
    offsetY: (StringConstructor | NumberConstructor)[];
    textColor: StringConstructor;
}>>, {
    inline: boolean;
    location: Anchor | (Anchor & {});
    transition: string | boolean | (vue.TransitionProps & {
        component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
    });
    label: string;
    tag: string;
    dot: boolean;
    rounded: string | number | boolean;
    floating: boolean;
    modelValue: boolean;
    bordered: boolean;
}>;
declare type VBadge = InstanceType<typeof VBadge>;

export { VBadge };
