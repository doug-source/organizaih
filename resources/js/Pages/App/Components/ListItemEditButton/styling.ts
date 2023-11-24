import { RoundBtnProps, RoundBtnStyle } from '@/Components/RoundButton/styling';
import {
    getBtnsMeasures,
    getPrimaryBtnTheme,
} from '@/Pages/App/Components/ListItemEditButton/libraries';
import { remOutput } from '@/libraries';
import { NavLink } from 'react-router-dom';
import { css, styled } from 'styled-components';

export const EditBtn_ = styled(NavLink)<RoundBtnProps>`
    ${RoundBtnStyle}
    display: flex;
    box-shadow: ${({ theme }) => theme.list.btns.boxShadow};
    ${({ theme }) => {
        const primaryBtn = getPrimaryBtnTheme(theme);
        return css`
            background-color: ${primaryBtn.bg.color};
            svg path {
                stroke: ${primaryBtn.svg.path.stroke};
                fill: ${primaryBtn.svg.path.fill};
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
