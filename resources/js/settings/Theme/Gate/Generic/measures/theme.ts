import { ThemeKey } from '@/settings';

export type GateGenericThemeMeasures = {
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
    googleCredentials: {
        row: {
            margin: {
                top: number;
            };
            borderRadius: number;
            border: {
                width: number;
            };
        };
        icon: {
            size: number;
        };
        text: {
            font: {
                size: number;
                weight: number;
            };
            lineHeight: number;
        };
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
