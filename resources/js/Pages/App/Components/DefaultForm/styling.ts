import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const DefaultForm_ = styled.form.attrs({
    method: 'POST',
    encType: 'multipart/form-data',
})`
    ${({ theme }) => {
        const defaultFormMeasure = theme.measures.defaultForm;
        return css`
            height: ${defaultFormMeasure.height};
            display: flex;
            flex-direction: column;
            gap: ${remOutput(defaultFormMeasure.gap)};
        `;
    }}
`;
