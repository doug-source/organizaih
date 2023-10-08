import { black, gray, transparency, white } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const datepicker: DefaultTheme['datepicker'] = {
    calendar: {
        bg: black[5],
        border: {
            color: gray[29],
        },
        header: {
            arrow: {
                active: {
                    border: {
                        color: gray[14],
                    },
                },
                border: {
                    hide: {
                        color: transparency[0],
                    },
                    show: {
                        color: gray[14],
                    },
                },
                hover: {
                    border: {
                        color: black[1],
                    },
                },
            },
            item: {
                bg: transparency[0],
            },
            middle: {
                color: 'inherit',
            },
            spacer: {
                border: {
                    color: gray[29],
                },
            },
        },
        main: {
            dateCell: {
                color: 'inherit',
                bg: gray[28],
                border: {
                    color: gray[29],
                },
                highlighted: {
                    before: {
                        border: {
                            color: gray[29],
                        },
                    },
                    bg: black[1],
                    color: 'inherit',
                    hover: {
                        color: white[1],
                    },
                },
                today: {
                    after: {
                        border: {
                            bottom: gray[29],
                            left: transparency[0],
                            top: transparency[0],
                        },
                    },
                    color: 'inherit',
                    currMonth: {
                        color: gray[5],
                    },
                    hover: {
                        color: 'inherit',
                        bg: black[4],
                    },
                    prevMonth: {
                        color: black[2],
                    },
                },
            },
            months: {
                border: {
                    color: gray[29],
                },
                highlighted: {
                    before: {
                        border: {
                            color: gray[29],
                        },
                    },
                    bg: gray[29],
                    color: 'inherit',
                },
                hover: {
                    bg: transparency[2],
                    color: gray[29],
                },
                present: {
                    after: {
                        border: {
                            bottom: gray[29],
                            left: transparency[0],
                            top: transparency[0],
                        },
                    },
                    bg: transparency[0],
                    color: 'inherit',
                    hover: {
                        bg: gray[28],
                        color: 'inherit',
                    },
                },
            },
            weekdays: {
                color: 'inherit',
                border: {
                    color: gray[29],
                },
            },
        },
    },
    dropdown: {
        content: {
            bg: transparency[13],
        },
    },
    icon: {
        fill: 'currentColor',
    },
    label: {
        border: {
            color: gray[9],
        },
        color: gray[9],
    },
};
