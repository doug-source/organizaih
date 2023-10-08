import { DefaultTheme } from 'styled-components';

export const header: DefaultTheme['measures']['header'] = {
    border: {
        width: 1,
        radius: 8,
    },
    closed: {
        height: 27,
    },
    dashboard: {
        navbarNav: {
            height: {
                diff: 91,
            },
            padding: {
                top: 8,
                bottom: 8,
                left: '10%',
                right: '10%',
            },
            wide: {
                padding: {
                    top: 44.96,
                    bottom: 44.96,
                    left: 50,
                    right: 50,
                },
                margin: 8,
                borderRadius: 10,
                border: {
                    width: 1,
                },
                height: {
                    diff: 99,
                },
            },
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
    },
    height: 90,
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
        minHeight: 93.28,
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
                    translate: [0, -7],
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
