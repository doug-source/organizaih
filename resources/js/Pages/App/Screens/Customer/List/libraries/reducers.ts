import { CustomersReducerEnum } from '@/Pages/App/Screens/Customer/List/libraries/enums';
import {
    CustomersPayload,
    CustomersReducerState,
} from '@/Pages/App/Screens/Customer/List/libraries/types';
import { ICustomerListData } from '@/Pages/App/Screens/Customer/List/types';
import { DeletionReducerEnum, deletionReducer } from '@/Pages/App/libraries';
import { statePaginationAfterDeletion } from '@/Pages/App/libraries/toolbox/Pagination';
import { Dispatch } from 'react';

export const customersReducer = (
    state: CustomersReducerState,
    action: CustomersPayload.Skeleton<ICustomerListData>,
): CustomersReducerState => {
    switch (action.type) {
        case CustomersReducerEnum.INIT: {
            const total = [...action.payload];
            return {
                ...state,
                total,
                customers: [...total],
            };
        }
        case CustomersReducerEnum.CHANGE_PAGE:
            return { ...state, page: action.payload };
        case CustomersReducerEnum.CHANGE_GROUP:
            return { ...state, group: action.payload };
        case CustomersReducerEnum.CHANGE_LAST:
            return { ...state, lastPage: action.payload };
        case CustomersReducerEnum.CHANGE_QTY:
            return { ...state, qty: action.payload };
        case CustomersReducerEnum.ERROR:
            return { ...state, error: action.payload };
        case CustomersReducerEnum.REFRESH:
            return { ...state, customers: [...state.total] };
        case CustomersReducerEnum.SEARCH: {
            const search = action.payload.search.trim();
            return { ...state, search };
        }
        case DeletionReducerEnum.DELETE: {
            return statePaginationAfterDeletion(
                deletionReducer<ICustomerListData, 'id'>(
                    state,
                    action,
                    'customers',
                    'id',
                ) as CustomersReducerState,
            );
        }
        case DeletionReducerEnum.CLEAR_DELETE:
        case DeletionReducerEnum.CANCEL_DELETE:
        case DeletionReducerEnum.PREPARE_DELETE:
        case DeletionReducerEnum.HIDE_CONFIRM:
        case DeletionReducerEnum.HIDE_WARNING:
        case DeletionReducerEnum.SHOW_WARNING: {
            return deletionReducer<ICustomerListData, 'id'>(
                state,
                action,
                'customers',
                'id',
            ) as CustomersReducerState;
        }
        default: {
            const actionInvalid: never = action;
            throw new Error('Type invalid.', { cause: actionInvalid });
        }
    }
};

export type DispatchFn = Dispatch<Parameters<typeof customersReducer>[1]>;
