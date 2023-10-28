import { ICustomerListData } from '@/Pages/App/Screens/Customer/List/types';
import { ISale } from '@/Pages/App/Screens/Sales/Form/types';

type CustomerListDataUtil = (data: {
    customerID: number;
    customerName: string;
    customerPhoto: string | null;
}) => ICustomerListData;

export const buildCustomerListData: CustomerListDataUtil = ({
    customerID: id,
    customerName: name,
    customerPhoto: photo,
}) => ({
    id,
    name,
    photo,
});

export const buildSaleProductList = ({ products }: ISale) => {
    return products.map((item) => ({
        id: item.productID, // products.id
        saleItemID: item.saleItemID, // sale_items.id
        name: item.productName,
        photo: item.productPhoto,
        description: '',
        obs: '',
        created_at: '',
        category: { id: 0, name: '', description: '', obs: '' },
        qty: item.qty,
        price: item.price,
    }));
};

export * from './hooks';
