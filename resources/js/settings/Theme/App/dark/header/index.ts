import {
    black,
    blue,
    gradient,
    gray,
    green,
    orange,
    pink,
    purple,
    red,
    white,
    yellow,
} from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const header: DefaultTheme['header'] = {
    border: {
        color: black[7],
    },
    dashboard: {
        dashboardItem: {
            inventoryIcon: {
                paperLeaf: {
                    fill: 'currentColor',
                },
            },
        },
        navbarNav: {
            color: gray[20],
            navItem: {
                link: {
                    color: gray[20],
                    svg: {
                        customer: {
                            fill: {
                                1: pink.darken,
                                2: purple.lighten[1],
                                3: blue.lighten[1],
                            },
                        },
                        product: {
                            box: {
                                fill: orange[2],
                                stroke: orange[2],
                            },
                            tape: {
                                fill: red[6],
                                stroke: orange[2],
                            },
                        },
                        graph: {
                            path: {
                                1: {
                                    fill: green[3],
                                },
                                2: {
                                    fill: blue[12],
                                },
                                3: {
                                    fill: orange[3],
                                },
                                4: {
                                    fill: yellow[2],
                                },
                                5: {
                                    fill: blue[13],
                                },
                                6: {
                                    fill: blue[13],
                                },
                            },
                        },
                        logout: {
                            path: {
                                fill: green.lighten[2],
                            },
                        },
                        user: {
                            path: {
                                fill: {
                                    front: blue.lighten[1],
                                    back: green.lighten[3],
                                },
                            },
                        },
                    },
                },
                pack: {
                    wide: {
                        after: {
                            bgColor: gray[19],
                            bgImage: gradient.radial[0],
                        },
                    },
                },
            },
            wide: {
                bgColor: black[4],
                border: {
                    color: black[7],
                },
            },
        },
    },
    topItem: {
        bg: black[4],
        color: white[1],
        pulldown: {
            mark: {
                fill: white[1],
            },
        },
        svg: {
            path: {
                fill: white[1],
            },
        },
    },
};
