import {
    buildAxesD3,
    selectGroupAxesD3,
} from '@/Pages/App/Components/AxisGroup/libraries';
import { Axis, axisBottom, axisLeft } from 'd3-axis';
import { format } from 'd3-format';
import { NumberValue, ScaleBand, ScaleLinear } from 'd3-scale';
import { RefObject, useCallback, useEffect } from 'react';

export const useAxisDraw = (
    axisGroupRefX: RefObject<SVGGElement>,
    axisGroupRefY: RefObject<SVGGElement>,
    svgWidth: number,
    svgHeight: number,
    xAxis: Axis<string>,
    yAxis: Axis<NumberValue>,
) => {
    useEffect(() => {
        const { current: xAxisGroupNode } = axisGroupRefX;
        const { current: yAxisGroupNode } = axisGroupRefY;
        if (
            !xAxisGroupNode ||
            !yAxisGroupNode ||
            svgWidth === 0 ||
            svgHeight === 0
        ) {
            return;
        }
        const [xAxisGroup, yAxisGroup] = selectGroupAxesD3(
            xAxisGroupNode,
            yAxisGroupNode,
        );
        buildAxesD3(xAxisGroup, yAxisGroup, xAxis, yAxis);
    }, [
        axisGroupRefX,
        axisGroupRefY,
        svgWidth,
        svgHeight,
        buildAxesD3,
        xAxis,
        yAxis,
    ]);
};

export const useAxis = (
    xScale: ScaleBand<string>,
    yScale: ScaleLinear<number, number, never>,
) => {
    const xAxis = useCallback(axisBottom(xScale), [xScale]);
    const yAxis = useCallback(
        axisLeft(yScale)
            .tickValues(yScale.ticks().filter((tick) => Number.isInteger(tick)))
            .tickFormat(format('d')),
        [axisLeft, yScale, format],
    );

    return [xAxis, yAxis] as const;
};
