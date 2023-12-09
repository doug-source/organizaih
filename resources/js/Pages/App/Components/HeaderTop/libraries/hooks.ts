import { useTouchDirection } from '@/Pages/App/libraries/hooks';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useBackHistoryTouch = () => {
    const {
        touchToLeft: touchToLeftTop,
        reset,
        handlers: touchTopListeners,
    } = useTouchDirection(50);

    const { pathname } = useLocation();
    useEffect(() => {
        if (touchToLeftTop && pathname !== '/') {
            reset();
            history.back();
        }
    }, [touchToLeftTop, pathname, reset]);
    return [touchTopListeners] as const;
};
