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
