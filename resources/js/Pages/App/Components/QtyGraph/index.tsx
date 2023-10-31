import { AxisGroup } from '@/Pages/App/Components/AxisGroup';
import { ElementGroup } from '@/Pages/App/Components/ElementGroup';
import {
    useItemList,
    useScales,
    useSvgSizes,
} from '@/Pages/App/Components/QtyGraph/libraries/hooks';
import { QtyBarGraph_ } from '@/Pages/App/Components/QtyGraph/styling';
import { MutableRefObject, createRef, useRef } from 'react';

type QtyGraphProps<T> = {
    windowWidth: number;
    windowHeight: number;
    qtyCur: number;
    dateSelected: Date | null;
    waitPreRequest: boolean;
    makeUrlEndpoint: (qty: number) => string;
    xParser: (data: T) => string;
    yParser: (data: T) => number;
    clearSelectionRef?: MutableRefObject<(() => void) | undefined>;
};

export const QtyGraph = <T,>({
    windowWidth,
    windowHeight,
    qtyCur,
    dateSelected,
    waitPreRequest,
    makeUrlEndpoint,
    xParser,
    yParser,
    clearSelectionRef = useRef<() => void>(),
}: QtyGraphProps<T>) => {
    const svgRef = createRef<SVGSVGElement>();

    const [itemList] = useItemList<T>(
        dateSelected,
        makeUrlEndpoint(qtyCur),
        waitPreRequest,
    );
    const [svgWidth, svgHeight] = useSvgSizes(
        svgRef,
        windowWidth,
        windowHeight,
    );
    const [xScale, yScale] = useScales<T>(
        svgWidth,
        svgHeight,
        itemList,
        xParser,
        yParser,
    );
    if (itemList.length === 0) {
        return null;
    }
    return (
        <QtyBarGraph_>
            <svg
                width={svgWidth || '100%'}
                height={svgHeight || '100%'}
                ref={svgRef}
            >
                <AxisGroup
                    svgHeight={svgHeight}
                    svgWidth={svgWidth}
                    xScale={xScale}
                    yScale={yScale}
                />
                <ElementGroup
                    itemList={itemList}
                    svgWidth={svgWidth}
                    svgHeight={svgHeight}
                    xScale={xScale}
                    yScale={yScale}
                    xParser={xParser}
                    yParser={yParser}
                    storeClearSelection={(fn) => {
                        if (clearSelectionRef.current === null) {
                            clearSelectionRef.current = fn;
                        }
                    }}
                />
            </svg>
        </QtyBarGraph_>
    );
};
