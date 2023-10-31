import { remOutput } from '@/libraries/toolbox/Styling';
import { Axis } from 'd3-axis';
import { NumberValue } from 'd3-scale';
import { Selection, select } from 'd3-selection';
import { DefaultTheme } from 'styled-components';

export * from './hooks';

export const selectGroupAxesD3 = (
    axisGroupX: SVGGElement,
    axisGroupY: SVGGElement,
) => {
    const xAxisD3: Selection<SVGGElement, unknown, null, undefined> =
        select(axisGroupX);
    const yAxisD3: Selection<SVGGElement, unknown, null, undefined> =
        select(axisGroupY);
    return [xAxisD3, yAxisD3] as const;
};

const buildAxisD3X = (
    xAxisD3: Selection<SVGGElement, unknown, null, undefined>,
    xAxis: Axis<string>,
) => {
    xAxisD3
        .call(xAxis)
        .selectAll('g.tick')
        .selectAll('text')
        .attr('text-anchor', 'end');
};

const buildAxisD3Y = (
    yAxisD3: Selection<SVGGElement, unknown, null, undefined>,
    yAxis: Axis<NumberValue>,
) => yAxisD3.call(yAxis);

export const buildAxesD3 = (
    xAxisD3: Selection<SVGGElement, unknown, null, undefined>,
    yAxisD3: Selection<SVGGElement, unknown, null, undefined>,
    xAxis: Axis<string>,
    yAxis: Axis<NumberValue>,
) => {
    buildAxisD3X(xAxisD3, xAxis);
    buildAxisD3Y(yAxisD3, yAxis);
};

export const buildTransformValues = (theme: DefaultTheme) => {
    const {
        axis: {
            xGroup: {
                tickGroup: { text: textMeasure },
            },
        },
    } = theme.measures.graph.qtyBars;
    return [
        textMeasure.transform.translate.map(remOutput).join(', '),
        textMeasure.transform.rotate,
    ];
};
