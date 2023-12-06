import { ReactNode, createContext } from 'react';

type UserNameProps = {
    value: typeof window.data.userName;
    children?: ReactNode;
};

export const UserNameContext = createContext<UserNameProps['value']>('');

export const UserName = ({ value = '', children }: UserNameProps) => {
    const userName = value;
    return (
        <UserNameContext.Provider value={userName}>
            {children}
        </UserNameContext.Provider>
    );
};
