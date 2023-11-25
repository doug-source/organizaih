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

export const ProductRoutesAsync = lazy(() =>
    import('@/Pages/App/routes/Product').then(({ ProductRoutes }) => {
        return {
            default: ProductRoutes,
        };
    }),
);

export const ProductCategoryRoutesAsync = lazy(() =>
    import('@/Pages/App/routes/ProductCategory').then(
        ({ ProductCategoryRoutes }) => {
            return {
                default: ProductCategoryRoutes,
            };
        },
    ),
);

export const InventoryRoutesAsync = lazy(() =>
    import('@/Pages/App/routes/Inventory').then(({ InventoryRoutes }) => {
        return {
            default: InventoryRoutes,
        };
    }),
);

export const SaleRoutesAsync = lazy(() =>
    import('@/Pages/App/routes/Sale').then(({ SaleRoutes }) => {
        return {
            default: SaleRoutes,
        };
    }),
);

export const GraphRoutesAsync = lazy(() =>
    import('@/Pages/App/routes/Graph').then(({ GraphRoutes }) => {
        return {
            default: GraphRoutes,
        };
    }),
);

export const UserRoutesAsync = lazy(() =>
    import('@/Pages/App/routes/User').then(({ UserRoutes }) => {
        return {
            default: UserRoutes,
        };
    }),
);

export const RegisterRequestRoutesAsync = lazy(() =>
    import('@/Pages/App/routes/RegisterRequest').then(
        ({ RegisterRequestRoutes }) => {
            return {
                default: RegisterRequestRoutes,
            };
        },
    ),
);
