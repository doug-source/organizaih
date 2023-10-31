import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    ${({ theme }) => {
        const bodyTheme = theme.login.body;
        return css`
            body {
                margin: 0;
                overflow: hidden;
                color: ${bodyTheme.color};
            }
        `;
    }}
`;
