import { CustomerReducerEnum } from '@/Pages/App/Screens/Customer/Form/libraries/enums';
import { useCustomerDispatch } from '@/Pages/App/Screens/Customer/Form/libraries/hooks';
import { useCallback } from 'react';

export const useStateChange = (
    dispatch: ReturnType<typeof useCustomerDispatch>,
) => {
    return useCallback(
        (stateID: number) => {
            dispatch({
                type: CustomerReducerEnum.CHANGE_CUSTOMER_STATE,
                payload: stateID,
            });
            dispatch({
                type: CustomerReducerEnum.CHANGE_CUSTOMER_CITY,
                payload: 0,
            });
        },
        [dispatch],
    );
};

export const useCityChange = (
    dispatch: ReturnType<typeof useCustomerDispatch>,
) => {
    return useCallback(
        (cityID: number) => {
            dispatch({
                type: CustomerReducerEnum.CHANGE_CUSTOMER_CITY,
                payload: cityID,
            });
        },
        [dispatch],
    );
};

export * from './submittions';
