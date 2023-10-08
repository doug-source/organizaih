import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const FieldError_ = styled.span`
    ${({ theme }) => {
        const errorTheme = theme.login.auth.fieldError;
        const errorMeasure = theme.login.measures.auth.form.fieldError;
        return css`
            margin-left: ${remOutput(errorMeasure.margin.left)};
            font-size: ${remOutput(errorMeasure.fontSize)};
            line-height: ${remOutput(errorMeasure.lineHeight)};
            color: ${errorTheme.color};
        `;
    }}
`;
