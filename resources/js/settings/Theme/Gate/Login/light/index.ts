import { LoginTheme } from '..';
import { measures } from '../measures';
import { checkbox } from './checkbox';
import { forgotPassword } from './forgotPassword';
import { loadingIcon } from './loadingIcon';
import { remember } from './remember';

export const LightTheme: LoginTheme = {
    login: {
        measures,

        checkbox,
        forgotPassword,
        loadingIcon,
        remember,
    },
};
