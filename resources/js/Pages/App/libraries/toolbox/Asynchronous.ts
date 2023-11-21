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

export const LogoutLinkAsync = lazy(() =>
    import('@/Pages/App/Components/LogoutLink').then(({ LogoutLink }) => {
        return {
            default: LogoutLink,
        };
    }),
);

export const DashboardAsync = lazy(() =>
    import('@/Pages/App/Components/Header/Dashboard').then(({ Dashboard }) => {
        return {
            default: Dashboard,
        };
    }),
);

export const CustomerRoutesAsync = lazy(() =>
    import('@/Pages/App/routes/Customer').then(({ CustomerRoutes }) => {
        return {
            default: CustomerRoutes,
        };
    }),
);
