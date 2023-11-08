import { ReactNode, createContext } from 'react';

type RegisterFields = typeof window.data.register.fields;

export const RegisterFieldsContext = createContext<RegisterFields>(undefined);

type RegisterFieldsProps = {
    value: RegisterFields;
    children: ReactNode;
};

export const RegisterFields = ({ value, children }: RegisterFieldsProps) => {
    return (
        <RegisterFieldsContext.Provider value={value}>
            {children}
        </RegisterFieldsContext.Provider>
    );
};
