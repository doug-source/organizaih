import { red } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const formItem: DefaultTheme['formItem'] = {
    error: {
        color: red[3],
    },
    errorMsg: {
        bg: red[5],
        color: red[3],
        border: {
            color: red[4],
        },
    },
};
