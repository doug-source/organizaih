import { black, boxShadow, transparency } from '@/settings/palette';
import { GenericTheme } from '../..';

export const input: GenericTheme['generic']['input'] = {
    bg: black[9],
    border: {
        color: transparency[0],
    },
    boxShadow: `${boxShadow[5]}, ${boxShadow[6]}`,
    color: 'inherit',
    focus: {
        twRingColor: transparency[0],
        border: {
            color: transparency[0],
        },
    },
};
