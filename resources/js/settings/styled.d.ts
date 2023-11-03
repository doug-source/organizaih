import 'styled-components';
import { AppTheme } from './Theme/App';
import { GateTheme } from './Theme/Gate';
import { GenericTheme } from './Theme/Generic';

export type ThemeKey = 'dark' | 'light';

declare module 'styled-components' {
    export interface DefaultTheme extends AppTheme, GenericTheme, GateTheme {
        key: ThemeKey;
    }
}
