import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const Top_ = styled.div`
    ${({ theme }) => {
        const topItemTheme = theme.header.topItem;
        const topItemMeasure = theme.measures.header.topItem;
        return css`
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: ${topItemMeasure.height};
            background: ${topItemTheme.bg};
            color: ${topItemTheme.color};
            min-height: ${topItemMeasure.height};
            padding-top: ${remOutput(topItemMeasure.padding.top)};
            padding-bottom: ${remOutput(topItemMeasure.padding.bottom)};
            padding-left: ${remOutput(topItemMeasure.padding.left)};
            padding-right: ${remOutput(topItemMeasure.padding.right)};

            position: relative;
            z-index: 0;

            &.closed {
                justify-content: center;
                min-height: ${topItemMeasure.closed.minHeight};
            }
            svg path {
                fill: ${topItemTheme.svg.path.fill};
            }
        `;
    }}
`;
