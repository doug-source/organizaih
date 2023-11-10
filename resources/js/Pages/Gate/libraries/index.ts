export * from './PackContext';
export * from './contexts';

const errorStatusDefault = { errors: {} };

export const detachStatusServer = (
    data: typeof window.data,
    type: 'login' | 'register-gate' | 'forgot-password',
) => {
    if (type === 'login') {
        return data.auth.status;
    }
    if (type === 'register-gate') {
        return data.register.status;
    }
    return errorStatusDefault;
};
