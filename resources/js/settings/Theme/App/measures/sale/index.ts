import { DefaultTheme } from 'styled-components';

export const sale: DefaultTheme['measures']['sale'] = {
    details: {
        defineItems: {
            borderRadius: 16,
            container: {
                gap: 32,
            },
            saleProducts: {
                borderBottom: {
                    radius: 16,
                },
                item: {
                    defineItem: {
                        padding: {
                            top: 0,
                            bottom: 0,
                            left: 8,
                            right: 0,
                        },
                    },
                    fontSize: 12,
                },
            },
            wrap: {
                fontSize: 20,
                global: {
                    fontSize: 12,
                },
                padding: 16,
            },
        },
    },
    filtersBar: {
        datepickers: {
            gap: 3.2,
            wide: {
                gap: 8,
            },
            datepicker: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 1.6,
                    right: 1.6,
                },
                wide: {
                    padding: {
                        top: 8,
                        bottom: 8,
                        left: 12,
                        right: 12,
                    },
                },
            },
        },
        gap: 4,
        wide: {
            gap: 16,
        },
    },
    form: {
        base: {
            notice: {
                border: {
                    radius: 8,
                },
                label: {
                    padding: 8,
                },
                value: {
                    border: {
                        radius: 8,
                    },
                    fontSize: 12,
                    padding: 8,
                },
            },
            padding: {
                top: 16,
            },
            saleSelectors: {
                customerInfo: {
                    icon: {
                        size: 48,
                    },
                },
                icons: {
                    size: 63,
                    top: 9,
                },
                wide: {
                    gap: 16,
                },
            },
        },
    },
    list: {
        item: { child: { fontSize: 12.8 } },
    },
};
