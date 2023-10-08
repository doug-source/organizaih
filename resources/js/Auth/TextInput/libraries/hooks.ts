import { RefObject, useEffect, useState } from 'react';

export const useTextFocus = (
    localRef: RefObject<HTMLInputElement>,
    isFocused: boolean,
) => {
    const [focused, setFocused] = useState(false);
    useEffect(() => {
        if (focused || localRef.current === null) {
            return;
        }
        if (isFocused) {
            localRef.current.focus();
            setFocused(true);
        }
    }, [localRef, isFocused, focused]);
};
