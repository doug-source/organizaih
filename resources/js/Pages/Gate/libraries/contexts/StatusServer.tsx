import { ReactNode, createContext } from 'react';

type ServerStatus = {
    errors: { status?: [string] };
};

export const StatusServerContext = createContext<ServerStatus>({
    errors: {},
});

type StatusServerProps = {
    value: ServerStatus;
    children: ReactNode;
};

export const StatusServer = ({ value, children }: StatusServerProps) => {
    const status = value;
    return (
        <StatusServerContext.Provider value={status}>
            {children}
        </StatusServerContext.Provider>
    );
};
