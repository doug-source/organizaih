import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    ${({ theme }) => {
        const bgColor = theme.body.bg.color;
        return css`
            body {
                margin: 0;
                overflow: hidden;
                background-color: ${bgColor};
            }
        `;
    }}
`;
