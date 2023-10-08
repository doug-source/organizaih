import { black, blue, gray, green, purple, white } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const sale: DefaultTheme['sale'] = {
    form: {
        base: {
            submitBtn: {
                color: 'inherit',
            },
            notice: {
                bg: gray[18],
                color: white[1],
                value: {
                    bg: green.lighten[3],
                },
            },
            saleSelectors: {
                icons: {
                    customer: {
                        fill: {
                            person: blue.lighten[1],
                            hand: black[1],
                        },
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
