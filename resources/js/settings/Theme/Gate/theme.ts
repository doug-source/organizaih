import { ForgotPasswordTheme } from '@/settings/Theme/Gate/ForgotPassword/theme';
import { GateGenericTheme } from '@/settings/Theme/Gate/Generic/theme';
import { ResetPasswordTheme } from '@/settings/Theme/Gate/ResetPassword/theme';
import { LoginTheme } from './Login';
import { RegisterTheme } from './Register';
import { RegisterRequestTheme } from './RegisterRequest';

export type GateItemTheme = LoginTheme &
    RegisterTheme &
    RegisterRequestTheme &
    GateGenericTheme &
    ForgotPasswordTheme &
    ResetPasswordTheme;

export type GateTheme = {
    light: GateItemTheme;
    dark: GateItemTheme;
};
