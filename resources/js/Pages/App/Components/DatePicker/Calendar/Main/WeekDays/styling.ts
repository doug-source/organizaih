import { Cell_ } from '@/Pages/App/Components/DatePicker/Calendar/Main/styling';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

type WeekDayProps_ = { $index: number };

export const WeekDay_ = styled(Cell_)<WeekDayProps_>`
    ${({ theme, $index }) => {
        const weekdaysTheme = theme.datepicker.calendar.main.weekdays;
        const weekdayMeasure = theme.measures.datepicker.calendar.main.weekDay;
        return css`
            font-size: ${remOutput(weekdayMeasure.fontSize)};
            border-top-width: ${remOutput(weekdayMeasure.border.size)};
            border-top-style: solid;
            border-top-color: ${weekdaysTheme.border.color};
            border-bottom-width: ${remOutput(weekdayMeasure.border.size)};
            border-bottom-style: solid;
            border-bottom-color: ${weekdaysTheme.border.color};
            color: ${weekdaysTheme.color};
            font-weight: 600;
            border-right-style: solid;
            border-right-color: ${weekdaysTheme.border.color};
            border-right-width: ${remOutput(
                $index < 6 ? weekdayMeasure.border.size : 0,
            )};
            grid-column: ${`${$index + 1} / span 1;`};
        `;
    }}
`;
