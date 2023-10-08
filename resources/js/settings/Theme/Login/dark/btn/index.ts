import { boxShadow, gradient, white } from '@/settings/palette';
import { LoginTheme } from '../..';

export const btn: LoginTheme['login']['btn'] = {
    bg: gradient.linear[0],
    boxShadow: `${boxShadow[36]}, ${boxShadow[37]}`,
    text: {
        color: white[1],
    },
    active: {
        boxShadow: `${boxShadow[38]}, ${boxShadow[39]}`,
    },
};
