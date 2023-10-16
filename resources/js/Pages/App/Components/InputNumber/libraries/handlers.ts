import { ForwardedRef, MutableRefObject, RefObject } from 'react';

type MakeInputNumberRefReturn =
    | ((instance: HTMLInputElement | null) => void)
    | RefObject<HTMLInputElement>
    | undefined
    | null;

export const makeInputNumberRef = (
    ref: ForwardedRef<HTMLInputElement>,
    inputNumberRef: MutableRefObject<HTMLInputElement | null>,
): MakeInputNumberRefReturn => {
    return (node) => {
        inputNumberRef.current = node;
        if (typeof ref === 'function') {
            ref(node);
        } else if (ref) {
            ref.current = node;
        }
    };
};
