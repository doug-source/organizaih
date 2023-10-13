import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const Label_ = styled.label`
    ${({ theme }) => {
        const labelMeasure = theme.measures.tools.inputRequest.label;
        return css`
            display: flex;
            gap: ${remOutput(labelMeasure.gap)};
        `;
    }}
`;
