import { AnonymousIcon } from '@/Pages/App/Components/AnonymousIcon';
import {
    DefineItem,
    DefineItemValue_,
    DefineItemWrap_,
} from '@/Pages/App/Components/DefineItem';
import {
    PhotoItem_,
    mixinPhoto,
} from '@/Pages/App/Components/DefinePhotoAbsolute';
import { ProductsIcon } from '@/Pages/App/Components/ProductsIcon';
import {
    SelectCustomer,
    SelectCustomerSVG_,
} from '@/Pages/App/Components/SelectCustomer';
import {
    SelectProduct,
    SelectProductSVG_,
} from '@/Pages/App/Components/SelectProduct';
import { commafyList, remifyList } from '@/Pages/App/libraries/toolbox/Array';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

const translateStyle = css`
    ${({ theme }) => {
        const {
            itemSaver: { productsIcon: productsIconMeasure },
        } = theme.measures.product;
        const translateVal = commafyList(
            remifyList(productsIconMeasure.transform.translate),
        );
        return css`
            translate(${translateVal})
        `;
    }}
`;

export const ProductsIconItemSaver_ = styled(ProductsIcon)`
    ${({ theme }) => {
        const {
            itemSaver: { productsIcon: productsIconMeasure },
        } = theme.measures.product;
        const itemSaverTheme = theme.product.itemSaver;
        return css`
            width: ${remOutput(productsIconMeasure.size)};
            height: ${remOutput(productsIconMeasure.size)};
            transform: ${translateStyle};
            > .tape,
            > .box {
                fill: ${itemSaverTheme.productsIcon.fill};
            }
        `;
    }}
`;

export const ProductsIconItemEditor_ = styled(ProductsIcon)`
    ${({ theme }) => {
        const {
            itemEditor: { productsIcon: productsIconMeasure },
        } = theme.measures.product;
        const itemEditorTheme = theme.product.itemEditor;
        return css`
            align-self: center;
            width: ${remOutput(productsIconMeasure.size)};
            height: ${remOutput(productsIconMeasure.size)};

            .tape,
            .box {
                fill: ${itemEditorTheme.productsIcon.fill};
            }
        `;
    }}
`;

export const SaleDataContainer_ = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const SaleDataTopRow_ = styled.div`
    ${({ theme }) => {
        const { wideScreen } = theme.measures;
        const { topRow: topRowMeasure } = theme.measures.sale.form.base;
        const translateValues = commafyList(
            remifyList(topRowMeasure.transform.translate),
        );
        return css`
            display: flex;
            justify-content: flex-start;
            transform: translate(${translateValues});
            overflow: hidden;
            @media ${wideScreen} {
                gap: ${remOutput(topRowMeasure.wide.gap)};
            }
        `;
    }}
`;

export const AnonymousPhoto_ = styled(AnonymousIcon)`
    ${mixinPhoto}
`;

export const DefineItem_ = styled(DefineItem)`
    ${({ theme }) => {
        const iconTheme = theme.sale.form.base.selectors.customer.anonymousIcon;
        const {
            customerInfo: { icon: iconMeasure },
        } = theme.measures.sale.form.base.saleSelectors;
        return css`
            && {
                flex-direction: row;
                align-items: center;
                overflow: hidden;
                justify-content: flex-start;
            }
            ${AnonymousPhoto_} {
                fill: ${iconTheme.fill};
            }
            ${PhotoItem_}, ${AnonymousPhoto_} {
                flex-shrink: 0;
                position: relative;
                width: ${remOutput(iconMeasure.size)};
                height: ${remOutput(iconMeasure.size)};
            }
            ${DefineItemWrap_} {
                overflow: hidden;
            }
            ${DefineItemValue_}:last-child {
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        `;
    }}
`;

export const SelectProduct_ = styled(SelectProduct)`
    ${({ theme }) => {
        const {
            customerInfo: { icon: iconMeasure },
        } = theme.measures.sale.form.base.saleSelectors;
        return css`
            ${SelectProductSVG_} {
                width: ${remOutput(iconMeasure.size)};
                height: ${remOutput(iconMeasure.size)};
            }
        `;
    }}
`;

export const SelectCustomer_ = styled(SelectCustomer)`
    ${({ theme }) => {
        const {
            customerInfo: { icon: iconMeasure },
        } = theme.measures.sale.form.base.saleSelectors;
        return css`
            ${SelectCustomerSVG_} {
                width: ${remOutput(iconMeasure.size)};
                height: ${remOutput(iconMeasure.size)};
            }
        `;
    }}
`;

export const DefineCustomerContainer_ = styled.div`
    overflow: hidden;
    display: flex;
`;
