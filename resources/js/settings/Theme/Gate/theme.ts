import { GateGenericTheme } from '@/settings/Theme/Gate/Generic/theme';
import { ForgotPasswordTheme } from './ForgotPassword/theme';
import { LoginTheme } from './Login';
import { RegisterTheme } from './Register';

export type GateItemTheme = LoginTheme &
    RegisterTheme &
    GateGenericTheme &
    ForgotPasswordTheme;

export type GateTheme = {
    light: GateItemTheme;
    dark: GateItemTheme;
};
