import { CustomersReducerEnum } from '@/Pages/App/Screens/Customer/List/libraries/enums';
import {
    DispatchFn,
    customersReducer,
} from '@/Pages/App/Screens/Customer/List/libraries/reducers';
import { ICustomerListData } from '@/Pages/App/Screens/Customer/List/types';
import {
    ApiData,
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

export const useCustomersReducer = () => {
    const [state, dispatch] = useReducer(customersReducer, {
        total: [],
        customers: [],
        page: paginationSetting.pageInitial,
        group: paginationSetting.groupList[0],
        lastPage: paginationSetting.lastPageInitial,
        qty: paginationSetting.totalInitial,
        error: null,
        endpoint: endpoints.customer.list,
        idRemoved: null,
        search: '',
        preConfirm: false,
        warning: false,
    });
    return [state, dispatch] as const;
};

type CustomersState = Parameters<typeof customersReducer>[0];

export const useCustomerRequest = (
    endpoint: CustomersState['endpoint'],
    page: CustomersState['page'],
    group: CustomersState['group'],
    search: CustomersState['search'],
) => {
    const appDispatch = useAppDispatch();
    const [store, requestCustomers] = useAPI<
        ICustomerListData,
        { pagination: true }
    >();
    useGenericErrorHandler(store.error);
    useEffect(() => {
        if (endpoint && page && group) {
            const queryStringList = [`page=${page}`, `group=${group}`];
            const searchVal = search.trim();
            if (searchVal) {
                queryStringList.push(`search=${searchVal}`);
            }
            requestCustomers(`${endpoint}?${queryStringList.join('&')}`);
            appDispatch({ type: DataReducerEnum.LOADING, payload: true });
        }
    }, [requestCustomers, endpoint, page, group, search]);

    return [store] as const;
};

type ApiFields = ApiData<ICustomerListData, { pagination: true }>[0];

export const useCustomerResponse = (
    storeData: ApiFields['data'],
    storeStatus: ApiFields['status'],
    storeError: ApiFields['error'],
    dispatch: DispatchFn,
) => {
    const appDispatch = useAppDispatch();
    useEffect(() => {
        if (storeError || !storeData) {
            return;
        }
        const { data = [], last_page: lastPage = 0, total } = storeData;
        if (data.length || storeStatus) {
            dispatch({ type: CustomersReducerEnum.INIT, payload: data });
            dispatch({
                type: CustomersReducerEnum.CHANGE_LAST,
                payload: lastPage,
            });
            dispatch({ type: CustomersReducerEnum.CHANGE_QTY, payload: total });
            appDispatch({ type: DataReducerEnum.LOADING, payload: false });
        } else {
            appDispatch({ type: DataReducerEnum.LOADING, payload: true });
        }
    }, [storeError, storeData, storeStatus, dispatch, appDispatch]);
};

export const useCustomerRemotion = (dispatch: DispatchFn) => {
    const [remotion, doRemotion] = useDeleteAPI();
    useGenericErrorHandler(remotion.error);
    useEffect(() => {
        if (remotion.error) {
            dispatch({ type: DeletionReducerEnum.CANCEL_DELETE });
            doRemotion('');
        } else if (remotion.status) {
            dispatch({ type: DeletionReducerEnum.DELETE });
        }
    }, [remotion.error, remotion.status, dispatch, doRemotion]);
    return [doRemotion] as const;
};

export const useConfirmationYes = (
    dispatch: DispatchFn,
    doRemotion: ReturnType<typeof useDeleteAPI>[1],
    idRemoved: CustomersState['idRemoved'],
) => {
    const appDispatch = useAppDispatch();
    return useCallback(() => {
        if (idRemoved === null) {
            return;
        }
        dispatch({ type: DeletionReducerEnum.HIDE_CONFIRM });
        doRemotion(endpoints.customer.delete(idRemoved));
        appDispatch({
            type: DataReducerEnum.LOADING,
            payload: true,
        });
    }, [dispatch, appDispatch, endpoints.customer.delete, idRemoved]);
};

export const useConfirmationCancel = (dispatch: DispatchFn) => {
    return useCallback(() => {
        dispatch({ type: DeletionReducerEnum.CANCEL_DELETE });
    }, [dispatch]);
};
