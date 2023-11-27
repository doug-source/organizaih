import { RegisterRequestsReducerEnum } from '@/Pages/App/Screens/RegisterRequest/List/libraries/enums';
import { registerRequestsReducer } from '@/Pages/App/Screens/RegisterRequest/List/libraries/reducers';
import { RegisterRequestsReducerState } from '@/Pages/App/Screens/RegisterRequest/List/libraries/types/state';
import { IRegisterRequest } from '@/Pages/App/Screens/RegisterRequest/types';
import {
    DataReducerEnum,
    DeletionReducerEnum,
} from '@/Pages/App/libraries/enums';
import {
    ApiData,
    useAPI,
    useAppDispatch,
    useGenericErrorHandler,
} from '@/Pages/App/libraries/hooks';
import { useDeleteAPI } from '@/Pages/App/libraries/hooks/Api';
import { paginationSetting } from '@/Pages/App/settings';
import { formatDateByString } from '@/libraries';
import { endpoints } from '@/settings';
import { useCallback, useEffect, useReducer } from 'react';

export const useRegisterRequestsReducer = () => {
    const [state, dispatch] = useReducer(registerRequestsReducer, {
        total: [],
        requests: [],
        page: paginationSetting.pageInitial,
        group: paginationSetting.groupList[0],
        lastPage: paginationSetting.lastPageInitial,
        qty: paginationSetting.totalInitial,
        error: null,
        endpoint: endpoints.registerRequest.list,
        email: '',
        idRemoved: null,
        preConfirm: false,
        warning: false,
    });
    return [state, dispatch] as const;
};

type ReducerReturn = ReturnType<typeof useRegisterRequestsReducer>;
type RegisterRequestsState = ReducerReturn[0];
type DispatchFn = ReducerReturn[1];

export const useRegisterRequestsCall = (
    endpoint: RegisterRequestsState['endpoint'],
    page: RegisterRequestsState['page'],
    group: RegisterRequestsState['group'],
    email: RegisterRequestsState['email'],
) => {
    const appDispatch = useAppDispatch();
    const [store, requestRegisterRequests] = useAPI<
        IRegisterRequest,
        { pagination: true }
    >();
    useGenericErrorHandler(store.error);
    useEffect(() => {
        if (endpoint && page && group) {
            const queryStringList = [`page=${page}`, `group=${group}`];
            const emailVal = email.trim();
            if (emailVal) {
                queryStringList.push(`email=${emailVal}`);
            }
            requestRegisterRequests(`${endpoint}?${queryStringList.join('&')}`);
            appDispatch({ type: DataReducerEnum.LOADING, payload: true });
        }
    }, [requestRegisterRequests, endpoint, page, group, email]);

    return [store] as const;
};

type ApiFields = ApiData<IRegisterRequest, { pagination: true }>[0];

export const useRegisterRequestsResponse = (
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
            dispatch({
                type: RegisterRequestsReducerEnum.INIT,
                payload: data.map((d) => ({
                    ...d,
                    created_at: formatDateByString(d.created_at),
                })),
            });
            dispatch({
                type: RegisterRequestsReducerEnum.CHANGE_LAST,
                payload: lastPage,
            });
            dispatch({
                type: RegisterRequestsReducerEnum.CHANGE_QTY,
                payload: total,
            });
            appDispatch({ type: DataReducerEnum.LOADING, payload: false });
        } else {
            appDispatch({ type: DataReducerEnum.LOADING, payload: true });
        }
    }, [storeError, storeData, storeStatus, dispatch, appDispatch]);
};

export const useRegisterRequestRemotion = (dispatch: DispatchFn) => {
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
    idRemoved: RegisterRequestsReducerState['idRemoved'],
) => {
    const appDispatch = useAppDispatch();
    return useCallback(() => {
        if (idRemoved === null) {
            return;
        }
        dispatch({ type: DeletionReducerEnum.HIDE_CONFIRM });
        doRemotion(endpoints.registerRequest.delete(idRemoved));
        appDispatch({
            type: DataReducerEnum.LOADING,
            payload: true,
        });
    }, [dispatch, appDispatch, endpoints.registerRequest.delete, idRemoved]);
};

export const useConfirmationCancel = (dispatch: DispatchFn) => {
    return useCallback(() => {
        dispatch({ type: DeletionReducerEnum.CANCEL_DELETE });
    }, [dispatch]);
};
