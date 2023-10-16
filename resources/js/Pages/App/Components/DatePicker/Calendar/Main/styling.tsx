import { DateStateType } from '@/Pages/App/Components/DatePicker/Calendar/libraries';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export type DateCellProps = {
    $date: Date;
    $dateState: DateStateType;
    $index: number;
};

export const Cell_ = styled.div`
    ${({ theme }) => {
        const mainTheme = theme.measures.datepicker.calendar.main;
        return css`
            text-align: center;
            align-self: center;
            user-select: none;
            letter-spacing: ${remOutput(mainTheme.cell.letterSpacing)};
            padding-top: ${remOutput(mainTheme.cell.padding.top)};
            padding-bottom: ${remOutput(mainTheme.cell.padding.bottom)};
            padding-left: ${remOutput(mainTheme.cell.padding.left)};
            padding-right: ${remOutput(mainTheme.cell.padding.right)};
        `;
    }}
`;

export const CalendarGrid_ = styled.div`
    display: grid;
    grid-template: repeat(7, auto) / repeat(7, auto);
`;

export const CalendarMonthGrid_ = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
`;
