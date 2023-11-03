import {
    DatePicker,
    DatepickerInput_,
} from '@/Pages/App/Components/DatePicker';
import { FiltersBar_ } from '@/Pages/App/Components/FiltersBar';
import {
    GateSwitcher,
    SwitchLabel_,
} from '@/Pages/App/Components/GateSwitcher';
import { Tools } from '@/Pages/App/Components/Tools';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const DatePicker_ = styled(DatePicker)`
    ${({ theme }) => {
        const datepickerMeasure = theme.measures.graph.qtyBars.datepicker;
        return css`
            ${DatepickerInput_} {
                width: ${remOutput(datepickerMeasure.width)};
                padding-top: ${remOutput(datepickerMeasure.padding)};
                padding-bottom: ${remOutput(datepickerMeasure.padding)};
            }
        `;
    }}
`;

export const Tools_ = styled(Tools)`
    ${({ theme }) => {
        const filtersBarMeasure = theme.measures.graph.qtyBars.filtersBar;
        return css`
            ${FiltersBar_} {
                row-gap: ${remOutput(filtersBarMeasure.rowGap)};
                gap: ${remOutput(filtersBarMeasure.gap)};
            }
        `;
    }}
`;

export const GateSwitcher_ = styled(GateSwitcher)`
    ${({ theme }) => {
        const gateSwitcherMeasure = theme.measures.graph.gateSwitcher;
        return css`
            align-items: flex-end;
            ${SwitchLabel_} {
                height: ${remOutput(gateSwitcherMeasure.label.height)};
            }
        `;
    }}
`;

export const QtyBarContainer_ = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
`;
