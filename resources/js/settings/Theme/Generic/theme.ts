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
        gate: {
            btn: {
                bg: string;
                boxShadow: string;
                text: {
                    color: string;
                };
                active: {
                    boxShadow: string;
                };
            };
            fieldMessage: {
                error: {
                    color: string;
                };
                success: {
                    color: string;
                };
            };
            guestLayout: {
                container: {
                    bg: string;
                };
                loginIcon: {
                    fill: string;
                };
                main: {
                    bg: string;
                    boxShadow: string;
                    border: {
                        color: string;
                    };
                };
            };
            inputText: {
                border: {
                    color: string;
                };
                boxShadow: string;
            };
            label: {
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
