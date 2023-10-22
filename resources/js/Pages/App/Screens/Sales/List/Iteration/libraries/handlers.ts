import { ComponentPropsWithoutRef } from 'react';
import { DataReducerEnum, DeletionReducerEnum } from '../../../../../enums';
import { AppDispatchFn, DispatchFn } from '../../libraries';
import { Iteration } from '..';

export const makeListItemUpdate = (appDispatch: AppDispatchFn) => {
    return () => {
        appDispatch({
            type: DataReducerEnum.SELECTION_CLEAR,
        });
    };
};

export const makeListItemRemove = (
    dispatch: DispatchFn,
    data: ComponentPropsWithoutRef<typeof Iteration>['sales'][0],
) => {
    return () => {
        dispatch({
            type: DeletionReducerEnum.PREPARE_DELETE,
            payload: data,
        });
    };
};
