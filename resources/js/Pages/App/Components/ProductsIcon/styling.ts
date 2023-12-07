import { ProductSVG } from '@/Pages/App/libraries';
import { css, styled } from 'styled-components';

export const ProductsIcon_ = styled(ProductSVG)`
    ${({ theme }) => {
        const {
            navItem: {
                link: {
                    svg: { product: productTheme },
                },
            },
        } = theme.header.dashboard.navbarNav;
        return css`
            > .box {
                fill: ${productTheme.box.fill};
                stroke: ${productTheme.box.stroke};
            }
            > .tape {
                fill: ${productTheme.tape.fill};
                stroke: ${productTheme.tape.fill};
            }
        `;
    }}
`;
