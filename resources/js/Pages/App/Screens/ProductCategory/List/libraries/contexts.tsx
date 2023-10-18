import {
    DispatchFn,
    SelectionTargetKey,
} from '@/Pages/App/Screens/ProductCategory/List/libraries';
import { ReducerSelections } from '@/Pages/App/libraries';
import { ReactNode, createContext } from 'react';

type ContextPackProps = {
    action: ReducerSelections['action'];
    target: SelectionTargetKey;
    dispatch: DispatchFn;
    children: ReactNode;
};

export const ActionContext = createContext<ContextPackProps['action'] | null>(
    null,
);
export const TargetContext = createContext<ContextPackProps['target'] | null>(
    null,
);
export const DispatchContext = createContext<
    ContextPackProps['dispatch'] | null
>(null);

export const ContextPack = ({
    action,
    target,
    dispatch,
    children,
}: ContextPackProps) => {
    return (
        <DispatchContext.Provider value={dispatch}>
            <TargetContext.Provider value={target}>
                <ActionContext.Provider value={action}>
                    {children}
                </ActionContext.Provider>
            </TargetContext.Provider>
        </DispatchContext.Provider>
    );
};
