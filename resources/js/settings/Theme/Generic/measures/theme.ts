import { ThemeKey } from '@/settings';

export type GenericThemeMeasures = {
    fields: {
        border: {
            width: number;
        };
        borderRadius: number;
        fontSize: number;
        lineHeight: number;
        padding: {
            top: number;
            bottom: number;
            left: number;
            right: number;
        };
    };
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
    gate: {
        btn: {
            border: {
                width: number;
            };
            margin: {
                top: number;
            };
        };
        fieldMessage: {
            margin: {
                left: number;
            };
            fontSize: number;
            lineHeight: number;
        };
        guestLayout: {
            container: {
                padding: {
                    top: number;
                };
                minHeight: string;
                wide: {
                    padding: {
                        top: number;
                    };
                };
            };
            loginIcon: {
                size: number;
            };
            main: {
                padding: {
                    top: number;
                    bottom: number;
                    left: number;
                    right: number;
                };
                margin: {
                    top: number;
                };
                wide: {
                    borderRadius: number;
                    maxWidth: number;
                    width: string;
                    border: {
                        width: Record<ThemeKey, number>;
                    };
                };
            };
        };
        label: {
            fontSize: number;
            fontWeight: number;
            lineHeight: number;
        };
        textInput: {
            borderRadius: number;
            margin: {
                top: number;
            };
            width: string;
        };
    };
};
