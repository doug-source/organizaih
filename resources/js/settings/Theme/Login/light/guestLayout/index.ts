import { boxShadow, transparency, white } from '@/settings/palette';
import { LoginTheme } from '../..';

export const guestLayout: LoginTheme['login']['guestLayout'] = {
    container: {
        bg: white[6],
    },
    loginIcon: {
        fill: 'currentColor',
    },
    main: {
        bg: white[1],
        boxShadow: `${boxShadow[34]}, ${boxShadow[35]}`,
        border: {
            color: transparency[0],
        },
    },
};
