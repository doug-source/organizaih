import { remOutput } from '@/libraries';
import styled, { css } from 'styled-components';

export const ErrorMsg_ = styled.span`
    ${({ theme }) => {
        const errorMsgTheme = theme.formItem.errorMsg;
        const errorMsgMeasure = theme.measures.formItem.errorMsg;
        return css`
            background: ${errorMsgTheme.bg};
            color: ${errorMsgTheme.color};
            border-width: ${remOutput(errorMsgMeasure.border.width)};
            border-style: solid;
            border-color: ${errorMsgTheme.border.color};
            border-radius: ${remOutput(errorMsgMeasure.border.radius)};
            padding-top: ${remOutput(errorMsgMeasure.padding.top)};
            padding-bottom: ${remOutput(errorMsgMeasure.padding.bottom)};
            padding-left: ${remOutput(errorMsgMeasure.padding.left)};
            padding-right: ${remOutput(errorMsgMeasure.padding.right)};
        `;
    }}
`;
