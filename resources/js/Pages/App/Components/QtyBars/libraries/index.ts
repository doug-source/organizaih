import { barGraphBasic } from '@/Pages/App/settings';

export const makeQty = (qty: number, qtyBase = barGraphBasic.minItemsQty) => {
    if (qtyBase <= qty) {
        return qtyBase;
    }
    return qty;
};

export * from './handlers';
export * from './hooks';
