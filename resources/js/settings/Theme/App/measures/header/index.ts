import { DefaultTheme } from 'styled-components';
import { dashboard } from './dashboard';

const module = {
    height: 90,
    border: { width: 1 },
};

export const header: DefaultTheme['measures']['header'] = {
    border: {
        width: module.border.width,
        radius: 8,
    },
    closed: {
        height: 27,
    },
    dashboard: dashboard(module),
    height: module.height,
    topItem: {
        closed: {
            minHeight: '100%',
        },
        height: '100%',
        leftItems: {
            heading2: {
                fontSize: 14.4,
                medium: {
                    fontSize: 19.2,
                },
                wide: {
                    fontSize: 19.2,
                },
            },
            titleSpan: {
                marginLeft: 8,
            },
        },
        padding: {
            top: 0,
            bottom: 0,
            left: 15,
            right: 15,
        },
        pulldown: {
            btn: {
                height: '100%',
                width: 32,
                transform: {
                    translate: [0, -2],
                },
            },
        },
        rightItems: {
            height: 77.28,
            navBarBrand: {
                svg: {
                    width: 76.96,
                },
            },
            spacing: {
                marginLeft: 10,
            },
            wideLogout: {
                svg: {
                    size: 60,
                },
            },
        },
    },
};
