import { measures } from '@/settings/Theme/Gate/Generic/measures';
import { GateGenericTheme } from '@/settings/Theme/Gate/Generic/theme';
import {
    black,
    boxShadow,
    gray,
    green,
    red,
    transparency,
    white,
} from '@/settings/palette';

export const LightTheme: GateGenericTheme = {
    gate: {
        measures,

        body: {
            color: black[26],
        },
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
            gateIcon: {
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
    },
};
