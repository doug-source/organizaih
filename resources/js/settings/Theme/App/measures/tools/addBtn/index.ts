import { DefaultTheme } from 'styled-components';

export const addBtn: DefaultTheme['measures']['tools']['addBtn'] = {
    wide: {
        height: 42,
    },
    svg: {
        width: 15,
        height: '100%',
        path: {
            stroke: {
                width: 80,
            },
        },
    },
    hover: {
        transform: {
            translate: {
                x: 0,
                y: -2,
            },
        },
    },
    active: {
        transform: {
            translate: {
                x: 0,
                y: 0,
            },
        },
    },
};
