import { Input_ } from '@/Components/Input';
import { CalendarIcon } from '@/Pages/App/libraries';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const DatepickerInput_ = styled(Input_)`
    ${({ theme }) => {
        const inputTheme = theme.measures.datepicker.input;
        return css`
            cursor: pointer;
            width: ${remOutput(inputTheme.width)};
            text-indent: ${remOutput(inputTheme.textIndent)};
        `;
    }}
`;

export const DatepickerInputGroup_ = styled.div`
    position: relative;
`;

export const FormGroup_ = styled.div`
    display: flex;
    position: relative;
`;

export const CalendarIcon_ = styled(CalendarIcon)`
    ${({ theme }) => {
        const iconMeasure = theme.measures.datepicker.icon;
        const iconTheme = theme.datepicker.icon;
        return css`
            position: absolute;
            top: 0;
            bottom: 0;
            margin-top: auto;
            margin-bottom: auto;
            cursor: pointer;
            left: ${remOutput(iconMeasure.left)};
            width: ${remOutput(iconMeasure.size)};
            height: ${remOutput(iconMeasure.size)};

            fill: ${iconTheme.fill};
        `;
    }}
`;

export const Container_ = styled.div`
    position: relative;
`;
