import { DefaultTheme } from 'styled-components';

export const inventory: DefaultTheme['measures']['inventory'] = {
    details: {
        defineItems: {
            border: {
                radius: 8,
            },
            wrap: {
                padding: {
                    right: 16,
                },
            },
            entryList: {
                data: {
                    gap: 4,
                },
                actions: {
                    right: 15,
                },
                entry: {
                    padding: 8,
                    first: {
                        border: {
                            topRight: {
                                radius: 8,
                            },
                        },
                    },
                    last: {
                        border: {
                            bottomRight: {
                                radius: 8,
                            },
                        },
                    },
                },
                entries: {
                    gap: 4,
                },
            },
        },
    },
    form: {
        base: {
            padding: {
                top: 16,
            },
            inventoryData: {
                container: {
                    height: '100%',
                    gap: 16,
                },
            },
        },
    },
    textItem: {
        qty: {
            fontSize: 18.4,
        },
    },
};
