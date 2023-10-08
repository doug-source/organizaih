import { black } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const config: DefaultTheme['config'] = {
    fieldset: {
        color: black[2],
        border: {
            color: black[2],
        },
        legend: {
            border: {
                color: black[2],
            },
        },
    },
};
