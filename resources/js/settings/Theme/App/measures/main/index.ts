import { DefaultTheme } from 'styled-components';
import { calcNavbarNavSpace } from './libraries';

export const main = (
    header: DefaultTheme['measures']['header'],
    body: DefaultTheme['measures']['body'],
): DefaultTheme['measures']['main'] => {
    const {
        dashboard: { navbarNav },
    } = header;
    const {
        navItem: {
            navLink: { icon },
        },
    } = navbarNav;
    const spacerWidth = icon.size + calcNavbarNavSpace(navbarNav);
    return {
        closed: {
            height: {
                diff: header.closed.height + body.section.padding.top * 2,
            },
        },
        container: {
            margin: {
                top: 8,
            },
        },
        containerFluid: {
            width: '100%',
            height: '100%',
            wide: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 16,
                    right: 16,
                },
            },
        },
        height: {
            diff: header.height + body.section.padding.top * 2,
        },
        row: {
            height: '100%',
        },
        spacer: {
            width: spacerWidth,
        },
    };
};
