import { blue, boxShadow, gray, red } from '@/settings/palette';
import { LoginTheme } from '../..';

export const auth: LoginTheme['login']['auth'] = {
    checkbox: {
        border: {
            color: gray[36],
        },
        boxShadow: boxShadow[40],
        color: blue[3],
    },
    fieldError: {
        color: red[8],
    },
    label: {
        color: 'inherit',
    },
    input: {
        border: {
            color: gray[36],
        },
        boxShadow: boxShadow[40],
    },
};
