export * from './Theme';
export * from './styled.d';

const { apiVersion } = window.data;

export const endpoints = {
    user: {
        list: `/api/${apiVersion}/users`,
        data: (id: number) => `/api/${apiVersion}/users/${id}`,
        delete: (id: number) => `/api/${apiVersion}/users/${id}`,
        self: {
            data: `/api/${apiVersion}/users/self`,
        },
    },
    city: {
        list: (stateID: number) => `/api/${apiVersion}/state/${stateID}/cities`,
    },
    customer: {
        list: `/api/${apiVersion}/customers`,
        data: (id: number) => `/api/${apiVersion}/customers/${id}`,
        delete: (id: number) => `/api/${apiVersion}/customers/${id}`,
        store: `/api/${apiVersion}/customers`,
        update: (id: number) => `/api/${apiVersion}/customers/${id}`,
    },
    inventory: {
        list: `/api/${apiVersion}/inventories`,
        data: (id: number) => `/api/${apiVersion}/inventories/${id}`,
        summary: `/api/${apiVersion}/inventories/summary`,
        delete: (id: number) => `/api/${apiVersion}/inventories/item/${id}`,
        item: (id: number) => `/api/${apiVersion}/inventories/item/${id}`,
        deleteAll: (id: number) => `/api/${apiVersion}/inventories/${id}`,
        store: `/api/${apiVersion}/inventories`,
        update: (id: number) => `/api/${apiVersion}/inventories/item/${id}`,
    },
    login: {
        auth: window.data.auth?.action,
    },
    register: {
        store: window.data?.register?.action,
    },
    forgotPassword: {
        create: '/forgot-password',
    },
    resetPassword: {
        update: '/reset-password',
    },
    product: {
        list: `/api/${apiVersion}/products`,
        data: (id: number) => `/api/${apiVersion}/products/${id}`,
        delete: (id: number) => `/api/${apiVersion}/products/${id}`,
        store: `/api/${apiVersion}/products`,
        update: (id: number) => `/api/${apiVersion}/products/${id}`,
    },
    productCategory: {
        list: `/api/${apiVersion}/product-categories`,
        data: (id: number) => `/api/${apiVersion}/product-categories/${id}`,
        delete: (id: number) => `/api/${apiVersion}/product-categories/${id}`,
        store: `/api/${apiVersion}/product-categories`,
        update: (id: number) => `/api/${apiVersion}/product-categories/${id}`,
    },
    theming: {
        update: (themeKey: string) => `/theme/${themeKey}`,
    },
    sale: {
        list: `/api/${apiVersion}/sales`,
        data: (saleID: number) => `/api/${apiVersion}/sales/${saleID}`,
        edit: (saleID: number) => `/api/${apiVersion}/sales/${saleID}`,
        delete: (saleID: number) => `/api/${apiVersion}/sales/${saleID}`,
        store: `/api/${apiVersion}/sales`,
        update: (saleID: number) => `/api/${apiVersion}/sales${saleID}`,

        productQty: `/api/${apiVersion}/sales/products/count`,
        productsSold: (qty: number) =>
            `/api/${apiVersion}/sales/products/${qty}`,
        customerQty: `/api/${apiVersion}/sales/customers/count`,
        customersBuyer: (qty: number) =>
            `/api/${apiVersion}/sales/customers/${qty}`,
    },
    state: {
        list: `/api/${apiVersion}/states`,
    },
    registerRequest: {
        approval: (id: number) => {
            return `/api/${apiVersion}/register/requests/${id}/approval`;
        },
        delete: (id: number) => `/api/${apiVersion}/register/requests/${id}`,
        list: `/api/${apiVersion}/register/requests`,
        show: (id: number) => `/api/${apiVersion}/register/requests/${id}`,
        store: window.data?.registerRequest?.action,
    },
} as const;

export const navigations = {
    inventory: {
        create: '/inventories/create',
        edit: (id?: number) => `/inventories/${id ?? ':id'}/edit`,
        list: '/inventories',
        show: (id?: number) => `/inventories/${id ?? ':id'}`,
    },
    configuration: {
        index: '/configuration',
        profile: {
            show: '/configuration/profile',
        },
    },
    customer: {
        create: '/customers/create',
        edit: '/customers/:id/edit',
        list: '/customers',
        select: '/customers/select/:target',
        show: (id?: number) => `/customers/${id ?? ':id'}`,
    },
    graph: {
        index: '/graphs',
        qty: {
            sales: {
                customers: '/graph-customers-sales-qty',
                products: '/graph-products-sales-qty',
            },
        },
    },
    product: {
        create: '/products/create',
        edit: (id?: number) => `/products/${id ?? ':id'}/edit`,
        list: '/products',
        select: '/products/select/:target',
        show: (id?: number) => `/products/${id ?? ':id'}`,
    },
    productCategory: {
        create: '/product-categories/create',
        edit: (id?: number) => `/product-categories/${id ?? ':id'}/edit`,
        list: '/product-categories',
        select: '/product-categories/select/:target',
        show: (id?: number) => `/product-categories/${id ?? ':id'}`,
    },
    sale: {
        create: '/sales/create',
        edit: (id?: number) => `/sales/${id ?? ':id'}/edit`,
        list: '/sales',
        show: (id?: number) => `/sales/${id ?? ':id'}`,
    },
    user: {
        list: '/users',
        show: (id?: number) => `/users/${id ?? ':id'}`,
    },
    register: {
        create: '/register',
    },
    registerRequest: {
        create: '/register-request',
        list: '/register/requests',
        show: (id?: number) => `/register/requests/${id ?? ':id'}`,
    },
} as const;
