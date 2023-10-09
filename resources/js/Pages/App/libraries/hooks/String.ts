import { useState } from 'react';

export const useToggleSecondWord = (secondWord: string, firstWord = '') => {
    const [fullword, setFullword] = useState(firstWord);
    return [
        fullword,
        () => {
            setFullword(
                fullword === firstWord
                    ? `${firstWord} ${secondWord}`.trim()
                    : firstWord,
            );
        },
    ] as const;
};
