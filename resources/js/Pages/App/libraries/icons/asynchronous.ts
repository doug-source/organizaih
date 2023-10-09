import { lazy } from 'react';

export const BrandIcon = lazy(() =>
    import('/resources/img/brand.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const CustomerSVG = lazy(() =>
    import('/resources/img/customers.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const GraphSVG = lazy(() =>
    import('/resources/img/graph.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const InventorySVG = lazy(() =>
    import('/resources/img/inventory.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const LogoutIcon = lazy(() =>
    import('/resources/img/logout.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const ProductSVG = lazy(() =>
    import('/resources/img/products.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const PulldownIcon = lazy(() =>
    import('/resources/img/pulldown.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const SaleSVG = lazy(() =>
    import('/resources/img/sale.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const UserIcon = lazy(() =>
    import('/resources/img/user.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);
