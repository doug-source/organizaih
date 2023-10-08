import {
    black,
    blue,
    boxShadow,
    gradient,
    gray,
    green,
    orange,
    purple,
    textShadow,
    transparency,
    white,
    yellow,
} from '@/settings/palette';
import { DefaultTheme } from 'styled-components';
import { tools } from '../tools';

export const graph: DefaultTheme['graph'] = {
    bar: {
        qty: {
            qtyText: {
                fill: 'currentColor',
            },
            refLine: {
                stroke: {
                    color: 'currentColor',
                },
            },
            rect: {
                fill: gray[17],
                selected: {
                    fill: black[23],
                },
            },
            slider: {
                control: {
                    active: {
                        bg: gradient.linear[4],
                        boxShadow: `${boxShadow[16]}, ${boxShadow[17]}`,
                    },
                    bg: gradient.linear[0],
                    boxShadow: `${boxShadow[10]}, ${boxShadow[11]}`,
                    color: 'inherit',
                    hover: {
                        bg: gradient.linear[4],
                    },
                    icon: {
                        before: {
                            actived: {
                                color: black[25],
                                textShadow: textShadow[3],
                            },
                            textShadow: textShadow[2],
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
                        bg: black[6],
                    },
                },
                pack: {
                    after: {
                        edgeLower: {
                            bg: gray[30],
                        },
                    },
                    before: {
                        edgeUpper: {
                            bg: gray[30],
                        },
                    },
                    bg: gray[17],
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
                    bg: tools.linkedBtn.container.bg,
                },
                btn: {
                    bg: tools.linkedBtn.btn.bg,
                },
            },
            title: {
                color: 'inherit',
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
