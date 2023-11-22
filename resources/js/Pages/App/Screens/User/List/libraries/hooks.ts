import { UsersReducerEnum } from '@/Pages/App/Screens/User/List/libraries/enums';
import { usersReducer } from '@/Pages/App/Screens/User/List/libraries/reducers';
import { IUserListData } from '@/Pages/App/Screens/User/List/types';
import {
    DataReducerEnum,
    DeletionReducerEnum,
} from '@/Pages/App/libraries/enums';
import {
    ApiData,
    useAPI,
    useAppDispatch,
    useDeleteAPI,
    useGenericErrorHandler,
} from '@/Pages/App/libraries/hooks';
import { paginationSetting } from '@/Pages/App/settings';
import { endpoints } from '@/settings';
import { useCallback, useEffect, useReducer } from 'react';

export const useUsersReducer = () => {
    const [state, dispatch] = useReducer(usersReducer, {
        total: [],
        users: [],
        page: paginationSetting.pageInitial,
        group: paginationSetting.groupList[0],
        lastPage: paginationSetting.lastPageInitial,
        qty: paginationSetting.totalInitial,
        error: null,
        endpoint: endpoints.user.list,
        idRemoved: null,
        name: '',
        email: '',
        preConfirm: false,
        warning: false,
    });
    return [state, dispatch] as const;
};

type DispatchFn = ReturnType<typeof useUsersReducer>[1];

type ReducerReturn = Parameters<typeof usersReducer>;

type UsersState = ReducerReturn[0];

export const useUserRequest = (
    endpoint: UsersState['endpoint'],
    page: UsersState['page'],
    group: UsersState['group'],
    name: UsersState['name'],
    email: UsersState['email'],
) => {
    const appDispatch = useAppDispatch();
    const [store, requestUsers] = useAPI<IUserListData, { pagination: true }>();
    useGenericErrorHandler(store.error);
    useEffect(() => {
        if (endpoint && page && group) {
            const queryStringList = [`page=${page}`, `group=${group}`];
            const nameVal = name.trim();
            if (nameVal) {
                queryStringList.push(`name=${nameVal}`);
            }
            const emailVal = email.trim();
            if (emailVal) {
                queryStringList.push(`email=${encodeURIComponent(emailVal)}`);
            }
            requestUsers(`${endpoint}?${queryStringList.join('&')}`);
            appDispatch({ type: DataReducerEnum.LOADING, payload: true });
        }
    }, [appDispatch, requestUsers, endpoint, page, group, name, email]);

    return [store] as const;
};

type ApiFields = ApiData<IUserListData, { pagination: true }>[0];

export const useUserResponse = (
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
            dispatch({ type: UsersReducerEnum.INIT, payload: data });
            dispatch({
                type: UsersReducerEnum.CHANGE_LAST,
                payload: lastPage,
            });
            dispatch({ type: UsersReducerEnum.CHANGE_QTY, payload: total });
            appDispatch({ type: DataReducerEnum.LOADING, payload: false });
        } else {
            appDispatch({ type: DataReducerEnum.LOADING, payload: true });
        }
    }, [storeError, storeData, storeStatus, dispatch, appDispatch]);
};

export const useUserRemotion = (dispatch: DispatchFn) => {
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
    idRemoved: UsersState['idRemoved'],
) => {
    const appDispatch = useAppDispatch();
    return useCallback(() => {
        if (idRemoved === null) {
            return;
        }
        dispatch({ type: DeletionReducerEnum.HIDE_CONFIRM });
        doRemotion(endpoints.user.delete(idRemoved));
        appDispatch({
            type: DataReducerEnum.LOADING,
            payload: true,
        });
    }, [dispatch, appDispatch, endpoints.user.delete, idRemoved]);
};

export const useConfirmationCancel = (dispatch: DispatchFn) => {
    return useCallback(() => {
        dispatch({ type: DeletionReducerEnum.CANCEL_DELETE });
    }, [dispatch]);
};
