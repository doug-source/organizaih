import {
    AppDispatchFn,
    DispatchFn,
} from '@/Pages/App/Screens/Sales/List/libraries';
import { SalesReducerEnum } from '@/Pages/App/Screens/Sales/List/libraries/enums';
import { ISales } from '@/Pages/App/Screens/Sales/types';
import {
    DataReducerEnum,
    DeletionReducerEnum,
} from '@/Pages/App/libraries/enums';

export const makeAddClickHandler = (appDispatch: AppDispatchFn) => {
    return () => {
        appDispatch({
            type: DataReducerEnum.SELECTION_CLEAR,
        });
    };
};

export const makeChangePage = (dispatch: DispatchFn) => {
    return (payload: number) => {
        dispatch({
            type: SalesReducerEnum.CHANGE_PAGE,
            payload,
        });
    };
};

export const makeChangeGroup = (dispatch: DispatchFn) => {
    return (payload: number) => {
        dispatch({
            type: SalesReducerEnum.CHANGE_GROUP,
            payload,
        });
    };
};

export const makeConfirmCancel = (dispatch: DispatchFn) => {
    return () => dispatch({ type: DeletionReducerEnum.CANCEL_DELETE });
};

export const makeListItemUpdate = (appDispatch: AppDispatchFn) => {
    return () => {
        appDispatch({
            type: DataReducerEnum.SELECTION_CLEAR,
        });
    };
};

export const makeListItemRemove = (dispatch: DispatchFn, data: ISales) => {
    return () => {
        dispatch({
            type: DeletionReducerEnum.PREPARE_DELETE,
            payload: data,
        });
    };
};
