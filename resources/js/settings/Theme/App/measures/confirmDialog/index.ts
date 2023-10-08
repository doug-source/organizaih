import { DefaultTheme } from 'styled-components';

export const confirmDialog: DefaultTheme['measures']['confirmDialog'] = {
    footer: {
        btn: {
            active: {
                transform: {
                    translate: [0, 2],
                },
            },
            border: {
                radius: 6,
            },
            height: 48,
            hover: {
                transform: {
                    translate: [0, -2],
                },
            },
            padding: 32,
            yes: {
                margin: {
                    left: 16,
                },
            },
        },
    },
};
