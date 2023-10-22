import {
    DatePicker,
    DatepickerInput_,
} from '@/Pages/App/Components/DatePicker';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const DatePicker_ = styled(DatePicker)`
    ${({ theme }) => {
        const dateInputsMeasure = theme.measures.boundaryDateInputs;
        const { wideScreen } = theme.measures;
        return css`
            ${DatepickerInput_} {
                padding-top: ${remOutput(
                    dateInputsMeasure.datepicker.padding.top,
                )};
                padding-bottom: ${remOutput(
                    dateInputsMeasure.datepicker.padding.bottom,
                )};
                padding-left: ${remOutput(
                    dateInputsMeasure.datepicker.padding.left,
                )};
                padding-right: ${remOutput(
                    dateInputsMeasure.datepicker.padding.right,
                )};

                @media ${wideScreen} {
                    padding-top: ${remOutput(
                        dateInputsMeasure.datepicker.wide.padding.top,
                    )};
                    padding-bottom: ${remOutput(
                        dateInputsMeasure.datepicker.wide.padding.bottom,
                    )};
                    padding-left: ${remOutput(
                        dateInputsMeasure.datepicker.wide.padding.left,
                    )};
                    padding-right: ${remOutput(
                        dateInputsMeasure.datepicker.wide.padding.right,
                    )};
                }
            }
        `;
    }}
`;

export const DatePickers_ = styled.div`
    ${({ theme }) => {
        const { wideScreen } = theme.measures;
        const dateInputsMeasure = theme.measures.boundaryDateInputs;
        return css`
            display: flex;
            flex: 1;
            gap: ${remOutput(dateInputsMeasure.gap)};

            @media ${wideScreen} {
                gap: ${remOutput(dateInputsMeasure.wide.gap)};
            }
        `;
    }}
`;
