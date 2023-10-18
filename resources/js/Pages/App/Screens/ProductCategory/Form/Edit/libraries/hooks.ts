import { DispatchFn } from '@/Pages/App/Screens/ProductCategory/Form/Base/libraries';
import { ProductCategoryReducerEnum } from '@/Pages/App/Screens/ProductCategory/Form/Base/libraries/enums';
import { IProductCategory } from '@/Pages/App/Screens/ProductCategory/types';
import {
    DataReducerEnum,
    useAPI,
    useAppDispatch,
    useGenericErrorHandler,
} from '@/Pages/App/libraries';
import { endpoints } from '@/settings';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useProductCategoryRequest = () => {
    const { id: productCategoryID } = useParams();
    let endpoint;
    if (productCategoryID) {
        endpoint = endpoints.productCategory.data(Number(productCategoryID));
    }
    const [productCategoryInfo] = useAPI<
        IProductCategory | undefined,
        { pagination: false }
    >(endpoint);
    useGenericErrorHandler(productCategoryInfo.error);
    return [productCategoryInfo] as const;
};

export const useProductCategoryResponse = (
    productCategoryInfo: ReturnType<typeof useProductCategoryRequest>[0],
    dispatch: DispatchFn,
) => {
    const appDispatch = useAppDispatch();
    useEffect(() => {
        if (productCategoryInfo.error || !productCategoryInfo.data) {
            return;
        }
        dispatch({
            type: ProductCategoryReducerEnum.CHANGE_PRODUCT_CATEGORY_ALL,
            payload: productCategoryInfo.data,
        });
        appDispatch({ type: DataReducerEnum.LOADING, payload: false });
    }, [productCategoryInfo.error, productCategoryInfo.data, appDispatch]);
};
