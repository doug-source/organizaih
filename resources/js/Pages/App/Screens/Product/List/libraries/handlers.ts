import {
    AppDispatchFn,
    SelectionTargetKey,
} from '@/Pages/App/Screens/Product/List/libraries';
import { ProductsReducerEnum } from '@/Pages/App/Screens/Product/List/libraries/enums';
import { DispatchFn } from '@/Pages/App/Screens/Product/List/libraries/hooks';
import { IProductListData } from '@/Pages/App/Screens/Product/List/types';
import { DataReducerEnum, DeletionReducerEnum } from '@/Pages/App/libraries';

const makeAddClick = (appDispatch: AppDispatchFn) => {
    return () => {
        appDispatch({
            type: DataReducerEnum.SELECTION_CLEAR,
        });
        appDispatch({
            type: DataReducerEnum.CHANGE_PHOTO,
        });
    };
};

const makeToolChange = (dispatch: DispatchFn) => {
    return (search: string) => {
        dispatch({
            type: ProductsReducerEnum.SEARCH,
            payload: { search },
        });
    };
};

const makeCategoryToolsChange = (dispatch: DispatchFn) => {
    return (payload: string) => {
        dispatch({
            type: ProductsReducerEnum.CHANGE_PRODUCT_CATEGORY,
            payload,
        });
    };
};

const makeChangePage = (dispatch: DispatchFn) => {
    return (payload: number) => {
        dispatch({
            type: ProductsReducerEnum.CHANGE_PAGE,
            payload,
        });
    };
};

const makeChangeGroup = (dispatch: DispatchFn) => {
    return (payload: number) => {
        dispatch({
            type: ProductsReducerEnum.CHANGE_GROUP,
            payload,
        });
    };
};

export const makeToolHandlers = () => {
    return {
        makeAddClick,
        makeToolChange,
        makeCategoryToolsChange,
        makeChangePage,
        makeChangeGroup,
    };
};

const makeItemClick = (
    data: IProductListData,
    target: SelectionTargetKey,
    appDispatch: AppDispatchFn,
) => {
    return () => {
        appDispatch({
            type: DataReducerEnum.SELECTION_PRODUCT,
            payload: {
                key: target,
                value: data,
            },
        });
    };
};

const makeItemRemove = (dispatch: DispatchFn) => {
    return (id: number) => {
        dispatch({
            type: DeletionReducerEnum.PREPARE_DELETE,
            payload: { id, name: '', photo: null },
        });
    };
};

const makeItemUpdate = (appDispatch: AppDispatchFn) => {
    return () => {
        appDispatch({
            type: DataReducerEnum.SELECTION_CLEAR,
        });
        appDispatch({
            type: DataReducerEnum.CHANGE_PHOTO,
        });
    };
};

export const makeListHandlers = () => {
    return {
        makeItemClick,
        makeItemRemove,
        makeItemUpdate,
    };
};

export const makeConfirmCancel = (dispatch: DispatchFn) => {
    return () => dispatch({ type: DeletionReducerEnum.CANCEL_DELETE });
};
