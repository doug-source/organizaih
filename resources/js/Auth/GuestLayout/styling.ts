import { LoginIcon, remOutput } from '@/libraries';
import styled, { css } from 'styled-components';

export const Container_ = styled.div`
    ${({ theme }) => {
        const { wideScreen, mediumScreen } = theme.measures;
        const loginTheme = theme.login;
        const containerMeasure = loginTheme.measures.guestLayout.container;
        const containerTheme = loginTheme.guestLayout.container;
        return css`
            display: flex;
            padding-top: ${remOutput(containerMeasure.padding.top)};
            flex-direction: column;
            align-items: center;
            min-height: ${containerMeasure.minHeight};
            background: ${containerTheme.bg};

            @media ${mediumScreen} {
                padding-top: ${remOutput(containerMeasure.wide.padding.top)};
                justify-content: center;
            }
            @media ${wideScreen} {
                padding-top: ${remOutput(containerMeasure.wide.padding.top)};
                justify-content: center;
            }
        `;
    }}
`;

export const LoginIconLink_ = styled.a`
    color: inherit;
    display: table;
    margin: auto;
    position: relative;
`;

export const LoginIcon_ = styled(LoginIcon)`
    ${({ theme }) => {
        const loginTheme = theme.login;
        const loginIconMeasure = loginTheme.measures.guestLayout.loginIcon;
        const loginIconTheme = loginTheme.guestLayout.loginIcon;
        return css`
            width: ${remOutput(loginIconMeasure.size)};
            height: ${remOutput(loginIconMeasure.size)};
            fill: ${loginIconTheme.fill};
        `;
    }}
`;

export const Main_ = styled.main`
    ${({ theme }) => {
        const { wideScreen, mediumScreen } = theme.measures;
        const loginTheme = theme.login;
        const mainMeasure = loginTheme.measures.guestLayout.main;
        const mainTheme = loginTheme.guestLayout.main;
        return css`
            overflow: hidden;
            padding-top: ${remOutput(mainMeasure.padding.top)};
            padding-bottom: ${remOutput(mainMeasure.padding.bottom)};
            padding-left: ${remOutput(mainMeasure.padding.left)};
            padding-right: ${remOutput(mainMeasure.padding.right)};

            margin-top: ${remOutput(mainMeasure.margin.top)};
            background-color: ${mainTheme.bg};
            box-shadow: ${mainTheme.boxShadow};

            @media ${wideScreen} {
                border-radius: ${remOutput(mainMeasure.wide.borderRadius)};
                max-width: ${remOutput(mainMeasure.wide.maxWidth)};
                width: ${mainMeasure.wide.width};
                transform: translate(
                    -${remOutput(mainMeasure.padding.left)},
                    0
                );
            }
            @media ${mediumScreen} {
                border-radius: ${remOutput(mainMeasure.wide.borderRadius)};
                max-width: ${remOutput(mainMeasure.wide.maxWidth)};
                width: ${mainMeasure.wide.width};
                transform: translate(
                    -${remOutput(mainMeasure.padding.left)},
                    0
                );
            }
        `;
    }}
`;
