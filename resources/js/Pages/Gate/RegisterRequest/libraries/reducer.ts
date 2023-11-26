import { RegisterRequestReducerEnum } from '@/Pages/Gate/RegisterRequest/libraries/enums';
import { ErrorKeys } from '@/Pages/Gate/RegisterRequest/libraries/types';
import { ErrorsBox } from '@/Pages/Gate/libraries/types';

export type RegisterRequestReducerState = {
    email: string;
    phone: string;
    errors: ErrorsBox<ErrorKeys>;
};

namespace RegisterRequestPayload {
    type ChangeEmail = {
        type: RegisterRequestReducerEnum.CHANGE_EMAIL;
        payload: RegisterRequestReducerState['email'];
    };
    type ChangePhone = {
        type: RegisterRequestReducerEnum.CHANGE_PHONE;
        payload: RegisterRequestReducerState['phone'];
    };
    type TriggerErrors = {
        type: RegisterRequestReducerEnum.TRIGGER_ERRORS;
        payload: RegisterRequestReducerState['errors'];
    };

    export type Skeleton = ChangeEmail | ChangePhone | TriggerErrors;
}

export const registerRequestReducer = (
    state: RegisterRequestReducerState,
    action: RegisterRequestPayload.Skeleton,
): RegisterRequestReducerState => {
    switch (action.type) {
        case RegisterRequestReducerEnum.CHANGE_EMAIL: {
            return {
                ...state,
                email: action.payload,
            };
        }
        case RegisterRequestReducerEnum.CHANGE_PHONE: {
            return {
                ...state,
                phone: action.payload,
            };
        }
        case RegisterRequestReducerEnum.TRIGGER_ERRORS: {
            return {
                ...state,
                errors: action.payload,
            };
        }
        default: {
            const actionInvalid: never = action;
            throw new Error('Type invalid.', { cause: actionInvalid });
        }
    }
};
