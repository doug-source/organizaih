import { boxShadow, gray } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const addBtn: DefaultTheme['tools']['addBtn'] = {
    boxShadow: `${boxShadow[0]}, ${boxShadow[1]}, ${boxShadow[2]}`,
    bg: {
        color: gray[23],
    },
    border: {
        color: gray[23],
    },
    svg: {
        stroke: 'currentColor',
    },
};
