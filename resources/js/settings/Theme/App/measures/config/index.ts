import { DefaultTheme } from 'styled-components';

export const config: DefaultTheme['measures']['config'] = {
    icon: {
        size: 38,
        wrapper: {
            gap: 8,
        },
    },
    fieldset: {
        border: {
            width: 1,
        },
        borderRadius: 8,
        padding: 8,
        legend: {
            border: {
                width: 1,
                radius: 8,
            },
            padding: {
                top: 0,
                bottom: 0,
                left: 8,
                right: 8,
            },
            margin: {
                left: 12,
            },
        },
        label: {
            fontSize: 16,
        },
        siblings: {
            margin: {
                top: 8,
            },
        },
    },
    langSwitcher: {
        padding: 10,
        flag: {
            width: 38,
            wide: {
                margin: {
                    left: 16,
                },
            },
            wrapper: {
                gap: 8,
            },
        },
    },
};
