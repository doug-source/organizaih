import { ISale } from '@/Pages/App/Screens/Sales/Form/types';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import {
    useAPI,
    useAppDispatch,
    useGenericErrorHandler,
} from '@/Pages/App/libraries/hooks';
import { endpoints } from '@/settings';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useSaleRequest = () => {
    const { id } = useParams();
    let endpoint;
    if (id) {
        endpoint = endpoints.sale.data(Number(id));
    }
    const [store] = useAPI<ISale, { pagination: false }>(endpoint);
    useGenericErrorHandler(store.error);
    return [store] as const;
};

export const useSaleResponse = (
    store: ReturnType<typeof useSaleRequest>[0],
) => {
    const appDispatch = useAppDispatch();
    const [sale, setSale] = useState<ISale>();
    useEffect(() => {
        if (store.error || !store.data) {
            return;
        }
        setSale(store.data);
        appDispatch({ type: DataReducerEnum.LOADING, payload: false });
    }, [store.data, store.error, setSale, appDispatch]);
    return [sale] as const;
};
