import {
    boxShadow,
    gray,
    green,
    red,
    transparency,
    white,
} from '@/settings/palette';
import { GenericTheme } from '../..';

export const gate: GenericTheme['generic']['gate'] = {
    btn: {
        bg: 'currentColor',
        boxShadow: `none`,
        text: {
            color: white[1],
        },
        active: {
            boxShadow: 'none',
        },
    },
    fieldMessage: {
        error: {
            color: red[8],
        },
        success: {
            color: green.lighten[2],
        },
    },
    guestLayout: {
        container: {
            bg: white[6],
        },
        loginIcon: {
            fill: 'currentColor',
        },
        main: {
            bg: white[1],
            boxShadow: `${boxShadow[34]}, ${boxShadow[35]}`,
            border: {
                color: transparency[0],
            },
        },
    },
    inputText: {
        border: {
            color: gray[36],
        },
        boxShadow: boxShadow[40],
    },
    label: {
        color: 'inherit',
    },
};
