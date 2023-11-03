import { LoginTheme } from './Login';
import { RegisterTheme } from './Register';

type ThemeBox = LoginTheme & RegisterTheme;

export type GateTheme = {
    light: ThemeBox;
    dark: ThemeBox;
};
