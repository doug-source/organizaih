import { ForwardedRef, MutableRefObject, RefObject } from 'react';

type MakePhotoRefReturn =
    | ((instance: HTMLInputElement | null) => void)
    | RefObject<HTMLInputElement>
    | undefined
    | null;

export const makePhotoRef = (
    ref: ForwardedRef<HTMLInputElement>,
    photoInputRef: MutableRefObject<HTMLInputElement | null>,
): MakePhotoRefReturn => {
    return (node) => {
        photoInputRef.current = node;
        if (typeof ref === 'function') {
            ref(node);
        } else if (ref) {
            ref.current = node;
        }
    };
};

export * from './hooks';
