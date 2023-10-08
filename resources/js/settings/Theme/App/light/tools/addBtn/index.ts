import { purple, white } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const addBtn: DefaultTheme['tools']['addBtn'] = {
    boxShadow: 'none',
    bg: {
        color: purple.lighten[2],
    },
    border: {
        color: purple.lighten[2],
    },
    svg: {
        stroke: white[1],
    },
};
