import {
    blue,
    gray,
    green,
    orange,
    pink,
    purple,
    red,
    transparency,
    white,
    yellow,
} from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const header: DefaultTheme['header'] = {
    border: {
        color: transparency[0],
    },
    topItem: {
        bg: green.lighten[1],
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
    dashboard: {
        dashboardItem: {
            inventoryIcon: {
                paperLeaf: {
                    fill: transparency[0],
                },
            },
        },
        navbarNav: {
            color: blue.darken,
            navItem: {
                link: {
                    color: blue.darken,
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
                    },
                },
                pack: {
                    wide: {
                        after: {
                            bgColor: gray[3],
                            bgImage: 'none',
                        },
                    },
                },
            },
            wide: {
                bgColor: gray[2],
                border: {
                    color: transparency[0],
                },
            },
        },
    },
};
