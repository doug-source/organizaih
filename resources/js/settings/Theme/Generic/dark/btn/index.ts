import { transparency } from '@/settings/palette';
import { GenericTheme } from '../..';

export const btn: GenericTheme['generic']['btn'] = {
    color: 'inherit',
    border: {
        color: transparency[0],
    },
};
