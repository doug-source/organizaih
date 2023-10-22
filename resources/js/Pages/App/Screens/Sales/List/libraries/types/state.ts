import { ISales } from '@/Pages/App/Screens/Sales/types';
import { ErrorFromRequest } from '@/Pages/App/libraries/hooks/Api';
import { DeletionReducerState } from '@/Pages/App/libraries/types/state/deletion';

export type SalesReducerState = {
    total: ISales[];
    sales: ISales[];
    productName: string;
    customerName: string;
    dtStart: Date;
    dtEnd: Date;
    page: number;
    group: number;
    lastPage: number;
    qty: number;
    endpoint: string;
    search: string;
    error: (ErrorFromRequest & { customMessage?: string }) | null;
} & DeletionReducerState<ISales, 'id'>;
