import { lazy } from 'react';

export const GateSVG = lazy(() =>
    import('/resources/img/gate.svg').then((obj) => {
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
