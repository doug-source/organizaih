import {
    ListItem,
    NavLink_,
    TextContent_,
    TextItem_,
} from '@/Pages/App/Components/ListItem';
import { remOutput } from '@/libraries';
import { fonts } from '@/settings';
import { css, styled } from 'styled-components';

export const TextItemQty_ = styled(TextItem_)`
    ${({ theme }) => {
        const textItemMeasure = theme.measures.inventory.textItem;
        return css`
            flex: none;
            font-family: ${fonts.family[6]};
            font-size: ${remOutput(textItemMeasure.qty.fontSize)};
        `;
    }}
`;

export const InventoryListItem_ = styled(ListItem)`
    ${TextItem_}:last-of-type {
        flex-grow: 1;
        ${TextContent_} {
            flex: 1;
            text-align: left;
            ${NavLink_} {
                display: block;
            }
        }
    }
`;
