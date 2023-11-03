import { ThemeData as LoginThemeValues } from './Login';
import { ThemeData as RegisterThemeValues } from './Register';
import { GateTheme } from './theme';

const lightData: GateTheme = {
    ...LoginThemeValues.light,
    ...RegisterThemeValues.light,
};

const darkData: GateTheme = {
    ...LoginThemeValues.dark,
    ...RegisterThemeValues.dark,
};

export const ThemeData = {
    light: lightData,
    dark: darkData,
};

export { type GateTheme };
