import {
    addAsideBorder,
    addLowerBorder,
    makeMonthClass,
} from '@/Pages/App/Components/DatePicker/Calendar/Main/Months/libraries';
import {
    Cell_,
    DateCellProps,
} from '@/Pages/App/Components/DatePicker/Calendar/Main/styling';
import { remOutput } from '@/libraries';
import { fonts } from '@/settings/Theme/fonts';
import { css, styled } from 'styled-components';

export const Months_ = styled(Cell_)<DateCellProps>`
    ${({ theme, $date, $dateState, $index }) => {
        const monthsMeasure = theme.measures.datepicker.calendar.main.months;
        return css`
            cursor: pointer;
            font-family: ${fonts.family[9]};
            font-size: ${remOutput(monthsMeasure.fontSize)};
            ${makeMonthClass($date, $dateState.dtVal)}
            ${addLowerBorder($index)}
            ${addAsideBorder($index)}
        `;
    }}
`;
