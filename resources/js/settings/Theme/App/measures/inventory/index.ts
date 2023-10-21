import { DefaultTheme } from 'styled-components';

export const inventory: DefaultTheme['measures']['inventory'] = {
    details: {
        defineItems: {
            border: {
                radius: 8,
            },
            wrap: {
                padding: 8,
            },
            entries: {
                marginTop: 8,
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
