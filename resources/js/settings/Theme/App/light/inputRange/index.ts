import { blue, gray, transparency, white } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const inputRange: DefaultTheme['inputRange'] = {
    qtyText: {
        fill: gray[17],
    },
    refLine: {
        stroke: {
            color: 'currentColor',
        },
    },
    rect: {
        fill: gray[17],
        selected: {
            fill: blue[20],
        },
    },
    slider: {
        control: {
            active: {
                bg: blue[9],
                boxShadow: 'none',
            },
            bg: blue[9],
            boxShadow: 'none',
            color: white[1],
            hover: {
                bg: blue[18],
            },
            icon: {
                before: {
                    actived: {
                        color: white[1],
                        textShadow: 'none',
                    },
                    textShadow: 'none',
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
                bg: transparency[0],
            },
        },
        pack: {
            after: {
                edgeLower: {
                    bg: gray[12],
                },
            },
            before: {
                edgeUpper: {
                    bg: gray[13],
                },
            },
            bg: blue.lighten[3],
        },
        stdBorder: {
            bg: gray[12],
        },
    },
};
