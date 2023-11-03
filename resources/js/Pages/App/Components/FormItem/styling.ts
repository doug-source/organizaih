import { remOutput } from '@/libraries';
import { fonts } from '@/settings';
import { css, styled } from 'styled-components';

export const FormItem_ = styled.div`
    position: relative;
`;

export const Label_ = styled.label<{ $error?: boolean }>`
    ${({ theme, $error }) => {
        const formItemTheme = theme.formItem;
        const formItemMeasure = theme.measures.formItem;
        return css`
            font-family: ${fonts.family[2]};
            height: ${remOutput(formItemMeasure.height)};
            display: block;
            line-height: normal;
            ${$error && `color: ${formItemTheme.error.color}`}

            span {
                display: inline-block;
            }
        `;
    }}
`;
