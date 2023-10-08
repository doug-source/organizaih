import { purple, white } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const stdBtn: DefaultTheme['tools']['stdBtn'] = {
    bg: purple.lighten[2],
    border: {
        color: purple.lighten[2],
    },
    boxShadow: 'none',
    color: white[1],
};
