import { RegisterThemeMeasures } from '@/settings/Theme/Gate/Register/measures/theme';

export type RegisterTheme = {
    register: {
        measures: RegisterThemeMeasures;
        body: {
            color: string;
        };
    };
};
