import { black, blue, gray } from '@/settings/palette';
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
    userInfo: {
        icon: {
            details: {
                glass: {
                    fill: blue[21],
                },
                frame: {
                    fill: gray[10],
                },
            },
            edit: {
                fill: gray[10],
            },
        },
    },
};
