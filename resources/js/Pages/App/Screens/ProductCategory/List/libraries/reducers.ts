import { ProductCategoriesReducerEnum } from '@/Pages/App/Screens/ProductCategory/List/libraries/enums';
import { ProductCategoriesPayload } from '@/Pages/App/Screens/ProductCategory/List/libraries/types/payload';
import { ProductCategoriesReducerState } from '@/Pages/App/Screens/ProductCategory/List/libraries/types/state';
import { IProductCategory } from '@/Pages/App/Screens/ProductCategory/types';
import { DeletionReducerEnum, deletionReducer } from '@/Pages/App/libraries';
import { statePaginationAfterDeletion } from '@/Pages/App/libraries/toolbox/Pagination';

export const productCategoriesReducer = (
    state: ProductCategoriesReducerState,
    action: ProductCategoriesPayload.Skeleton<IProductCategory>,
): ProductCategoriesReducerState => {
    switch (action.type) {
        case ProductCategoriesReducerEnum.INIT:
            return {
                ...state,
                total: [...action.payload],
                categories: [...action.payload],
            };
        case ProductCategoriesReducerEnum.CHANGE_PAGE:
            return { ...state, page: action.payload };
        case ProductCategoriesReducerEnum.CHANGE_GROUP:
            return { ...state, group: action.payload };
        case ProductCategoriesReducerEnum.CHANGE_LAST:
            return { ...state, lastPage: action.payload };
        case ProductCategoriesReducerEnum.CHANGE_QTY:
            return { ...state, qty: action.payload };
        case ProductCategoriesReducerEnum.SEARCH:
            return { ...state, productCategoryName: action.payload };
        case ProductCategoriesReducerEnum.CHANGE_DEFAULT:
            return { ...state, default: !state.default };
        case DeletionReducerEnum.DELETE: {
            const newState = deletionReducer<IProductCategory, 'id'>(
                state,
                action,
                'categories',
                'id',
            ) as ProductCategoriesReducerState;
            return statePaginationAfterDeletion(newState);
        }
        case DeletionReducerEnum.CLEAR_DELETE:
        case DeletionReducerEnum.CANCEL_DELETE:
        case DeletionReducerEnum.PREPARE_DELETE:
        case DeletionReducerEnum.HIDE_CONFIRM:
        case DeletionReducerEnum.HIDE_WARNING:
        case DeletionReducerEnum.SHOW_WARNING: {
            return deletionReducer<IProductCategory, 'id'>(
                state,
                action,
                'categories',
                'id',
            ) as ProductCategoriesReducerState;
        }
        default: {
            const actionInvalid: never = action;
            throw new Error('Type invalid.', { cause: actionInvalid });
        }
    }
};
