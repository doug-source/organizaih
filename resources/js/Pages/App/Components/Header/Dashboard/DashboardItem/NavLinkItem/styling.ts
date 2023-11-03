import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const NavLinkItemLabel_ = styled.div`
    ${({ theme }) => {
        const {
            navItem: { navLink: navLinkMeasure },
        } = theme.measures.header.dashboard.navbarNav;
        const { wideScreen } = theme.measures;
        return css`
            position: relative;
            z-index: 0;
            line-height: normal;

            @media ${wideScreen} {
                position: absolute;
                top: auto;
                bottom: ${remOutput(navLinkMeasure.label.bottom)};
            }
        `;
    }}
`;
