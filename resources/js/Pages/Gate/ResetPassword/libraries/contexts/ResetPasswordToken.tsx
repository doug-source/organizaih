import { ReactNode, createContext } from 'react';

type ResetPasswordToken = typeof window.data.resetPassword.token;

export const ResetPasswordTokenContext = createContext<ResetPasswordToken>('');

type ResetPasswordTokenProps = {
    value: ResetPasswordToken;
    children: ReactNode;
};

export const ResetPasswordToken = ({
    value,
    children,
}: ResetPasswordTokenProps) => {
    return (
        <ResetPasswordTokenContext.Provider value={value}>
            {children}
        </ResetPasswordTokenContext.Provider>
    );
};
