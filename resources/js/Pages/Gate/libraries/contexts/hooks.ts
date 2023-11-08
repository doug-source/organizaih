import { LoadingDispatchContext } from '@/Pages/Gate/libraries/contexts/LoadingDispatch';
import { RegisterFieldsContext } from '@/Pages/Gate/libraries/contexts/RegisterFields';
import { StatusServerContext } from '@/Pages/Gate/libraries/contexts/StatusServer';
import { makeContextError } from '@/libraries';
import { useContext } from 'react';

export const useStatusServer = () => {
    return useContext(StatusServerContext);
};

export const useLoadingDispatch = () => {
    const dispatch = useContext(LoadingDispatchContext);
    if (dispatch === null) {
        throw makeContextError('useLoadingDispatch', 'LoadingDispatchContext');
    }
    return dispatch;
};

export const useRegisterFields = () => {
    return useContext(RegisterFieldsContext);
};
