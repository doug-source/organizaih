import { CustomerIcon } from '@/Pages/App/Components/CustomerIcon';
import { GraphIcon } from '@/Pages/App/Components/GraphIcon';
import {
    ButtonLinked_,
    LinkedButton,
} from '@/Pages/App/Components/LinkedButton';
import { ProductsIcon } from '@/Pages/App/Components/ProductsIcon';
import { remOutput } from '@/libraries/toolbox/Styling';
import { fonts } from '@/settings';
import { css, styled } from 'styled-components';

export const TitleLine_ = styled.div`
    ${({ theme }) => {
        const titleMeasure = theme.measures.graph.menu.item.title;
        return css`
            line-height: ${remOutput(titleMeasure.line.lineHeight)};
        `;
    }}
`;

export const Title_ = styled.div`
    ${({ theme }) => {
        const titleTheme = theme.graph.menu.item.title;
        const titleMeasure = theme.measures.graph.menu.item.title;
        return css`
            font-family: ${fonts.family[7]};
            font-size: ${remOutput(titleMeasure.fontSize)};
            color: ${titleTheme.color};
        `;
    }}
`;

export const GraphsIcon_ = styled(GraphIcon)`
    ${({ theme }) => {
        const iconTheme = theme.graph.menu.item.icon;
        const iconMeasure = theme.measures.graph.menu.item.icon;
        return css`
            margin: auto;
            width: ${remOutput(iconMeasure.default.bars.size)};
            height: ${remOutput(iconMeasure.default.bars.size)};

            > g > path {
                &:nth-child(1) {
                    fill: ${iconTheme.default.bars.fills.column1};
                    stroke-width: 3.5;
                }
                &:nth-child(2) {
                    fill: ${iconTheme.default.bars.fills.column2};
                    stroke-width: 3.5;
                }
                &:nth-child(3) {
                    fill: ${iconTheme.default.bars.fills.column3};
                    stroke-width: 3.5;
                }
                &:nth-child(4) {
                    fill: ${iconTheme.default.bars.fills.column4};
                    stroke-width: 3.5;
                }
                &:nth-child(5) {
                    fill: ${iconTheme.default.bars.fills.base};
                }
                &:nth-child(6) {
                    fill: ${iconTheme.default.bars.fills.arrow};
                }
            }
        `;
    }}
`;

const miniStyle = css`
    ${({ theme }) => {
        const miniTheme = theme.graph.menu.item.icon.default.bars.mini;
        return css`
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            width: ${remOutput(miniTheme.size)};
            height: ${remOutput(miniTheme.size)};
        `;
    }}
`;

export const ProductsIcon_ = styled(ProductsIcon)`
    ${miniStyle}
    ${({ theme }) => {
        const productTheme = theme.graph.menu.item.icon.bars.product;
        const {
            transform: { translate: translateValues },
        } = theme.measures.graph.menu.item.icon.bars.products;
        return css`
            transform: translate(
                ${translateValues.map((val) => remOutput(val)).join(', ')}
            );
            > .box {
                fill: ${productTheme.box.fill};
                stroke: ${productTheme.box.stroke};
            }
            > .tape {
                fill: ${productTheme.tape.fill};
                stroke: ${productTheme.tape.stroke};
            }
        `;
    }}
`;

export const CustomersIcon_ = styled(CustomerIcon)`
    ${miniStyle}
    ${({ theme }) => {
        const customerTheme = theme.graph.menu.item.icon.bars.customer;
        const {
            transform: { translate: translateValues },
        } = theme.measures.graph.menu.item.icon.bars.customers;
        return css`
            transform: translate(
                ${translateValues.map((val) => remOutput(val)).join(', ')}
            );
            .one,
            .three {
                display: none;
            }
            .two {
                fill: ${customerTheme.two.fill};
            }
        `;
    }}
`;

export const IconsContainer_ = styled.div`
    ${({ theme }) => {
        const {
            bars: { container: containerTheme },
        } = theme.measures.graph.menu.item.icon;
        return css`
            position: relative;
            padding-top: ${remOutput(containerTheme.padding.top)};
        `;
    }}
`;

export const Menu_ = styled.div`
    ${({ theme }) => {
        const { mediumScreen, wideScreen } = theme.measures;
        return css`
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            @media ${wideScreen} {
                justify-content: normal;
            }
            @media ${mediumScreen} {
                justify-content: normal;
            }
        `;
    }}
`;

export const MenuItem_ = styled.div`
    ${({ theme }) => {
        const menuItemMeasure = theme.measures.graph.menu.item;
        return css`
            text-align: center;
            min-width: ${remOutput(menuItemMeasure.minWidth)};
        `;
    }}
`;

export const LinkedButton_ = styled(LinkedButton)`
    ${({ theme }) => {
        const linkedBtnMeasure = theme.measures.graph.menu.item.linkedBtn;
        return css`
            margin-top: ${remOutput(linkedBtnMeasure.container.margin.top)};
            margin-bottom: ${remOutput(
                linkedBtnMeasure.container.margin.bottom,
            )};
            margin-left: ${remOutput(linkedBtnMeasure.container.margin.left)};
            margin-right: ${remOutput(linkedBtnMeasure.container.margin.right)};
            border-radius: ${remOutput(
                linkedBtnMeasure.container.border.radius,
            )};
            ${ButtonLinked_} {
                padding-top: ${remOutput(linkedBtnMeasure.btn.padding.top)};
                padding-bottom: ${remOutput(
                    linkedBtnMeasure.btn.padding.bottom,
                )};
                padding-left: ${remOutput(linkedBtnMeasure.btn.padding.left)};
                padding-right: ${remOutput(linkedBtnMeasure.btn.padding.right)};
                border-radius: ${remOutput(linkedBtnMeasure.btn.border.radius)};
            }
        `;
    }}
`;
