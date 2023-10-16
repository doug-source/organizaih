import { DateStateType } from '@/Pages/App/Components/DatePicker/Calendar/libraries';
import { remOutput } from '@/libraries';
import { isSameMonth } from '@/libraries/toolbox/Date';
import { css } from 'styled-components';

const isInside = (date: Date) => isSameMonth(date);

const isCurrent = (date1: Date, date2: number | Date | null) => {
    return date2 instanceof Date && isSameMonth(date1, date2);
};

const highlightedStyle = css`
    ${({ theme }) => {
        const highTheme = theme.datepicker.calendar.main.months.highlighted;
        const {
            months: { highlighted: highMeasure },
        } = theme.measures.datepicker.calendar.main;
        const { size, sizePlus } = highMeasure.before;
        return css`
            color: ${highTheme.color};
            background: ${highTheme.bg};
            position: relative;
            &::before {
                content: '';
                position: absolute;
                top: ${remOutput(highMeasure.before.top)};
                left: ${remOutput(highMeasure.before.left)};
                width: calc(${size} + ${remOutput(sizePlus)});
                height: calc(${size} + ${remOutput(sizePlus)});
                border-width: ${remOutput(highMeasure.before.border.width)};
                border-style: solid;
                border-color: ${highTheme.before.border.color};
            }
        `;
    }}
`;

const presentStyle = css`
    ${({ theme }) => {
        const presentTheme = theme.datepicker.calendar.main.months.present;
        const {
            months: { present: presentMeasure },
        } = theme.measures.datepicker.calendar.main;
        return css`
            color: ${presentTheme.color};
            background: ${presentTheme.bg};
            &:hover {
                color: ${presentTheme.hover.color};
                background: ${presentTheme.hover.bg};
            }
            &::after {
                content: '';
                position: absolute;
                right: 0;
                bottom: 0;
                border-bottom-width: ${remOutput(
                    presentMeasure.after.border.size,
                )};
                border-bottom-style: solid;
                border-bottom-color: ${presentTheme.after.border.bottom};
                border-left-width: ${remOutput(
                    presentMeasure.after.border.size,
                )};
                border-left-style: solid;
                border-left-color: ${presentTheme.after.border.left};
                border-top-width: ${remOutput(
                    presentMeasure.after.border.size,
                )};
                border-top-style: solid;
                border-top-color: ${presentTheme.after.border.top};
            }
        `;
    }}
`;

export const makeMonthClass = (date: Date, dtVal: DateStateType['dtVal']) => {
    if (isCurrent(date, dtVal)) {
        return highlightedStyle;
    }
    if (isInside(date)) {
        return css`
            ${highlightedStyle}
            ${presentStyle}
        `;
    }
    return css`
        ${({ theme }) => {
            const hoverTheme = theme.datepicker.calendar.main.months.hover;
            return css`
                &:hover {
                    color: ${hoverTheme.color};
                    background: ${hoverTheme.bg};
                }
            `;
        }}
    `;
};

export const addLowerBorder = (index: number) => {
    if ((index + 1) / 3 <= 3) {
        return css`
            ${({ theme }) => {
                const monthsTheme = theme.datepicker.calendar.main.months;
                const {
                    main: { months: monthsMeasure },
                } = theme.measures.datepicker.calendar;
                return css`
                    border-bottom-width: ${remOutput(
                        monthsMeasure.border.width,
                    )};
                    border-bottom-style: solid;
                    border-bottom-color: ${monthsTheme.border.color};
                `;
            }}
        `;
    }
    return css`
        border-bottom: none;
    `;
};

export const addAsideBorder = (index: number) => {
    if ((index % 3) + 1 !== 3) {
        return css`
            ${({ theme }) => {
                const monthsTheme = theme.datepicker.calendar.main.months;
                const {
                    main: { months: monthsMeasure },
                } = theme.measures.datepicker.calendar;
                return css`
                    border-right-width: ${remOutput(
                        monthsMeasure.border.width,
                    )};
                    border-right-style: solid;
                    border-right-color: ${monthsTheme.border.color};
                `;
            }}
        `;
    }
    return css`
        border-right: none;
    `;
};
