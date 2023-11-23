import { DefaultTheme } from 'styled-components';

export const list: DefaultTheme['measures']['list'] = {
    pack: {
        border: {
            width: {
                dark: 0,
                light: 5,
            },
        },
        gap: 12,
        padding: {
            top: 8,
            bottom: 8,
            left: 15,
            right: 15,
        },
    },
    dataListItem: {
        btns: {
            active: {
                transform: {
                    translate: {
                        x: 0,
                        y: 0,
                    },
                },
            },
            border: {
                radius: {
                    dark: 8,
                    light: 0,
                },
            },
            container: {
                flex: 1,
                minWidth: 105,
            },
            hover: {
                transform: {
                    translate: {
                        x: 0,
                        y: -2,
                    },
                },
            },
            item: {
                gap: 3,
            },
            svg: {
                size: 25,
            },
        },
        photo: {
            img: {
                size: '100%',
                border: {
                    radius: 12,
                },
                overview: {
                    size: 80,
                    left: '100%',
                    top: '100%',
                },
                container: {
                    size: 48,
                },
            },
        },
    },
    empty: {
        gap: 12,
        padding: {
            top: 8,
            bottom: 8,
            left: 15,
            right: 15,
        },
        border: {
            radius: 10,
        },
    },
    gap: {
        dark: 5,
        light: 0,
    },
};
