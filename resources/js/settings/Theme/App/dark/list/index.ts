import {
    black,
    blue,
    boxShadow,
    gray,
    transparency,
    white,
} from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const list: DefaultTheme['list'] = {
    empty: {
        bg: {
            color: black[13],
            image: 'none',
        },
        color: white[3],
    },
    item: {
        hover: {
            color: blue.darken,
        },
    },
    pack: {
        bg: {
            color: black[13],
        },
        border: {
            top: {
                color: transparency[0],
            },
        },
        color: 'inherit',
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
    dataListItem: {
        photo: {
            img: {
                overview: {
                    bg: {
                        color: white[1],
                    },
                },
            },
        },
    },
};
