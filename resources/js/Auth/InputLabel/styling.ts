import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const InputLabel_ = styled.label`
    ${({ theme }) => {
        const labelTheme = theme.login.auth.label;
        const labelMeasure = theme.login.measures.auth.form.label;
        return css`
            font-size: ${remOutput(labelMeasure.fontSize)};
            line-height: ${remOutput(labelMeasure.lineHeight)};
            font-weight: ${labelMeasure.fontWeight};
            color: ${labelTheme.color};
        `;
    }}
`;
