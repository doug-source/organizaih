import {
    DispatchFn,
    ReducerState,
    SelectionTargetKey,
} from '@/Pages/App/Screens/ProductCategory/List/libraries';
import {
    ActionContext,
    DispatchContext,
    TargetContext,
} from '@/Pages/App/Screens/ProductCategory/List/libraries/contexts';
import { productCategoriesReducer } from '@/Pages/App/Screens/ProductCategory/List/libraries/reducers';
import { IProductCategory } from '@/Pages/App/Screens/ProductCategory/types';
import {
    ReducerSelections,
    useAPI,
    useAppDispatch,
    useDeleteAPI,
    useGenericErrorHandler,
} from '@/Pages/App/libraries';
import {
    DataReducerEnum,
    DeletionReducerEnum,
} from '@/Pages/App/libraries/enums';
import { paginationSetting } from '@/Pages/App/settings';
import { makeContextError, useTranslate } from '@/libraries';
import { endpoints } from '@/settings';
import { useCallback, useContext, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductCategoriesReducerEnum } from './enums';

export const useAction = () => {
    const state = useContext(ActionContext);
    if (state === null) {
        throw makeContextError('useAction', 'ActionContext');
    }
    return state;
};

export const useTarget = () => {
    const target = useContext(TargetContext);
    if (target === null) {
        throw makeContextError('useTarget', 'TargetContext');
    }
    return target;
};

export const useDispatch = () => {
    const dispatch = useContext(DispatchContext);
    if (dispatch === null) {
        throw makeContextError('useDispatch', 'DispatchContext');
    }
    return dispatch;
};

export const useProductCategoryReduce = () => {
    return useReducer(productCategoriesReducer, {
        total: [],
        categories: [],
        page: paginationSetting.pageInitial,
        group: paginationSetting.groupList[0],
        lastPage: paginationSetting.lastPageInitial,
        qty: paginationSetting.totalInitial,
        endpoint: endpoints.productCategory.list,
        search: '',
        error: null,
        preConfirm: false,
        idRemoved: null,
        productCategoryName: '',
        warning: false,
        default: true,
    });
};

export const useProductCategoriesRequest = (state: ReducerState) => {
    const appDispatch = useAppDispatch();
    const [store, requestProductCategories] = useAPI<
        IProductCategory,
        { pagination: true }
    >();
    useGenericErrorHandler(store.error);

    useEffect(() => {
        const arrQueryString = [`page=${state.page}`, `group=${state.group}`];
        const productCategoryName = state.productCategoryName.trim();
        if (productCategoryName) {
            arrQueryString.push(`productCategoryName=${productCategoryName}`);
        }
        requestProductCategories(
            `${state.endpoint}?${arrQueryString.join('&')}`,
        );
        appDispatch({ type: DataReducerEnum.LOADING, payload: true });
    }, [
        state.endpoint,
        state.page,
        state.group,
        state.productCategoryName,
        requestProductCategories,
        appDispatch,
    ]);
    return [store] as const;
};

export const useProductCategoriesResponse = (
    store: ReturnType<typeof useProductCategoriesRequest>[0],
    dispatch: DispatchFn,
) => {
    const appDispatch = useAppDispatch();
    useEffect(() => {
        if (store.error || !store.data) {
            return;
        }
        const { data = [], last_page: lastPage = 0, total } = store.data;
        if (data.length || store.status) {
            dispatch({
                type: ProductCategoriesReducerEnum.INIT,
                payload: data,
            });
            dispatch({
                type: ProductCategoriesReducerEnum.CHANGE_LAST,
                payload: lastPage,
            });
            dispatch({
                type: ProductCategoriesReducerEnum.CHANGE_QTY,
                payload: total,
            });
            appDispatch({ type: DataReducerEnum.LOADING, payload: false });
        }
    }, [store.error, store.data, store.status, dispatch, appDispatch]);
};

export const useProductCategoryRemotion = (dispatch: DispatchFn) => {
    const [remotion, doRemotion] = useDeleteAPI();
    const appDispatch = useAppDispatch();
    useGenericErrorHandler(remotion.error);
    useEffect(() => {
        if (remotion.error) {
            dispatch({ type: DeletionReducerEnum.CANCEL_DELETE });
            doRemotion('');
        } else if (remotion.status) {
            dispatch({ type: DeletionReducerEnum.DELETE });
            appDispatch({ type: DataReducerEnum.LOADING, payload: false });
        }
    }, [remotion.error, remotion.status, dispatch, appDispatch, doRemotion]);
    return [doRemotion] as const;
};

export const useConfirmYesDefaultHandler = (
    state: ReducerState,
    dispatch: DispatchFn,
    doRemotion: ReturnType<typeof useProductCategoryRemotion>[0],
) => {
    const appDispatch = useAppDispatch();
    return useCallback(() => {
        if (state.idRemoved === null) {
            return;
        }
        dispatch({ type: DeletionReducerEnum.HIDE_CONFIRM });
        doRemotion(endpoints.productCategory.delete(state.idRemoved));
        appDispatch({
            type: DataReducerEnum.LOADING,
            payload: true,
        });
    }, [state.idRemoved]);
};

export const useConfirmYesSelectionHandler = (
    target: SelectionTargetKey,
    action: ReducerSelections['action'],
) => {
    const appDispatch = useAppDispatch();
    const translate = useTranslate();
    const navigate = useNavigate();
    return useCallback(() => {
        appDispatch({
            type: DataReducerEnum.SELECTION_PRODUCT_CATEGORY,
            payload: {
                key: target,
                value: {
                    id: 1,
                    name: translate('product-category-default', true),
                    description: '',
                    obs: '',
                },
            },
        });
        navigate(`/${target}/${action}`);
    }, [appDispatch, target, action]);
};

export const useCategorySelectionCallback = (
    data: IProductCategory,
    target: SelectionTargetKey,
) => {
    const appDispatch = useAppDispatch();
    return useCallback(() => {
        appDispatch({
            type: DataReducerEnum.SELECTION_PRODUCT_CATEGORY,
            payload: {
                key: target,
                value: { ...data },
            },
        });
    }, [appDispatch, data, target]);
};
