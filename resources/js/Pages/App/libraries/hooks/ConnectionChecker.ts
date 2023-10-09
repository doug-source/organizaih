import { Dispatch, useCallback, useEffect } from 'react';
import { DataReducerEnum } from '../enum';
import { Payload } from '../payload';

export const useConnectionChecker = (dispatch: Dispatch<Payload.Skeleton>) => {
    const offListener = useCallback(() => {
        dispatch({
            type: DataReducerEnum.ERROR,
            payload: {
                customMessage: ['Internet desconectada'],
            },
        });
    }, [dispatch]);

    useEffect(() => {
        window.addEventListener('offline', offListener);
        return () => window.removeEventListener('offline', offListener);
    });
};
