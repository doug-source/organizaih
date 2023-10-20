import { InventoryDefinitionReducerEnum } from '@/Pages/App/Screens/Inventory/Form/Base/libraries/enums';
import { InventoryDefinitionDispatch } from '@/Pages/App/Screens/Inventory/Form/libraries';

export const makeConfirmClose = (dispatch: InventoryDefinitionDispatch) => {
    return () => {
        dispatch({
            type: InventoryDefinitionReducerEnum.TOGGLE_OPTION_CONFIRM,
        });
    };
};
