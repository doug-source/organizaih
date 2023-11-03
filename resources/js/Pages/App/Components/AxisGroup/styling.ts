import { buildTransformValues } from '@/Pages/App/Components/AxisGroup/libraries';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

const transformStyle = css`
    ${({ theme }) => {
        const [translateVal, rotateVal] = buildTransformValues(theme);
        return css`translate(${translateVal}) rotate(${rotateVal})`;
    }}
`;

export const AxisGroupX_ = styled.g`
    ${({ theme }) => {
        const xGroupMeasure = theme.measures.graph.qtyBars.axis.xGroup;
        return css`
            font-size: ${remOutput(xGroupMeasure.fontSize)};
            g.tick text {
                transform: ${transformStyle};
            }
        `;
    }}
`;
