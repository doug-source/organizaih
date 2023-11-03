import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const Checkbox_ = styled.input.attrs({ type: 'checkbox' })`
    ${({ theme }) => {
        const checkboxTheme = theme.login.checkbox;
        const checkboxMeasure = theme.login.measures.checkbox;
        return css`
            border-radius: ${remOutput(checkboxMeasure.borderRadius)};
            border-color: ${checkboxTheme.border.color};
            color: ${checkboxTheme.color};
            box-shadow: ${checkboxTheme.boxShadow};
        `;
    }}
`;
