import { Input_ } from '@/Components/Input';
import { remOutput } from '@/libraries';
import { styled } from 'styled-components';

export const InputField_ = styled(Input_)`
    width: ${({ theme }) => {
        const inputWidth = theme.measures.tools.inputRequest.input.width;
        return remOutput(inputWidth);
    }};
`;
