import { DeletionReducerEnum } from '@/Pages/App/libraries';
import {
    DeletionPayload,
    DeletionReducerState,
} from '@/Pages/App/libraries/types';

export const deletionReducer = <T, W extends keyof T>(
    state: DeletionReducerState<T, W>,
    action: DeletionPayload.Skeleton<T>,
    keyList: string,
    keyItem: W,
): DeletionReducerState<T, W> => {
    switch (action.type) {
        case DeletionReducerEnum.DELETE: {
            const total = state.total.filter(
                (item) => item[keyItem] !== state.idRemoved,
            );
            return {
                ...state,
                total,
                [keyList]: total,
                idRemoved: null,
            };
        }
        case DeletionReducerEnum.CLEAR_DELETE:
            return {
                ...state,
                idRemoved: null,
                preConfirm: false,
            };
        case DeletionReducerEnum.CANCEL_DELETE:
            return {
                ...state,
                idRemoved: null,
                preConfirm: false,
            };
        case DeletionReducerEnum.PREPARE_DELETE: {
            return {
                ...state,
                idRemoved: action.payload[keyItem],
                preConfirm: true,
            };
        }
        case DeletionReducerEnum.HIDE_CONFIRM:
            return {
                ...state,
                preConfirm: false,
            };
        case DeletionReducerEnum.HIDE_WARNING:
            return {
                ...state,
                warning: false,
            };
        case DeletionReducerEnum.SHOW_WARNING:
            return {
                ...state,
                warning: true,
            };
    }
    const invalidAction: never = action;
    throw new Error('Invalid action.', { cause: invalidAction });
};
