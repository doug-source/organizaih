import { boxShadow, gradient, transparency } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const stdBtn: DefaultTheme['tools']['stdBtn'] = {
    bg: gradient.linear[0],
    border: {
        color: transparency[0],
    },
    boxShadow: `${boxShadow[10]}, ${boxShadow[11]}`,
    color: 'inherit',
};
