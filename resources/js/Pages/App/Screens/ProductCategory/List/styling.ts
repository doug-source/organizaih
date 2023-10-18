import { ListItem } from '@/Pages/App/Components/ListItem';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const ListItemProdCategory_ = styled(ListItem)`
    ${({ theme }) => {
        const {
            category: { dataListItem: dataListItemMeasure },
        } = theme.measures.product;
        return css`
            padding-top: ${remOutput(dataListItemMeasure.padding)};
            padding-bottom: ${remOutput(dataListItemMeasure.padding)};
        `;
    }}
`;
