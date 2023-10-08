import { blue, boxShadow, gray, textShadow } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const pagination: DefaultTheme['pagination'] = {
    groups: {
        btn: {
            color: 'inherit',
            bg: gray[23],
            boxShadow: `${boxShadow[0]}, ${boxShadow[1]}, ${boxShadow[2]}`,
            selected: {
                color: blue.lighten[5],
                textShadow: `${textShadow[0]}, ${textShadow[1]}`,
                bg: gray[23],
                after: {
                    boxShadow: boxShadow[7],
                },
            },
        },
    },
    page: {
        btn: {
            svg: {
                path: {
                    fill: blue.lighten[1],
                },
            },
        },
    },
};
