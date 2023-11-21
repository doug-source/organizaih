import { GateSwitcherCheckHandle } from '@/Pages/App/Components/GateSwitcher';
import {
    DataReducerEnum,
    useAPI,
    useAppDispatch,
    useGenericErrorHandler,
} from '@/Pages/App/libraries';
import { MutableRefObject, useCallback, useEffect } from 'react';

export const useThemeClickHandler = (
    switchLabelRef: MutableRefObject<GateSwitcherCheckHandle | null>,
) => {
    return useCallback(() => {
        const { current } = switchLabelRef;
        if (!current) {
            return;
        }
        current.toggleCheck();
    }, [switchLabelRef]);
};

export const useThemingRequest = (endpoint?: string) => {
    const appDispatch = useAppDispatch();
    const [store, requestTheme] = useAPI<string, { pagination: false }>();
    useGenericErrorHandler(store.error);
    useEffect(() => {
        if (!endpoint) {
            return;
        }
        requestTheme(endpoint);
        appDispatch({ type: DataReducerEnum.LOADING, payload: true });
    }, [requestTheme, endpoint]);
    return [store] as const;
};

type ThemingRequestReturn = ReturnType<typeof useThemingRequest>[0];

export const useThemingResponse = (
    storeData: ThemingRequestReturn['data'],
    storeStatus: ThemingRequestReturn['status'],
    storeError: ThemingRequestReturn['error'],
) => {
    const appDispatch = useAppDispatch();
    useEffect(() => {
        if (storeError || !storeData || !storeStatus) {
            return;
        }
        appDispatch({ type: DataReducerEnum.CHANGE_THEME });
        appDispatch({ type: DataReducerEnum.LOADING, payload: false });
    }, [storeError, storeData, storeStatus, appDispatch]);
};
