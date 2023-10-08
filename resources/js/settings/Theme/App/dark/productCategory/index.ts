import { DefaultTheme } from 'styled-components';
import { tools } from '../tools';

export const productCategory: DefaultTheme['productCategory'] = {
    form: {
        base: {
            submitBtn: {
                color: 'inherit',
            },
        },
    },
    tools: {
        categoriesBtn: {
            ...tools.stdBtn,
            color: 'currentColor',
        },
    },
};
