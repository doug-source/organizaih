import { DateStateType } from '@/Pages/App/Components/DatePicker/Calendar/libraries';
import { remOutput } from '@/libraries';
import { createDate, isSameDay, isSameMonth } from '@/libraries/toolbox/Date';
import { css } from 'styled-components';

const isToday = (date: Date) => isSameDay(date);

const isCurrent = (date1: Date, date2: number | Date | null) => {
    return date2 instanceof Date && isSameDay(date1, date2);
};

const inMonth = (date: Date, dateState: DateStateType) => {
    return (
        dateState.month &&
        dateState.year &&
        isSameMonth(date, createDate(1, dateState.month - 1, dateState.year))
    );
};

const highlightedStyle = css`
    ${({ theme }) => {
        const {
            dateCell: { highlighted: highlightedTheme },
        } = theme.datepicker.calendar.main;
        const {
            dateCell: { highlighted: highlightedMeasure },
        } = theme.measures.datepicker.calendar.main;
        const { size, sizePlus } = highlightedMeasure.before;
        return css`
            color: ${highlightedTheme.color};
            background: ${highlightedTheme.bg};
            position: relative;
            &::before {
                content: '';
                position: absolute;
                top: ${remOutput(highlightedMeasure.before.top)};
                left: ${remOutput(highlightedMeasure.before.left)};
                width: calc(${size} + ${remOutput(sizePlus)});
                height: calc(${size} + ${remOutput(sizePlus)});
                border-width: ${remOutput(
                    highlightedMeasure.before.border.width,
                )};
                border-style: solid;
                border-color: ${highlightedTheme.before.border.color};
            }
        `;
    }}
`;

const todayStyle = css`
    ${({ theme }) => {
        const todayTheme = theme.datepicker.calendar.main.dateCell.today;
        const {
            dateCell: { today: todayMeasure },
        } = theme.measures.datepicker.calendar.main;
        return css`
            color: ${todayTheme.color};
            background: transparent;
            &::after {
                content: '';
                position: absolute;
                right: 0;
                bottom: 0;
                border-bottom-width: ${remOutput(
                    todayMeasure.after.border.width,
                )};
                border-bottom-style: solid;
                border-bottom-color: ${todayTheme.after.border.bottom};
                border-left-width: ${remOutput(
                    todayMeasure.after.border.width,
                )};
                border-left-style: solid;
                border-left-color: ${todayTheme.after.border.left};
                border-top-width: ${remOutput(todayMeasure.after.border.width)};
                border-top-style: solid;
                border-top-color: ${todayTheme.after.border.top};
            }
        `;
    }}
`;

export const makeDayStyle = (date: Date, dtVal: DateStateType['dtVal']) => {
    if (isCurrent(date, dtVal)) {
        return css`
            ${({ theme }) => {
                const {
                    dateCell: { highlighted: highlightedTheme },
                } = theme.datepicker.calendar.main;
                return css`
                    ${highlightedStyle}
                    &:hover {
                        color: ${highlightedTheme.hover.color};
                        background: ${highlightedTheme.bg};
                    }
                `;
            }}
        `;
    }
    if (isToday(date)) {
        return css`
            ${highlightedStyle}
            ${todayStyle}
        `;
    }
    return css`
        ${({ theme }) => {
            const todayTheme = theme.datepicker.calendar.main.dateCell.today;
            return css`
                &:hover {
                    color: ${todayTheme.hover.color};
                    background: ${todayTheme.hover.bg};
                }
            `;
        }}
    `;
};

export const addInMonthStyle = (date: Date, dateState: DateStateType) => {
    if (inMonth(date, dateState)) {
        if (!isCurrent(date, dateState.dtVal) && !isToday(date)) {
            return css`
                ${({ theme }) => {
                    const {
                        today: { currMonth: currTheme },
                    } = theme.datepicker.calendar.main.dateCell;
                    return css`
                        font-weight: 500;
                        color: ${currTheme.color};
                    `;
                }}
            `;
        }
        return '';
    }
    return css`
        ${({ theme }) => {
            const {
                today: { prevMonth: prevTheme },
            } = theme.datepicker.calendar.main.dateCell;
            return css`
                font-weight: 300;
                color: ${prevTheme.color};
            `;
        }}
    `;
};

export const addLowerBorderStyle = (index: number) => {
    if ((index + 1) / 7 <= 5) {
        return css`
            ${({ theme }) => {
                const dateCellTheme = theme.datepicker.calendar.main.dateCell;
                const {
                    main: { dateCell: dateCellMeasure },
                } = theme.measures.datepicker.calendar;
                return css`
                    border-bottom-width: ${remOutput(
                        dateCellMeasure.border.width,
                    )};
                    border-bottom-style: solid;
                    border-bottom-color: ${dateCellTheme.border.color};
                `;
            }}
        `;
    }
    return css`
        border-bottom: none;
    `;
};

export const addAsideBorderStyle = (index: number) => {
    if ((index % 7) + 1 !== 7) {
        return css`
            ${({ theme }) => {
                const dateCellTheme = theme.datepicker.calendar.main.dateCell;
                const {
                    main: { dateCell: dateCellMeasure },
                } = theme.measures.datepicker.calendar;
                return css`
                    border-right-width: ${remOutput(
                        dateCellMeasure.border.width,
                    )};
                    border-right-style: solid;
                    border-right-color: ${dateCellTheme.border.color};
                `;
            }}
        `;
    }
    return css`
        border-right: none;
    `;
};

export const addGridRowStyle = (index: number) => {
    const val = Math.floor(index / 7) + 2;
    if (val >= 2 && val <= 6) {
        return `grid-row: ${val} / span 1`;
    }
    return `grid-row: 7 / span 1`;
};
