import { FiltersBar_ } from '@/Pages/App/Components/FiltersBar';
import { Tools } from '@/Pages/App/Components/Tools';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const Tools_ = styled(Tools)`
    ${({ theme }) => {
        const filtersBarMeasure = theme.measures.customer.filtersBar;
        return css`
            ${FiltersBar_} {
                gap: ${remOutput(filtersBarMeasure.gap)};
            }
        `;
    }}
`;
