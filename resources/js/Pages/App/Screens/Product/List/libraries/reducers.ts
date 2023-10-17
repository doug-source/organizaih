import { ProductsReducerEnum } from '@/Pages/App/Screens/Product/List/libraries/enums';
import {
    ProductsPayload,
    ProductsReducerState,
} from '@/Pages/App/Screens/Product/List/libraries/types';
import { IProductListData } from '@/Pages/App/Screens/Product/List/types';
import { DeletionReducerEnum, deletionReducer } from '@/Pages/App/libraries';
import { statePaginationAfterDeletion } from '@/Pages/App/libraries/toolbox/Pagination';

export const productsReducer = (
    state: ProductsReducerState,
    action: ProductsPayload.Skeleton<IProductListData>,
): ProductsReducerState => {
    switch (action.type) {
        case ProductsReducerEnum.INIT:
            return {
                ...state,
                total: [...action.payload],
                products: [...action.payload],
            };
        case ProductsReducerEnum.SEARCH:
            return {
                ...state,
                search: action.payload.search,
            };
        case ProductsReducerEnum.ERROR:
            return { ...state, error: action.payload };
        case ProductsReducerEnum.CHANGE_PRODUCT_CATEGORY:
            return { ...state, productCategoryName: action.payload };
        case ProductsReducerEnum.REFRESH:
            return { ...state, products: [...state.total] };
        case ProductsReducerEnum.CHANGE_PAGE:
            return { ...state, page: action.payload };
        case ProductsReducerEnum.CHANGE_GROUP:
            return { ...state, group: action.payload };
        case ProductsReducerEnum.CHANGE_LAST:
            return { ...state, lastPage: action.payload };
        case ProductsReducerEnum.CHANGE_QTY:
            return { ...state, qty: action.payload };
        case DeletionReducerEnum.DELETE: {
            const newState = deletionReducer<IProductListData, 'id'>(
                state,
                action,
                'products',
                'id',
            ) as ProductsReducerState;
            return statePaginationAfterDeletion(newState);
        }
        case DeletionReducerEnum.CLEAR_DELETE:
        case DeletionReducerEnum.CANCEL_DELETE:
        case DeletionReducerEnum.PREPARE_DELETE:
        case DeletionReducerEnum.HIDE_CONFIRM:
        case DeletionReducerEnum.HIDE_WARNING:
        case DeletionReducerEnum.SHOW_WARNING: {
            return deletionReducer<IProductListData, 'id'>(
                state,
                action,
                'products',
                'id',
            ) as ProductsReducerState;
        }
        default: {
            const actionInvalid: never = action;
            throw new Error('Type invalid.', { cause: actionInvalid });
        }
    }
};
