import { blue, transparency } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const dropdown: DefaultTheme['dropdown'] = {
    bg: transparency[0],
    border: {
        color: blue[19],
    },
    boxShadow: 'none',
    pseudo: {
        before: {
            borderColor: {
                left: transparency[0],
                right: transparency[0],
                bottom: blue[19],
            },
        },
        after: {
            borderColor: {
                left: transparency[0],
                right: transparency[0],
                top: blue[19],
            },
        },
    },
};
