import { ScaleBand, ScaleLinear } from 'd3-scale';
import { Dispatch, MutableRefObject, RefObject, SetStateAction } from 'react';

export * from './hooks';

type ShowDispatch = Dispatch<SetStateAction<boolean | undefined>>;
type BarSelectedFn = Dispatch<SetStateAction<SVGRectElement | null>>;

const clearBarSelected = (elGroupRef: RefObject<SVGGElement>) => {
    if (elGroupRef.current === null) {
        return;
    }
    elGroupRef.current
        .querySelectorAll('rect.bar.selected')
        .forEach((rect) => rect.classList.remove('selected'));
};

const clearBarAndTooltip = (
    elGroupRef: RefObject<SVGGElement>,
    setShowDispatch: ShowDispatch,
    setBarSelected: BarSelectedFn,
) => {
    clearBarSelected(elGroupRef);
    setShowDispatch(false);
    setBarSelected(null);
};

const selectBar = (
    itemsRef: MutableRefObject<SVGRectElement[]>,
    index: number,
    setBarSelected: BarSelectedFn,
) => {
    setBarSelected(itemsRef.current[index]);
};

const positionLine = <T>(
    tooltipGroup: SVGGElement,
    yScale: ScaleLinear<number, number, never>,
    d: T,
    yParser: (data: T) => number,
) => {
    const line = tooltipGroup.querySelector('line');
    if (line === null) {
        return;
    }
    line.setAttribute('y1', (yScale(yParser(d)) + 0.3).toFixed(2));
    line.setAttribute('y2', (yScale(yParser(d)) + 0.3).toFixed(2));
};

const drawText = <T>(
    tooltipGroup: SVGGElement,
    xScale: ScaleBand<string>,
    yScale: ScaleLinear<number, number, never>,
    d: T,
    xParser: (data: T) => string,
    yParser: (data: T) => number,
) => {
    const textEl = tooltipGroup.querySelector('text');
    if (textEl === null) {
        return;
    }
    const xVal = xScale(xParser(d));
    if (typeof xVal === 'undefined') {
        return;
    }
    const yVal = yScale(yParser(d)) ?? 0;
    textEl.setAttribute('x', `${xVal + xScale.bandwidth() / 2}`);
    textEl.setAttribute('y', `${yVal}`);
    textEl.style.transform = `translate(0px, ${1.7}ch)`;
    textEl.innerHTML = `${yParser(d)}`;
};

const showTooltip = <T>(
    tooltipGroupRef: RefObject<SVGGElement>,
    setShowDispatch: ShowDispatch,
    xScale: ScaleBand<string>,
    yScale: ScaleLinear<number, number, never>,
    d: T,
    xParser: (data: T) => string,
    yParser: (data: T) => number,
) => {
    if (tooltipGroupRef.current === null) {
        return;
    }
    positionLine<T>(tooltipGroupRef.current, yScale, d, yParser);
    drawText<T>(tooltipGroupRef.current, xScale, yScale, d, xParser, yParser);
    setShowDispatch(true);
};

const doSelection = <T>(
    tooltipGroupRef: RefObject<SVGGElement>,
    setShowDispatch: ShowDispatch,
    setBarSelected: BarSelectedFn,
    itemsRef: MutableRefObject<SVGRectElement[]>,
    index: number,
    xScale: ScaleBand<string>,
    yScale: ScaleLinear<number, number, never>,
    d: T,
    xParser: (data: T) => string,
    yParser: (data: T) => number,
) => {
    selectBar(itemsRef, index, setBarSelected);
    showTooltip<T>(
        tooltipGroupRef,
        setShowDispatch,
        xScale,
        yScale,
        d,
        xParser,
        yParser,
    );
};

export const createSelection = <T>(
    elGroupRef: RefObject<SVGGElement>,
    tooltipGroupRef: RefObject<SVGGElement>,
    setShowDispatch: ShowDispatch,
    setBarSelected: BarSelectedFn,
    itemsRef: MutableRefObject<SVGRectElement[]>,
    index: number,
    xScale: ScaleBand<string>,
    yScale: ScaleLinear<number, number, never>,
    d: T,
    xParser: (data: T) => string,
    yParser: (data: T) => number,
) => {
    return () => {
        clearBarAndTooltip(elGroupRef, setShowDispatch, setBarSelected);
        doSelection<T>(
            tooltipGroupRef,
            setShowDispatch,
            setBarSelected,
            itemsRef,
            index,
            xScale,
            yScale,
            d,
            xParser,
            yParser,
        );
    };
};

export const createClearSelection = (
    elGroupRef: RefObject<SVGGElement>,
    setShowDispatch: ShowDispatch,
    setBarSelected: BarSelectedFn,
) => {
    return () => {
        clearBarAndTooltip(elGroupRef, setShowDispatch, setBarSelected);
    };
};
