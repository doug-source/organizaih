import { white } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';
import { tools } from '../tools';

export const productCategory: DefaultTheme['productCategory'] = {
    form: {
        base: {
            submitBtn: {
                color: white[1],
            },
        },
    },
    tools: {
        categoriesBtn: tools.stdBtn,
    },
};
