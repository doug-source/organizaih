import { transparency } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const btn: DefaultTheme['tools']['btn'] = {
    color: 'inherit',
    border: {
        color: transparency[0],
    },
};
