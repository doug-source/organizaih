import { black, gray } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const config: DefaultTheme['config'] = {
    fieldset: {
        color: gray[20],
        border: {
            color: black[7],
        },
        legend: {
            border: {
                color: black[2],
            },
        },
    },
};
