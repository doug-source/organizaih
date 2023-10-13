import { ReducerSelections } from '@/Pages/App/libraries/types/state';
import { ReactNode, createContext } from 'react';

export const SelectionsContext = createContext<ReducerSelections | null>(null);

type SelectionsProps = {
    value: ReducerSelections;
    children?: ReactNode;
};

export const Selections = ({ value, children }: SelectionsProps) => {
    const selections = value;
    return (
        <SelectionsContext.Provider value={selections}>
            {children}
        </SelectionsContext.Provider>
    );
};
