import { Edit } from '@/Pages/App/Screens/Customer/Form/Edit';
import { ICustomer } from '@/Pages/App/Screens/Customer/Form/types';
import {
    useAPI,
    useAppDispatch,
    useGenericErrorHandler,
} from '@/Pages/App/libraries';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import { endpoints } from '@/settings';
import { ComponentPropsWithoutRef, useEffect } from 'react';

type EditProps = ComponentPropsWithoutRef<typeof Edit>;
type CustomerIdentifier = EditProps['customerID'];
type CustomerOnInit = Required<EditProps>['onInit'];

export const useEditCustomerRequest = (
    customerID: CustomerIdentifier,
    onInit: CustomerOnInit,
) => {
    const appDispatch = useAppDispatch();
    const [customerInfo] = useAPI<ICustomer, { pagination: false }>(
        endpoints.customer.data(customerID),
    );
    useGenericErrorHandler(customerInfo.error);

    useEffect(() => {
        if (customerInfo.error || !customerInfo.data) {
            return;
        }
        onInit(customerInfo.data);
        appDispatch({ type: DataReducerEnum.LOADING, payload: false });
    }, [customerInfo.error, customerInfo.data, onInit, appDispatch]);
    return [customerInfo.error] as const;
};
