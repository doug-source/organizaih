import { GenericThemeMeasures } from './measures/theme';

export type GenericTheme = {
    generic: {
        measures: GenericThemeMeasures;

        input: {
            bg: string;
            border: {
                color: string;
            };
            boxShadow: string;
            color: string;
            focus: {
                twRingColor: string;
                border: {
                    color: string;
                };
            };
        };
        btn: {
            color: string;
            border: {
                color: string;
            };
        };
    };
};
