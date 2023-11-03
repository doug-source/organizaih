import { LoginTheme } from '..';
import { measures } from '../measures';
import { body } from './body';
import { checkbox } from './checkbox';
import { forgotPassword } from './forgotPassword';
import { loadingIcon } from './loadingIcon';
import { remember } from './remember';

export const DarkTheme: LoginTheme = {
    login: {
        measures,

        body,
        checkbox,
        forgotPassword,
        loadingIcon,
        remember,
    },
};
