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
            },
            topRow: {
                wide: {
                    gap: 16,
                },
                transform: {
                    translate: [0, 9],
                },
            },
        },
    },
    list: {
        item: { child: { fontSize: 12.8 } },
    },
};
