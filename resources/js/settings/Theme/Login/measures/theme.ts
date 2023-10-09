import { ThemeKey } from '@/settings';

export type LoginThemeMeasures = {
    auth: {
        form: {
            btn: {
                border: {
                    width: number;
                };
                margin: {
                    top: number;
                };
            };
            checkbox: {
                borderRadius: number;
            };
            fieldError: {
                margin: {
                    left: number;
                };
                fontSize: number;
                lineHeight: number;
            };
            input: {
                borderRadius: number;
            };
            label: {
                fontSize: number;
                fontWeight: number;
                lineHeight: number;
            };
        };
    };
    fourthRow: {
        margin: {
            top: number;
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
    input: {
        margin: {
            top: number;
        };
        width: string;
    };
    link: {
        borderRadius: number;
        fontSize: number;
        lineHeight: number;
    };
    loadingIcon: {
        size: number;
        icon: {
            top: number;
            height: string;
        };
    };
    remember: {
        marginLeft: number;
        fontSize: number;
        lineHeight: number;
    };
    row: {
        margin: {
            top: number;
        };
    };
    secondRow: {
        margin: {
            top: number;
        };
    };
    thirdRow: {
        margin: {
            top: number;
        };
    };
};
