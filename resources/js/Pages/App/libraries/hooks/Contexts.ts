import { makeContextError } from '@/libraries';
import { useContext } from 'react';
import { AppDispatchContext } from '../..';
import { TitleContext } from '../contexts/Title';

export const useAppDispatch = () => {
    const appDispatch = useContext(AppDispatchContext);
    if (appDispatch === null) {
        throw makeContextError('useAppDispatch', 'AppDispatchContext');
    }
    return appDispatch;
};

export const useTitle = () => {
    return useContext(TitleContext);
};
