import { DefaultTheme } from 'styled-components';

export const defineItem: DefaultTheme['measures']['defineItem'] = {
    border: {
        radius: 3,
    },
    first: {
        minHeight: 96,
        padding: {
            left: 94,
        },
    },
    remain: {
        padding: {
            left: 8,
        },
    },
    label: {
        fontSize: 12,
    },
    value: {
        fontSize: 20,
    },
};
