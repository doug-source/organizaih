import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

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
