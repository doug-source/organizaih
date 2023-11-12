import { AuthReducerEnum } from '@/Pages/Gate/Login/libraries/enums';
import { ErrorKeys } from '@/Pages/Gate/Login/libraries/types';
import { ErrorsBox } from '@/Pages/Gate/libraries/types';

export type AuthReducerState = {
    email: string;
    password: string;
    remember: boolean;
    errors: ErrorsBox<ErrorKeys>;
};

namespace Payload {
    type ChangeEmail = {
        type: AuthReducerEnum.CHANGE_EMAIL;
        payload: AuthReducerState['email'];
    };
    type ChangePassword = {
        type: AuthReducerEnum.CHANGE_PASSWORD;
        payload: AuthReducerState['password'];
    };
    type ChangeRemember = {
        type: AuthReducerEnum.CHANGE_REMEMBER;
        payload: boolean;
    };
    type TriggerErrors = {
        type: AuthReducerEnum.TRIGGER_ERRORS;
        payload: AuthReducerState['errors'];
    };

    export type Skeleton =
        | ChangeEmail
        | ChangePassword
        | ChangeRemember
        | TriggerErrors;
}

export const authReducer = (
    state: AuthReducerState,
    action: Payload.Skeleton,
): AuthReducerState => {
    switch (action.type) {
        case AuthReducerEnum.CHANGE_EMAIL: {
            return {
                ...state,
                email: action.payload,
            };
        }
        case AuthReducerEnum.CHANGE_PASSWORD: {
            return {
                ...state,
                password: action.payload,
            };
        }
        case AuthReducerEnum.CHANGE_REMEMBER: {
            return {
                ...state,
                remember: action.payload,
            };
        }
        case AuthReducerEnum.TRIGGER_ERRORS: {
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
