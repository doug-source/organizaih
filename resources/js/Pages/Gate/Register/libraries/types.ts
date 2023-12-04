export type DefaultErrorKeys =
    | 'name'
    | 'email'
    | 'phone'
    | 'password'
    | 'password_confirmation'
    | 'token';

export type ErrorKeys = DefaultErrorKeys | 'status';
