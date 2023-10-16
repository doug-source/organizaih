import { OnInitHandler } from '@/Pages/App/Screens/Customer/Form/libraries';
import {
    CustomerContext,
    CustomerDispatchContext,
    ErrorsContext,
    ErrorsSetterContext,
} from '@/Pages/App/Screens/Customer/Form/libraries/contexts';
import { CustomerReducerEnum } from '@/Pages/App/Screens/Customer/Form/libraries/enums';
import { customerReducer } from '@/Pages/App/Screens/Customer/Form/libraries/reducers';
import { ICustomer } from '@/Pages/App/Screens/Customer/types';
import { emptyCustomer } from '@/Pages/App/settings';
import { formatDateByString, makeContextError } from '@/libraries';
import { Dispatch, useCallback, useContext, useReducer } from 'react';

export const useCustomerReducer = () => {
    return useReducer(customerReducer, {
        customer: emptyCustomer,
    });
};

export const useErrors = () => {
    const errors = useContext(ErrorsContext);
    if (errors === null) {
        throw makeContextError('useErrors', 'ErrorsContext');
    }
    return errors;
};

export const useErrorsSetter = () => {
    const setErrors = useContext(ErrorsSetterContext);
    if (setErrors === null) {
        throw makeContextError('useErrorsSetter', 'ErrorsSetterContext');
    }
    return setErrors;
};

export const useCustomer = () => {
    const customer = useContext(CustomerContext);
    if (customer === null) {
        throw makeContextError('useCustomer', 'CustomerContext');
    }
    return customer;
};

export const useCustomerDispatch = () => {
    const dispatch = useContext(CustomerDispatchContext);
    if (dispatch === null) {
        throw makeContextError(
            'useCustomerDispatch',
            'CustomerDispatchContext',
        );
    }
    return dispatch;
};

type DispatchFn = Dispatch<Parameters<typeof customerReducer>[1]>;

export const useEditInit = (dispatch: DispatchFn): OnInitHandler => {
    return useCallback(
        (customer: ICustomer) => {
            const birthday = formatDateByString(customer.birthday_formatted);
            dispatch({
                type: CustomerReducerEnum.CHANGE_CUSTOMER_ALL,
                payload: {
                    ...customer,
                    birthday,
                },
            });
        },
        [dispatch],
    );
};
