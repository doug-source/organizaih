import { ReactNode, createContext } from 'react';

type RegisterRequestFields = typeof window.data.registerRequest.fields;

export const RegisterRequestFieldsContext =
    createContext<RegisterRequestFields>(undefined);

type RegisterFieldsProps = {
    value: RegisterRequestFields;
    children: ReactNode;
};

export const RegisterRequestFields = ({
    value,
    children,
}: RegisterFieldsProps) => {
    return (
        <RegisterRequestFieldsContext.Provider value={value}>
            {children}
        </RegisterRequestFieldsContext.Provider>
    );
};
