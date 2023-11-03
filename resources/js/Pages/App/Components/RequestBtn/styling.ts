import { RoundBtn_ } from '@/Components/RoundButton/styling';
import { getTranslateStyle } from '@/Pages/App/Components/RequestBtn/libraries';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const RequestBtn_ = styled(RoundBtn_)`
    text-transform: uppercase;
    font-weight: bold;
    ${({ theme }) => {
        const btnTheme = theme.inputRequest.btn;
        const translate = getTranslateStyle(theme);
        const btnMeasure = theme.measures.requestBtn;
        return css`
            background: ${btnTheme.bg};
            box-shadow: ${btnTheme.boxShadow};
            max-height: ${remOutput(btnMeasure.maxHeight)};

            &:active {
                transform: ${`translate(${remOutput(translate.x)}, ${remOutput(
                    translate.y,
                )})`};
            }
        `;
    }}
`;
