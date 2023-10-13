export * from './Theme';
export * from './styled.d';

const { apiVersion } = window.data;

export const endpoints = {
    customer: {
        list: `/api/${apiVersion}/customers`,
        data: (id: number) => `/api/${apiVersion}/customers/${id}`,
        delete: (id: number) => `/api/${apiVersion}/customers/${id}`,
    },
    login: {
        auth: window.data.auth?.action,
    },
    theming: {
        update: (themeKey: string) => `/theme/${themeKey}`,
    },
};
