import { ListItemColumn } from '@/Pages/App/Components/ListItemColumn';
import { remOutput } from '@/libraries';
import { fonts } from '@/settings';
import { css, styled } from 'styled-components';

export const ListItemColumnQty_ = styled(ListItemColumn)`
    ${({ theme }) => {
        const textItemMeasure = theme.measures.inventory.textItem;
        return css`
            flex: none;
            font-family: ${fonts.family[6]};
            font-size: ${remOutput(textItemMeasure.qty.fontSize)};
        `;
    }}
`;
