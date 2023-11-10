import 'styled-components';
import { AppTheme } from './Theme/App';
import { GateItemTheme } from './Theme/Gate';
import { GenericTheme } from './Theme/Generic';

export type ThemeKey = 'dark' | 'light';

export type GlobalTheme = AppTheme & GenericTheme & GateItemTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends GlobalTheme {
        key: ThemeKey;
    }
}
