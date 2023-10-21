import { DefineItem, DefineItemWrap_ } from '@/Pages/App/Components/DefineItem';
import { mixinPhoto } from '@/Pages/App/Components/DefinePhoto';
import { ProductsIcon } from '@/Pages/App/Components/Header/Dashboard/DashboardItem/ProductsIcon';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const DefineItem_ = styled(DefineItem)`
    ${({ theme }) => {
        const defineItemsMeasure = theme.measures.inventory.details.defineItems;
        const defineItemTheme = theme.inventory.details.defineItems;
        return css`
            &:not(:first-child) {
                display: flex;
                flex: 0;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                font-weight: bold;
                border-radius: ${remOutput(defineItemsMeasure.border.radius)};
                background-color: ${defineItemTheme.bg};
                color: ${defineItemTheme.color};
            }
            & + & ~ & {
                margin-top: ${remOutput(defineItemsMeasure.entries.marginTop)};
            }

            ${DefineItemWrap_} {
                padding-left: ${remOutput(defineItemsMeasure.wrap.padding)};
                padding-right: ${remOutput(defineItemsMeasure.wrap.padding)};
            }
        `;
    }}
`;

export const DetailsContainer_ = styled.div`
    display: flex;
    flex-direction: column;
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
