import { boxShadow, gradient } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const confirmDialog: DefaultTheme['confirm'] = {
    footer: {
        btn: {
            no: {
                active: {
                    boxShadow: boxShadow[27],
                },
                bg: gradient.radial[3],
                hover: {
                    boxShadow: `${boxShadow[28]}, ${boxShadow[29]}, ${boxShadow[31]}`,
                },
            },
        },
    },
};
