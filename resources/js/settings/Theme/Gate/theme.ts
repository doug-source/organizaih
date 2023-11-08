import { LoginTheme } from './Login';
import { RegisterTheme } from './Register';

export type GateItemTheme = LoginTheme & RegisterTheme;

export type GateTheme = {
    light: GateItemTheme;
    dark: GateItemTheme;
};
