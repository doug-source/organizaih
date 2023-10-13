import { DefaultTheme } from 'styled-components';

export const getPrimaryBtnTheme = (theme: DefaultTheme) => {
    return theme.list.dataListItem.btns.primary;
};

export const getBtnsMeasures = (theme: DefaultTheme) => {
    return theme.measures.list.dataListItem.btns;
};
