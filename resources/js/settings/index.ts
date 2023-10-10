export * from './Theme';
export * from './styled.d';

export const endpoints = {
    login: {
        auth: window.data.auth?.action,
    },
    theming: {
        update: (themeKey: string) => `/theme/${themeKey}`,
    },
};
