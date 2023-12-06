import { DefineItem, DefineItemWrap_ } from '@/Pages/App/Components/DefineItem';
import { mixinPhoto } from '@/Pages/App/Components/DefinePhotoAbsolute';
import { ProductsIcon } from '@/Pages/App/Components/Header/Dashboard/DashboardItem/ProductsIcon';
import { ProfilePhotoOutput } from '@/Pages/App/Components/ProfilePhotoOutput';
import { Anonymous } from '@/Pages/App/Components/ProfilePhotoOutput/icon';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const DefineItemUpper_ = styled(DefineItem)`
    ${({ theme }) => {
        const defineItemsMeasure = theme.measures.sale.details.defineItems;
        const defineItemsTheme = theme.sale.details.defineItems;
        return css`
            & ~ & {
                flex-grow: 0.25;
            }
            &:last-child {
                flex-grow: 1;
                padding: 0;
                background-color: ${defineItemsTheme.bg};
                color: ${defineItemsTheme.color};
                border-radius: ${remOutput(defineItemsMeasure.borderRadius)};
            }

            ${DefineItemWrap_} {
                padding: ${remOutput(defineItemsMeasure.wrap.padding)};
                font-size: ${remOutput(defineItemsMeasure.wrap.fontSize)};

                * {
                    font-size: ${remOutput(
                        defineItemsMeasure.wrap.global.fontSize,
                    )};
                }
            }
        `;
    }}
`;

export const DetailsContainer_ = styled.div`
    ${({ theme }) => {
        const defineItemsMeasure = theme.measures.sale.details.defineItems;
        return css`
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: ${remOutput(defineItemsMeasure.container.gap)};
            flex: 1;
        `;
    }}
`;

export const AnonymousPhoto_ = styled(Anonymous)`
    ${mixinPhoto}
`;

export const AnonymousProduct_ = styled(ProductsIcon)`
    ${({ theme }) => {
        const saleProductsTheme = theme.sale.details.defineItems.saleProducts;
        return css`
            ${mixinPhoto}
            position: relative;
            > .box,
            > .tape {
                fill: ${saleProductsTheme.icon.path.fill};
            }
        `;
    }}
`;

export const PhotoProduct_ = styled(ProfilePhotoOutput)`
    position: static;
`;

export const SaleProductsItemField_ = styled(DefineItem)`
    && {
        display: flex;
        flex-grow: 0;
    }
`;

export const SaleProductsItem_ = styled.div`
    ${({ theme }) => {
        const {
            defineItems: {
                saleProducts: { item: itemMeasure },
            },
        } = theme.measures.sale.details;
        return css`
            font-size: ${remOutput(itemMeasure.fontSize)};
            display: flex;
            flex-direction: column;
            justify-content: center;
        `;
    }}
`;

export const DefineItem_ = styled(DefineItem)`
    ${({ theme }) => {
        const {
            defineItems: {
                saleProducts: {
                    item: { defineItem: defineItemMeasure },
                },
            },
        } = theme.measures.sale.details;
        return css`
            && {
                padding-left: 0;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;

                ${DefineItemWrap_} {
                    padding-top: ${remOutput(defineItemMeasure.padding.top)};
                    padding-bottom: ${remOutput(
                        defineItemMeasure.padding.bottom,
                    )};
                    padding-left: ${remOutput(defineItemMeasure.padding.left)};
                    padding-right: ${remOutput(
                        defineItemMeasure.padding.right,
                    )};
                }
            }
        `;
    }}
`;

export const SaleProducts_ = styled.div`
    ${({ theme }) => {
        const {
            defineItems: { saleProducts: saleProductsMeasure },
        } = theme.measures.sale.details;
        const saleProductsTheme = theme.sale.details.defineItems.saleProducts;
        return css`
            background-color: ${saleProductsTheme.bg};
            border-bottom-left-radius: ${remOutput(
                saleProductsMeasure.borderBottom.radius,
            )};
            border-bottom-right-radius: ${remOutput(
                saleProductsMeasure.borderBottom.radius,
            )};
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        `;
    }}
`;
