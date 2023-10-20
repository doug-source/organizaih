import { inventoryDefinitionReducer } from '@/Pages/App/Screens/Inventory/Form/Base/libraries/reducers';
import { InventoryCreate } from '@/Pages/App/Screens/Inventory/Form/Create';
import { InventoryEdit } from '@/Pages/App/Screens/Inventory/Form/Edit';
import { ContextPack } from '@/Pages/App/Screens/Inventory/Form/libraries/contexts';
import { useInitForm } from '@/Pages/App/Screens/Inventory/Form/libraries/hooks';
import { useReducer } from 'react';
import { useParams } from 'react-router-dom';

const Form = () => {
    const { id: inventoryItemID } = useParams();

    const [state, dispatch] = useReducer(inventoryDefinitionReducer, {
        productToInventory: null,
        productsToInventory: [],
        inventoriesFromDB: [],
        optionsConfirm: false,
    });

    const onInit = useInitForm(state, dispatch, inventoryItemID);

    if (inventoryItemID) {
        return (
            <ContextPack
                state={state}
                dispatch={dispatch}
            >
                <InventoryEdit
                    onInit={onInit}
                    inventoryItemID={Number(inventoryItemID)}
                />
            </ContextPack>
        );
    }
    return (
        <ContextPack
            state={state}
            dispatch={dispatch}
        >
            <InventoryCreate onInit={onInit} />
        </ContextPack>
    );
};

export * from './Base';
export * from './Create';
export * from './Edit';
export { Form as InventoryForm };
