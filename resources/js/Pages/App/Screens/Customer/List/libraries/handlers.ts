import { CustomersReducerEnum } from '@/Pages/App/Screens/Customer/List/libraries/enums';
import { DispatchFn } from '@/Pages/App/Screens/Customer/List/libraries/reducers';
import {
    ICustomerListData,
    SelectionTargetKey,
} from '@/Pages/App/Screens/Customer/List/types';
import {
    DataReducerEnum,
    DeletionReducerEnum,
    useAppDispatch,
} from '@/Pages/App/libraries';

export const makeToolChange = (dispatch: DispatchFn) => {
    return (search: string) => {
        return dispatch({
            type: CustomersReducerEnum.SEARCH,
            payload: { search },
        });
    };
};

export const makeChangePage = (dispatch: DispatchFn) => {
    return (payload: number) => {
        return dispatch({
            type: CustomersReducerEnum.CHANGE_PAGE,
            payload,
        });
    };
};

export const makeChangeGroup = (dispatch: DispatchFn) => {
    return (payload: number) => {
        return dispatch({
            type: CustomersReducerEnum.CHANGE_GROUP,
            payload,
        });
    };
};

export const makeClientSelection = (
    appDispatch: ReturnType<typeof useAppDispatch>,
    target: SelectionTargetKey,
    data: ICustomerListData,
) => {
    return () => {
        return appDispatch({
            type: DataReducerEnum.SELECTION_CUSTOMER,
            payload: {
                key: target,
                value: data,
            },
        });
    };
};

export const makeRemoveItem = (
    dispatch: DispatchFn,
    data: ICustomerListData,
) => {
    return () => {
        dispatch({
            type: DeletionReducerEnum.PREPARE_DELETE,
            payload: data,
        });
    };
};
