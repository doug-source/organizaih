import { ReactElement, createContext } from 'react';

export const TokenRequestContext = createContext<string>('');

type TokenRequest = {
    value: string;
    children?: ReactElement | null;
};

export const TokenRequest = ({ value = '', children }: TokenRequest) => {
    const tokenRequest = value;
    return (
        <TokenRequestContext.Provider value={tokenRequest}>
            {children}
        </TokenRequestContext.Provider>
    );
};
