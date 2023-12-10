import { DefaultTheme } from 'styled-components';

export const product: DefaultTheme['measures']['product'] = {
    category: {
        dataListItem: {
            padding: 16,
        },
        tools: {
            gap: 12,
            margin: {
                top: 4,
            },
            inputRequest: {
                label: {
                    gap: 8,
                },
            },
            wide: {
                gap: 8,
                margin: {
                    top: 0,
                },
            },
        },
    },
    itemSaver: {
        productsIcon: {
            size: 48,
            transform: {
                translate: [3, 5],
            },
        },
    },
    itemEditor: {
        productsIcon: {
            size: 110,
        },
    },
    form: {
        base: {
            formItem: {
                categoryInfo: {
                    padding: {
                        top: 16,
                        bottom: 16,
                        left: 10,
                        right: 10,
                    },
                    border: {
                        width: 1,
                    },
                    borderRadius: 8,
                    selectCategoryLink: {
                        padding: {
                            top: 8,
                            bottom: 0,
                            left: 0,
                            right: 0,
                        },
                    },
                },
                photo: {
                    label: {
                        margin: {
                            left: 80,
                        },
                    },
                },
            },
        },
    },
};
