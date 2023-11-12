import { ResetPasswordReducerEnum } from '@/Pages/Gate/ResetPassword/libraries/enums';
import { ErrorKeys } from '@/Pages/Gate/ResetPassword/libraries/types';
import { ErrorsBox } from '@/Pages/Gate/libraries/types';

export type ResetPasswordReducerState = {
    email: string;
    password: string;
    password_confirmation: string;
    errors: ErrorsBox<ErrorKeys>;
};

namespace ResetPasswordPayload {
    type ChangeEmail = {
        type: ResetPasswordReducerEnum.CHANGE_EMAIL;
        payload: ResetPasswordReducerState['email'];
    };
    type ChangePassword = {
        type: ResetPasswordReducerEnum.CHANGE_PASSWORD;
        payload: ResetPasswordReducerState['password'];
    };
    type ChangePasswordConfirmation = {
        type: ResetPasswordReducerEnum.CHANGE_PASSWORD_CONFIRMATION;
        payload: ResetPasswordReducerState['password_confirmation'];
    };
    type TriggerErrors = {
        type: ResetPasswordReducerEnum.TRIGGER_ERRORS;
        payload: ResetPasswordReducerState['errors'];
    };

    export type Skeleton =
        | ChangeEmail
        | ChangePassword
        | ChangePasswordConfirmation
        | TriggerErrors;
}

export const resetPasswordReducer = (
    state: ResetPasswordReducerState,
    action: ResetPasswordPayload.Skeleton,
): ResetPasswordReducerState => {
    switch (action.type) {
        case ResetPasswordReducerEnum.CHANGE_EMAIL: {
            return {
                ...state,
                email: action.payload,
            };
        }
        case ResetPasswordReducerEnum.CHANGE_PASSWORD: {
            return {
                ...state,
                password: action.payload,
            };
        }
        case ResetPasswordReducerEnum.CHANGE_PASSWORD_CONFIRMATION: {
            return {
                ...state,
                password_confirmation: action.payload,
            };
        }
        case ResetPasswordReducerEnum.TRIGGER_ERRORS: {
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
