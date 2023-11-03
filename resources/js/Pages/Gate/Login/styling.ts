import { remOutput } from '@/libraries/toolbox/Styling';
import { createGlobalStyle, css, styled } from 'styled-components';

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

export const Link_ = styled.a`
    ${({ theme }) => {
        const forgotPassTheme = theme.login.forgotPassword;
        const linkMeasure = theme.login.measures.link;
        return css`
            border-radius: ${remOutput(linkMeasure.borderRadius)};
            font-size: ${remOutput(linkMeasure.fontSize)};
            line-height: ${remOutput(linkMeasure.lineHeight)};
            color: ${forgotPassTheme.color};
            text-decoration: underline;

            &:hover {
                color: ${forgotPassTheme.hover.color};
            }
        `;
    }}
`;
