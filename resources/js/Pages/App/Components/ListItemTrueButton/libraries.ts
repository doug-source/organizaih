import { DefaultTheme } from 'styled-components';

export const getTrueBtnTheme = (theme: DefaultTheme) => {
    return theme.list.btns.true;
};

export const getBtnsMeasures = (theme: DefaultTheme) => {
    return theme.measures.list.btns;
};
