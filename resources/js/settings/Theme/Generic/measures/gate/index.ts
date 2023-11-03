import { GenericThemeMeasures } from '../theme';

export const gate: GenericThemeMeasures['gate'] = {
    textInput: {
        borderRadius: 6,
        margin: {
            top: 4,
        },
        width: '100%',
    },
    btn: {
        border: {
            width: 0,
        },
        margin: {
            top: 16,
        },
    },
    fieldMessage: {
        fontSize: 14,
        lineHeight: 20,
        margin: {
            left: 8,
        },
    },
    guestLayout: {
        container: {
            padding: {
                top: 24,
            },
            minHeight: '100vh',
            wide: {
                padding: {
                    top: 0,
                },
            },
        },
        loginIcon: {
            size: 80,
        },
        main: {
            padding: {
                top: 16,
                bottom: 16,
                left: 24,
                right: 24,
            },
            margin: {
                top: 24,
            },
            wide: {
                borderRadius: 8,
                maxWidth: 448,
                width: '100%',
                border: {
                    width: {
                        light: 0,
                        dark: 1,
                    },
                },
            },
        },
    },
    label: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 20,
    },
};
