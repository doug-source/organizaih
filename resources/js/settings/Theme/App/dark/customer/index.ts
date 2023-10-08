import { black } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';
import { routes } from '../routes';

export const customer: DefaultTheme['customer'] = {
    container: {
        color: routes.container.color,
    },
    details: {
        defineItem: {
            female: {
                bg: black[13],
            },
            male: {
                bg: black[13],
            },
            value: {
                female: {
                    color: 'inherit',
                },
                male: {
                    color: 'inherit',
                },
            },
        },
    },
    list: {
        photo: {
            svg: {
                fill: 'currentColor',
            },
        },
    },
};
