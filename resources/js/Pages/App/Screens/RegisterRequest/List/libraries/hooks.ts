import { RegisterRequestsReducerEnum } from '@/Pages/App/Screens/RegisterRequest/List/libraries/enums';
import { registerRequestsReducer } from '@/Pages/App/Screens/RegisterRequest/List/libraries/reducers';
import { IRegisterRequest } from '@/Pages/App/Screens/RegisterRequest/types';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import {
    ApiData,
    useAPI,
    useAppDispatch,
    useGenericErrorHandler,
} from '@/Pages/App/libraries/hooks';
import { paginationSetting } from '@/Pages/App/settings';
import { formatDateByString } from '@/libraries';
import { endpoints } from '@/settings';
import { useEffect, useReducer } from 'react';

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
