import { RoundBtnProps, RoundBtnStyle } from '@/Components/RoundButton/styling';
import {
    getAddBtnMeasures,
    getAddBtnTheme,
} from '@/Pages/App/Components/AddButton/libraries';
import { PlusSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { remOutput } from '@/libraries';
import { NavLink } from 'react-router-dom';
import { css, styled } from 'styled-components';

export const BtnAdd_ = styled(NavLink)<RoundBtnProps>`
    ${RoundBtnStyle}

    ${({ theme }) => {
        const { wideScreen } = theme.measures;
        const addBtnTheme = getAddBtnTheme(theme);
        const addBtnMeasures = getAddBtnMeasures(theme);
        return css`
            background-color: ${addBtnTheme.bg.color};
            box-shadow: ${addBtnTheme.boxShadow};
            @media ${wideScreen} {
                height: ${remOutput(addBtnMeasures.wide.height)};
            }
            &:hover {
                transform: translate(
                    ${remOutput(addBtnMeasures.hover.transform.translate.x)},
                    ${remOutput(addBtnMeasures.hover.transform.translate.y)}
                );
            }
            &:active {
                transform: translate(
                    ${remOutput(addBtnMeasures.active.transform.translate.x)},
                    ${remOutput(addBtnMeasures.active.transform.translate.y)}
                );
            }
        `;
    }}
`;

export const PlusSVG_ = styled(PlusSVG)`
    ${({ theme }) => {
        const addBtnTheme = getAddBtnTheme(theme);
        const addBtnMeasures = getAddBtnMeasures(theme);
        return css`
            width: ${remOutput(addBtnMeasures.svg.width)};
            height: ${addBtnMeasures.svg.height};
            & > path {
                stroke-width: ${remOutput(
                    addBtnMeasures.svg.path.stroke.width,
                )};
                stroke: ${addBtnTheme.svg.stroke};
            }
        `;
    }}
`;
