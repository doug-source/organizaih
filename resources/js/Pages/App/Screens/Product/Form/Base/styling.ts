import { FormItem, Label_ } from '@/Pages/App/Components/FormItem';
import { ProductsIcon } from '@/Pages/App/Components/Header/Dashboard/DashboardItem/ProductsIcon';
import { InputForm_ } from '@/Pages/App/Components/InputForm';
import { remOutput } from '@/libraries';
import { NavLink } from 'react-router-dom';
import { css, styled } from 'styled-components';

export const ProductsIcon_ = styled(ProductsIcon)`
    > .box,
    > .tape {
        fill: transparent;
    }
`;

export const CategoryInfo_ = styled.div`
    ${({ theme }) => {
        const {
            base: {
                formItem: { categoryInfo: categoryInfoMeasure },
            },
        } = theme.measures.product.form;
        const categoryInfoTheme = theme.product.form.base.formItem.categoryInfo;
        return css`
            display: flex;
            align-items: center;
            user-select: none;
            text-transform: uppercase;
            padding-top: ${remOutput(categoryInfoMeasure.padding.top)};
            padding-bottom: ${remOutput(categoryInfoMeasure.padding.bottom)};
            padding-left: ${remOutput(categoryInfoMeasure.padding.left)};
            padding-right: ${remOutput(categoryInfoMeasure.padding.right)};

            border-width: ${remOutput(categoryInfoMeasure.border.width)};
            border-style: solid;
            border-color: ${categoryInfoTheme.border.color};
            border-radius: ${remOutput(categoryInfoMeasure.borderRadius)};
        `;
    }}
`;

export const SelectCategoryLink_ = styled(NavLink)`
    ${({ theme }) => {
        const {
            base: {
                formItem: {
                    categoryInfo: {
                        selectCategoryLink: selectCategoryLinkMeasure,
                    },
                },
            },
        } = theme.measures.product.form;
        return css`
            display: inline-block;
            padding-top: ${remOutput(selectCategoryLinkMeasure.padding.top)};
            padding-bottom: ${remOutput(
                selectCategoryLinkMeasure.padding.bottom,
            )};
            padding-left: ${remOutput(selectCategoryLinkMeasure.padding.left)};
            padding-right: ${remOutput(
                selectCategoryLinkMeasure.padding.right,
            )};
        `;
    }}
`;

export const CategoryContainer_ = styled.div`
    display: flex;
    align-items: stretch;
`;

export const ProductInput_ = styled(InputForm_)`
    &&:focus {
        box-shadow: none;
    }
`;

export const FormItemPhoto_ = styled(FormItem)`
    ${({ theme }) => {
        const {
            base: {
                formItem: { photo: photoMeasure },
            },
        } = theme.measures.product.form;
        return css`
            ${Label_} {
                margin-left: ${remOutput(photoMeasure.label.margin.left)};
            }
        `;
    }}
`;
