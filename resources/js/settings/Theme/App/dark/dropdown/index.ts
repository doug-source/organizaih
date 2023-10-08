import { black, boxShadow, gradient, transparency } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const dropdown: DefaultTheme['dropdown'] = {
    bg: gradient.linear[1],
    border: {
        color: transparency[0],
    },
    boxShadow: boxShadow[12],
    pseudo: {
        before: {
            borderColor: {
                left: transparency[0],
                right: transparency[0],
                bottom: black[18],
            },
        },
        after: {
            borderColor: {
                left: transparency[0],
                right: transparency[0],
                top: black[18],
            },
        },
    },
};
