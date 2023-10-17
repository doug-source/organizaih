import { IProduct } from '@/Pages/App/Screens/Product/types';
import {
    DataReducerEnum,
    useAPI,
    useAppDispatch,
    useGenericErrorHandler,
} from '@/Pages/App/libraries';
import { endpoints } from '@/settings';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useProductRequest = () => {
    const { id } = useParams();
    let endpoint;
    if (id) {
        endpoint = endpoints.product.data(Number(id));
    }
    const [store] = useAPI<IProduct, { pagination: false }>(endpoint);
    useGenericErrorHandler(store.error);
    return [store] as const;
};

export const useProductResponse = (
    store: ReturnType<typeof useProductRequest>[0],
) => {
    const [product, setProduct] = useState<IProduct>();
    const appDispatch = useAppDispatch();
    useEffect(() => {
        if (store.error) {
            return;
        }
        if (!Array.isArray(store.data)) {
            setProduct(store.data);
            appDispatch({ type: DataReducerEnum.LOADING, payload: false });
        }
    }, [store.error, store.data, setProduct, appDispatch]);
    return [product] as const;
};
