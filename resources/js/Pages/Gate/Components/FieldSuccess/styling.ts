import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const FieldSuccess_ = styled.span`
    ${({ theme }) => {
        const successTheme = theme.gate.fieldMessage.success;
        const successMeasure = theme.gate.measures.fieldMessage;
        return css`
            margin-left: ${remOutput(successMeasure.margin.left)};
            font-size: ${remOutput(successMeasure.fontSize)};
            line-height: ${remOutput(successMeasure.lineHeight)};
            color: ${successTheme.color};
        `;
    }}
`;
