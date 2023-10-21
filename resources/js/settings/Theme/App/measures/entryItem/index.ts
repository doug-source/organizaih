import { DefaultTheme } from 'styled-components';

export const entryItem: DefaultTheme['measures']['entryItem'] = {
    padding: 8,
    first: {
        border: {
            topRight: {
                radius: 8,
            },
        },
    },
    last: {
        border: {
            bottomRight: {
                radius: 8,
            },
        },
    },
};
