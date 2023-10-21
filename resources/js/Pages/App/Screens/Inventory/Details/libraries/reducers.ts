import { InventoryItemsReducerEnum } from '@/Pages/App/Screens/Inventory/Details/libraries/enums';
import {
    InventoryItemsPayload,
    InventoryItemsReducerState,
} from '@/Pages/App/Screens/Inventory/Details/libraries/types';

export const inventoryItemsReducer = (
    state: InventoryItemsReducerState,
    action: InventoryItemsPayload.Skeleton,
): InventoryItemsReducerState => {
    switch (action.type) {
        case InventoryItemsReducerEnum.INIT:
            return {
                ...state,
                inventoryItem: action.payload,
            };
        case InventoryItemsReducerEnum.PREPARE_DELETE:
            return {
                ...state,
                itemDataRemoved: action.payload,
                preConfirm: true,
            };
        case InventoryItemsReducerEnum.CANCEL_DELETE:
        case InventoryItemsReducerEnum.CLEAR_DELETE:
            return {
                ...state,
                itemDataRemoved: null,
                preConfirm: false,
            };
        case InventoryItemsReducerEnum.DELETE: {
            const createdAt = state.itemDataRemoved!.createdAt;
            const listFiltered = state.inventoryItem!.entries[createdAt].filter(
                (inventoryItem) =>
                    inventoryItem.id !== state.itemDataRemoved!.inventoryItemID,
            );

            if (!listFiltered.length) {
                if (Object.keys(state.inventoryItem!.entries).length === 1) {
                    return {
                        ...state,
                        inventoryItem: null,
                        itemDataRemoved: null,
                        noInventoryItem: true,
                    };
                }
                return {
                    ...state,
                    inventoryItem: {
                        ...state.inventoryItem!,
                        entries: Object.fromEntries(
                            Object.entries(state.inventoryItem!.entries).filter(
                                ([createdAtKey]) => createdAtKey !== createdAt,
                            ),
                        ),
                    },
                    itemDataRemoved: null,
                };
            }

            return {
                ...state,
                inventoryItem: {
                    ...state.inventoryItem!,
                    entries: {
                        ...state.inventoryItem!.entries,
                        [createdAt]: listFiltered,
                    },
                },
                itemDataRemoved: null,
            };
        }
        case InventoryItemsReducerEnum.HIDE_CONFIRM:
            return {
                ...state,
                preConfirm: false,
            };
        case InventoryItemsReducerEnum.HIDE_WARNING:
            return {
                ...state,
                warning: false,
            };
        case InventoryItemsReducerEnum.SHOW_WARNING:
            return {
                ...state,
                warning: true,
            };
        case InventoryItemsReducerEnum.TOGGLE_OPTION_CONFIRM: {
            return {
                ...state,
                optionsConfirm: !state.optionsConfirm,
            };
        }
        default: {
            const actionInvalid: never = action;
            throw new Error('Type invalid.', { cause: actionInvalid });
        }
    }
};
