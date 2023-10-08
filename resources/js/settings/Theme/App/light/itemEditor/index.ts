import { gray, green, red, transparency, white } from '@/settings/palette';
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
                        bg: green[1],
                        color: white[1],
                        border: {
                            color: transparency[0],
                        },
                    },
                    pack: {
                        value: {
                            bg: green.lighten[3],
                        },
                    },
                },
            },
        },
    },
};
