import { DefaultTheme } from 'styled-components';
import { ThemeData as AppTheme } from './App';
import { ThemeData as GenericTheme } from './Generic';
import { ThemeData as LoginTheme } from './Login';

const lightData = {
    ...AppTheme.light,
    ...LoginTheme.light,
    ...GenericTheme.light,
};

const DarkData = {
    ...AppTheme.dark,
    ...LoginTheme.dark,
    ...GenericTheme.dark,
};

type ThemeBox = { light: DefaultTheme; dark: DefaultTheme };

export const Theme: ThemeBox = {
    light: lightData,
    dark: DarkData,
};

export * from './fonts';
