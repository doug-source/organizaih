export * from './PackContext';
export * from './contexts';

export const detachStatusServer = (
    data: typeof window.data,
    type: 'login' | 'register-gate',
) => {
    if (type === 'login') {
        return data.auth.status;
    }
    return data.register.status;
};
