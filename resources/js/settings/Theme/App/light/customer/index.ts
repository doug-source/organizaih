import { black, blue, gradient } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';
import { routes } from '../routes';

export const customer: DefaultTheme['customer'] = {
    container: {
        color: routes.container.color,
    },
    details: {
        defineItem: {
            female: {
                bg: gradient.linear[7],
            },
            male: {
                bg: gradient.linear[6],
            },
            value: {
                female: {
                    color: blue[1],
                },
                male: {
                    color: black[2],
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
