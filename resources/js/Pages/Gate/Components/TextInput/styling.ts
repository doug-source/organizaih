import { Input } from '@/Components';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const TextInput_ = styled(Input)`
    ${({ theme }) => {
        const inputTheme = theme.generic.gate.inputText;
        const inputMeasure = theme.generic.measures.gate.textInput;
        return css`
            display: block;
            border-radius: ${remOutput(inputMeasure.borderRadius)};
            border-color: ${inputTheme.border.color};
            box-shadow: ${inputTheme.boxShadow};

            margin-top: ${remOutput(inputMeasure.margin.top)};
            width: ${inputMeasure.width};
        `;
    }}
`;
