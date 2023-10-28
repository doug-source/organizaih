import { SaleDefReducerEnum } from '@/Pages/App/Screens/Sales/Form/libraries/enums';
import {
    SaleDefinitionPayload,
    SaleDefinitionReducerState,
} from '@/Pages/App/Screens/Sales/Form/libraries/types';

export const saleDefinitionReducer = (
    state: SaleDefinitionReducerState,
    action: SaleDefinitionPayload.Skeleton,
): SaleDefinitionReducerState => {
    switch (action.type) {
        case SaleDefReducerEnum.TOGGLE_OPTION_CONFIRM: {
            return {
                ...state,
                optionsConfirm: !state.optionsConfirm,
            };
        }
        case SaleDefReducerEnum.INCLUDE_SALE_QTY:
            return {
                ...state,
                productToSale: {
                    ...state.productToSale!,
                    qty: action.payload,
                },
            };
        case SaleDefReducerEnum.INCLUDE_SALE_PRICE:
            return {
                ...state,
                productToSale: {
                    ...state.productToSale!,
                    price: action.payload,
                },
            };
        case SaleDefReducerEnum.INCLUDE_PRODUCT: {
            const saleFromDB = state.salesFromDB.find(
                (sale) => sale.name === action.payload.name,
            );
            const qty = (saleFromDB || action.payload).qty || 1;
            const price = (saleFromDB || action.payload).price || 0.0;
            return {
                ...state,
                productToSale: { ...action.payload, qty, price },
            };
        }
        case SaleDefReducerEnum.INCLUDE_CUSTOMER: {
            return {
                ...state,
                customer: action.payload,
            };
        }
        case SaleDefReducerEnum.REMOVE_SALE: {
            return {
                ...state,
                productToSale: null,
            };
        }
        case SaleDefReducerEnum.REPLACE_SALE_LIST: {
            const salesToSave = [...action.payload];
            salesToSave.sort(
                (a, b) => a.name.localeCompare(b.name) || a.qty - b.qty,
            );
            return {
                ...state,
                salesToSave,
            };
        }
        case SaleDefReducerEnum.INCLUDE_SALE_TO_SAVE: {
            const salesToSave = [...state.salesToSave, action.payload];
            salesToSave.sort(
                (a, b) => a.name.localeCompare(b.name) || a.qty - b.qty,
            );
            return {
                ...state,
                salesToSave,
            };
        }
        case SaleDefReducerEnum.REMOVE_SALE_FROM_SAVE: {
            const salesToSave = state.salesToSave.filter(
                (prodSale) => prodSale.name !== action.payload.name,
            );
            salesToSave.sort(
                (a, b) => a.name.localeCompare(b.name) || a.qty - b.qty,
            );
            return {
                ...state,
                salesToSave,
            };
        }
        case SaleDefReducerEnum.INVENTORY_STATUS:
            return {
                ...state,
                inventory: {
                    ...state.inventory,
                    requested: action.payload,
                },
            };
        case SaleDefReducerEnum.INVENTORY_DATA: {
            return {
                ...state,
                inventory: {
                    ...state.inventory,
                    data: action.payload,
                },
            };
        }
        case SaleDefReducerEnum.INVENTORY_FILLED:
            return {
                ...state,
                inventory: {
                    ...state.inventory,
                    filled: action.payload,
                },
            };
        case SaleDefReducerEnum.INVENTORY_CLEAR:
            return {
                ...state,
                inventory: {
                    requested: false,
                    filled: false,
                    data: null,
                },
            };
        case SaleDefReducerEnum.INCLUDE_PRODUCTS_DB: {
            return {
                ...state,
                salesFromDB: action.payload,
            };
        }
        default: {
            const actionInvalid: never = action;
            throw new Error('Type invalid.', { cause: actionInvalid });
        }
    }
};
