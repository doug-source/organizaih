import { IRegisterRequest } from '@/Pages/App/Screens/RegisterRequest/types';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import {
    useAPI,
    useAppDispatch,
    useGenericErrorHandler,
} from '@/Pages/App/libraries/hooks';
import { formatDateByString } from '@/libraries';
import { endpoints } from '@/settings';
import { useEffect, useState } from 'react';

export const useRegisterRequestDetailsRequest = (id: number) => {
    const endpoint = (id && endpoints.registerRequest.show(id)) || '';
    const [store] = useAPI<IRegisterRequest, { pagination: false }>(endpoint);
    useGenericErrorHandler(store.error);
    return [store] as const;
};

type Store = ReturnType<typeof useRegisterRequestDetailsRequest>[0];

export const useRegisterRequestDetailsResponse = (store: Store) => {
    const appDispatch = useAppDispatch();
    const [registerRequest, setRegisterRequest] = useState<IRegisterRequest>();

    useEffect(() => {
        if (store.error || !store.data) {
            return;
        }
        setRegisterRequest({
            ...store.data,
            created_at: formatDateByString(store.data.created_at),
        });
        appDispatch({ type: DataReducerEnum.LOADING, payload: false });
    }, [store.error, store.data, setRegisterRequest, appDispatch]);
    return [registerRequest] as const;
};
