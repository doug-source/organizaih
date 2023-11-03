import { RegisterReducerEnum } from '@/Pages/Gate/Register/libraries/enums';

export type RegisterReducerState = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    errors: Partial<
        Record<'name' | 'email' | 'password' | 'password_confirmation', string>
    >;
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
