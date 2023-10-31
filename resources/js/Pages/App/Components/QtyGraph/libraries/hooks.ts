import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import {
    useAPI,
    useAppDispatch,
    useGenericErrorHandler,
} from '@/Pages/App/libraries/hooks';
import { barGraphBasic } from '@/Pages/App/settings';
import { makeDtStartEndpoint } from '@/libraries/toolbox/Date';
import { scaleBand, scaleLinear } from 'd3-scale';
import { RefObject, useCallback, useEffect, useState } from 'react';

export const useItemList = <T>(
    dateSelected: Date | null,
    rawEndpoint: string,
    waitPreRequest: boolean,
) => {
    const appDispatch = useAppDispatch();
    const [itemList, setItemList] = useState<T[]>([]);
    const [storeItemList, requestItemList] = useAPI<
        T[],
        { pagination: false }
    >();
    useGenericErrorHandler(storeItemList.error);

    useEffect(() => {
        if (waitPreRequest) {
            return;
        }
        let newEndpoint = rawEndpoint;
        if (dateSelected !== null) {
            newEndpoint = makeDtStartEndpoint(rawEndpoint, dateSelected);
        }
        requestItemList(newEndpoint);
    }, [
        waitPreRequest,
        rawEndpoint,
        dateSelected,
        makeDtStartEndpoint,
        requestItemList,
    ]);
    useEffect(() => {
        if (
            storeItemList.error !== null ||
            typeof storeItemList.data === 'undefined'
        ) {
            return;
        }
        setItemList(storeItemList.data);
        appDispatch({
            type: DataReducerEnum.LOADING,
            payload: false,
        });
    }, [storeItemList.error, storeItemList.data, setItemList]);

    return [itemList] as const;
};

export const useSvgSizes = (
    svgRef: RefObject<SVGSVGElement>,
    windowWidth: number | null,
    windowHeight: number | null,
) => {
    const [svgWidth, setSvgWidth] = useState(0);
    const [svgHeight, setSvgHeight] = useState(0);
    useEffect(() => {
        if (
            svgRef.current === null ||
            svgRef.current.parentElement === null ||
            windowWidth === null ||
            windowHeight === null
        ) {
            return;
        }

        const { parentElement } = svgRef.current;
        const { width, height } = parentElement.getBoundingClientRect();

        setSvgWidth(Number(width.toFixed()));
        setSvgHeight(Number(height.toFixed()));
    }, [svgRef, windowWidth, windowHeight, setSvgWidth, setSvgHeight]);
    return [svgWidth, svgHeight] as const;
};

export const useScales = <T>(
    svgWidth: number,
    svgHeight: number,
    itemList: T[],
    xParser: (data: T) => string,
    yParser: (data: T) => number,
) => {
    const {
        margins: { top, bottom, left, right },
        paddingInner,
        paddingOuter,
    } = barGraphBasic;

    const xScaleFn = useCallback(
        () =>
            scaleBand()
                .range([0, svgWidth - left - right])
                .domain(itemList.map((item) => xParser(item)))
                .paddingInner(paddingInner)
                .paddingOuter(paddingOuter),
        [
            scaleBand,
            svgWidth,
            left,
            right,
            itemList,
            xParser,
            paddingInner,
            paddingOuter,
        ],
    );
    const yScaleFn = useCallback(
        () =>
            scaleLinear()
                .range([svgHeight - top - bottom, 0])
                .domain([
                    0,
                    Math.max(...itemList.map((item) => yParser(item)), 1),
                ]),
        [scaleLinear, svgHeight, top, bottom, itemList, yParser],
    );

    return [xScaleFn(), yScaleFn()] as const;
};
