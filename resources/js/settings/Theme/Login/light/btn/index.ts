import { white } from '@/settings/palette';
import { LoginTheme } from '../..';

export const btn: LoginTheme['login']['btn'] = {
    bg: 'currentColor',
    boxShadow: `none`,
    text: {
        color: white[1],
    },
    active: {
        boxShadow: 'none',
    },
};
