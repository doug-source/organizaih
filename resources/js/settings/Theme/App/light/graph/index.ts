import {
    blue,
    gray,
    green,
    orange,
    purple,
    transparency,
    white,
    yellow,
} from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const graph: DefaultTheme['graph'] = {
    bar: {
        qty: {
            qtyText: {
                fill: gray[17],
            },
            refLine: {
                stroke: {
                    color: 'currentColor',
                },
            },
            rect: {
                fill: gray[17],
                selected: {
                    fill: blue[20],
                },
            },
            slider: {
                control: {
                    active: {
                        bg: blue[9],
                        boxShadow: 'none',
                    },
                    bg: blue[9],
                    boxShadow: 'none',
                    color: white[1],
                    hover: {
                        bg: blue[18],
                    },
                    icon: {
                        before: {
                            actived: {
                                color: white[1],
                                textShadow: 'none',
                            },
                            textShadow: 'none',
                        },
                    },
                },
                currentValue: {
                    after: {
                        border: {
                            bottom: {
                                color: transparency[0],
                            },
                            top: {
                                color: transparency[0],
                            },
                            right: {
                                color: gray[16],
                            },
                        },
                    },
                    bg: gray[16],
                    color: white[1],
                },
                label: {
                    color: 'inherit',
                },
                leftBorder: {
                    before: {
                        bg: transparency[0],
                    },
                },
                pack: {
                    after: {
                        edgeLower: {
                            bg: gray[12],
                        },
                    },
                    before: {
                        edgeUpper: {
                            bg: gray[13],
                        },
                    },
                    bg: blue.lighten[3],
                },
                stdBorder: {
                    bg: gray[12],
                },
            },
        },
    },
    menu: {
        item: {
            linkedBtn: {
                container: {
                    bg: transparency[0],
                },
                btn: {
                    bg: transparency[0],
                },
            },
            title: {
                color: blue.darken,
            },
            icon: {
                default: {
                    bars: {
                        fills: {
                            column1: green[4],
                            column2: blue[12],
                            column3: orange[3],
                            column4: yellow[2],
                            base: blue[13],
                            arrow: blue[13],
                        },
                        mini: {
                            size: 20,
                        },
                    },
                },
                bars: {
                    product: {
                        box: {
                            fill: orange[2],
                            stroke: orange[2],
                        },
                        tape: {
                            fill: orange[2],
                            stroke: orange[2],
                        },
                    },
                    customer: {
                        two: {
                            fill: purple.lighten[1],
                        },
                    },
                },
            },
        },
    },
    qtyText: {
        fill: gray[17],
    },
};
