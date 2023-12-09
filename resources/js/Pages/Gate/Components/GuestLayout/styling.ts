import { GateIcon } from '@/Pages/Gate/Components/GateIcon';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const Container_ = styled.div`
    ${({ theme }) => {
        const { wideScreen, mediumScreen } = theme.measures;
        const containerTheme = theme.gate.guestLayout.container;
        const {
            guestLayout: { container: containerMeasure },
        } = theme.gate.measures;
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

export const GateIcon_ = styled(GateIcon)`
    ${({ theme }) => {
        const gateIconTheme = theme.gate.guestLayout.gateIcon;
        const gateIconMeasure = theme.gate.measures.guestLayout.gateIcon;
        return css`
            width: ${remOutput(gateIconMeasure.size)};
            height: ${remOutput(gateIconMeasure.size)};
            fill: ${gateIconTheme.fill};
        `;
    }}
`;

export const Main_ = styled.main`
    ${({ theme }) => {
        const { wideScreen, mediumScreen } = theme.measures;
        const mainTheme = theme.gate.guestLayout.main;
        const {
            guestLayout: { main: mainMeasure },
        } = theme.gate.measures;
        return css`
            position: relative;
            overflow: visible;
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
