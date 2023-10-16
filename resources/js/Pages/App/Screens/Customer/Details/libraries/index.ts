import { DefaultTheme } from 'styled-components';

export * from '@/Pages/App/Screens/Customer/Details/libraries/hooks';

export const makeLinearGradientStyle = (theme: DefaultTheme, sex: string) => {
    if (sex === 'M') {
        return theme.customer.details.defineItem.male.bg;
    }

    return theme.customer.details.defineItem.female.bg;
};

export const defineValueTextColor = (theme: DefaultTheme, sex: string) => {
    if (sex === 'M') {
        return theme.customer.details.defineItem.value.male.color;
    }
    return theme.customer.details.defineItem.value.female.color;
};
