import { filterList } from '@/Pages/App/Screens/Inventory/List/libraries';
import { InventoriesReducerEnum } from '@/Pages/App/Screens/Inventory/List/libraries/enums';
import { InventoriesPayload } from '@/Pages/App/Screens/Inventory/List/libraries/types/payload';
import { InventoriesReducerState } from '@/Pages/App/Screens/Inventory/List/libraries/types/state';
import { IInventoryListData } from '@/Pages/App/Screens/Inventory/List/types';
import {
    DeletionReducerEnum,
    deletionReducer,
    statePaginationAfterDeletion,
} from '@/Pages/App/libraries';

export const inventoriesReducer = (
    state: InventoriesReducerState,
    action: InventoriesPayload.Skeleton<IInventoryListData>,
): InventoriesReducerState => {
    switch (action.type) {
        case InventoriesReducerEnum.INIT:
            return {
                ...state,
                total: [...action.payload],
                inventories: [...action.payload],
                list: filterList(action.payload),
            };
        case InventoriesReducerEnum.SEARCH:
            return {
                ...state,
                search: action.payload.search,
            };
        case InventoriesReducerEnum.CHANGE_PAGE:
            return { ...state, page: action.payload };
        case InventoriesReducerEnum.CHANGE_GROUP:
            return { ...state, group: action.payload };
        case InventoriesReducerEnum.CHANGE_LAST:
            return { ...state, lastPage: action.payload };
        case InventoriesReducerEnum.CHANGE_QTY:
            return { ...state, qty: action.payload };
        case DeletionReducerEnum.DELETE: {
            const newState = deletionReducer<IInventoryListData, 'productID'>(
                state,
                action,
                'inventories',
                'productID',
            ) as InventoriesReducerState;
            return statePaginationAfterDeletion({
                ...newState,
                list: filterList(newState.total),
            });
        }
        case DeletionReducerEnum.CLEAR_DELETE:
        case DeletionReducerEnum.CANCEL_DELETE:
        case DeletionReducerEnum.PREPARE_DELETE:
        case DeletionReducerEnum.HIDE_CONFIRM:
        case DeletionReducerEnum.HIDE_WARNING:
        case DeletionReducerEnum.SHOW_WARNING: {
            return deletionReducer<IInventoryListData, 'productID'>(
                state,
                action,
                'inventories',
                'productID',
            ) as InventoriesReducerState;
        }
        default: {
            const actionInvalid: never = action;
            throw new Error('Type invalid.', { cause: actionInvalid });
        }
    }
};
