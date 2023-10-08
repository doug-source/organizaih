import { DefaultTheme } from 'styled-components';

export const inputRequest: DefaultTheme['measures']['tools']['inputRequest'] = {
    btn: {
        border: {
            width: 0,
        },
        active: {
            transform: {
                translate: {
                    x: 0,
                    y: 2,
                },
            },
        },
    },
    input: {
        width: 177,
    },
    label: {
        gap: 8,
    },
};
