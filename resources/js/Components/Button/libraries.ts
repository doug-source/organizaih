import { RefObject } from 'react';

export const propagateClick = (btnRef: RefObject<HTMLButtonElement>) => {
    const { current: btn } = btnRef;
    btn !== null && btn.click();
};
