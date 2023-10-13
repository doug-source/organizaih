import { ICustomerListData } from '@/Pages/App/Screens/Customer/List/types';
import { DeletionReducerState, ErrorFromRequest } from '@/Pages/App/libraries';

export type CustomersReducerState = {
    total: ICustomerListData[];
    customers: ICustomerListData[];
    page: number;
    group: number;
    lastPage: number;
    qty: number;
    endpoint: string;
    search: string;
    error: (ErrorFromRequest & { customMessage?: string }) | null;
} & DeletionReducerState<ICustomerListData, 'id'>;
