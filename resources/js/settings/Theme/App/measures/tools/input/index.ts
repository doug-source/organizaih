import { DefaultTheme } from 'styled-components';

export const input: DefaultTheme['measures']['tools']['input'] = {
    border: {
        radius: 5,
        width: {
            dark: 0,
            light: 1,
        },
    },
    fontSize: 16,
    lineHeight: 24,
    padding: {
        top: 8,
        bottom: 8,
        left: 0,
        right: 0,
    },
    textIndent: 8,
    wide: {
        textIndent: 16,
        padding: {
            right: 12,
        },
    },
};
