import { AllowIcon } from '@/Pages/App/Components/AllowIcon';
import { FiltersBar_ } from '@/Pages/App/Components/FiltersBar';
import { NextButton } from '@/Pages/App/Components/NextButton';
import { Tools } from '@/Pages/App/Components/Tools';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const Tools_ = styled(Tools)`
    ${({ theme }) => {
        const filtersBarMeasure = theme.measures.user.filtersBar;
        return css`
            position: relative;
            ${FiltersBar_} {
                gap: ${remOutput(filtersBarMeasure.gap)};
            }
        `;
    }}
`;

export const NextButton_ = styled(NextButton)`
    ${({ theme }) => {
        const { nextBtn: btnTheme } = theme.user.list.tools;
        return css`
            position: absolute;
            left: auto;
            right: 0;
            color: ${btnTheme.color};
        `;
    }}
`;

export const AllowIcon_ = styled(AllowIcon)`
    ${({ theme }) => {
        const { svg: svgTheme } = theme.user.list.tools.nextBtn;
        return css`
            width: 1rem;
            fill: ${svgTheme.fill};
        `;
    }}
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
