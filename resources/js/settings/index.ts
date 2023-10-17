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
    login: {
        auth: window.data.auth?.action,
    },
    product: {
        list: `/api/${apiVersion}/products`,
        data: (id: number) => `/api/${apiVersion}/products/${id}`,
        delete: (id: number) => `/api/${apiVersion}/products/${id}`,
    },
    theming: {
        update: (themeKey: string) => `/theme/${themeKey}`,
    },
    state: {
        list: `/api/${apiVersion}/states`,
    },
};
