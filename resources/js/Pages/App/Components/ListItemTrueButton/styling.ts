import { RoundBtn_ } from '@/Components/RoundButton/styling';
import { getTrueBtnTheme } from '@/Pages/App/Components/ListItemTrueButton/libraries';
import { css, styled } from 'styled-components';

export const TrueButton_ = styled(RoundBtn_)`
    display: flex;
    box-shadow: ${({ theme }) => theme.list.btns.boxShadow};
    ${({ theme }) => {
        const trueBtnTheme = getTrueBtnTheme(theme);
        return css`
            background-color: ${trueBtnTheme.bg.color};
            fill: ${trueBtnTheme.svg.path.fill};
            stroke: ${trueBtnTheme.svg.path.stroke};
        `;
    }}
`;
