import { SalesReducerEnum } from '@/Pages/App/Screens/Sales/List/libraries/enums';
import {
    SalesPayload,
    SalesReducerState,
} from '@/Pages/App/Screens/Sales/List/libraries/types';
import { ISales } from '@/Pages/App/Screens/Sales/types';
import { DeletionReducerEnum } from '@/Pages/App/libraries/enums';
import { deletionReducer } from '@/Pages/App/libraries/reducers/deletion';
import { statePaginationAfterDeletion } from '@/Pages/App/libraries/toolbox/Pagination';

export const salesReducer = (
    state: SalesReducerState,
    action: SalesPayload.Skeleton<ISales>,
): SalesReducerState => {
    switch (action.type) {
        case SalesReducerEnum.INIT: {
            type SalePayload = { [key: string]: ISales };
            const predicate = (acc: SalePayload, next: ISales) => {
                acc[next.id] = {
                    id: next.id,
                    created_at: next.created_at.replace(
                        /^(\d{4})-(\d{2})-(\d{2}).*$/,
                        '$3/$2/$1',
                    ),
                    customerID: next.customerID,
                    customerName: next.customerName,
                    customerPhoto: next.customerPhoto,
                };
                return acc;
            };
            const data: { [key: string]: ISales } = action.payload.reduce(
                predicate,
                {},
            );
            const list = Object.values(data);
            return {
                ...state,
                total: [...list],
                sales: [...list],
            };
        }
        case SalesReducerEnum.INCLUDE_PRODUCT_NAME:
            return { ...state, productName: action.payload };
        case SalesReducerEnum.INCLUDE_CUSTOMER_NAME:
            return { ...state, customerName: action.payload };
        case SalesReducerEnum.INCLUDE_DT_START:
            return { ...state, dtStart: action.payload };
        case SalesReducerEnum.INCLUDE_DT_END:
            return { ...state, dtEnd: action.payload };
        case SalesReducerEnum.CHANGE_PAGE:
            return { ...state, page: action.payload };
        case SalesReducerEnum.CHANGE_GROUP:
            return { ...state, group: action.payload };
        case SalesReducerEnum.CHANGE_LAST:
            return { ...state, lastPage: action.payload };
        case SalesReducerEnum.CHANGE_QTY:
            return { ...state, qty: action.payload };
        case SalesReducerEnum.ERROR:
            return { ...state, error: action.payload };
        case SalesReducerEnum.REFRESH:
            return { ...state, sales: [...state.total] };
        case DeletionReducerEnum.DELETE: {
            const newState = deletionReducer<ISales, 'id'>(
                state,
                action,
                'sales',
                'id',
            ) as SalesReducerState;
            return statePaginationAfterDeletion(newState);
        }
        case DeletionReducerEnum.CLEAR_DELETE:
        case DeletionReducerEnum.CANCEL_DELETE:
        case DeletionReducerEnum.PREPARE_DELETE:
        case DeletionReducerEnum.HIDE_CONFIRM:
        case DeletionReducerEnum.HIDE_WARNING:
        case DeletionReducerEnum.SHOW_WARNING: {
            return deletionReducer<ISales, 'id'>(
                state,
                action,
                'sales',
                'id',
            ) as SalesReducerState;
        }
        default: {
            const actionInvalid: never = action;
            throw new Error('Type invalid.', { cause: actionInvalid });
        }
    }
};
