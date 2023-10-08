import { purple } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const linkedBtn: DefaultTheme['tools']['linkedBtn'] = {
    container: {
        bg: purple.lighten[2],
        boxShadow: 'none',
    },
    btn: {
        bg: purple.lighten[2],
        boxShadow: 'none',
        active: {
            boxShadow: 'none',
        },
    },
};
