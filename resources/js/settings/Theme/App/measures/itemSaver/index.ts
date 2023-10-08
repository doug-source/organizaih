import { DefaultTheme } from 'styled-components';

export const itemSaver: DefaultTheme['measures']['itemSaver'] = {
    list: {
        data: {
            values: {
                gap: 8,
                fontSize: 11.2,
            },
        },
        gap: 8,
        height: '100%',
        padding: 8,
        includeItem: {
            borderRadius: 8,
            border: {
                width: 1,
            },
            btns: {
                include: {
                    borderRadius: 16,
                    icon: {
                        borderRadius: 16,
                        width: 16,
                    },
                },
                return: {
                    borderRadius: 16,
                    icon: {
                        borderRadius: 16,
                        transform: {
                            rotate: '180deg',
                        },
                        width: 16,
                    },
                },
            },
            maxWidth: '50%',
            padding: 8,
        },
    },
    overview: {
        size: 48,
        borderRadius: 8,
    },
    section: {
        borderRadius: 8,
        border: {
            width: 1,
        },
    },
};
