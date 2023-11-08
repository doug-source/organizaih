import { measures } from '@/settings/Theme/Gate/Generic/measures';
import { GateGenericTheme } from '@/settings/Theme/Gate/Generic/theme';
import {
    black,
    boxShadow,
    gradient,
    gray,
    green,
    red,
    white,
} from '@/settings/palette';

export const DarkTheme: GateGenericTheme = {
    gate: {
        measures,

        btn: {
            bg: gradient.linear[0],
            boxShadow: `${boxShadow[36]}, ${boxShadow[37]}`,
            text: {
                color: white[1],
            },
            active: {
                boxShadow: `${boxShadow[38]}, ${boxShadow[39]}`,
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
                bg: black[6],
            },
            loginIcon: {
                fill: 'currentColor',
            },
            main: {
                bg: black[4],
                boxShadow: 'none',
                border: {
                    color: black[7],
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
    },
};
