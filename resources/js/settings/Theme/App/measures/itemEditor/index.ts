import { DefaultTheme } from 'styled-components';

export const itemEditor: DefaultTheme['measures']['itemEditor'] = {
    iconPhoto: {
        overview: {
            width: 112,
            minWidth: 112,
            height: 110,
            borderRadius: 8,
        },
    },
    futureBtns: {
        include: {
            borderRadius: 16,
            icon: {
                size: 30,
                borderRadius: 16,
            },
            transform: {
                translate: [-8, 8],
            },
        },
        remove: {
            borderRadius: 16,
            icon: {
                borderRadius: 16,
                size: 30,
            },
            transform: {
                translate: [-8, -8],
            },
        },
        width: 30,
    },
    section: {
        borderRadius: 8,
        border: {
            width: 1,
        },
        item: {
            gap: 8,
            height: '100%',
            itemData: {
                dataInputs: {
                    gap: 8,
                    input: {
                        minWidth: 5,
                    },
                },
                gap: 8,
                generalItem: {
                    borderRadius: 3,
                    data: {
                        borderRadius: 8,
                        border: {
                            width: {
                                dark: 1,
                                light: 0,
                            },
                        },
                    },
                    pack: {
                        padding: 8,
                        fontSize: 12,
                        value: {
                            borderRadius: 8,
                        },
                    },
                },
                height: '100%',
                minWidth: 164,
            },
        },
        padding: 8,
    },
};
