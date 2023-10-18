import { IProductCategory } from '@/Pages/App/Screens/ProductCategory/types';
import {
    DataReducerEnum,
    useAPI,
    useAppDispatch,
    useGenericErrorHandler,
} from '@/Pages/App/libraries';
import { endpoints } from '@/settings';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useCategoryProductRequest = () => {
    const { id } = useParams();
    let endpoint;
    if (id) {
        endpoint = endpoints.productCategory.data(Number(id));
    }
    const [store] = useAPI<IProductCategory, { pagination: false }>(endpoint);
    useGenericErrorHandler(store.error);
    return [store] as const;
};

export const useCategoryProductResponse = (
    store: ReturnType<typeof useCategoryProductRequest>[0],
) => {
    const appDispatch = useAppDispatch();
    const [productCategory, setProductCategory] = useState<IProductCategory>();
    useEffect(() => {
        if (store.error || !store.data) {
            return;
        }
        setProductCategory(store.data);
        appDispatch({ type: DataReducerEnum.LOADING, payload: false });
    }, [store.data, store.error, setProductCategory, appDispatch]);
    return [productCategory] as const;
};
