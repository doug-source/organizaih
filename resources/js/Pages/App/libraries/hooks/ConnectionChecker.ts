import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import { DataPayload } from '@/Pages/App/libraries/types/payload';
import { Dispatch, useCallback, useEffect } from 'react';

export const useConnectionChecker = (
    dispatch: Dispatch<DataPayload.Skeleton>,
) => {
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
