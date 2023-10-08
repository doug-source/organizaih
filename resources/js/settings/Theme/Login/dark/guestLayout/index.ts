import { black } from '@/settings/palette';
import { LoginTheme } from '../..';

export const guestLayout: LoginTheme['login']['guestLayout'] = {
    container: {
        bg: black[6],
    },
    loginIcon: {
        fill: 'currentColor',
    },
    main: {
        bg: black[4],
        boxShadow: 'none',
        border: {
            color: black[7],
        },
    },
};
