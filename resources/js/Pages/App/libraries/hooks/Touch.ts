import { TouchEventHandler, useEffect, useState } from 'react';

type touchDirectionHandlers = Readonly<{
    touchstart: TouchEventHandler<HTMLDivElement>;
    touchmove: TouchEventHandler<HTMLDivElement>;
    touchend: TouchEventHandler<HTMLDivElement>;
}>;

type touchDirectionType = Readonly<{
    touchToLeft: boolean;
    touchToRight: boolean;
    touchToUp: boolean;
    touchToDown: boolean;
    reset: () => void;
    handlers: touchDirectionHandlers;
}>;

export const useTouchDirection = (
    threshold = 150,
    restraint = 100,
    allowedTime = 300,
): touchDirectionType => {
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [distX, setDistX] = useState(0);
    const [distY, setDistY] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [startTime, setStartTime] = useState(0);

    const [touchToLeft, setTouchToLeft] = useState(false);
    const [touchToRight, setTouchToRight] = useState(false);
    const [touchToUp, setTouchToUp] = useState(false);
    const [touchToDown, setTouchToDown] = useState(false);

    const reset = () => {
        setTouchToLeft(false);
        setTouchToRight(false);
        setTouchToUp(false);
        setTouchToDown(false);
    };

    useEffect(() => {
        if (elapsedTime <= allowedTime) {
            // first condition for swipe
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                // 2nd condition for horizontal swipe
                if (distX < 0) {
                    setTouchToLeft(true);
                    setTouchToRight(false);
                } else {
                    setTouchToRight(true);
                    setTouchToLeft(false);
                }
            } else if (
                Math.abs(distY) >= threshold &&
                Math.abs(distX) <= restraint
            ) {
                // 2nd condition for vertical swipe
                if (distY < 0) {
                    // if dist traveled is negative, it indicates up swipe
                    setTouchToUp(true);
                    setTouchToDown(false);
                } else {
                    setTouchToUp(false);
                    setTouchToDown(true);
                }
            }
        }
    }, [threshold, restraint, elapsedTime, allowedTime, distX, distY]);

    return {
        touchToLeft,
        touchToRight,
        touchToUp,
        touchToDown,
        reset,
        handlers: {
            touchstart: (evt) => {
                const touchobj = evt.changedTouches[0];
                setStartX(touchobj.pageX);
                setStartY(touchobj.pageY);
                setStartTime(Date.now());
            },
            touchmove: (evt) => evt.preventDefault(),
            touchend: (evt) => {
                const touchobj = evt.changedTouches[0];
                setDistX(touchobj.pageX - startX);
                setDistY(touchobj.pageY - startY);
                setElapsedTime(Date.now() - startTime);
            },
        },
    };
};
