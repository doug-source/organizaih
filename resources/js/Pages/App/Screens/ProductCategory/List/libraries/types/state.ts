import { IProductCategory } from '@/Pages/App/Screens/ProductCategory/types';
import { DeletionReducerState, ErrorFromRequest } from '@/Pages/App/libraries';

export type ProductCategoriesReducerState = {
    total: IProductCategory[];
    categories: IProductCategory[];
    page: number;
    group: number;
    lastPage: number;
    qty: number;
    endpoint: string;
    search: string;
    error: (ErrorFromRequest & { customMessage?: string }) | null;
    productCategoryName: string;
    default: boolean;
} & DeletionReducerState<IProductCategory, 'id'>;
