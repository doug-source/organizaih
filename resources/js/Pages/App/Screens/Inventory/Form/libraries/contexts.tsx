import {
    InventoryDefinitionDispatch,
    InventoryDefinitionState,
} from '@/Pages/App/Screens/Inventory/Form/libraries';
import { ReactNode, createContext } from 'react';

type ContextPackProps = {
    state: InventoryDefinitionState;
    dispatch: InventoryDefinitionDispatch;
    children: ReactNode;
};

export const InventoryStateContext = createContext<
    ContextPackProps['state'] | null
>(null);
export const InventoryDispatchContext = createContext<
    ContextPackProps['dispatch'] | null
>(null);

export const ContextPack = ({
    state,
    dispatch,
    children,
}: ContextPackProps) => {
    return (
        <InventoryStateContext.Provider value={state}>
            <InventoryDispatchContext.Provider value={dispatch}>
                {children}
            </InventoryDispatchContext.Provider>
        </InventoryStateContext.Provider>
    );
};
