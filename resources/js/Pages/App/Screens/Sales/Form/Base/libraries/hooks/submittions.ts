import {
    buildFormData,
    prepareSaleItem,
} from '@/Pages/App/Screens/Sales/Form/Base/libraries';
import { ErrorsSetterType, ErrorsType } from '@/Pages/App/Screens/types';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import { useAppDispatch } from '@/Pages/App/libraries/hooks';
import { endpoints } from '@/settings';
import axios from 'axios';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type ThenableCallback = (response: { status: number }) => void;

const useThenableCallback = (afterSubmit?: () => void): ThenableCallback => {
    const appDispatch = useAppDispatch();
    const navigate = useNavigate();
    return useCallback(
        (response) => {
            switch (response.status) {
                case 200: {
                    navigate('/sales');
                    appDispatch({
                        type: DataReducerEnum.SELECTION_CLEAR,
                    });
                    appDispatch({
                        type: DataReducerEnum.LOADING,
                        payload: false,
                    });
                    afterSubmit && afterSubmit();
                    break;
                }
                default: {
                    appDispatch({
                        type: DataReducerEnum.SELECTION_CLEAR,
                    });
                    appDispatch({
                        type: DataReducerEnum.LOADING,
                        payload: false,
                    });
                    afterSubmit && afterSubmit();
                    console.log(
                        'Unexpected Success Status: ' + response.status,
                    );
                }
            }
        },
        [navigate, appDispatch, afterSubmit],
    );
};

type CatchResponse = {
    response: {
        status: number;
        data: { errors: ErrorsType };
    };
};
type CatchCallback = (error: CatchResponse) => void;

const useCatchCallback = (
    setErrors: ErrorsSetterType,
    afterSubmit?: () => void,
): CatchCallback => {
    const appDispatch = useAppDispatch();
    const navigate = useNavigate();
    return useCallback(
        ({ response }) => {
            switch (response.status) {
                case 422: {
                    const {
                        data: { errors },
                    } = response;
                    setErrors && setErrors(errors);
                    appDispatch({
                        type: DataReducerEnum.SELECTION_CLEAR,
                    });
                    appDispatch({
                        type: DataReducerEnum.LOADING,
                        payload: false,
                    });
                    afterSubmit && afterSubmit();
                    break;
                }
                case 403:
                case 404: {
                    // NOT FOUND
                    appDispatch({
                        type: DataReducerEnum.SELECTION_CLEAR,
                    });
                    afterSubmit && afterSubmit();
                    navigate('/sales');
                    break;
                }
                default: {
                    console.log('Unexpected Error');
                    console.log(response);
                    afterSubmit && afterSubmit();
                    break;
                }
            }
        },
        [setErrors, appDispatch, navigate, afterSubmit],
    );
};

type SaleToSave = Parameters<typeof prepareSaleItem>[0][number];

const useSaleEndpoint = (salesToSave: SaleToSave[], saleID?: number) => {
    const [endpoint, setEndpoint] = useState(endpoints.sale.store);
    useEffect(() => {
        if (salesToSave.length === 0) {
            return;
        }
        if (saleID) {
            // edit
            setEndpoint(endpoints.sale.update(saleID));
        } else {
            // create
            setEndpoint(endpoints.sale.store);
        }
    }, [salesToSave, saleID, endpoints.sale]);
    return [endpoint] as const;
};

export const useSaleSubmit = (
    salesToSave: SaleToSave[],
    setErrors: ErrorsSetterType,
    customerID: number,
    beforeSubmit?: () => void,
    afterSubmit?: () => void,
    saleID?: number,
) => {
    const appDispatch = useAppDispatch();
    const thenCallback = useThenableCallback(afterSubmit);
    const catchCallback = useCatchCallback(setErrors, afterSubmit);
    const [url] = useSaleEndpoint(salesToSave, saleID);
    const { tokenAuth } = window.data;

    return useCallback(
        (evt: FormEvent<HTMLFormElement>) => {
            evt.preventDefault();
            if (!navigator.onLine) {
                return;
            }
            const formData = buildFormData(
                prepareSaleItem(salesToSave, saleID),
                customerID,
                saleID,
            );
            appDispatch({ type: DataReducerEnum.LOADING, payload: true });
            beforeSubmit && beforeSubmit();
            axios
                .post(url, formData, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${tokenAuth}`,
                    },
                })
                .then(thenCallback)
                .catch(catchCallback);
        },
        [
            navigator.onLine,
            buildFormData,
            prepareSaleItem,
            appDispatch,
            beforeSubmit,
            axios,
            thenCallback,
            catchCallback,
            salesToSave,
            customerID,
            saleID,
            tokenAuth,
        ],
    );
};
