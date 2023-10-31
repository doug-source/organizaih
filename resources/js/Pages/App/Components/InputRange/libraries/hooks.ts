import { MouseEvent, MouseEventHandler, RefObject, useCallback } from 'react';

type MakeHandlerFnProps = {
    step: number;
    refRange: RefObject<HTMLInputElement>;
    onChange: (val: number) => void;
};

type MakeDecreaseFnProps = {
    min: number;
} & MakeHandlerFnProps;

export const useDecreaseFn = ({
    min,
    step,
    refRange,
    onChange,
}: MakeDecreaseFnProps): MouseEventHandler<HTMLDivElement> => {
    return useCallback(
        (evt: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
            evt && evt.preventDefault();
            if (refRange.current === null) {
                return;
            }
            const val = Number(refRange.current.value);
            if (val >= min + step) {
                onChange(val - step);
            }
        },
        [refRange, onChange, min, step],
    );
};

type MakeIncreaseFnProps = {
    max: number;
} & MakeHandlerFnProps;

export const useIncreaseFn = ({
    max,
    step,
    refRange,
    onChange,
}: MakeIncreaseFnProps) => {
    return useCallback(
        (evt: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
            evt && evt.preventDefault();
            if (refRange.current === null) {
                return;
            }
            const val = Number(refRange.current.value);
            if (val <= max - step) {
                onChange(val + step);
            }
        },
        [refRange, onChange, max, step],
    );
};
