import { ReactNode, createContext } from 'react';

type UserPhotoProps = {
    value: string | null;
    children?: ReactNode;
};

export const UserPhotoContext = createContext<UserPhotoProps['value']>(null);

export const UserPhoto = ({ value = '', children }: UserPhotoProps) => {
    const userPhoto = value;
    return (
        <UserPhotoContext.Provider value={userPhoto}>
            {children}
        </UserPhotoContext.Provider>
    );
};
