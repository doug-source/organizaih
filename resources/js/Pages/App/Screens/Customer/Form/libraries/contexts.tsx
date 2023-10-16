import { customerReducer } from '@/Pages/App/Screens/Customer/Form/libraries/reducers';
import { CustomerDispatchType } from '@/Pages/App/Screens/Customer/Form/libraries/types';
import { ICustomer } from '@/Pages/App/Screens/Customer/Form/types';
import { ErrorsSetterType, ErrorsType } from '@/Pages/App/Screens/types';
import { Dispatch, ReactNode, SetStateAction, createContext } from 'react';

export const ErrorsContext = createContext<ErrorsType>(null);
export const ErrorsSetterContext = createContext<ErrorsSetterType>(null);
export const CustomerContext = createContext<ICustomer | null>(null);
export const CustomerDispatchContext =
    createContext<CustomerDispatchType>(null);

type ReducerProps = Parameters<typeof customerReducer>;

type ContextPackProps = {
    errors: ErrorsType;
    setErrors: Dispatch<SetStateAction<ErrorsType>>;
    data: ReducerProps[0];
    dispatch: Dispatch<ReducerProps[1]>;
    children: ReactNode;
};

export const ContextPack = ({
    errors,
    setErrors,
    dispatch,
    data,
    children,
}: ContextPackProps) => {
    return (
        <ErrorsContext.Provider value={errors}>
            <ErrorsSetterContext.Provider value={setErrors}>
                <CustomerDispatchContext.Provider value={dispatch}>
                    <CustomerContext.Provider value={data.customer}>
                        {children}
                    </CustomerContext.Provider>
                </CustomerDispatchContext.Provider>
            </ErrorsSetterContext.Provider>
        </ErrorsContext.Provider>
    );
};
