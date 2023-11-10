import { ThemeData as ForgotPasswordThemeValues } from '@/settings/Theme/Gate/ForgotPassword';
import { ThemeData as GateGenericThemeValues } from '@/settings/Theme/Gate/Generic';
import { ThemeData as LoginThemeValues } from './Login';
import { ThemeData as RegisterThemeValues } from './Register';

import { GateItemTheme, GateTheme } from './theme';

const lightData = {
    ...GateGenericThemeValues.light,
    ...LoginThemeValues.light,
    ...RegisterThemeValues.light,
    ...ForgotPasswordThemeValues.light,
};

const darkData = {
    ...GateGenericThemeValues.dark,
    ...LoginThemeValues.dark,
    ...RegisterThemeValues.dark,
    ...ForgotPasswordThemeValues.dark,
};

export const ThemeData: GateTheme = {
    light: lightData,
    dark: darkData,
};

export { type GateItemTheme, type GateTheme };
