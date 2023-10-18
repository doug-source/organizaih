import {
    DispatchFn,
    SelectionTargetKey,
} from '@/Pages/App/Screens/ProductCategory/List/libraries';
import { ProductCategoriesReducerEnum } from '@/Pages/App/Screens/ProductCategory/List/libraries/enums';
import { IProductCategory } from '@/Pages/App/Screens/ProductCategory/types';
import {
    DataReducerEnum,
    DeletionReducerEnum,
} from '@/Pages/App/libraries/enums';
import { useAppDispatch } from '@/Pages/App/libraries/hooks';

export const makeToolChange = (dispatch: DispatchFn) => {
    return (payload: string) => {
        dispatch({
            type: ProductCategoriesReducerEnum.SEARCH,
            payload,
        });
    };
};

const makeChangePage = (dispatch: DispatchFn) => {
    return (payload: number) => {
        dispatch({
            type: ProductCategoriesReducerEnum.CHANGE_PAGE,
            payload,
        });
    };
};

const makeChangeGroup = (dispatch: DispatchFn) => {
    return (payload: number) => {
        dispatch({
            type: ProductCategoriesReducerEnum.CHANGE_GROUP,
            payload,
        });
    };
};

export const makePaginationHandlers = () => {
    return {
        makeChangePage,
        makeChangeGroup,
    };
};

export const makeConfirmCancelDefault = (dispatch: DispatchFn) => {
    return () => dispatch({ type: DeletionReducerEnum.CANCEL_DELETE });
};

export const makeConfirmCancelSelection = (dispatch: DispatchFn) => {
    return () => {
        dispatch({
            type: ProductCategoriesReducerEnum.CHANGE_DEFAULT,
        });
    };
};

export const makeCategorySelection = (
    data: IProductCategory,
    target: SelectionTargetKey,
    appDispatch: ReturnType<typeof useAppDispatch>,
) => {
    return () => {
        appDispatch({
            type: DataReducerEnum.SELECTION_PRODUCT_CATEGORY,
            payload: {
                key: target,
                value: { ...data },
            },
        });
    };
};
