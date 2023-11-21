import { lazy } from 'react';

export const GraphProductsSalesAsync = lazy(() =>
    import('../../Components/ProductsSales').then(({ GraphProductsSales }) => {
        return { default: GraphProductsSales };
    }),
);

export const GraphCustomersSalesAsync = lazy(() =>
    import('../../Components/CustomersSales').then(
        ({ GraphCustomersSales }) => {
            return { default: GraphCustomersSales };
        },
    ),
);

export const ConfigIconAsync = lazy(() =>
    import('@/Pages/App/Components/ConfigIcon').then(({ ConfigIcon }) => {
        return { default: ConfigIcon };
    }),
);

export const ConfigRoutesAsync = lazy(() =>
    import('@/Pages/App/routes/Config').then(({ ConfigRoutes }) => {
        return { default: ConfigRoutes };
    }),
);
