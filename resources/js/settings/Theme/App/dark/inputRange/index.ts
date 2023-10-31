import {
    black,
    boxShadow,
    gradient,
    gray,
    textShadow,
    transparency,
    white,
} from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const inputRange: DefaultTheme['inputRange'] = {
    qtyText: {
        fill: 'currentColor',
    },
    refLine: {
        stroke: {
            color: 'currentColor',
        },
    },
    rect: {
        fill: gray[17],
        selected: {
            fill: black[23],
        },
    },
    slider: {
        control: {
            active: {
                bg: gradient.linear[4],
                boxShadow: `${boxShadow[16]}, ${boxShadow[17]}`,
            },
            bg: gradient.linear[0],
            boxShadow: `${boxShadow[10]}, ${boxShadow[11]}`,
            color: 'inherit',
            hover: {
                bg: gradient.linear[4],
            },
            icon: {
                before: {
                    actived: {
                        color: black[25],
                        textShadow: textShadow[3],
                    },
                    textShadow: textShadow[2],
                },
            },
        },
        currentValue: {
            after: {
                border: {
                    bottom: {
                        color: transparency[0],
                    },
                    top: {
                        color: transparency[0],
                    },
                    right: {
                        color: gray[16],
                    },
                },
            },
            bg: gray[16],
            color: white[1],
        },
        label: {
            color: 'inherit',
        },
        leftBorder: {
            before: {
                bg: black[6],
            },
        },
        pack: {
            after: {
                edgeLower: {
                    bg: gray[30],
                },
            },
            before: {
                edgeUpper: {
                    bg: gray[30],
                },
            },
            bg: gray[17],
        },
        stdBorder: {
            bg: gray[12],
        },
    },
};
