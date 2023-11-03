import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const Header_ = styled.header`
    ${({ theme }) => {
        const headerTheme = theme.header;
        const headerMeasure = theme.measures.header;
        return css`
            overflow: hidden;
            height: ${remOutput(headerMeasure.height)};
            border-width: ${remOutput(headerMeasure.border.width)};
            border-style: solid;
            border-color: ${headerTheme.border.color};
            border-radius: ${remOutput(headerMeasure.border.radius)};

            &.closed {
                height: ${remOutput(headerMeasure.closed.height)};
                transition-property: height;
                transition-duration: 1s;
            }
        `;
    }}
`;

export const Nav_ = styled.nav`
    height: 100%;
    overflow: hidden;
`;

export const NavBar_ = styled.div`
    height: 100%;
    overflow: hidden;
`;
