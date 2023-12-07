import {
    DefineItem,
    DefineItemValue_,
} from '@/Pages/App/Components/DefineItem';
import { mixinPhoto } from '@/Pages/App/Components/DefinePhotoAbsolute';
import { ProductsIcon } from '@/Pages/App/Components/ProductsIcon';
import { remOutput } from '@/libraries';
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

export const DetailsContainer_ = styled.div`
    ${({ theme }) => {
        const defineItemMeasure = theme.measures.product.defineItem;
        return css`
            display: flex;
            flex-direction: column;
            gap: ${remOutput(defineItemMeasure.container.gap)};
            height: ${defineItemMeasure.container.height};
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
