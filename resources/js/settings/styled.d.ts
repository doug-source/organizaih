import { GateGenericTheme } from '@/settings/Theme/Gate/Generic/theme';
import 'styled-components';
import { AppTheme } from './Theme/App';
import { GateItemTheme } from './Theme/Gate';
import { GenericTheme } from './Theme/Generic';

export type ThemeKey = 'dark' | 'light';

type GateThemes = GateItemTheme & GateGenericTheme;

export type GlobalTheme = AppTheme & GenericTheme & GateThemes;

declare module 'styled-components' {
    export interface DefaultTheme extends GlobalTheme {
        key: ThemeKey;
    }
}
