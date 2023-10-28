import { blue, green } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const selectCustomer: DefaultTheme['selectCustomer'] = {
    icon: {
        fill: {
            person: blue.lighten[1],
            hand: green[1],
        },
    },
};
