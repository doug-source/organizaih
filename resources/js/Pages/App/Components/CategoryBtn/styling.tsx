import { CategorySVG } from '@/Pages/App/libraries/icons/asynchronous';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const CategoriesBtnText_ = styled.div`
    ${({ theme }) => {
        const {
            categoriesBtn: { text: textMeasure },
        } = theme.measures.productCategory.tools;
        const btnTheme = theme.productCategory.tools.categoriesBtn;
        return css`
            display: inline-block;
            white-space: nowrap;
            margin-left: ${remOutput(textMeasure.margin.left)};
            color: ${btnTheme.color};
        `;
    }}
`;

export const CategorySVG_ = styled(CategorySVG)`
    ${({ theme }) => {
        const btnTheme = theme.productCategory.tools.categoriesBtn;
        const svgMeasure = theme.measures.productCategory.tools.categoriesBtn;
        return css`
            display: inline-block;
            width: ${remOutput(svgMeasure.svg.width)};
            height: ${svgMeasure.svg.height};
            fill: ${btnTheme.color};
        `;
    }}
`;
