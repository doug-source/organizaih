import { DefaultTheme } from 'styled-components';

export const radioToggle: DefaultTheme['measures']['radioToggle'] = {
    label: {
        padding: {
            top: 12,
            bottom: 12,
            left: 32,
            right: 32,
        },
        border: {
            width: 1,
        },
        fontSize: 16,
        lineHeight: '140%',
        edgeLeftBorderRadius: [6, 0, 0, 6],
        edgeRightBorderRadius: [0, 6, 6, 0],
        edgeBorderRadius: [6, 0, 0, 6],
    },
};
