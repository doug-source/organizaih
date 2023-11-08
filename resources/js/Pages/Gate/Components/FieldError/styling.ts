import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const FieldError_ = styled.span`
    ${({ theme }) => {
        const errorTheme = theme.gate.fieldMessage.error;
        const errorMeasure = theme.gate.measures.fieldMessage;
        return css`
            margin-left: ${remOutput(errorMeasure.margin.left)};
            font-size: ${remOutput(errorMeasure.fontSize)};
            line-height: ${remOutput(errorMeasure.lineHeight)};
            color: ${errorTheme.color};
        `;
    }}
`;
