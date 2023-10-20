import { IInventoryItem } from '@/Pages/App/Screens/Inventory/Form/types';

export const buildInventoryProductList = ({
    productID,
    productName,
    productPhoto: photo,
    remain: qty,
    cost: price,
}: IInventoryItem) => {
    return [
        {
            id: productID,
            name: productName,
            photo,
            description: '',
            obs: '',
            created_at: '',
            category: { id: 0, name: '', description: '', obs: '' },
            qty,
            price,
        },
    ];
};

export * from './hooks';
