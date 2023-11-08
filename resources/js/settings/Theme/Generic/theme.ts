import { GenericThemeMeasures } from './measures/theme';

export type GenericTheme = {
    generic: {
        measures: GenericThemeMeasures;

        btn: {
            color: string;
            border: {
                color: string;
            };
        };
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
    };
};
