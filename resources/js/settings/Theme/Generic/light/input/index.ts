import { gray, transparency, white } from '@/settings/palette';
import { GenericTheme } from '../..';

export const input: GenericTheme['generic']['input'] = {
    bg: white[1],
    border: {
        color: gray[9],
    },
    boxShadow: 'none',
    color: 'inherit',
    focus: {
        twRingColor: transparency[0],
        border: {
            color: gray[9],
        },
    },
};
