import { LoginTheme } from '..';
import { measures } from '../measures';
import { auth } from './auth';
import { body } from './body';
import { btn } from './btn';
import { forgotPassword } from './forgotPassword';
import { guestLayout } from './guestLayout';
import { remember } from './remember';

export const LightTheme: LoginTheme = {
    login: {
        measures,

        auth,
        body,
        btn,
        forgotPassword,
        guestLayout,
        remember,
    },
};
