import { ReactNode, createContext } from 'react';

type ResetPasswordFields = typeof window.data.resetPassword.fields;

export const ResetPasswordFieldsContext =
    createContext<ResetPasswordFields>(undefined);

type ResetPasswordFieldsProps = {
    value: ResetPasswordFields;
    children: ReactNode;
};

export const ResetPasswordFields = ({
    value,
    children,
}: ResetPasswordFieldsProps) => {
    return (
        <ResetPasswordFieldsContext.Provider value={value}>
            {children}
        </ResetPasswordFieldsContext.Provider>
    );
};
