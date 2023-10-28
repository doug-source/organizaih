import { SaleFormInitProps } from '@/Pages/App/Screens/Sales/Form/libraries';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import { useAppDispatch, useSelections } from '@/Pages/App/libraries/hooks';
import { useEffect } from 'react';

export const useCreateInitSelection = (onInit: SaleFormInitProps) => {
    const appDispatch = useAppDispatch();
    const { target } = useSelections();
    useEffect(() => {
        appDispatch({
            type: DataReducerEnum.SELECTION_ACTION,
            payload: 'create',
        });
        if (target === 'sales') {
            onInit();
        }
    }, [appDispatch, onInit]);
};
