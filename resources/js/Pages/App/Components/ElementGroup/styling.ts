import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

type TooltipProps_ = {
    $show?: boolean;
};

export const Tooltip_ = styled.g<TooltipProps_>`
    visibility: ${({ $show }) => ($show ? 'visible' : 'hidden')};
`;

export const RefLine_ = styled.line`
    ${({ theme }) => {
        const refLineTheme = theme.graph.bar.qty.refLine;
        return css`
            stroke-dasharray: 4 3;
            stroke: ${refLineTheme.stroke.color};
        `;
    }}
`;

export const QtyText_ = styled.text`
    ${({ theme }) => {
        const qtyTextMeasure = theme.measures.inputRange.qtyText;
        const qtyTextTheme = theme.graph.bar.qty.qtyText;
        return css`
            font-weight: bold;
            font-size: ${remOutput(qtyTextMeasure.fontSize)};
            fill: ${qtyTextTheme.fill};
        `;
    }}
`;

type RectProps_ = {
    $selected?: boolean;
};

export const Rect_ = styled.rect<RectProps_>`
    fill: ${({ $selected, theme }) => {
        const rectTheme = theme.graph.bar.qty.rect;
        if ($selected) {
            return rectTheme.selected.fill;
        }
        return rectTheme.fill;
    }};
    cursor: pointer;
`;
