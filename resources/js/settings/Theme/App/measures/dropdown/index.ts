import { DefaultTheme } from 'styled-components';

export const dropdown: DefaultTheme['measures']['dropdown'] = {
    border: {
        width: {
            dark: 0,
            light: 1,
        },
        radius: {
            dark: 0,
            light: 8,
        },
    },
    textIndent: 4,
    pseudo: {
        size: 8,
        before: {
            transform: {
                translate: {
                    x: '-100%',
                    y: '-70%',
                },
            },
            borderWidth: {
                left: 4,
                right: 4,
                bottom: 8,
            },
        },
        after: {
            transform: {
                translate: {
                    x: '-100%',
                    y: '70%',
                },
            },
            borderWidth: {
                left: 4,
                right: 4,
                top: 8,
            },
        },
    },
};
