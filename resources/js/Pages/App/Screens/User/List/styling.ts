import { FiltersBar_ } from '@/Pages/App/Components/FiltersBar';
import { Tools } from '@/Pages/App/Components/Tools';
import { AllowSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const Tools_ = styled(Tools)`
    ${({ theme }) => {
        const filtersBarMeasure = theme.measures.user.filtersBar;
        return css`
            ${FiltersBar_} {
                gap: ${remOutput(filtersBarMeasure.gap)};
            }
        `;
    }}
`;

export const AllowSvg_ = styled(AllowSVG)`
    width: 1rem;
    fill: currentColor;
`;

export const AllowTextContent_ = styled.div`
    ${({ theme }) => {
        const { wideScreen, mediumScreen } = theme.measures;
        return css`
            display: none;
            margin-left: 0.5rem;
            @media ${wideScreen} {
                display: block;
            }
            @media ${mediumScreen} {
                display: block;
            }
        `;
    }}
`;
