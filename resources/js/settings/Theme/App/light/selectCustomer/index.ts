import { black, blue } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const selectCustomer: DefaultTheme['selectCustomer'] = {
    icon: {
        fill: {
            person: blue.lighten[1],
            hand: black[1],
        },
    },
};
