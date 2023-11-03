import {
    addAsideBorderStyle,
    addGridRowStyle,
    addInMonthStyle,
    addLowerBorderStyle,
    makeDayStyle,
} from '@/Pages/App/Components/DatePicker/Calendar/Main/MonthDays/libraries';
import {
    Cell_,
    DateCellProps,
} from '@/Pages/App/Components/DatePicker/Calendar/Main/styling';
import { remOutput } from '@/libraries';
import { fonts } from '@/settings/Theme/fonts';
import { css, styled } from 'styled-components';

export const DateCell_ = styled(Cell_)<DateCellProps>`
    ${({ theme, $date, $dateState, $index }) => {
        const dateCellTheme = theme.datepicker.calendar.main.dateCell;
        const {
            main: { dateCell: dateCellMeasure },
        } = theme.measures.datepicker.calendar;
        return css`
            cursor: pointer;
            font-family: ${fonts.family[9]};
            font-size: ${remOutput(dateCellMeasure.fontSize)};

            ${makeDayStyle($date, $dateState.dtVal)}
            ${addInMonthStyle($date, $dateState)}
            ${addLowerBorderStyle($index)}
            ${addAsideBorderStyle($index)}
            ${addGridRowStyle($index)}
            &:hover {
                background: ${dateCellTheme.bg};
            }
        `;
    }}
`;
