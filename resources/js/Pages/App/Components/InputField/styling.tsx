import { Input_ } from '@/Components/Input';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const InputField_ = styled(Input_)`
    ${({ theme }) => {
        const inputMeasure = theme.measures.tools.inputRequest.input;
        return css`
            width: ${inputMeasure.width};
            height: ${remOutput(inputMeasure.height)};
        `;
    }};
`;
