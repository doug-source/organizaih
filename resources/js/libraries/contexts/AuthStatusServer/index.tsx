import { ReactNode, createContext } from 'react';

type ServerErrors = { errors: { status?: [string] } };

export const AuthStatusServerContext = createContext<ServerErrors>({
    errors: {},
});

type AuthStatusServer = {
    value: ServerErrors;
    children: ReactNode;
};

export const AuthStatusServer = ({ value, children }: AuthStatusServer) => {
    const errors = value;
    return (
        <AuthStatusServerContext.Provider value={errors}>
            {children}
        </AuthStatusServerContext.Provider>
    );
};
