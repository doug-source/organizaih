import { remOutput } from '@/libraries';
import { fonts } from '@/settings';
import { createGlobalStyle, css, styled } from 'styled-components';
import { Header_ } from './Components';

export const GlobalStyle = createGlobalStyle`
    ${({ theme }) => {
        const bgColor = theme.body.bg.color;
        const bodyMeasure = theme.measures.body;
        const htmlMeasure = theme.measures.html;
        return css`
            html {
                line-height: ${remOutput(htmlMeasure.lineHeight)};
            }
            body {
                margin: 0;
                overflow: hidden;
                background-color: ${bgColor};
                padding: ${remOutput(bodyMeasure.padding)};
                *,
                *::before,
                *::after {
                    box-sizing: border-box;
                    border-width: 0;
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
                table {
                    border-collapse: collapse;
                    border-spacing: 0;
                }
                button,
                [type='button'],
                [type='reset'],
                [type='submit'] {
                    background-color: transparent;
                    background-image: none;
                }
                button,
                input,
                optgroup,
                select,
                textarea {
                    font-family: inherit;
                    font-size: 100%;
                    font-weight: inherit;
                    line-height: inherit;
                    color: inherit;
                    margin: 0;
                    padding: 0;
                }
                img,
                svg,
                video,
                canvas,
                audio,
                iframe,
                embed,
                object {
                    display: block;
                }
            }
        `;
    }}
`;

export const Main_ = styled.main`
    ${({ theme }) => {
        const mainMeasure = theme.measures.main;
        const { wideScreen } = theme.measures;

        return css`
            height: calc(100vh - ${remOutput(mainMeasure.height.diff)});
            position: relative;
            font-family: ${fonts.family[1]};
            @media ${wideScreen} {
                display: flex;
                justify-content: flex-end;
            }
            ${Header_}.closed + & {
                height: calc(
                    100vh - ${remOutput(mainMeasure.closed.height.diff)}
                );
            }
        `;
    }}
`;

export const Spacer_ = styled.div`
    ${({ theme }) => {
        const spacerMeasure = theme.measures.main.spacer;
        const { wideScreen } = theme.measures;
        return css`
            @media ${wideScreen} {
                flex: 0 0 ${remOutput(spacerMeasure.width)};
            }
        `;
    }}
`;

export const ContainerFluid_ = styled.div`
    ${({ theme }) => {
        const mainMeasure = theme.measures.main;
        const containerFluidMeasure = mainMeasure.containerFluid;
        const spacerMeasure = mainMeasure.spacer;
        const widthCalc = `${containerFluidMeasure.width} - ${remOutput(
            spacerMeasure.width,
        )}`;
        const { wideScreen } = theme.measures;

        return css`
            height: ${containerFluidMeasure.height};

            @media ${wideScreen} {
                width: calc(${widthCalc});
                padding-top: ${remOutput(
                    containerFluidMeasure.wide.padding.top,
                )};
                padding-bottom: ${remOutput(
                    containerFluidMeasure.wide.padding.bottom,
                )};
                padding-left: ${remOutput(
                    containerFluidMeasure.wide.padding.left,
                )};
                padding-right: ${remOutput(
                    containerFluidMeasure.wide.padding.right,
                )};
            }
        `;
    }}
`;

export const Row_ = styled.div`
    ${({ theme }) => {
        const mainMeasure = theme.measures.main;
        const { wideScreen, mobileBottomDifference } = theme.measures;
        return css`
            height: calc(
                ${mainMeasure.row.height} - ${remOutput(mobileBottomDifference)}
            );
            overflow: auto;

            @media ${wideScreen} {
                height: ${mainMeasure.row.height};
            }
        `;
    }}
`;
