import { LoginThemeMeasures } from '../theme';

export const guestLayout: LoginThemeMeasures['guestLayout'] = {
    container: {
        padding: {
            top: 24,
        },
        minHeight: '100vh',
        wide: {
            padding: {
                top: 0,
            },
        },
    },
    loginIcon: {
        size: 80,
    },
    main: {
        padding: {
            top: 16,
            bottom: 16,
            left: 24,
            right: 24,
        },
        margin: {
            top: 24,
        },
        wide: {
            borderRadius: 8,
            maxWidth: 448,
            width: '100%',
            border: {
                width: {
                    light: 0,
                    dark: 1,
                },
            },
        },
    },
};
