import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';
import { NavBar_ } from '../styling';

export const NavbarNav_ = styled.ul`
    ${({ theme }) => {
        const navbarNavMeasure = theme.measures.header.dashboard.navbarNav;
        const wideMeasure = navbarNavMeasure.wide;
        const wideTheme = theme.header.dashboard.navbarNav.wide;
        const { wideScreen } = theme.measures;
        console.log(remOutput(navbarNavMeasure.height.diff));
        return css`
            position: absolute;
            right: 0;
            left: 0;
            margin: auto;
            width: 100vw;
            height: calc(100vh - ${remOutput(navbarNavMeasure.height.diff)});
            padding-top: ${remOutput(navbarNavMeasure.padding.top)};
            padding-bottom: ${remOutput(navbarNavMeasure.padding.bottom)};
            padding-left: ${navbarNavMeasure.padding.left};
            padding-right: ${navbarNavMeasure.padding.right};
            justify-content: space-around;
            display: none;
            justify-content: space-between;
            align-content: flex-start;
            overflow: auto;

            ${NavBar_}.dashboard & {
                display: flex;
                flex-wrap: wrap;

                @media ${wideScreen} {
                    flex-wrap: nowrap;
                }
            }

            @media ${wideScreen} {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                right: auto;
                width: auto;
                border-width: ${remOutput(wideMeasure.border.width)};
                border-style: solid;
                border-color: ${wideTheme.border.color};
                padding-top: ${remOutput(wideMeasure.padding.top)};
                padding-bottom: ${remOutput(wideMeasure.padding.bottom)};
                padding-left: ${remOutput(wideMeasure.padding.left)};
                padding-right: ${remOutput(wideMeasure.padding.right)};
                margin-left: ${remOutput(wideMeasure.margin.left)};
                margin-right: ${remOutput(wideMeasure.margin.right)};
                margin-top: ${remOutput(wideMeasure.margin.top)};
                border-radius: ${remOutput(wideMeasure.borderRadius)};
                height: calc(100vh - ${remOutput(wideMeasure.height.diff)});
                background-color: ${wideTheme.bgColor};
            }
        `;
    }}
`;
