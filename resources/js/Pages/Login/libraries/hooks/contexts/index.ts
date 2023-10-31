import { AuthStatusServerContext } from '@/Pages/libraries/contexts/AuthStatusServer';
import { LoadingDispatchContext } from '@/Pages/libraries/contexts/LoadingDispatch';
import { makeContextError } from '@/libraries';
import { useContext } from 'react';

export const useAuthStatusServer = () => {
    return useContext(AuthStatusServerContext);
};

export const useLoadingDispatch = () => {
    const dispatch = useContext(LoadingDispatchContext);
    if (dispatch === null) {
        throw makeContextError('useLoadingDispatch', 'LoadingDispatchContext');
    }
    return dispatch;
};
