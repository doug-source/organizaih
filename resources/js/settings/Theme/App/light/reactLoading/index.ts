import { black, transparency } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const reactLoading: DefaultTheme['reactLoading'] = {
    overlay: {
        bg: {
            color: transparency[12],
        },
    },
    svg: {
        fill: black[2],
    },
};
