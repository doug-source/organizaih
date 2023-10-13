import {
    customerTargets,
    productCategoryTargets,
    productTargets,
} from '@/Pages/App/libraries/types/state';

type SelectionTargetsProps = {
    customer: typeof customerTargets;
    product: typeof productTargets;
    productCategory: typeof productCategoryTargets;
};

export const selectionTargets: SelectionTargetsProps = {
    customer: customerTargets,
    product: productTargets,
    productCategory: productCategoryTargets,
} as const;

export const paginationSetting = {
    pageInitial: 1,
    lastPageInitial: 0,
    totalInitial: 0,
    groupList: [3, 5, 10],
};

const columnSizeRef = window.data.columnSizeDB;
export const columnSizeDB = {
    productCategory: columnSizeRef.productCategory,
    productCategoryDescription: columnSizeRef.productCategoryDescription,
    productCategoryObs: columnSizeRef.productCategoryObs,
    customer: columnSizeRef.customer,
    customerPhone: columnSizeRef.customerPhone,
    product: columnSizeRef.product,
    productDescription: columnSizeRef.productDescription,
    productObs: columnSizeRef.productObs,
    addressStreet: columnSizeRef.addressStreet,
    addressDistrict: columnSizeRef.addressDistrict,
    inventoryMaxQty: columnSizeRef.inventoryMaxQty,
    saleMaxQty: columnSizeRef.saleMaxQty,
};

const columnPrecisionRef = window.data.columnPrecisionDB;
export const columnPrecisionDB = {
    inventory: columnPrecisionRef.inventory,
    sale: columnPrecisionRef.sale,
};

const columnScaleRef = window.data.columnScaleDB;
export const columnScaleDB = {
    inventory: columnScaleRef.inventory,
    sale: columnScaleRef.sale,
};

export const makeEmptySelections = () => ({
    target: null,
    action: null,
    sales: {
        customer: null,
        product: null,
        salesToSave: [],
    },
    inventories: {
        product: null,
        inventoriesToSave: [],
    },
    products: {
        category: null,
    },
});
