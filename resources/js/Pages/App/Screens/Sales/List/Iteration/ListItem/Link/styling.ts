import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const SubItem_ = styled.div`
    ${({ theme }) => {
        const itemMeasure = theme.measures.sale.list.item;
        const itemTheme = theme.sale.list.item;
        return css`
            text-align: left;
            font-size: ${remOutput(itemMeasure.child.fontSize)};
            a:hover > div {
                color: ${itemTheme.child.color};
            }
        `;
    }}
`;
