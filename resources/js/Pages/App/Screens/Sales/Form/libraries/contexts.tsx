import { useSaleDefinitionReducer } from '@/Pages/App/Screens/Sales/Form/libraries/hooks';
import { ReactNode, createContext } from 'react';

type ContextPackProps = {
    state: ReturnType<typeof useSaleDefinitionReducer>[0];
    dispatch: ReturnType<typeof useSaleDefinitionReducer>[1];
    children: ReactNode;
};

export const SaleStateContext = createContext<ContextPackProps['state'] | null>(
    null,
);
export const SaleDispatchContext = createContext<
    ContextPackProps['dispatch'] | null
>(null);

export const ContextPack = ({
    state,
    dispatch,
    children,
}: ContextPackProps) => {
    return (
        <SaleStateContext.Provider value={state}>
            <SaleDispatchContext.Provider value={dispatch}>
                {children}
            </SaleDispatchContext.Provider>
        </SaleStateContext.Provider>
    );
};
