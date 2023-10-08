import { transparency, white } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const reactLoading: DefaultTheme['reactLoading'] = {
    overlay: {
        bg: {
            color: transparency[13],
        },
    },
    svg: {
        fill: white[1],
    },
};
