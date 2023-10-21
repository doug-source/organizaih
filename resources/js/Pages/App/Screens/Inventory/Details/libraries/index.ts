import { inventoryItemsReducer } from '@/Pages/App/Screens/Inventory/Details/libraries/reducers';
import { Dispatch } from 'react';

export type InventoryItemsReducerArgs = Parameters<
    typeof inventoryItemsReducer
>;
export type DispatchFn = Dispatch<InventoryItemsReducerArgs[1]>;

export * from './contexts';
export * from './enums';
export * from './handlers';
export * from './hooks';
