import { DefaultForm } from '@/Pages/App/Components/DefaultForm';
import { ProductsIcon } from '@/Pages/App/Components/Header/Dashboard/DashboardItem/ProductsIcon';
import { commafyList, remifyList } from '@/Pages/App/libraries';
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

export const InventoryDataContainer_ = styled.div`
    ${({ theme }) => {
        const {
            base: {
                inventoryData: { container: containerMeasure },
            },
        } = theme.measures.inventory.form;
        return css`
            height: ${containerMeasure.height};
            display: flex;
            flex-direction: column;
            gap: ${remOutput(containerMeasure.gap)};
        `;
    }}
`;

export const DefaultForm_ = styled(DefaultForm)`
    ${({ theme }) => {
        const baseTheme = theme.measures.inventory.form.base;
        return css`
            height: auto;
            padding-top: ${remOutput(baseTheme.padding.top)};
        `;
    }}
`;
