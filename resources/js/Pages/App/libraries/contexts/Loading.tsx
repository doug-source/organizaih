import { ReactElement, createContext } from 'react';

type LoadingProps = {
    value: boolean | null;
    children?: ReactElement | null;
};

export const LoadingContext = createContext<LoadingProps['value']>(null);

export const Loading = ({ value, children }: LoadingProps) => {
    const statusLoading = value;
    return (
        <LoadingContext.Provider value={statusLoading}>
            {children}
        </LoadingContext.Provider>
    );
};
