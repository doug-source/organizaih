import { RegisterRequestsReducerEnum } from '@/Pages/App/Screens/RegisterRequest/List/libraries/enums';
import { RegisterRequestsPayload } from '@/Pages/App/Screens/RegisterRequest/List/libraries/types/payload';
import { RegisterRequestsReducerState } from '@/Pages/App/Screens/RegisterRequest/List/libraries/types/state';

export const registerRequestsReducer = (
    state: RegisterRequestsReducerState,
    action: RegisterRequestsPayload.Skeleton,
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
        default: {
            const actionInvalid: never = action;
            throw new Error('Type invalid.', { cause: actionInvalid });
        }
    }
};
