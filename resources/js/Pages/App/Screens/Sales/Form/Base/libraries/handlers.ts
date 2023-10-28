import { SaleDefReducerEnum } from '@/Pages/App/Screens/Sales/Form/libraries/enums';
import { SaleDefinitionPayload } from '@/Pages/App/Screens/Sales/Form/libraries/types/payload';
import { Dispatch } from 'react';

export const makeConfirmCancel = (
    dispatch: Dispatch<SaleDefinitionPayload.Skeleton>,
) => {
    return () => {
        dispatch({
            type: SaleDefReducerEnum.TOGGLE_OPTION_CONFIRM,
        });
    };
};
