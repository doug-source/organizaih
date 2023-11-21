import { FiltersBar_ } from '@/Pages/App/Components/FiltersBar';
import { Tools } from '@/Pages/App/Components/Tools';
import { getSvgSize } from '@/Pages/App/Screens/Customer/List/libraries';
import { AnonymousSVG } from '@/Pages/App/libraries/icons/asynchronous';
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

export const AnonymousSVG_ = styled(AnonymousSVG)`
    ${({ theme }) => {
        const size = getSvgSize(theme);
        return css`
            width: ${size};
            height: ${size};
            fill: ${theme.customer.list.photo.svg.fill};
        `;
    }}
`;
