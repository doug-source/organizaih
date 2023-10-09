import { DefaultTheme } from 'styled-components';
import { calcNavbarDiff } from './libraries';

type DashboardData = DefaultTheme['measures']['header']['dashboard'];
export type HeaderModule = { height: number; border: { width: number } };

const navbarNavWide = {
    padding: {
        top: 44.96,
        bottom: 44.96,
        left: 50,
        right: 50,
    },
    margin: {
        top: 8,
        bottom: 0,
        left: 8,
        right: 0,
    },
    borderRadius: 10,
    border: {
        width: 1,
    },
    height: {
        diff: 99,
    },
};

export const dashboard = (headerModule: HeaderModule): DashboardData => ({
    navbarNav: {
        height: {
            diff: calcNavbarDiff(headerModule, navbarNavWide),
        },
        padding: {
            top: 8,
            bottom: 8,
            left: '10%',
            right: '10%',
        },
        wide: navbarNavWide,
        navItem: {
            height: 197.248,
            borderRadius: 8,
            fontSize: 12,
            width: '50%',
            wide: {
                width: '100%',
                height: 40,
                spacing: {
                    marginTop: 75.2,
                },
            },
            navLink: {
                icon: {
                    size: 40,
                    wide: {
                        top: -10,
                    },
                    graph: {
                        path: {
                            1: {
                                strokeWidth: 3.5,
                            },
                            2: {
                                strokeWidth: 3.5,
                            },
                            3: {
                                strokeWidth: 3.5,
                            },
                            4: {
                                strokeWidth: 3.5,
                            },
                        },
                    },
                },
                label: {
                    bottom: -13,
                },
            },
            pack: {
                wide: {
                    width: '40%',
                    height: 15.04,
                },
                after: {
                    wide: {
                        width: 92,
                        height: 96,
                        borderRadius: 20,
                        transform: {
                            translate: ['-27%', '40%'],
                        },
                    },
                },
            },
        },
    },
});
