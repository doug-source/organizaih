import { ForgotPasswordReducerEnum } from '@/Pages/Gate/ForgotPassword/libraries/enums';
import { ErrorKeys } from '@/Pages/Gate/ForgotPassword/libraries/types';

export type ForgotPasswordReducerState = {
    email: string;
    errors: Partial<Record<ErrorKeys, string>>;
};

namespace ForgotPasswordPayload {
    type ChangeEmail = {
        type: ForgotPasswordReducerEnum.CHANGE_EMAIL;
        payload: ForgotPasswordReducerState['email'];
    };
    type TriggerErrors = {
        type: ForgotPasswordReducerEnum.TRIGGER_ERRORS;
        payload: ForgotPasswordReducerState['errors'];
    };

    export type Skeleton = ChangeEmail | TriggerErrors;
}

export const forgotPasswordReducer = (
    state: ForgotPasswordReducerState,
    action: ForgotPasswordPayload.Skeleton,
): ForgotPasswordReducerState => {
    switch (action.type) {
        case ForgotPasswordReducerEnum.CHANGE_EMAIL: {
            return {
                ...state,
                email: action.payload,
            };
        }
        case ForgotPasswordReducerEnum.TRIGGER_ERRORS: {
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
