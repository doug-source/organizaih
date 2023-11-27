import { RegisterRequestsReducerEnum } from '@/Pages/App/Screens/RegisterRequest/List/libraries/enums';
import { RegisterRequestsPayload } from '@/Pages/App/Screens/RegisterRequest/List/libraries/types/payload';
import { RegisterRequestsReducerState } from '@/Pages/App/Screens/RegisterRequest/List/libraries/types/state';
import { IRegisterRequest } from '@/Pages/App/Screens/RegisterRequest/types';
import { DeletionReducerEnum, deletionReducer } from '@/Pages/App/libraries';
import { statePaginationAfterDeletion } from '@/Pages/App/libraries/toolbox/Pagination';

export const registerRequestsReducer = (
    state: RegisterRequestsReducerState,
    action: RegisterRequestsPayload.Skeleton<IRegisterRequest>,
): RegisterRequestsReducerState => {
    switch (action.type) {
        case RegisterRequestsReducerEnum.INIT: {
            const total = [...action.payload];
            return {
                ...state,
                total,

                requests: [...total],
            };
        }
        case RegisterRequestsReducerEnum.CHANGE_PAGE:
            return { ...state, page: action.payload };
        case RegisterRequestsReducerEnum.CHANGE_GROUP:
            return { ...state, group: action.payload };
        case RegisterRequestsReducerEnum.CHANGE_LAST:
            return { ...state, lastPage: action.payload };
        case RegisterRequestsReducerEnum.CHANGE_QTY:
            return { ...state, qty: action.payload };
        case RegisterRequestsReducerEnum.ERROR:
            return { ...state, error: action.payload };
        case RegisterRequestsReducerEnum.REFRESH:
            return { ...state, requests: [...state.total] };
        case RegisterRequestsReducerEnum.CHANGE_EMAIL: {
            const email = action.payload.trim();
            return { ...state, email };
        }
        case RegisterRequestsReducerEnum.APPROVAL: {
            const total = state.total.filter(
                (item) => item.id !== state.idApproved,
            );
            return statePaginationAfterDeletion({
                ...state,
                total,
                requests: total,
                idApproved: null,
            });
        }
        case RegisterRequestsReducerEnum.CANCEL_APPROVAL:
        case RegisterRequestsReducerEnum.CLEAR_APPROVAL: {
            return {
                ...state,
                idApproved: null,
                preConfirm: false,
            };
        }
        case RegisterRequestsReducerEnum.PREPARE_APPROVAL: {
            return {
                ...state,
                idApproved: action.payload.id,
                preConfirm: true,
            };
        }
        case DeletionReducerEnum.DELETE: {
            return statePaginationAfterDeletion(
                deletionReducer<IRegisterRequest, 'id'>(
                    state,
                    action,
                    'requests',
                    'id',
                ) as RegisterRequestsReducerState,
            );
        }
        case DeletionReducerEnum.CLEAR_DELETE:
        case DeletionReducerEnum.CANCEL_DELETE:
        case DeletionReducerEnum.PREPARE_DELETE:
        case DeletionReducerEnum.HIDE_CONFIRM:
        case DeletionReducerEnum.HIDE_WARNING:
        case DeletionReducerEnum.SHOW_WARNING: {
            return deletionReducer<IRegisterRequest, 'id'>(
                state,
                action,
                'requests',
                'id',
            ) as RegisterRequestsReducerState;
        }
        default: {
            const actionInvalid: never = action;
            throw new Error('Type invalid.', { cause: actionInvalid });
        }
    }
};
