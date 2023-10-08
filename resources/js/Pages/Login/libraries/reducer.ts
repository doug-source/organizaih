export const enum AuthReducerEnum {
    CHANGE_EMAIL = 'change-email',
    CHANGE_PASSWORD = 'change-password',
    TRIGGER_ERRORS = 'trigger-errors',
}

export type AuthReducerState = {
    email: string;
    password: string;
    errors: Partial<Record<'email' | 'password', string>>;
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
    type TriggerErrors = {
        type: AuthReducerEnum.TRIGGER_ERRORS;
        payload: AuthReducerState['errors'];
    };

    export type Skeleton = ChangeEmail | ChangePassword | TriggerErrors;
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
