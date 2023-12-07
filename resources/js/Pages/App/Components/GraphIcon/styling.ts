import { GraphSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { css, styled } from 'styled-components';

export const GraphIcon_ = styled(GraphSVG)`
    ${({ theme }) => {
        const {
            navItem: { navLink: navLinkMeasure },
        } = theme.measures.header.dashboard.navbarNav;
        const paths = navLinkMeasure.icon.graph.path;
        const {
            navItem: {
                link: { svg: svgTheme },
            },
        } = theme.header.dashboard.navbarNav;
        return css`
            > g path {
                &:nth-child(1) {
                    fill: ${svgTheme.graph.path[1].fill};
                    stroke-width: ${paths[1].strokeWidth};
                }
                &:nth-child(2) {
                    fill: ${svgTheme.graph.path[2].fill};
                    stroke-width: ${paths[2].strokeWidth};
                }
                &:nth-child(3) {
                    fill: ${svgTheme.graph.path[3].fill};
                    stroke-width: ${paths[3].strokeWidth};
                }
                &:nth-child(4) {
                    fill: ${svgTheme.graph.path[4].fill};
                    stroke-width: ${paths[4].strokeWidth};
                }
                &:nth-child(5) {
                    fill: ${svgTheme.graph.path[5].fill};
                }
                &:nth-child(6) {
                    fill: ${svgTheme.graph.path[6].fill};
                }
            }
        `;
    }}
`;
