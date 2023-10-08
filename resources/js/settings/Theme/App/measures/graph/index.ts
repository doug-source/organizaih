import { DefaultTheme } from 'styled-components';
import { makeRangeBoxData } from './libraries';

const rangeBoxData = makeRangeBoxData();

export const graph: DefaultTheme['measures']['graph'] = {
    bar: {
        qty: {
            qtyText: {
                fontSize: 20,
            },
            slider: {
                control: {
                    border: rangeBoxData.control.border,
                    fontSize: rangeBoxData.control.fontSize,
                    height: rangeBoxData.slider.control.height,
                    width: rangeBoxData.slider.control.width,
                },
                currentValue: {
                    after: rangeBoxData.currentValue.after,
                    border: {
                        radius: rangeBoxData.currentValue.border.radius,
                    },
                    height: rangeBoxData.currentValue.height,
                    padding: {
                        top: rangeBoxData.currentValue.padding.top,
                        bottom: rangeBoxData.currentValue.padding.bottom,
                        left: rangeBoxData.currentValue.padding.left,
                        right: rangeBoxData.currentValue.padding.right,
                    },
                    size: rangeBoxData.currentValue.size,
                    width: rangeBoxData.currentValue.width,
                },
                inputRange: {
                    width: rangeBoxData.slider.width,
                },
                label: {
                    fontSize: 12.8,
                },
                leftBorder: rangeBoxData.leftBorder,
                pack: {
                    after: {
                        edgeLower: {
                            height: 4,
                        },
                    },
                    before: {
                        edgeUpper: {
                            widthRemoved: 2 * rangeBoxData.control.size,
                            height: 1,
                        },
                    },
                    border: {
                        radius: rangeBoxData.control.border.radius,
                    },
                    gap: rangeBoxData.slider.gap,
                },
                rightBorder: rangeBoxData.rightBorder,
                stdBorder: {
                    width: 1,
                },
            },
        },
    },
    gateSwitcher: {
        label: {
            height: rangeBoxData.slider.height,
        },
    },
    menu: {
        item: {
            minWidth: 58,
            icon: {
                default: {
                    bars: {
                        size: 40,
                    },
                },
                bars: {
                    products: {
                        transform: {
                            translate: [20, 0],
                        },
                    },
                    customers: {
                        transform: {
                            translate: [23, -2],
                        },
                    },
                    container: {
                        padding: {
                            top: 8,
                        },
                    },
                },
            },
            linkedBtn: {
                container: {
                    margin: {
                        top: 27,
                        bottom: 27,
                        left: 27,
                        right: 27,
                    },
                    border: {
                        radius: 32,
                    },
                },
                btn: {
                    padding: {
                        top: 16,
                        bottom: 16,
                        left: 16,
                        right: 16,
                    },
                    border: {
                        radius: 32,
                    },
                },
            },
            title: {
                fontSize: 12,
                line: {
                    lineHeight: 16,
                },
            },
        },
    },
    qtyBars: {
        datepicker: {
            width: 125,
            padding: 8,
        },
        filtersBar: {
            rowGap: 8,
            gap: 8,
        },
        axis: {
            xGroup: {
                fontSize: 12,
                tickGroup: {
                    text: {
                        transform: {
                            translate: [-0.3125, 0],
                            rotate: '-33deg',
                        },
                    },
                },
            },
        },
    },
};
