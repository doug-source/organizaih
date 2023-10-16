export * from './contexts';
export * from './hooks';
export * from './icons';
export * from './toolbox';
export * from './types';

export const firstUpperCase = (str: string): string => {
    const strVal = str.trim();
    return strVal.charAt(0).toUpperCase() + strVal.slice(1);
};

export const makeContextError = (hookName: string, providerName: string) => {
    return new Error(
        `${hookName} has to be used within <${providerName}.Provider>`,
    );
};
