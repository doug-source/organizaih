import { green, purple, white } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const inventory: DefaultTheme['inventory'] = {
    details: {
        defineItems: {
            bg: purple.lighten[3],
            color: white[1],
            entry: {
                bg: green.lighten[3],
            },
        },
    },
    form: {
        base: {
            submitBtn: {
                color: white[1],
            },
        },
    },
};
