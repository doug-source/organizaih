import {
    createClearSelection,
    createSelection,
} from '@/Pages/App/Components/ElementGroup/libraries';
import {
    useHeightPlottable,
    useItemsRef,
} from '@/Pages/App/Components/ElementGroup/libraries/hooks';
import {
    QtyText_,
    Rect_,
    RefLine_,
    Tooltip_,
} from '@/Pages/App/Components/ElementGroup/styling';
import { barGraphBasic } from '@/Pages/App/settings';
import { ScaleBand, ScaleLinear } from 'd3-scale';
import { createRef, useRef, useState } from 'react';

type ElementGroupProps<T> = {
    svgHeight: number;
    svgWidth: number;
    itemList: T[];
    xScale: ScaleBand<string>;
    yScale: ScaleLinear<number, number, never>;
    storeClearSelection: (fn: () => void) => void;
    xParser: (data: T) => string;
    yParser: (data: T) => number;
};

export const ElementGroup = <T,>({
    svgHeight,
    svgWidth,
    itemList,
    xScale,
    yScale,
    storeClearSelection,
    xParser,
    yParser,
}: ElementGroupProps<T>) => {
    const elGroupRef = createRef<SVGGElement>();
    const tooltipGroupRef = createRef<SVGGElement>();

    const [heightPlottable] = useHeightPlottable(svgHeight, barGraphBasic);
    const {
        margins: { left, top, right },
    } = barGraphBasic;
    const [itemsRef] = useItemsRef<T>(itemList);
    const [showTooltip, setShowTooltip] = useState<boolean>();
    const [barSelected, setBarSelected] = useState<SVGRectElement | null>(null);
    const clearSelectionRef = useRef(
        createClearSelection(elGroupRef, setShowTooltip, setBarSelected),
    );
    storeClearSelection(clearSelectionRef.current);

    return (
        <>
            <g
                className='element-group'
                transform={`translate(${left}, ${top})`}
                ref={elGroupRef}
            >
                {itemList.map((d, i) => (
                    <g
                        className='barItem'
                        key={`${xParser(d)}${yParser(d)}`}
                    >
                        <Rect_
                            $selected={itemsRef.current[i] === barSelected}
                            ref={(el) => {
                                if (el !== null) {
                                    itemsRef.current[i] = el;
                                }
                            }}
                            height={heightPlottable - yScale(yParser(d))}
                            width={xScale.bandwidth()}
                            x={xScale(`${xParser(d)}`)}
                            y={yScale(yParser(d))}
                            onMouseOver={createSelection<T>( //
                                elGroupRef,
                                tooltipGroupRef,
                                setShowTooltip,
                                setBarSelected,
                                itemsRef,
                                i,
                                xScale,
                                yScale,
                                d,
                                xParser,
                                yParser,
                            )}
                            onMouseOut={createClearSelection(
                                elGroupRef,
                                setShowTooltip,
                                setBarSelected,
                            )}
                            onTouchStart={createSelection<T>(
                                elGroupRef,
                                tooltipGroupRef,
                                setShowTooltip,
                                setBarSelected,
                                itemsRef,
                                i,
                                xScale,
                                yScale,
                                d,
                                xParser,
                                yParser,
                            )}
                        />
                    </g>
                ))}
            </g>
            <Tooltip_
                $show={showTooltip}
                transform={`translate(${left}, ${top})`}
                ref={tooltipGroupRef}
            >
                <RefLine_
                    x1={0}
                    x2={svgWidth - left - right}
                />
                <QtyText_ textAnchor='middle' />
            </Tooltip_>
        </>
    );
};
