import { IProductListData } from '@/Pages/App/Screens/Product/List/types';
import { DeletionReducerState, ErrorFromRequest } from '@/Pages/App/libraries';

export type ProductsReducerState = {
    total: IProductListData[];
    products: IProductListData[];
    page: number;
    group: number;
    lastPage: number;
    qty: number;
    endpoint: string;
    search: string;
    error: (ErrorFromRequest & { customMessage?: string }) | null;
    productCategoryName: string;
} & DeletionReducerState<IProductListData, 'id'>;
