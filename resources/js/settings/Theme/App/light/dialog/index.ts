import {
    boxShadow,
    gradient,
    gray,
    transparency,
    white,
} from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const dialog: DefaultTheme['dialog'] = {
    closeIcon: {
        fill: gray[35],
    },
    footer: {
        btn: {
            active: {
                boxShadow: boxShadow[27],
            },
            boxShadow: `${boxShadow[23]}, ${boxShadow[24]}, ${boxShadow[25]}`,
            bg: gradient.radial[2],
            color: white[1],
            hover: {
                boxShadow: `${boxShadow[28]}, ${boxShadow[29]}, ${boxShadow[30]}`,
            },
        },
    },
    overlay: {
        bg: {
            color: transparency[1],
        },
    },
    section: {
        bg: white[1],
    },
};
