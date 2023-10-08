import { boxShadow, gradient } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const confirmDialog: DefaultTheme['confirm'] = {
    footer: {
        btn: {
            no: {
                active: {
                    boxShadow: `${boxShadow[32]}`,
                },
                bg: gradient.radial[4],
                hover: {
                    boxShadow: `${boxShadow[28]}, ${boxShadow[29]}, ${boxShadow[31]}`,
                },
            },
        },
    },
};
