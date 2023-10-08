import { DefaultTheme } from 'styled-components';

export const pagination: DefaultTheme['measures']['pagination'] = {
    groups: {
        btn: {
            padding: 8,
            border: {
                radius: 8,
            },
            flex: {
                grow: 1,
                shrink: 1,
                basis: '32%',
            },
            selected: {
                after: {
                    width: '100%',
                    height: '100%',
                    border: {
                        radius: 8,
                    },
                },
            },
        },
        gap: 8,
    },
    pages: {
        btn: {
            padding: {
                default: 8,
                mobile: 1.6,
                left: 8,
                right: 8,
            },
            border: {
                radius: 16,
            },
            icon: {
                size: 24,
                rotation: '90deg',
            },
        },
        total: { padding: 8 },
    },
};
