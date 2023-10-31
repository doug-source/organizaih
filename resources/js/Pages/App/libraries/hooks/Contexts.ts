import { AppDispatchContext } from '@/Pages/App';
import {
    LoadingContext,
    LocaleContext,
    SelectionsContext,
    TitleContext,
    WindowSizesContext,
} from '@/Pages/App/libraries';
import { makeContextError } from '@/libraries';
import { useContext } from 'react';

export const useWindowSizes = () => {
    const windowSizes = useContext(WindowSizesContext);
    if (windowSizes === null) {
        throw makeContextError('useWindowSizes', 'WindowSizesContext');
    }
    return windowSizes;
};

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

export const useSelections = () => {
    const selection = useContext(SelectionsContext);
    if (selection === null) {
        throw makeContextError('useSelections', 'SelectionsContext');
    }
    return selection;
};

export const useLoadingStatus = () => {
    return useContext(LoadingContext);
};
