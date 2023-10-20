import { InventoryCreate } from '@/Pages/App/Screens/Inventory/Form/Create';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import { useAppDispatch, useSelections } from '@/Pages/App/libraries/hooks';
import { ComponentPropsWithoutRef, useEffect } from 'react';

export const useCreateSelection = (
    target: ReturnType<typeof useSelections>['target'],
    onInit: ComponentPropsWithoutRef<typeof InventoryCreate>['onInit'],
) => {
    const appDispatch = useAppDispatch();
    useEffect(() => {
        appDispatch({
            type: DataReducerEnum.SELECTION_ACTION,
            payload: 'create',
        });
        if (target === 'inventories') {
            onInit();
        }
    }, [appDispatch, onInit]);
};
