import { BrandIcon } from '@/Pages/App/libraries/icons/asynchronous';
import { remOutput } from '@/libraries';
import { NavLink } from 'react-router-dom';
import { css, styled } from 'styled-components';

export const NavLink_ = styled(NavLink)`
    width: auto;
    height: 100%;
    position: relative;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BrandIcon_ = styled(BrandIcon)`
    ${({ theme }) => {
        const { navBarBrand } = theme.measures.header.topItem.rightItems;
        return css`
            width: ${remOutput(navBarBrand.svg.width)};
            height: 100%;
            object {
                width: 100%;
                height: 100%;
            }
        `;
    }}
`;
