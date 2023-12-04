import { RegisterReducerEnum } from '@/Pages/Gate/Register/libraries/enums';
import { ErrorKeys } from '@/Pages/Gate/Register/libraries/types';
import { ErrorsBox } from '@/Pages/Gate/libraries/types';

export type RegisterReducerState = {
    name: string;
    email: string;
    phone: string;
    password: string;
    password_confirmation: string;
    errors: ErrorsBox<ErrorKeys>;
};

namespace RegisterPayload {
    type ChangeName = {
        type: RegisterReducerEnum.CHANGE_NAME;
        payload: RegisterReducerState['name'];
    };
    type ChangeEmail = {
        type: RegisterReducerEnum.CHANGE_EMAIL;
        payload: RegisterReducerState['email'];
    };
    type ChangePhone = {
        type: RegisterReducerEnum.CHANGE_PHONE;
        payload: RegisterReducerState['phone'];
    };
    type ChangePassword = {
        type: RegisterReducerEnum.CHANGE_PASSWORD;
        payload: RegisterReducerState['password'];
    };
    type ChangePasswordConfirmation = {
        type: RegisterReducerEnum.CHANGE_PASSWORD_CONFIRMATION;
        payload: RegisterReducerState['password_confirmation'];
    };
    type TriggerErrors = {
        type: RegisterReducerEnum.TRIGGER_ERRORS;
        payload: RegisterReducerState['errors'];
    };

    export type Skeleton =
        | ChangeName
        | ChangeEmail
        | ChangePhone
        | ChangePassword
        | ChangePasswordConfirmation
        | TriggerErrors;
}

export const registerReducer = (
    state: RegisterReducerState,
    action: RegisterPayload.Skeleton,
): RegisterReducerState => {
    switch (action.type) {
        case RegisterReducerEnum.CHANGE_NAME: {
            return {
                ...state,
                name: action.payload,
            };
        }
        case RegisterReducerEnum.CHANGE_EMAIL: {
            return {
                ...state,
                email: action.payload,
            };
        }
        case RegisterReducerEnum.CHANGE_PHONE: {
            return {
                ...state,
                phone: action.payload,
            };
        }
        case RegisterReducerEnum.CHANGE_PASSWORD: {
            return {
                ...state,
                password: action.payload,
            };
        }
        case RegisterReducerEnum.CHANGE_PASSWORD_CONFIRMATION: {
            return {
                ...state,
                password_confirmation: action.payload,
            };
        }
        case RegisterReducerEnum.TRIGGER_ERRORS: {
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
