import { boxShadow, gradient, gray, transparency } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const gateSwitcher: DefaultTheme['gateSwitcher'] = {
    label: {
        after: {
            bg: gradient.linear[5],
            boxShadow: `${boxShadow[21]}, ${boxShadow[22]}`,
        },
        before: {
            bg: gray[33],
        },
        color: 'inherit',
    },
    switch: {
        checked: {
            label: {
                bg: transparency[7],
            },
        },
    },
};
