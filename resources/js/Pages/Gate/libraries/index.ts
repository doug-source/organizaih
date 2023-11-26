import { CatchReturn } from '@/Pages/Gate/libraries/types';

export * from './PackContext';
export * from './contexts';
export * from './types';

const errorStatusDefault = { errors: {} };

export const detachStatusServer = (
    data: typeof window.data,
    type:
        | 'login'
        | 'register-gate'
        | 'register-request'
        | 'forgot-password'
        | 'reset-password',
) => {
    if (type === 'login') {
        return data.auth.status;
    }
    if (type === 'register-gate') {
        return data.register.status;
    }
    if (type === 'register-request') {
        return data.registerRequest.status;
    }
    return errorStatusDefault;
};

type ResponseCatch<T> = CatchReturn<T>['response'];
type Errors<T> = ResponseCatch<T>['data']['errors'];
type ErrorsKeys<T> = keyof Errors<T>;
type ErrorValue<T> = Errors<T>[ErrorsKeys<T>];

export const handleCatchErrors = <T>(
    response: ResponseCatch<T>,
    fnCallback: (error: Record<string, string>) => void,
) => {
    const errors = response?.data?.errors;
    if (!errors) {
        return;
    }
    fnCallback(
        Object.fromEntries(
            Object.entries<ErrorValue<T>>(errors).map(([key, list]) => [
                key,
                list[0],
            ]),
        ),
    );
};
