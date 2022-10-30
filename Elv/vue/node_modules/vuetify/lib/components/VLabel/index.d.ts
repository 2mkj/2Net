import * as vue from 'vue';

declare const VLabel: vue.DefineComponent<{
    theme: StringConstructor;
    text: StringConstructor;
    clickable: BooleanConstructor;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    text: StringConstructor;
    clickable: BooleanConstructor;
}>>, {
    clickable: boolean;
}>;
declare type VLabel = InstanceType<typeof VLabel>;

export { VLabel };
