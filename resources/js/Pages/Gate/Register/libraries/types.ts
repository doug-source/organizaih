export type DefaultErrorKeys =
    | 'name'
    | 'email'
    | 'password'
    | 'password_confirmation'
    | 'token';

export type ErrorKeys = DefaultErrorKeys | 'status';
