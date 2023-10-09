import { LoginThemeMeasures } from './measures/theme';

export type LoginTheme = {
    login: {
        measures: LoginThemeMeasures;

        auth: {
            checkbox: {
                border: {
                    color: string;
                };
                boxShadow: string;
                color: string;
            };
            fieldError: {
                color: string;
            };
            input: {
                border: {
                    color: string;
                };
                boxShadow: string;
            };
            label: {
                color: string;
            };
        };
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
        forgotPassword: {
            color: string;
            hover: {
                color: string;
            };
        };
        loadingIcon: {
            fill: string;
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
        remember: {
            color: string;
        };
    };
};
