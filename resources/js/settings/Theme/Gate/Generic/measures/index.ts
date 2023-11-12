import { GateGenericThemeMeasures } from '@/settings/Theme/Gate/Generic/measures/theme';

export const measures: GateGenericThemeMeasures = {
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
    googleCredentials: {
        row: {
            margin: {
                top: 8,
            },
            borderRadius: 8,
            border: {
                width: 1,
            },
        },
        icon: {
            size: 40,
        },
        text: {
            font: {
                size: 14,
                weight: 500,
            },
            lineHeight: 20,
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
        gateIcon: {
            size: 80,
        },
        loadingIcon: {
            size: 30,
            top: 10,
            height: '100%',
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
