import { NavLink } from 'react-router-dom';
import { css, styled } from 'styled-components';

export const NavLink_ = styled(NavLink)`
    ${({ theme }) => {
        const itemTheme = theme.list.item;
        return css`
            color: inherit;
            text-decoration: none;
            white-space: nowrap;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;

            &:hover {
                color: ${itemTheme.hover.color};
            }
        `;
    }}
`;
