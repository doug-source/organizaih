import { ProductToSale } from '@/Pages/App/Screens/Product/types';
import { useSaleDefinitionReducer } from '@/Pages/App/Screens/Sales/Form/libraries/hooks';
import { SaleDefinitionReducerState } from '@/Pages/App/Screens/Sales/Form/libraries/types/state';
import { columnSizeDB } from '@/Pages/App/settings';

export * from './handlers';
export * from './hooks';

export type ReducerState = ReturnType<typeof useSaleDefinitionReducer>[0];
export type DispatchFn = ReturnType<typeof useSaleDefinitionReducer>[1];

export const calculateMax = (
    productToSale: ProductToSale | null,
    inventory: { qty: number } | null,
    salesFromDB: ProductToSale[] = [],
): number => {
    let qtyPersisted = 0;
    if (productToSale) {
        const data = salesFromDB.find((sale) => sale.id === productToSale.id);
        qtyPersisted = data?.qty || 0;
    }
    return Number(inventory?.qty || 0) + Number(qtyPersisted);
};

type PickMinMaxQtyItemEditorStateProps = {
    productToSale: ProductToSale | null;
    salesFromDB: ProductToSale[];
    inventory?: SaleDefinitionReducerState['inventory'];
};

export const pickMaxQtyItemEditor = (
    state: PickMinMaxQtyItemEditorStateProps,
) => {
    return Math.min(
        calculateMax(
            state.productToSale,
            state?.inventory?.data ?? null,
            state.salesFromDB,
        ),
        columnSizeDB.saleMaxQty,
    );
};

export const pickMinQtyItemEditor = (
    state: PickMinMaxQtyItemEditorStateProps,
) => {
    if (state.productToSale === null) {
        return 0;
    }
    const productToSaleID = state.productToSale.id;
    return Number(
        Boolean(
            state.salesFromDB.some((sale) => sale.id === productToSaleID) ||
                state?.inventory?.data?.qty,
        ),
    );
};

export const buildFormData = (
    items: string,
    customerID: number,
    saleID?: number,
) => {
    const formData = new FormData();
    formData.append('items', items);
    formData.append('customerID', String(customerID));
    if (saleID) {
        // edit
        formData.append('_method', 'PUT');
    }
    return formData;
};

type SaleToSave = ProductToSale & { saleItemID?: number };

export const prepareSaleItem = (salesToSave: SaleToSave[], saleID?: number) => {
    type SalePayload = {
        id: number;
        qty: number;
        price: number;
        saleItemID?: number;
    };
    const predicate = (acc: SalePayload[], sale: SaleToSave) => [
        ...acc,
        Object.assign(
            {
                id: Number(sale.id),
                qty: Number(sale.qty),
                price: Number(sale.price),
            },
            saleID ? { saleItemID: Number(sale.saleItemID) } : {},
        ),
    ];

    const sales = salesToSave.reduce(predicate, []);
    return JSON.stringify({ sales });
};

export const mountSelectionAction = (saleID?: number) => {
    if (typeof saleID === 'undefined') {
        return 'create';
    }
    return `${saleID}/edit`;
};
