import { RoundBtn_ } from '@/Components/RoundButton/styling';
import { remOutput } from '@/libraries';
import { fonts } from '@/settings';
import { css, styled } from 'styled-components';

export const SubmitBtn_ = styled(RoundBtn_).attrs({ type: 'submit' })`
    ${({ theme }) => {
        return css`
            position: relative;
            background: ${theme.submitBtn.bg};
            font-family: ${fonts.family[2]};
            padding-top: ${remOutput(theme.measures.submitBtn.padding.top)};
            padding-bottom: ${remOutput(
                theme.measures.submitBtn.padding.bottom,
            )};
            color: ${theme.submitBtn.color};
            border-color: ${theme.submitBtn.border.color};

            &:disabled {
                filter: grayscale(70%);
            }
        `;
    }}
`;
