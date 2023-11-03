import { DefaultTheme } from 'styled-components';
import { ThemeData as AppTheme } from './App';
import { ThemeData as GateTheme } from './Gate';
import { ThemeData as GenericTheme } from './Generic';

const lightData = {
    ...AppTheme.light,
    ...GenericTheme.light,
    ...GateTheme.light,
};

const DarkData = {
    ...AppTheme.dark,
    ...GenericTheme.dark,
    ...GateTheme.dark,
};

type ThemeBox = { light: DefaultTheme; dark: DefaultTheme };

export const Theme: ThemeBox = {
    light: lightData,
    dark: DarkData,
};

export * from './fonts';
