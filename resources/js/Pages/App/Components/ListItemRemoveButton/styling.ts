import { RoundBtn_ } from '@/Components/RoundButton/styling';
import {
    getBtnsMeasures,
    getDangerBtnTheme,
} from '@/Pages/App/Components/ListItemRemoveButton/libraries';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const RemoveButton_ = styled(RoundBtn_).attrs({ type: 'submit' })`
    display: flex;
    box-shadow: ${({ theme }) => theme.list.btns.boxShadow};
    ${({ theme }) => {
        const dangerTheme = getDangerBtnTheme(theme);
        return css`
            background-color: ${dangerTheme.bg.color};
        `;
    }}
    ${({ theme }) => {
        const dangerTheme = getDangerBtnTheme(theme);
        return css`
            svg path {
                fill: ${dangerTheme.svg.path.fill};
                stroke: ${dangerTheme.svg.path.stroke};
            }
        `;
    }}
    &:hover {
        transform: ${({ theme }) => {
            const btnsMeasures = getBtnsMeasures(theme);
            return `translate(${remOutput(
                btnsMeasures.hover.transform.translate.x,
            )}, ${remOutput(btnsMeasures.hover.transform.translate.y)})`;
        }};
    }
    &:active {
        transform: ${({ theme }) => {
            const btnsMeasures = getBtnsMeasures(theme);
            return `translate(${remOutput(
                btnsMeasures.active.transform.translate.x,
            )}, ${remOutput(btnsMeasures.active.transform.translate.y)})`;
        }};
    }
`;
