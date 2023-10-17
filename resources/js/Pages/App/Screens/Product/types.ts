import { IProductCategory } from '@/Pages/App/Screens/ProductCategory/types';

export interface IProduct {
    id?: number;
    name: string;
    photo: string | null;
    description: string;
    obs: string;
    created_at: string;
    category: IProductCategory;

    photoChosen?: string;
}

export type ProductToInventory = IProduct & { qty: number; price: number };

export type ProductToSale = ProductToInventory;
