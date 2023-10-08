import { black, orange, red } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const selectProduct: DefaultTheme['selectProduct'] = {
    icon: {
        fill: {
            box: orange[2],
            tape: red[6],
            hand: black[1],
        },
    },
};
