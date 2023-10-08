import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const Checkbox_ = styled.input.attrs({ type: 'checkbox' })`
    ${({ theme }) => {
        const checkboxTheme = theme.login.auth.checkbox;
        const checkboxMeasure = theme.login.measures.auth.form.checkbox;
        return css`
            border-radius: ${remOutput(checkboxMeasure.borderRadius)};
            border-color: ${checkboxTheme.border.color};
            color: ${checkboxTheme.color};
            box-shadow: ${checkboxTheme.boxShadow};
        `;
    }}
`;
