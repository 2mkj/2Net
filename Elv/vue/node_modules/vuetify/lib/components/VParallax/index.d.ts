import * as vue from 'vue';

declare const VParallax: vue.DefineComponent<{
    scale: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    scale: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>>, {
    scale: string | number;
}>;
declare type VParallax = InstanceType<typeof VParallax>;

export { VParallax };
