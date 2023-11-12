export type DefaultErrorKeys =
    | 'name'
    | 'email'
    | 'password'
    | 'password_confirmation';

export type ErrorKeys = DefaultErrorKeys | 'status';
