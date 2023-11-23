import { ListItemLinked } from '@/Pages/App/Components/ListItemLinked';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const ListItemLinkedProdCategory_ = styled(ListItemLinked)`
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
