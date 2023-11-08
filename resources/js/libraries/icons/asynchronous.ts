import { lazy } from 'react';

export const LoginIcon = lazy(() =>
    import('/resources/img/LoginIcon.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const GoogleSVG = lazy(() =>
    import('/resources/img/google.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);
