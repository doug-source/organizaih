import { RoundBtn_ } from '@/Components/RoundButton/styling';
import {
    getBtnsMeasures,
    getTrueBtnTheme,
} from '@/Pages/App/Components/ListItemTrueButton/libraries';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const TrueButton_ = styled(RoundBtn_)`
    display: flex;
    ${({ theme }) => {
        const trueBtnTheme = getTrueBtnTheme(theme);
        const btnsMeasures = getBtnsMeasures(theme);
        return css`
            box-shadow: ${theme.list.btns.boxShadow};
            background-color: ${trueBtnTheme.bg.color};
            fill: ${trueBtnTheme.svg.path.fill};
            stroke: ${trueBtnTheme.svg.path.stroke};

            &:hover {
                transform: translate(
                    ${remOutput(btnsMeasures.hover.transform.translate.x)},
                    ${remOutput(btnsMeasures.hover.transform.translate.y)}
                );
            }
            &:active {
                transform: translate(
                    ${remOutput(btnsMeasures.active.transform.translate.x)},
                    ${remOutput(btnsMeasures.active.transform.translate.y)}
                );
            }
        `;
    }}
`;
