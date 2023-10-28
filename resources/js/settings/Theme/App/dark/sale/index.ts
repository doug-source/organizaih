import { blue, gray, green, purple, white } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const sale: DefaultTheme['sale'] = {
    form: {
        base: {
            notice: {
                bg: gray[18],
                color: white[1],
                value: {
                    bg: green.lighten[3],
                },
            },
            selectors: {
                customer: {
                    anonymousIcon: {
                        fill: 'currentColor',
                    },
                },
            },
        },
    },
    list: { item: { child: { color: blue.darken } } },
    details: {
        defineItems: {
            bg: purple.lighten[3],
            color: white[1],
            saleProducts: {
                icon: {
                    path: {
                        fill: white[1],
                    },
                },
                bg: green.lighten[3],
            },
        },
    },
};
