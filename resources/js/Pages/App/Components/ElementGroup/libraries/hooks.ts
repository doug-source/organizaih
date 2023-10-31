import { barGraphBasic } from '@/Pages/App/settings';
import { useEffect, useRef, useState } from 'react';

export const useHeightPlottable = (
    svgHeight: number,
    { margins: { top, bottom } }: typeof barGraphBasic,
) => {
    const [height, setHeight] = useState(0);
    useEffect(() => {
        const val = svgHeight - top - bottom;
        setHeight(Number(val.toFixed()));
    }, [svgHeight, top, bottom, setHeight]);
    return [height];
};

export const useItemsRef = <T>(itemList: T[]) => {
    const itemsRef = useRef<SVGRectElement[]>([]);
    useEffect(() => {
        itemsRef.current = itemsRef.current.slice(0, itemList.length);
    }, [itemList]);
    return [itemsRef] as const;
};
