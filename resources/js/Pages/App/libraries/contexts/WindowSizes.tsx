import { ReactElement, createContext, useEffect, useState } from 'react';

type ListSizes = readonly [number | null, number | null];

export const WindowSizesContext = createContext<ListSizes>([null, null]);

type WindowSizesProps = {
    width: ListSizes[0];
    height: ListSizes[1];
    children?: ReactElement | null;
};

export const WindowSizes = ({
    width = null,
    height = null,
    children,
}: WindowSizesProps) => {
    const [windowSizes, setWindowSizes] = useState([width, height] as const);
    useEffect(() => {
        setWindowSizes([width, height]);
    }, [width, height]);
    return (
        <WindowSizesContext.Provider value={windowSizes}>
            {children}
        </WindowSizesContext.Provider>
    );
};
