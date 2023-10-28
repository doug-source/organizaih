import { SaleEdit } from '@/Pages/App/Screens/Sales/Form/Edit';
import {
    buildCustomerListData,
    buildSaleProductList,
} from '@/Pages/App/Screens/Sales/Form/Edit/libraries';
import { SaleFormInitProps } from '@/Pages/App/Screens/Sales/Form/libraries';
import { ISale } from '@/Pages/App/Screens/Sales/Form/types';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import {
    useAPI,
    useAppDispatch,
    useGenericErrorHandler,
    useLoadingStatus,
} from '@/Pages/App/libraries/hooks';
import { endpoints } from '@/settings';
import { ComponentPropsWithoutRef, useEffect } from 'react';

export const useSaleItemRequest = (
    saleID: ComponentPropsWithoutRef<typeof SaleEdit>['saleID'],
    submitting: boolean,
) => {
    let endpoint;
    if (!submitting) {
        endpoint = endpoints.sale.edit(saleID);
    }
    const [saleInfo] = useAPI<ISale, { pagination: false }>(endpoint);
    useGenericErrorHandler(saleInfo.error);
    return [saleInfo] as const;
};

export const useEditInitSelection = (
    saleInfo: ReturnType<typeof useSaleItemRequest>[0],
    onInit: SaleFormInitProps,
    saleID: ComponentPropsWithoutRef<typeof SaleEdit>['saleID'],
    submitting: boolean,
) => {
    const appDispatch = useAppDispatch();
    const loadingStatus = useLoadingStatus();
    useEffect(() => {
        if (saleInfo.error || submitting || !loadingStatus || !saleInfo.data) {
            return;
        }
        appDispatch({
            type: DataReducerEnum.SELECTION_ACTION,
            payload: `${saleID}/edit`,
        });
        onInit(
            buildSaleProductList(saleInfo.data),
            buildCustomerListData(saleInfo.data),
        );
        appDispatch({ type: DataReducerEnum.LOADING, payload: false });
    }, [
        saleInfo.error,
        saleInfo.data,
        saleID,
        submitting,
        appDispatch,
        loadingStatus,
        onInit,
        buildSaleProductList,
        buildCustomerListData,
    ]);
};
