import {
    DispatchFn,
    SaleDefinitionState,
    SaleFormInitProps,
    defineCustomer,
    defineProduct,
    storeSalesToSave,
} from '@/Pages/App/Screens/Sales/Form/libraries';
import {
    SaleDispatchContext,
    SaleStateContext,
} from '@/Pages/App/Screens/Sales/Form/libraries/contexts';
import { saleDefinitionReducer } from '@/Pages/App/Screens/Sales/Form/libraries/reducers';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import { useAppDispatch, useSelections } from '@/Pages/App/libraries/hooks';
import { makeContextError } from '@/libraries';
import { endpoints } from '@/settings';
import { useCallback, useContext, useReducer } from 'react';

export const useSaleState = () => {
    const state = useContext(SaleStateContext);
    if (state === null) {
        throw makeContextError('useSaleState', 'SaleStateContext');
    }
    return state;
};

export const useSaleDispatch = () => {
    const dispatch = useContext(SaleDispatchContext);
    if (dispatch === null) {
        throw makeContextError('useSaleDispatch', 'SaleDispatchContext');
    }
    return dispatch;
};

export const useSaleDefinitionReducer = () => {
    return useReducer(saleDefinitionReducer, {
        optionsConfirm: false,
        productToSale: null,
        salesFromDB: [],
        salesToSave: [],
        inventoryEndpoint: endpoints.inventory.summary,
        inventory: {
            requested: false,
            filled: false,
            data: null,
        },
        customer: null,
    });
};

export const useSaleDefinitionInit = (
    state: SaleDefinitionState,
    dispatch: DispatchFn,
    saleID?: string,
) => {
    const appDispatch = useAppDispatch();
    const selections = useSelections();
    const isCreate = typeof saleID === 'undefined';
    const isSelection = selections.action !== null;
    return useCallback<SaleFormInitProps>(
        (salesFromDB = [], customerFromDB) => {
            if (state.salesFromDB.length > 0) {
                // No page transition
                return;
            }
            const {
                sales: { product: productSelected, customer: customerSelected },
            } = selections;
            storeSalesToSave(
                dispatch,
                salesFromDB,
                isCreate,
                isSelection,
                selections,
            );
            defineCustomer(
                state.customer,
                dispatch,
                customerFromDB,
                customerSelected,
            );
            defineProduct(
                state.productToSale,
                productSelected,
                dispatch,
                selections,
            );
            appDispatch({ type: DataReducerEnum.SELECTION_CLEAR });
        },
        [
            selections.sales.customer,
            selections.sales.product,
            state.customer,
            state.productToSale,
            state.salesFromDB,
            dispatch,
            appDispatch,
            defineCustomer,
            defineProduct,
            storeSalesToSave,
            isCreate,
            isSelection,
        ],
    );
};
