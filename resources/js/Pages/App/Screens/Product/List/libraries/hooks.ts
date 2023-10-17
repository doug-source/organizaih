import { ProductsReducerEnum } from '@/Pages/App/Screens/Product/List/libraries/enums';
import { productsReducer } from '@/Pages/App/Screens/Product/List/libraries/reducers';
import { IProductListData } from '@/Pages/App/Screens/Product/List/types';
import {
    DataReducerEnum,
    DeletionReducerEnum,
    useAPI,
    useAppDispatch,
    useDeleteAPI,
    useGenericErrorHandler,
} from '@/Pages/App/libraries';
import { paginationSetting } from '@/Pages/App/settings';
import { endpoints } from '@/settings';
import { useCallback, useEffect, useReducer } from 'react';

export const useProductsReducer = () => {
    return useReducer(productsReducer, {
        total: [],
        products: [],
        page: paginationSetting.pageInitial,
        group: paginationSetting.groupList[0],
        lastPage: paginationSetting.lastPageInitial,
        qty: paginationSetting.totalInitial,
        error: null,
        endpoint: endpoints.product.list,
        idRemoved: null,
        search: '',
        preConfirm: false,
        productCategoryName: '',
        warning: false,
    });
};

export type DispatchFn = ReturnType<typeof useProductsReducer>[1];

export const useProductsRequest = (
    state: ReturnType<typeof useProductsReducer>[0],
) => {
    const appDispatch = useAppDispatch();
    const [store, requestProducts] = useAPI<
        IProductListData,
        { pagination: true }
    >();
    useGenericErrorHandler(store.error);
    useEffect(() => {
        const arrQueryString = [`page=${state.page}`, `group=${state.group}`];
        const productCategoryName = state.productCategoryName.trim();
        if (productCategoryName) {
            arrQueryString.push(`productCategoryName=${productCategoryName}`);
        }
        const search = state.search.trim();
        if (search) {
            arrQueryString.push(`search=${search}`);
        }
        requestProducts(`${state.endpoint}?${arrQueryString.join('&')}`);
        appDispatch({ type: DataReducerEnum.LOADING, payload: true });
    }, [
        state.endpoint,
        state.page,
        state.group,
        state.productCategoryName,
        state.search,
        requestProducts,
        appDispatch,
    ]);
    return [store] as const;
};

export const useProductResponse = (
    store: ReturnType<typeof useProductsRequest>[0],
    dispatch: DispatchFn,
) => {
    const appDispatch = useAppDispatch();
    useEffect(() => {
        if (store.error || !store.data) {
            return;
        }
        const { data = [], last_page: lastPage = 0, total } = store.data;
        if (data.length || store.status) {
            dispatch({ type: ProductsReducerEnum.INIT, payload: data });
            dispatch({
                type: ProductsReducerEnum.CHANGE_LAST,
                payload: lastPage,
            });
            dispatch({ type: ProductsReducerEnum.CHANGE_QTY, payload: total });
            appDispatch({ type: DataReducerEnum.LOADING, payload: false });
        }
    }, [store.error, store.data, store.status, dispatch, appDispatch]);
};

export const useProductRemotion = (dispatch: DispatchFn) => {
    const [remotion, doRemotion] = useDeleteAPI();
    useGenericErrorHandler(remotion.error);
    useEffect(() => {
        if (remotion.error) {
            dispatch({ type: DeletionReducerEnum.CANCEL_DELETE });
            doRemotion('');
        } else if (remotion.status) {
            dispatch({ type: DeletionReducerEnum.DELETE });
        }
    }, [remotion.error, remotion.status, dispatch, doRemotion]);
    return [doRemotion] as const;
};

export const useConfirmYes = (
    dispatch: DispatchFn,
    doRemotion: ReturnType<typeof useProductRemotion>[0],
    idRemoved: ReturnType<typeof useProductsReducer>[0]['idRemoved'],
) => {
    const appDispatch = useAppDispatch();
    return useCallback(() => {
        if (idRemoved === null) {
            return;
        }
        dispatch({ type: DeletionReducerEnum.HIDE_CONFIRM });
        doRemotion(endpoints.product.delete(idRemoved));
        appDispatch({
            type: DataReducerEnum.LOADING,
            payload: true,
        });
    }, [
        idRemoved,
        dispatch,
        doRemotion,
        endpoints.product.delete,
        appDispatch,
    ]);
};
