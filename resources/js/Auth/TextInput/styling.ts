import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const TextInput_ = styled.input`
    ${({ theme }) => {
        const inputTheme = theme.login.auth.input;
        const inputMeasure = theme.login.measures.auth.form.input;
        return css`
            border-radius: ${remOutput(inputMeasure.borderRadius)};
            border-color: ${inputTheme.border.color};
            box-shadow: ${inputTheme.boxShadow};
        `;
    }}
`;
