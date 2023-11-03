import { ReactNode, createContext } from 'react';

type ServerErrors = { errors: { status?: [string] } };

export const StatusServerContext = createContext<ServerErrors>({
    errors: {},
});

type StatusServerProps = {
    value: ServerErrors;
    children: ReactNode;
};

export const StatusServer = ({ value, children }: StatusServerProps) => {
    const errors = value;
    return (
        <StatusServerContext.Provider value={errors}>
            {children}
        </StatusServerContext.Provider>
    );
};
