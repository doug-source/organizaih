import { AppDispatchContext } from '@/Pages/App';
import { LocaleContext, TitleContext } from '@/Pages/App/libraries';
import { makeContextError } from '@/libraries';
import { useContext } from 'react';

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

export const useLocale = () => {
    const localeData = useContext(LocaleContext);
    if (localeData === null) {
        throw makeContextError('useLocale', 'LocaleContext');
    }
    return localeData;
};
