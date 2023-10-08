import { blue, gray, red } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const itemSaver: DefaultTheme['itemSaver'] = {
    list: {
        includeItem: {
            bg: blue.lighten[0],
            border: {
                color: gray[9],
            },
            btns: {
                include: {
                    icon: {
                        fill: red[7],
                    },
                },
                return: {
                    icon: {
                        fill: 'currentColor',
                        stroke: 'none',
                    },
                },
            },
        },
    },
    section: {
        border: {
            color: gray[9],
        },
    },
};
