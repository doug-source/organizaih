import 'styled-components';
// import { AppTheme, LoginTheme } from './Theme';
import { AppTheme } from './Theme/App';
import { GenericTheme } from './Theme/Generic';
import { LoginTheme } from './Theme/Login';

export type ThemeKey = 'dark' | 'light';

declare module 'styled-components' {
    export interface DefaultTheme extends AppTheme, LoginTheme, GenericTheme {
        key: ThemeKey;
    }
}
