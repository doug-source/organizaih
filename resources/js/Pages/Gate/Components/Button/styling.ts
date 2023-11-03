import { Button, LabelTextBtn_ } from '@/Components/Button';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const Button_ = styled(Button)`
    ${({ theme }) => {
        const btnTheme = theme.generic.gate.btn;
        const btnMeasure = theme.generic.measures.gate.btn;
        return css`
            background: ${btnTheme.bg};
            box-shadow: ${btnTheme.boxShadow};
            border-width: ${remOutput(btnMeasure.border.width)};
            margin-top: ${remOutput(btnMeasure.margin.top)};
            &:active {
                box-shadow: ${btnTheme.active.boxShadow};
            }

            ${LabelTextBtn_} {
                color: ${btnTheme.text.color};
            }
        `;
    }}
`;
