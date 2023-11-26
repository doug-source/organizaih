import { GateGenericThemeMeasures } from '@/settings/Theme/Gate/Generic/measures/theme';

export type GateGenericTheme = {
    gate: {
        measures: GateGenericThemeMeasures;

        body: {
            color: string;
        };
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
            gateIcon: {
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
};
