import { UsersReducerEnum } from '@/Pages/App/Screens/User/List/libraries/enums';
import {
    UsersPayload,
    UsersReducerState,
} from '@/Pages/App/Screens/User/List/libraries/types';
import { IUserListData } from '@/Pages/App/Screens/User/List/types';
import { DeletionReducerEnum, deletionReducer } from '@/Pages/App/libraries';
import { statePaginationAfterDeletion } from '@/Pages/App/libraries/toolbox/Pagination';

export const usersReducer = (
    state: UsersReducerState,
    action: UsersPayload.Skeleton<IUserListData>,
): UsersReducerState => {
    switch (action.type) {
        case UsersReducerEnum.INIT: {
            const total = [...action.payload];
            return {
                ...state,
                total,
                users: [...total],
            };
        }
        case UsersReducerEnum.CHANGE_PAGE:
            return { ...state, page: action.payload };
        case UsersReducerEnum.CHANGE_GROUP:
            return { ...state, group: action.payload };
        case UsersReducerEnum.CHANGE_LAST:
            return { ...state, lastPage: action.payload };
        case UsersReducerEnum.CHANGE_QTY:
            return { ...state, qty: action.payload };
        case UsersReducerEnum.ERROR:
            return { ...state, error: action.payload };
        case UsersReducerEnum.REFRESH:
            return { ...state, users: [...state.total] };
        case UsersReducerEnum.NAME: {
            const name = action.payload.trim();
            return { ...state, name };
        }
        case UsersReducerEnum.EMAIL: {
            const email = action.payload.trim();
            return { ...state, email };
        }
        case DeletionReducerEnum.DELETE: {
            return statePaginationAfterDeletion(
                deletionReducer<IUserListData, 'id'>(
                    state,
                    action,
                    'users',
                    'id',
                ) as UsersReducerState,
            );
        }
        case DeletionReducerEnum.CLEAR_DELETE:
        case DeletionReducerEnum.CANCEL_DELETE:
        case DeletionReducerEnum.PREPARE_DELETE:
        case DeletionReducerEnum.HIDE_CONFIRM:
        case DeletionReducerEnum.HIDE_WARNING:
        case DeletionReducerEnum.SHOW_WARNING: {
            return deletionReducer<IUserListData, 'id'>(
                state,
                action,
                'users',
                'id',
            ) as UsersReducerState;
        }
        default: {
            const actionInvalid: never = action;
            throw new Error('Type invalid.', { cause: actionInvalid });
        }
    }
};
