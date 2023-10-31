import { inputRange } from '@/settings/Theme/App/measures/inputRange';
import { DefaultTheme } from 'styled-components';

export const graph: DefaultTheme['measures']['graph'] = {
    gateSwitcher: {
        label: {
            height: inputRange.slider.input.height,
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
