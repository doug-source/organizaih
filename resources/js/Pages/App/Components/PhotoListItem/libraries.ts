import { DefaultTheme } from 'styled-components';

export const getImgTheme = (theme: DefaultTheme) => {
    return theme.measures.list.dataListItem.photo.img;
};
