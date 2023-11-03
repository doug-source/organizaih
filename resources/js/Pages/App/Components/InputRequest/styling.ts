import { InputField } from '@/Pages/App/Components/InputField';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const Label_ = styled.label`
    ${({ theme }) => {
        const labelMeasure = theme.measures.tools.inputRequest.label;
        return css`
            display: flex;
            gap: ${remOutput(labelMeasure.gap)};
            flex: 1;
        `;
    }}
`;

export const InputField_ = styled(InputField)`
    ${({ theme }) => {
        const inputMeasure = theme.measures.tools.inputRequest.input;
        return css`
            max-width: ${remOutput(inputMeasure.maxWidth)};
            min-width: ${remOutput(inputMeasure.minWidth)};
        `;
    }}
`;
