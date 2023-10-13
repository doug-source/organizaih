import { DefaultTheme } from 'styled-components';

export const getDangerBtnTheme = (theme: DefaultTheme) => {
    return theme.list.dataListItem.btns.danger;
};

export const getBtnsMeasures = (theme: DefaultTheme) => {
    return theme.measures.list.dataListItem.btns;
};
