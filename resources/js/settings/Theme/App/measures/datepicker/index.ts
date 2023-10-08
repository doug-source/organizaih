import { DefaultTheme } from 'styled-components';

const datepicker_arrow_borderSize = 22.4;

export const datepicker: DefaultTheme['measures']['datepicker'] = {
    calendar: {
        border: {
            width: 2,
            radius: 5,
        },
        header: {
            middle: {
                fontSize: 20.8,
                padding: {
                    top: 8,
                    bottom: 8,
                    left: 4,
                    right: 4,
                },
                wordSpacing: 5,
            },
            arrow: {
                border: {
                    width: 9.6,
                },
            },
            arrowLeft: {
                border: {
                    right: datepicker_arrow_borderSize,
                },
                left: 12,
            },
            arrowRight: {
                border: {
                    left: datepicker_arrow_borderSize,
                },
                right: 12,
            },
            spacer: {
                border: {
                    top: 2,
                },
            },
        },
        main: {
            cell: {
                letterSpacing: 1.6,
                padding: {
                    top: 4.8,
                    bottom: 4.8,
                    left: 2.4,
                    right: 2.4,
                },
            },
            dateCell: {
                fontSize: 16,
                highlighted: {
                    before: {
                        top: -1,
                        left: -1,
                        size: '100%',
                        sizePlus: 2,
                        border: {
                            width: 2,
                        },
                    },
                },
                today: {
                    after: {
                        border: {
                            width: 12,
                        },
                    },
                },
                border: {
                    width: 1,
                },
            },
            months: {
                fontSize: 16,
                border: {
                    width: 1,
                },
                highlighted: {
                    before: {
                        top: -1,
                        left: -1,
                        size: '100%',
                        sizePlus: 2,
                        border: {
                            width: 2,
                        },
                    },
                },
                present: {
                    after: {
                        border: {
                            size: 12,
                        },
                    },
                },
            },
            weekDay: {
                border: {
                    size: 2,
                },
                fontSize: 16,
            },
        },
    },
    icon: {
        left: 6,
        size: 14,
    },
    input: {
        width: 152,
        textIndent: 24,
    },
    label: {
        border: {
            width: 1,
            top: {
                leftRadius: 12,
            },
            bottom: {
                leftRadius: 12,
            },
        },
        width: 40,
        lineHeight: 11.2,
        fontSize: 12.8,
        wide: {
            lineHeight: 16,
        },
    },
};
