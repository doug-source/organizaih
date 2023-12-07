import {
    ExitLink_,
    FormLogout_,
} from '@/Pages/App/Components/LogoutLink/styling';
import { NavLinkItem } from '@/Pages/App/Components/NavLinkItem';
import { remOutput } from '@/libraries';
import { fonts } from '@/settings';
import { css, styled } from 'styled-components';

const cssLink = css`
    ${({ theme }) => {
        const navbarNavTheme = theme.header.dashboard.navbarNav;
        const {
            navbarNav: { navItem: navItemMeasure },
        } = theme.measures.header.dashboard;
        const { wideScreen } = theme.measures;
        return css`
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            z-index: 1;
            position: relative;
            font-family: ${fonts.family[7]};
            color: ${navbarNavTheme.navItem.link.color};

            &:visited,
            &:hover,
            &:active {
                color: ${navbarNavTheme.navItem.link.color};
            }

            svg {
                width: ${remOutput(navItemMeasure.navLink.icon.size)};
                height: ${remOutput(navItemMeasure.navLink.icon.size)};
                position: relative;
                z-index: 1;

                @media ${wideScreen} {
                    top: ${remOutput(navItemMeasure.navLink.icon.wide.top)};
                }
            }
        `;
    }}
`;

type NavItemProps_ = {
    $lastItem?: boolean;
};

export const NavItem_ = styled.li<NavItemProps_>`
    ${({ theme, $lastItem = false }) => {
        const {
            link: {
                svg: { logout: logoutIconTheme },
            },
        } = theme.header.dashboard.navbarNav.navItem;
        const {
            navbarNav: { navItem: navItemMeasure },
        } = theme.measures.header.dashboard;
        const { wideScreen } = theme.measures;
        return css`
            height: ${remOutput(navItemMeasure.height)};
            display: flex;
            align-items: center;
            justify-content: flex-start;
            border-radius: ${remOutput(navItemMeasure.borderRadius)};
            font-size: ${remOutput(navItemMeasure.fontSize)};
            width: ${navItemMeasure.width};

            ${$lastItem &&
            css`
                @media ${wideScreen} {
                    display: none;
                }
            `}

            > ${FormLogout_} {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                > ${ExitLink_} {
                    ${cssLink}
                    svg path {
                        fill: ${logoutIconTheme.path.fill};
                    }
                }
            }

            @media ${wideScreen} {
                width: ${navItemMeasure.wide.width};
                height: ${remOutput(navItemMeasure.wide.height)};
                & ~ & {
                    margin-top: ${remOutput(
                        navItemMeasure.wide.spacing.marginTop,
                    )};
                }
            }
        `;
    }}
`;

export const NavItemPack_ = styled.div`
    ${({ theme }) => {
        const {
            header: {
                dashboard: {
                    navbarNav: {
                        navItem: { pack },
                    },
                },
            },
        } = theme;
        const {
            navItem: { pack: packMeasure },
        } = theme.measures.header.dashboard.navbarNav;
        const { wideScreen } = theme.measures;
        return css`
            @media ${wideScreen} {
                position: absolute;
                z-index: 0;
                width: ${packMeasure.wide.width};
                height: ${remOutput(packMeasure.wide.height)};

                &::after {
                    position: absolute;
                    content: '';
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin-left: auto;
                    margin-right: auto;
                    z-index: -1;
                    width: ${remOutput(packMeasure.after.wide.width)};
                    height: ${remOutput(packMeasure.after.wide.height)};
                    border-radius: ${remOutput(
                        packMeasure.after.wide.borderRadius,
                    )};
                    transform: translate(
                        ${packMeasure.after.wide.transform.translate.join(', ')}
                    );
                    background-color: ${pack.wide.after.bgColor};
                    background-image: ${pack.wide.after.bgImage};
                }
            }
        `;
    }}
`;

export const NavLinkedItem_ = styled(NavLinkItem)`
    ${cssLink}
`;
