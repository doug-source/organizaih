import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const InputLabel_ = styled.label`
    ${({ theme }) => {
        const labelTheme = theme.generic.gate.label;
        const labelMeasure = theme.generic.measures.gate.label;
        return css`
            font-size: ${remOutput(labelMeasure.fontSize)};
            line-height: ${remOutput(labelMeasure.lineHeight)};
            font-weight: ${labelMeasure.fontWeight};
            color: ${labelTheme.color};
        `;
    }}
`;
