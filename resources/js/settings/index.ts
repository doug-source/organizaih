export * from './Theme';
export * from './styled.d';

const { apiVersion } = window.data;

export const endpoints = {
    user: {
        list: `/api/${apiVersion}/users`,
        data: (id: number) => `/api/${apiVersion}/users/${id}`,
        delete: (id: number) => `/api/${apiVersion}/users/${id}`,
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
        store: () => {
            const { action } = window.data.register;
            if (!action) {
                return;
            }
            return `/api/${apiVersion}${action}`;
        },
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
        list: `/api/${apiVersion}/register/requests`,
        show: (id: number) => `/api/${apiVersion}/register/requests/${id}`,
        store: () => {
            const { action } = window.data.registerRequest;
            if (!action) {
                return;
            }
            return `/api/${apiVersion}${action}`;
        },
    },
} as const;

export const navigations = {
    inventory: {
        show: (id: number) => `/inventories/${id}`,
        edit: (id: number) => `/inventories/${id}/edit`,
    },
    customer: {
        show: (id: number) => `/customers/${id}`,
        create: '/customers/create',
    },
    product: {
        show: (id: number) => `/products/${id}`,
    },
    productCategory: {
        show: (id: number) => `/product-categories/${id}`,
    },
    sale: {
        show: (id: number) => `/sales/${id}`,
    },
    user: {
        show: (id: number) => `/users/${id}`,
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
