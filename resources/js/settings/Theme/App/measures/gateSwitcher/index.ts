import { DefaultTheme } from 'styled-components';

const switchHeight = 30;
const switchWidth = 55;
const switchPadding = 1;
const sizeCircle = switchHeight - 2 * switchPadding;
const pathCircle = switchWidth - switchHeight;

export const gateSwitcher: DefaultTheme['measures']['gateSwitcher'] = {
    label: {
        after: {
            border: {
                radius: sizeCircle,
            },
            height: sizeCircle,
            left: 1,
            width: sizeCircle,
        },
        fontSize: 14,
        lineHeight: switchHeight,
        before: {
            border: {
                radius: 500,
            },
            height: switchHeight,
            margin: {
                right: 8,
            },
            width: switchWidth,
        },
        switchTextX: {
            margin: {
                right: 6.4,
            },
        },
    },
    switch: {
        checked: {
            label: {
                transform: {
                    translate: [pathCircle, 0],
                },
            },
        },
    },
};
