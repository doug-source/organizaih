import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    ${({ theme }) => {
        const bodyTheme = theme.gate.body;
        return css`
            body {
                margin: 0;
                overflow: hidden;
                color: ${bodyTheme.color};
            }
            a,
            a:link,
            a:visited,
            a:hover,
            a:active {
                color: inherit;
                text-decoration: none;
                outline: 0;
            }
        `;
    }}
`;
