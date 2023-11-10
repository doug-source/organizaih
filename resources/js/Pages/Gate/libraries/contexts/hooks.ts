import { LoadingDispatchContext } from '@/Pages/Gate/libraries/contexts/LoadingDispatch';
import { RegisterFieldsContext } from '@/Pages/Gate/libraries/contexts/RegisterFields';
import { StatusServerContext } from '@/Pages/Gate/libraries/contexts/StatusServer';
import { useContext } from 'react';

export const useStatusServer = () => {
    return useContext(StatusServerContext);
};

export const useLoadingDispatch = () => {
    return useContext(LoadingDispatchContext);
};

export const useRegisterFields = () => {
    return useContext(RegisterFieldsContext);
};
