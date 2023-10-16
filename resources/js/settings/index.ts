export * from './Theme';
export * from './styled.d';

const { apiVersion } = window.data;

export const endpoints = {
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
    state: {
        list: `/api/${apiVersion}/states`,
    },
    city: {
        list: (stateID: number) => `/api/${apiVersion}/state/${stateID}/cities`,
    },
    theming: {
        update: (themeKey: string) => `/theme/${themeKey}`,
    },
};
