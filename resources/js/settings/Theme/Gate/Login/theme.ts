import { LoginThemeMeasures } from './measures/theme';

export type LoginTheme = {
    login: {
        measures: LoginThemeMeasures;

        body: {
            color: string;
        };
        checkbox: {
            border: {
                color: string;
            };
            boxShadow: string;
            color: string;
        };
        forgotPassword: {
            color: string;
            hover: {
                color: string;
            };
        };
        loadingIcon: {
            fill: string;
        };
        remember: {
            color: string;
        };
    };
};
