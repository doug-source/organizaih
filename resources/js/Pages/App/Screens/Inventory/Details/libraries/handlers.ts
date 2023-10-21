import { DispatchFn } from '@/Pages/App/Screens/Inventory/Details/libraries';
import { InventoryItemsReducerEnum } from '@/Pages/App/Screens/Inventory/Details/libraries/enums';

export const makeConfirmCancel = (dispatch: DispatchFn) => {
    return () => {
        dispatch({
            type: InventoryItemsReducerEnum.CANCEL_DELETE,
        });
    };
};

export const makeConfirmTouchClosing = (dispatch: DispatchFn) => {
    return () => {
        dispatch({
            type: InventoryItemsReducerEnum.TOGGLE_OPTION_CONFIRM,
        });
    };
};
