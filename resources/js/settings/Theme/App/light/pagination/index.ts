import { black, gray, white } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const pagination: DefaultTheme['pagination'] = {
    groups: {
        btn: {
            color: black[2],
            bg: gray[2],
            boxShadow: 'none',
            selected: {
                color: white[3],
                textShadow: 'none',
                bg: gray[8],
                after: {
                    boxShadow: 'none',
                },
            },
        },
    },
    page: {
        btn: {
            svg: {
                path: {
                    fill: black[1],
                },
            },
        },
    },
};
