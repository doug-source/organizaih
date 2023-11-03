import { remOutput } from '@/libraries';
import { fonts } from '@/settings';
import { css, styled } from 'styled-components';

export const CalendarContainer_ = styled.div`
    ${({ theme }) => {
        const calendarTheme = theme.datepicker.calendar;
        const containerMeasure = theme.measures.datepicker.calendar;
        return css`
            overflow: hidden;
            border-radius: ${remOutput(containerMeasure.border.radius)};
            border-width: ${remOutput(containerMeasure.border.width)};
            border-style: solid;
            border-color: ${calendarTheme.border.color};
            background: ${calendarTheme.bg};
            font-family: ${fonts.family[2]};
        `;
    }}
`;
