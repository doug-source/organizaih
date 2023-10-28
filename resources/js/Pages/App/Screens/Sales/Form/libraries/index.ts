import { ICustomerListData } from '@/Pages/App/Screens/Customer/List/types';
import { ProductToSale } from '@/Pages/App/Screens/Product/types';
import { SaleDefReducerEnum } from '@/Pages/App/Screens/Sales/Form/libraries/enums';
import { useSaleDefinitionReducer } from '@/Pages/App/Screens/Sales/Form/libraries/hooks';
import { SaleDefinitionPayload } from '@/Pages/App/Screens/Sales/Form/libraries/types/payload';
import { ReducerSelections } from '@/Pages/App/libraries/types/state/data';
import { Dispatch } from 'react';

type DefineCustomerParams = (
    customerFromState: ICustomerListData | null,
    dispatch: Dispatch<SaleDefinitionPayload.Skeleton>,
    customerFromDB?: ICustomerListData | null,
    customerSelected?: ICustomerListData | null,
) => void;

/**
 * Conditions:
 *   - !fromDB && !selected => CREATE BEFORE SELECT
 *   - !fromDB && selected => CREATE AFTER SELECT
 *   - fromDB && !selected => EDIT BEFORE SELECT
 *   - fromDB && selected => EDIT AFTER SELECT
 *
 * @param customerFromState
 * @param dispatch
 * @param customerFromDB
 * @param customerSelected
 * @returns void
 */
export const defineCustomer: DefineCustomerParams = (
    customerFromState,
    dispatch,
    customerFromDB,
    customerSelected,
): void => {
    const payload: ICustomerListData | null | undefined =
        typeof customerFromDB === 'undefined'
            ? customerSelected ?? null
            : customerSelected ?? customerFromDB;

    if (
        customerFromState !== null ||
        typeof payload === 'undefined' ||
        payload === null
    ) {
        return;
    }
    dispatch({
        type: SaleDefReducerEnum.INCLUDE_CUSTOMER,
        payload,
    });
};

type DefineProductUtil = (
    productToSaleFromState: ProductToSale | null,
    productSelected: ProductToSale | null,
    dispatch: Dispatch<SaleDefinitionPayload.Skeleton>,
    selection: ReducerSelections,
) => void;

export const defineProduct: DefineProductUtil = (
    productToSaleFromState,
    productSelected,
    dispatch,
    { sales: { salesToSave: salesFromSelection } },
) => {
    if (productToSaleFromState !== null || productSelected === null) {
        return;
    }
    if (
        salesFromSelection.findIndex(
            (prodSale) => prodSale.name === productSelected.name,
        ) > -1
    ) {
        return;
    }
    dispatch({
        type: SaleDefReducerEnum.INCLUDE_PRODUCT,
        payload: productSelected,
    });
};

type StoreSalesFromDbUtil = (
    salesFromDB: ProductToSale[],
    dispatch: Dispatch<SaleDefinitionPayload.Skeleton>,
) => void;

const storeSalesFromDB: StoreSalesFromDbUtil = (salesFromDB, dispatch) => {
    dispatch({
        type: SaleDefReducerEnum.INCLUDE_PRODUCTS_DB,
        payload: salesFromDB,
    });
};

type StoreSalesToSaveUtil = (
    dispatch: Dispatch<SaleDefinitionPayload.Skeleton>,
    salesFromDB: ProductToSale[],
    isCreate: boolean,
    isFromSelection: boolean,
    selection: ReducerSelections,
) => void;

/**
 * CONDITIONS:
 *    - CREATE -> SELECTION
 *       + YES:
 *           * empty selection/local/fromDB
 *       + NO:
 *           * selection's values -> local & no fromDB request
 *
 *    - EDIT
 *       + YES:
 *           * empty selection; (request & store) fromDB -> local/state.fromDB
 *       + NO:
 *           * selection's values -> local & (
 *               IF fromLocalDB empty: request & store fromDB
 *           )
 *
 * @param dispatch
 * @param salesFromDB
 * @param isCreate
 * @param isFromSelection
 * @param selections
 * @returns void
 */
export const storeSalesToSave: StoreSalesToSaveUtil = (
    dispatch,
    salesFromDB,
    isCreate,
    isFromSelection,
    { sales: { salesToSave: salesFromSelection } },
): void => {
    if (isCreate) {
        // CREATE
        if (isFromSelection) {
            dispatch({
                type: SaleDefReducerEnum.REPLACE_SALE_LIST,
                payload: salesFromSelection,
            });
        }
    } else {
        storeSalesFromDB(salesFromDB, dispatch);
        // EDITION
        if (isFromSelection) {
            dispatch({
                type: SaleDefReducerEnum.REPLACE_SALE_LIST,
                payload: salesFromSelection,
            });
        } else {
            dispatch({
                type: SaleDefReducerEnum.REPLACE_SALE_LIST,
                payload: salesFromDB,
            });
        }
    }
};

export * from './contexts';
export * from './enums';
export * from './hooks';
export * from './reducers';
export * from './types';

export type SaleFormInitProps = (
    salesFromDB?: ProductToSale[],
    customerFromDB?: ICustomerListData | null,
) => void;

export type SaleDefinitionState = ReturnType<
    typeof useSaleDefinitionReducer
>[0];
export type DispatchFn = ReturnType<typeof useSaleDefinitionReducer>[1];
