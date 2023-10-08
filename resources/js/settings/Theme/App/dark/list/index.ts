import {
    black,
    blue,
    boxShadow,
    gradient,
    gray,
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
            color: black[13],
        },
        border: {
            top: {
                color: transparency[0],
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
            boxShadow: `${boxShadow[0]}, ${boxShadow[1]}, ${boxShadow[2]}`,
            primary: {
                bg: {
                    color: gray[23],
                },
                border: {
                    color: gray[23],
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
                    color: gray[23],
                },
                border: {
                    color: gray[23],
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
