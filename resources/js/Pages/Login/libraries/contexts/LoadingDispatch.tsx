import { Dispatch, ReactElement, SetStateAction, createContext } from 'react';

type LoadingDispatchProps = {
    value: Dispatch<SetStateAction<boolean>>;
    children?: ReactElement | null;
};

export const LoadingDispatchContext = createContext<
    LoadingDispatchProps['value'] | null
>(null);

export const LoadingDispatch = ({ value, children }: LoadingDispatchProps) => {
    const loading = value;
    return (
        <LoadingDispatchContext.Provider value={loading}>
            {children}
        </LoadingDispatchContext.Provider>
    );
};
