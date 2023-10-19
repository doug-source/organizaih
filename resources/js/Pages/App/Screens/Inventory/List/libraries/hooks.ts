import { DispatchFn } from '@/Pages/App/Screens/Inventory/List/libraries';
import { InventoriesReducerEnum } from '@/Pages/App/Screens/Inventory/List/libraries/enums';
import { inventoriesReducer } from '@/Pages/App/Screens/Inventory/List/libraries/reducers';
import { IInventoryListData } from '@/Pages/App/Screens/Inventory/List/types';
import {
    DataReducerEnum,
    DeletionReducerEnum,
    useAPI,
    useAppDispatch,
    useDeleteAPI,
    useGenericErrorHandler,
} from '@/Pages/App/libraries';
import { paginationSetting } from '@/Pages/App/settings';
import { endpoints } from '@/settings';
import { useCallback, useEffect, useReducer } from 'react';

export const useInventoriesReducer = () => {
    return useReducer(inventoriesReducer, {
        total: [],
        inventories: [],
        list: [],
        page: paginationSetting.pageInitial,
        lastPage: paginationSetting.lastPageInitial,
        group: paginationSetting.groupList[0],
        endpoint: endpoints.inventory.list,
        qty: paginationSetting.totalInitial,
        search: '',
        error: null,
        preConfirm: false,
        idRemoved: null,
        warning: false,
    });
};

type StateArg = ReturnType<typeof useInventoriesReducer>[0];

export const useInventoriesRequest = (state: StateArg) => {
    const appDispatch = useAppDispatch();
    const [store, requestInventories] = useAPI<
        IInventoryListData,
        { pagination: true }
    >();
    useGenericErrorHandler(store.error);
    useEffect(() => {
        const arrQueryString = [`page=${state.page}`, `group=${state.group}`];
        const search = state.search.trim();
        if (search) {
            arrQueryString.push(`search=${search}`);
        }

        requestInventories(`${state.endpoint}?${arrQueryString.join('&')}`);
        appDispatch({ type: DataReducerEnum.LOADING, payload: true });
    }, [
        state.endpoint,
        state.page,
        state.group,
        state.search,
        requestInventories,
        appDispatch,
    ]);
    return [store] as const;
};

type StoreArg = ReturnType<typeof useInventoriesRequest>[0];

export const useInventoriesResponse = (
    store: StoreArg,
    dispatch: DispatchFn,
) => {
    const appDispatch = useAppDispatch();
    useEffect(() => {
        if (store.error || !store.data || !store.status) {
            return;
        }
        const { data = [], last_page: lastPage = 0, total } = store.data;
        dispatch({ type: InventoriesReducerEnum.INIT, payload: data });
        dispatch({
            type: InventoriesReducerEnum.CHANGE_LAST,
            payload: lastPage,
        });
        dispatch({
            type: InventoriesReducerEnum.CHANGE_QTY,
            payload: total,
        });
        appDispatch({ type: DataReducerEnum.LOADING, payload: false });
    }, [store.error, store.data, store.status, dispatch, appDispatch]);
};

export const useInventoryRemotion = (dispatch: DispatchFn) => {
    const appDispatch = useAppDispatch();
    const [remotion, doRemotion] = useDeleteAPI();
    useGenericErrorHandler(remotion.error);
    useEffect(() => {
        if (remotion.error) {
            dispatch({ type: DeletionReducerEnum.CANCEL_DELETE });
            doRemotion('');
        } else if (remotion.status) {
            dispatch({ type: DeletionReducerEnum.DELETE });
            appDispatch({ type: DataReducerEnum.LOADING, payload: false });
        }
    }, [remotion.error, remotion.status, dispatch, appDispatch, doRemotion]);
    return [doRemotion] as const;
};

type DoRemotionFn = ReturnType<typeof useInventoryRemotion>[0];

export const useConfirmationYes = (
    dispatch: DispatchFn,
    doRemotion: DoRemotionFn,
    state: StateArg,
) => {
    const appDispatch = useAppDispatch();
    return useCallback(() => {
        dispatch({ type: DeletionReducerEnum.HIDE_CONFIRM });
        if (state.idRemoved === null) {
            return;
        }
        doRemotion(endpoints.inventory.deleteAll(state.idRemoved));
        appDispatch({
            type: DataReducerEnum.LOADING,
            payload: true,
        });
    }, [dispatch, doRemotion, appDispatch, state.idRemoved]);
};
