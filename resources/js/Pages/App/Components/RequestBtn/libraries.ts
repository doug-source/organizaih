import { DefaultTheme } from 'styled-components';

export const getTranslateStyle = (theme: DefaultTheme) => {
    return theme.measures.tools.inputRequest.btn.active.transform.translate;
};
