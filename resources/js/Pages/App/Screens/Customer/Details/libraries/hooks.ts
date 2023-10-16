import { ICustomer } from '@/Pages/App/Screens/Customer/types';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import {
    useAPI,
    useAppDispatch,
    useGenericErrorHandler,
} from '@/Pages/App/libraries/hooks';
import { formatDateByString } from '@/libraries/toolbox';
import { endpoints } from '@/settings';
import { useEffect, useState } from 'react';

export const useCustomerDetailsRequest = (id: number) => {
    const endpoint = (id && endpoints.customer.data(id)) || '';
    const [store] = useAPI<ICustomer, { pagination: false }>(endpoint);
    useGenericErrorHandler(store.error);
    return [store] as const;
};

type Store = ReturnType<typeof useCustomerDetailsRequest>[0];

export const useCustomerDetailsResponse = (store: Store) => {
    const appDispatch = useAppDispatch();
    const [customer, setCustomer] = useState<ICustomer>();
    const [sex, setSex] = useState('');

    useEffect(() => {
        if (store.error || !store.data) {
            return;
        }
        const birthdayStr = store.data.birthday as unknown as string;
        const birthday = formatDateByString(birthdayStr);
        setCustomer({ ...store.data, birthday });
        setSex(store.data.raw_sex);
        appDispatch({ type: DataReducerEnum.LOADING, payload: false });
    }, [store.error, store.data, setCustomer, setSex, appDispatch]);
    return [customer, sex] as const;
};
