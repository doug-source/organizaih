import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const CalendarHeader_ = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

export const HeaderMiddle_ = styled.div`
    ${({ theme }) => {
        const middleTheme = theme.datepicker.calendar.header.middle;
        const middleMeasure = theme.measures.datepicker.calendar.header.middle;
        return css`
            text-align: center;
            user-select: none;
            font-weight: 500;
            font-size: ${remOutput(middleMeasure.fontSize)};
            color: ${middleTheme.color};
            padding-top: ${remOutput(middleMeasure.padding.top)};
            padding-bottom: ${remOutput(middleMeasure.padding.bottom)};
            padding-left: ${remOutput(middleMeasure.padding.left)};
            padding-right: ${remOutput(middleMeasure.padding.right)};
            word-spacing: ${remOutput(middleMeasure.wordSpacing)};
        `;
    }}
`;

const Arrow_ = styled.button`
    ${({ theme }) => {
        const arrowTheme = theme.datepicker.calendar.header.arrow;
        const arrowMeasure = theme.measures.datepicker.calendar.header.arrow;
        return css`
            appearance: none;
            user-select: none;
            outline: none !important;
            display: inline-block;
            position: relative;
            cursor: pointer;
            padding: 0;
            border: none;
            border-top-width: ${remOutput(arrowMeasure.border.width)};
            border-top-style: solid;
            border-top-color: ${arrowTheme.border.hide.color};
            border-bottom-width: ${remOutput(arrowMeasure.border.width)};
            border-bottom-style: solid;
            border-bottom-color: ${arrowTheme.border.hide.color};
        `;
    }}
`;

export const ArrowLeft_ = styled(Arrow_)`
    ${({ theme }) => {
        const arrowTheme = theme.datepicker.calendar.header.arrow;
        const {
            header: { arrowLeft: arrowMeasure },
        } = theme.measures.datepicker.calendar;
        return css`
            border-right-width: ${remOutput(arrowMeasure.border.right)};
            border-right-style: solid;
            border-right-color: ${arrowTheme.border.show.color};
            left: ${remOutput(arrowMeasure.left)};
            &:hover {
                border-right-color: ${arrowTheme.hover.border.color};
            }
            &:active {
                border-right-color: ${arrowTheme.active.border.color};
            }
        `;
    }}
`;

export const ArrowRight_ = styled(Arrow_)`
    ${({ theme }) => {
        const arrowTheme = theme.datepicker.calendar.header.arrow;
        const {
            header: { arrowRight: arrowMeasure },
        } = theme.measures.datepicker.calendar;
        return css`
            border-left-width: ${remOutput(arrowMeasure.border.left)};
            border-left-style: solid;
            border-left-color: ${arrowTheme.border.show.color};
            right: ${remOutput(arrowMeasure.right)};
            &:hover {
                border-left-color: ${arrowTheme.hover.border.color};
            }
            &:active {
                border-left-color: ${arrowTheme.active.border.color};
            }
        `;
    }}
`;

export const Spacer_ = styled.div`
    ${({ theme }) => {
        const spacerTheme = theme.datepicker.calendar.header.spacer;
        const spacerMeasure = theme.measures.datepicker.calendar.header.spacer;
        return css`
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            border-top-width: ${remOutput(spacerMeasure.border.top)};
            border-top-style: solid;
            border-top-color: ${spacerTheme.border.color};
        `;
    }}
`;
