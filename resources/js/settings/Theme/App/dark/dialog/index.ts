import {
    black,
    boxShadow,
    gradient,
    gray,
    transparency,
    white,
} from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const dialog: DefaultTheme['dialog'] = {
    color: white[3],
    closeIcon: {
        fill: gray[35],
    },
    footer: {
        btn: {
            active: {
                boxShadow: boxShadow[27],
            },
            boxShadow: boxShadow[27],
            bg: gradient.radial[3],
            color: white[1],
            hover: {
                boxShadow: `${boxShadow[28]}, ${boxShadow[29]}, ${boxShadow[31]}`,
            },
        },
    },
    main: {
        paragraph: {
            color: 'currentColor',
        },
    },
    overlay: {
        bg: {
            color: transparency[13],
        },
    },
    section: {
        bg: black[6],
    },
};
