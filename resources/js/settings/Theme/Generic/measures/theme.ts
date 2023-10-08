import { ThemeKey } from '@/settings';

export type GenericThemeMeasures = {
    input: {
        border: {
            radius: number;
            width: Record<ThemeKey, number>;
        };
        fontSize: number;
        lineHeight: number;
        padding: {
            left: number;
            right: number;
            top: number;
            bottom: number;
        };
        textIndent: number;
        wide: {
            textIndent: number;
        };
    };
    btn: {
        border: {
            width: number;
            radius: number;
        };
        fontSize: number;
        lineHeight: number;
        padding: {
            left: number;
            right: number;
            wide: {
                top: number;
                bottom: number;
            };
        };
    };
};
