import { InventoryDefinitionReducerEnum } from '@/Pages/App/Screens/Inventory/Form/Base/libraries/enums';
import { InventoryDefinitionPayload } from '@/Pages/App/Screens/Inventory/Form/Base/libraries/types/payload';
import { InventoryDefinitionReducerState } from '@/Pages/App/Screens/Inventory/Form/Base/libraries/types/state';

export const inventoryDefinitionReducer = (
    state: InventoryDefinitionReducerState,
    action: InventoryDefinitionPayload.Skeleton,
): InventoryDefinitionReducerState => {
    switch (action.type) {
        case InventoryDefinitionReducerEnum.TOGGLE_OPTION_CONFIRM: {
            return {
                ...state,
                optionsConfirm: !state.optionsConfirm,
            };
        }
        case InventoryDefinitionReducerEnum.INCLUDE_PRODUCT_QTY:
            return {
                ...state,
                productToInventory: {
                    ...state.productToInventory!,
                    qty: action.payload,
                },
            };
        case InventoryDefinitionReducerEnum.INCLUDE_PRODUCT_COST:
            return {
                ...state,
                productToInventory: {
                    ...state.productToInventory!,
                    price: action.payload,
                },
            };
        case InventoryDefinitionReducerEnum.INCLUDE_PRODUCT: {
            const inventoryFromDB = state.inventoriesFromDB.find(
                (inventory) => inventory.name === action.payload.name,
            );
            const qty = (inventoryFromDB || action.payload).qty || 1;
            const price = (inventoryFromDB || action.payload).price || 0.0;
            return {
                ...state,
                productToInventory: { ...action.payload, qty, price },
            };
        }
        case InventoryDefinitionReducerEnum.REMOVE_PRODUCT: {
            return {
                ...state,
                productToInventory: null,
            };
        }
        case InventoryDefinitionReducerEnum.REPLACE_INVENTORY_LIST: {
            const productsToInventory = [...action.payload];
            productsToInventory.sort(
                (a, b) => a.name.localeCompare(b.name) || a.qty - b.qty,
            );
            return {
                ...state,
                productsToInventory,
            };
        }
        case InventoryDefinitionReducerEnum.INCLUDE_INVENTORY_TO_SAVE: {
            const productsToInventory = [
                ...state.productsToInventory,
                action.payload,
            ];
            productsToInventory.sort(
                (a, b) => a.name.localeCompare(b.name) || a.qty - b.qty,
            );
            return {
                ...state,
                productsToInventory,
            };
        }
        case InventoryDefinitionReducerEnum.REMOVE_INVENTORY_FROM_SAVE: {
            const productsToInventory = state.productsToInventory.filter(
                (prodInventory) => prodInventory.name !== action.payload.name,
            );
            productsToInventory.sort(
                (a, b) => a.name.localeCompare(b.name) || a.qty - b.qty,
            );
            return {
                ...state,
                productsToInventory,
            };
        }
        case InventoryDefinitionReducerEnum.INCLUDE_PRODUCTS_DB: {
            return {
                ...state,
                inventoriesFromDB: action.payload,
            };
        }
        default: {
            const actionInvalid: never = action;
            throw new Error('Type invalid.', { cause: actionInvalid });
        }
    }
};
