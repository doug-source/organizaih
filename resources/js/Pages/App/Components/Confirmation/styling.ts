import { DialogBtn_ } from '@/Pages/App/Components/Dialog';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const YesConfirmBtn_ = styled(DialogBtn_)`
    ${({ theme }) => {
        const yesBtnMeasure = theme.measures.confirmDialog.footer.btn.yes;
        return css`
            margin-left: ${remOutput(yesBtnMeasure.margin.left)};
        `;
    }}
`;

export const NoConfirmBtn_ = styled(DialogBtn_)`
    ${({ theme }) => {
        const noBtnTheme = theme.confirmDialog.footer.btn.no;
        return css`
            background: ${noBtnTheme.bg};
            &&:active {
                box-shadow: ${noBtnTheme.active.boxShadow};
            }
            &:hover {
                box-shadow: ${noBtnTheme.hover.boxShadow};
            }
        `;
    }}
`;
