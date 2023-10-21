export * from './Theme';
export * from './styled.d';

const { apiVersion } = window.data;

export const endpoints = {
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
    state: {
        list: `/api/${apiVersion}/states`,
    },
};

export const redirects = {
    inventory: {
        edit: (id: number) => `/inventories/${id}/edit`,
    },
};
