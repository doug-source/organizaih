import { makeContextError } from '@/libraries';
import { useContext } from 'react';
import {
    AuthStatusServerContext,
    LoadingDispatchContext,
} from '../../contexts';

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
