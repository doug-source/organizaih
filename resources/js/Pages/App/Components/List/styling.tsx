import { extractThemeNumber, remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const DataList_ = styled.ul`
    ${({ theme }) => {
        const headerMeasure = theme.measures.header;
        const bodyMeasure = theme.measures.body;

        const heightStyle = `calc(100vh - ${remOutput(
            bodyMeasure.section.padding.top,
        )} - ${remOutput(headerMeasure.height)})`;

        const heightClosedStyled = `calc(100vh - ${remOutput(
            bodyMeasure.section.padding.top,
        )} - ${remOutput(headerMeasure.closed.height)})`;

        return css`
            list-style-type: none;
            padding-left: 0;
            margin-top: 0;
            margin-bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: stretch;
            overflow: auto;

            gap: ${remOutput(
                extractThemeNumber(theme, theme.measures.list.gap),
            )};

            height: ${heightStyle};

            .closed + main & {
                height: ${heightClosedStyled};
            }
        `;
    }}
`;
