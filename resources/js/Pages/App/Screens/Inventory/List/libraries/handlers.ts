import { DispatchFn } from '@/Pages/App/Screens/Inventory/List/libraries';
import { InventoriesReducerEnum } from '@/Pages/App/Screens/Inventory/List/libraries/enums';
import {
    DataReducerEnum,
    DeletionReducerEnum,
    dataReducer,
} from '@/Pages/App/libraries';
import { Dispatch } from 'react';

export const makeConfirmCancel = (dispatch: DispatchFn) => {
    return () => dispatch({ type: DeletionReducerEnum.CANCEL_DELETE });
};

export const makeChangePage = (dispatch: DispatchFn) => {
    return (payload: number) => {
        dispatch({
            type: InventoriesReducerEnum.CHANGE_PAGE,
            payload,
        });
    };
};

export const makeChangeGroup = (dispatch: DispatchFn) => {
    return (payload: number) => {
        dispatch({
            type: InventoriesReducerEnum.CHANGE_GROUP,
            payload,
        });
    };
};

export const makeAddClick = (
    appDispatch: Dispatch<Parameters<typeof dataReducer>[1]>,
) => {
    return () => {
        appDispatch({
            type: DataReducerEnum.SELECTION_CLEAR,
        });
    };
};

export const makeToolChange = (dispatch: DispatchFn) => {
    return (search: string) => {
        dispatch({
            type: InventoriesReducerEnum.SEARCH,
            payload: { search },
        });
    };
};
