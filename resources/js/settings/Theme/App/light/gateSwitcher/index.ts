import { blue, boxShadow, gray, transparency, white } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const gateSwitcher: DefaultTheme['gateSwitcher'] = {
    label: {
        color: gray[8],
        before: {
            bg: blue[9],
        },
        after: {
            bg: white[1],
            boxShadow: `${boxShadow[18]}, ${boxShadow[19]}, ${boxShadow[20]}`,
        },
    },
    switch: {
        checked: {
            label: {
                bg: transparency[7],
            },
        },
    },
};
