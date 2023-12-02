import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const Fieldset_ = styled.fieldset`
    ${({ theme }) => {
        const fieldsetTheme = theme.config.fieldset;
        const fieldsetMeasure = theme.measures.config.fieldset;
        return css`
            color: ${fieldsetTheme.color};
            border-width: ${remOutput(fieldsetMeasure.border.width)};
            border-style: solid;
            border-color: ${fieldsetTheme.border.color};
            flex: 1;
            padding: ${remOutput(fieldsetMeasure.padding)};
            border-radius: ${remOutput(fieldsetMeasure.borderRadius)};
            & ~ & {
                margin-top: ${remOutput(fieldsetMeasure.siblings.margin.top)};
            }
        `;
    }}
`;
