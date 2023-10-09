import { CustomerSVG } from '@/Pages/App/libraries';
import { ComponentPropsWithoutRef, Suspense } from 'react';
import { css, styled } from 'styled-components';

type CustomersIconProps = ComponentPropsWithoutRef<'svg'>;

const CustomersIconItem = ({ className, ...remain }: CustomersIconProps) => (
    <Suspense>
        <CustomerSVG
            className={className}
            {...remain}
        />
    </Suspense>
);

export const CustomersIcon = styled(CustomersIconItem)`
    ${({ theme }) => {
        const {
            navItem: {
                link: {
                    svg: { customer: customerTheme },
                },
            },
        } = theme.header.dashboard.navbarNav;
        return css`
            > g {
                > path.one {
                    fill: ${customerTheme.fill[1]};
                }

                > path.two {
                    fill: ${customerTheme.fill[2]};
                }

                > path.three {
                    fill: ${customerTheme.fill[3]};
                }
            }
        `;
    }}
`;
