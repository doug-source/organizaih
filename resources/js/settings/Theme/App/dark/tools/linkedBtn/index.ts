import { boxShadow, gradient } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const linkedBtn: DefaultTheme['tools']['linkedBtn'] = {
    container: {
        bg: gradient.linear[2],
        boxShadow: boxShadow[13],
    },
    btn: {
        bg: gradient.linear[3],
        boxShadow: boxShadow[14],
        active: {
            boxShadow: boxShadow[15],
        },
    },
};
