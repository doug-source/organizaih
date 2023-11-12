import { lazy } from 'react';

export const GateIcon = lazy(() =>
    import('/resources/img/GateIcon.svg').then((obj) => {
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
