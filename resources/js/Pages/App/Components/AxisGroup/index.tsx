import {
    useAxis,
    useAxisDraw,
} from '@/Pages/App/Components/AxisGroup/libraries/hooks';
import { AxisGroupX_ } from '@/Pages/App/Components/AxisGroup/styling';
import { barGraphBasic } from '@/Pages/App/settings';
import { ScaleBand, ScaleLinear } from 'd3-scale';
import { useRef } from 'react';

type AxisGroupProps = {
    svgWidth: number;
    svgHeight: number;
    xScale: ScaleBand<string>;
    yScale: ScaleLinear<number, number, never>;
};

export const AxisGroup = ({
    svgWidth,
    svgHeight,
    xScale,
    yScale,
}: AxisGroupProps) => {
    const {
        margins: { left, top, bottom },
    } = barGraphBasic;

    const [xAxis, yAxis] = useAxis(xScale, yScale);
    const axisGroupRefX = useRef<SVGGElement>(null);
    const axisGroupRefY = useRef<SVGGElement>(null);

    useAxisDraw(
        axisGroupRefX,
        axisGroupRefY,
        svgWidth,
        svgHeight,
        xAxis,
        yAxis,
    );

    return (
        <g className='axis-group'>
            <g
                ref={axisGroupRefY}
                transform={`translate(${left}, ${top})`}
            ></g>
            <AxisGroupX_
                ref={axisGroupRefX}
                transform={`translate(${left}, ${svgHeight - bottom})`}
            />
        </g>
    );
};
