import {
    DefineItem,
    DefineItemValue_,
} from '@/Pages/App/Components/DefineItem';
import { mixinPhoto } from '@/Pages/App/Components/DefinePhotoAbsolute';
import { ProductsIcon } from '@/Pages/App/Components/ProductsIcon';
import { css, styled } from 'styled-components';

export const DefineItemProduct_ = styled(DefineItem)`
    ${({ theme }) => {
        const defineItemTheme = theme.product.defineItem;
        return css`
            ${DefineItemValue_} {
                color: ${defineItemTheme.value.color};
            }
        `;
    }}
`;

export const AnonymousPhoto_ = styled(ProductsIcon)`
    ${({ theme }) => {
        const defineItemTheme = theme.product.defineItem;
        return css`
            ${mixinPhoto}
            > .box,
            > .tape {
                fill: ${defineItemTheme.icon.path.fill};
            }
        `;
    }}
`;
