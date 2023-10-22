import { FiltersBar_ } from '@/Pages/App/Components/FiltersBar';
import { ContainerBtn_ } from '@/Pages/App/Components/LinkedButton';
import { Tools } from '@/Pages/App/Components/Tools';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';
// import { FiltersBar_, Tools } from '../../../shared';
// import { BtnAdd_ } from '../../../shared/Tools/AddButton/styling';

export const Tools_ = styled(Tools)`
    ${({ theme }) => {
        const { wideScreen } = theme.measures;
        const filtersBarMeasure = theme.measures.sale.filtersBar;
        return css`
            ${FiltersBar_} {
                gap: ${remOutput(filtersBarMeasure.gap)};

                @media ${wideScreen} {
                    gap: ${remOutput(filtersBarMeasure.wide.gap)};
                }
            }
            ${ContainerBtn_} {
                align-self: flex-start;
                padding-top: 0.3rem;
                padding-bottom: 0.3rem;
            }
        `;
    }}
`;
