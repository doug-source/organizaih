import { black, blue, gray, transparency, white } from '@/settings/palette';
import { DefaultTheme } from 'styled-components';

export const datepicker: DefaultTheme['datepicker'] = {
    calendar: {
        bg: white[2],
        border: {
            color: blue[14],
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
                        color: blue[14],
                    },
                },
            },
            item: {
                bg: transparency[0],
            },
            middle: {
                color: blue[14],
            },
            spacer: {
                border: {
                    color: blue[14],
                },
            },
        },
        main: {
            dateCell: {
                color: blue[14],
                bg: transparency[2],
                border: {
                    color: gray[5],
                },
                highlighted: {
                    before: {
                        border: {
                            color: blue[14],
                        },
                    },
                    bg: blue[14],
                    color: white[2],
                    hover: {
                        color: white[1],
                    },
                },
                today: {
                    after: {
                        border: {
                            bottom: blue[14],
                            left: transparency[0],
                            top: transparency[0],
                        },
                    },
                    color: blue[14],
                    currMonth: {
                        color: black[2],
                    },
                    hover: {
                        color: blue[14],
                        bg: transparency[2],
                    },
                    prevMonth: {
                        color: gray[5],
                    },
                },
            },
            months: {
                border: {
                    color: gray[5],
                },
                highlighted: {
                    before: {
                        border: {
                            color: blue[14],
                        },
                    },
                    bg: blue[14],
                    color: white[2],
                },
                hover: {
                    bg: transparency[2],
                    color: blue[14],
                },
                present: {
                    after: {
                        border: {
                            bottom: blue[14],
                            left: transparency[0],
                            top: transparency[0],
                        },
                    },
                    bg: transparency[0],
                    color: blue[14],
                    hover: {
                        color: blue[14],
                        bg: transparency[2],
                    },
                },
            },
            weekdays: {
                color: blue[14],
                border: {
                    color: blue[14],
                },
            },
        },
    },
    dropdown: {
        content: {
            bg: transparency[1],
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
