import { remOutput } from '@/libraries';
import { createGlobalStyle, css, styled } from 'styled-components';
import { Header_ } from './Components';

export const GlobalStyle = createGlobalStyle`
    ${({ theme }) => {
        const bgColor = theme.body.bg.color;
        return css`
            body {
                margin: 0;
                overflow: hidden;
                background-color: ${bgColor};
                * {
                    box-sizing: border-box;
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
