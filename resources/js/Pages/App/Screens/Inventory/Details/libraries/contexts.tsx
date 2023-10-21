import {
    useInventoryDetailsReducer,
    useTouching,
} from '@/Pages/App/Screens/Inventory/Details/libraries/hooks';
import { ReactNode, createContext } from 'react';

type UseTouchingArgs = ReturnType<typeof useTouching>;

type ContextPackProps = {
    dispatch: ReturnType<typeof useInventoryDetailsReducer>[1];
    setTouchData: UseTouchingArgs[2];
    touchListeners: UseTouchingArgs[0];
    children: ReactNode;
};

export const DispatchContext = createContext<
    ContextPackProps['dispatch'] | null
>(null);

export const SetTouchDataContext = createContext<
    ContextPackProps['setTouchData'] | null
>(null);

export const TouchListenersContext = createContext<
    ContextPackProps['touchListeners'] | null
>(null);

export const ContextPack = ({
    children,
    dispatch,
    setTouchData,
    touchListeners,
}: ContextPackProps) => {
    return (
        <DispatchContext.Provider value={dispatch}>
            <SetTouchDataContext.Provider value={setTouchData}>
                <TouchListenersContext.Provider value={touchListeners}>
                    {children}
                </TouchListenersContext.Provider>
            </SetTouchDataContext.Provider>
        </DispatchContext.Provider>
    );
};
