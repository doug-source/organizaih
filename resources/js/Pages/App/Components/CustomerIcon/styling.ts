import { CustomerSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { css, styled } from 'styled-components';

export const CustomerIcon_ = styled(CustomerSVG)`
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
