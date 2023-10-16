import { RoundBtn_ } from '@/Components/RoundButton/styling';
import { remOutput } from '@/libraries';
import { fonts } from '@/settings';
import { css, styled } from 'styled-components';

export const SubmitBtn_ = styled(RoundBtn_).attrs({ type: 'submit' })`
    ${({ theme }) => css`
        position: relative;
        background: ${theme.submitForm.bg};
        font-family: ${fonts.family[2]};
        padding-top: ${remOutput(theme.measures.submitForm.padding.top)};
        padding-bottom: ${remOutput(theme.measures.submitForm.padding.bottom)};

        &:disabled {
            filter: grayscale(70%);
        }
    `}
`;
