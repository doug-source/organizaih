import { black, gray, red, transparency } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const itemEditor: DefaultTheme['itemEditor'] = {
    futureBtns: {
        include: {
            icon: {
                fill: 'currentColor',
                stroke: 'none',
            },
        },
        remove: {
            icon: {
                fill: red[7],
            },
        },
    },
    productsIcon: {
        fill: transparency[0],
    },
    section: {
        border: {
            color: gray[9],
        },
        item: {
            itemData: {
                generalItem: {
                    data: {
                        bg: black[4],
                        color: 'inherit',
                        border: {
                            color: black[7],
                        },
                    },
                    pack: {
                        value: {
                            bg: black[13],
                        },
                    },
                },
            },
        },
    },
};
