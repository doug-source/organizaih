import { LoadingIcon } from '@/Components';
import { remOutput } from '@/libraries';
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

export const LoadingIcon_ = styled(LoadingIcon)`
    ${({ theme }) => {
        const iconMeasure = theme.login.measures.loadingIcon.icon;
        const iconTheme = theme.login.loadingIcon;
        return css`
            position: absolute;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            svg {
                position: absolute;
                top: ${remOutput(iconMeasure.top)};
                height: ${iconMeasure.height};
                fill: ${iconTheme.fill};
            }
        `;
    }}
`;
