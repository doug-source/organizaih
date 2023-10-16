import {
    black,
    blue,
    boxShadow,
    gray,
    pink,
    transparency,
    white,
} from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const radioToggle: DefaultTheme['radioToggle'] = {
    label: {
        bg: white[1],
        border: {
            color: gray[5],
        },
        boxShadow: boxShadow[33],
        colorNot: black[1],
    },
    male: {
        bg: blue.lighten[2],
        border: {
            color: blue.lighten[2],
        },
        color: white[1],
        shadowColor: transparency[3],
    },
    female: {
        bg: pink[3],
        border: {
            color: pink[3],
        },
        color: white[1],
        shadowColor: transparency[4],
    },
};
