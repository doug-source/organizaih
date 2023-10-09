import { ProductSVG } from '@/Pages/App/libraries';
import { ComponentPropsWithoutRef, Suspense } from 'react';
import { css, styled } from 'styled-components';

type SvgIconProps = ComponentPropsWithoutRef<'svg'>;

const ProductsIconItem = ({ className, ...remain }: SvgIconProps) => (
    <Suspense>
        <ProductSVG
            className={className}
            {...remain}
        />
    </Suspense>
);

export const ProductsIcon = styled(ProductsIconItem)`
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
