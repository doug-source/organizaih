import { black, blue, transparency } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const product: DefaultTheme['product'] = {
    form: {
        base: {
            submitBtn: {
                color: 'inherit',
            },
            formItem: {
                categoryInfo: {
                    border: {
                        color: blue[19],
                    },
                },
            },
        },
    },
    itemSaver: {
        productsIcon: {
            fill: transparency[0],
        },
    },
    itemEditor: {
        productsIcon: {
            fill: transparency[0],
        },
    },
    defineItem: {
        icon: {
            path: {
                fill: transparency[0],
            },
        },
        value: {
            color: black[2],
        },
    },
};
