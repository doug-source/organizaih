import {
    blue,
    gradient,
    gray,
    red,
    transparency,
    white,
} from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const list: DefaultTheme['list'] = {
    empty: {
        bg: {
            color: transparency[7],
            image: gradient.linear[8],
        },
        color: blue.darken,
    },
    item: {
        hover: {
            color: blue.darken,
        },
    },
    dataListItem: {
        bg: {
            color: white[1],
        },
        border: {
            top: {
                color: gray[25],
            },
        },
        color: 'inherit',
        photo: {
            img: {
                overview: {
                    bg: {
                        color: white[1],
                    },
                },
            },
        },
        btns: {
            boxShadow: 'none',
            primary: {
                bg: {
                    color: blue[4],
                },
                border: {
                    color: blue[4],
                },
                svg: {
                    path: {
                        stroke: 'currentColor',
                        fill: 'currentColor',
                    },
                },
            },
            danger: {
                bg: {
                    color: red[2],
                },
                border: {
                    color: red[2],
                },
                svg: {
                    path: {
                        stroke: 'currentColor',
                        fill: 'currentColor',
                    },
                },
            },
        },
    },
};
