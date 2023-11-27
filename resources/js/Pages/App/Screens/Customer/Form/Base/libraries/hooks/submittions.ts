import { buildFormData } from '@/Pages/App/Screens/Customer/Form/Base/libraries';
import { ICustomer } from '@/Pages/App/Screens/Customer/types';
import { ErrorsSetterType, ErrorsType } from '@/Pages/App/Screens/types';
import { DataReducerEnum, useAppDispatch } from '@/Pages/App/libraries';
import { endpoints } from '@/settings';
import axios from 'axios';
import { FormEvent, RefObject, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type ThenableCallback = (response: { status: number }) => void;

const useThenableCallback = (): ThenableCallback => {
    const appDispatch = useAppDispatch();
    const navigate = useNavigate();
    return useCallback(
        (response) => {
            switch (response.status) {
                case 200: {
                    navigate('/customers');
                    break;
                }
                default: {
                    appDispatch({
                        type: DataReducerEnum.LOADING,
                        payload: false,
                    });
                    console.log(
                        `Unexpected Success Status: ${response.status}`,
                    );
                }
            }
        },
        [navigate, appDispatch],
    );
};

type CatchResponse = {
    response: {
        status: number;
        data: { errors: ErrorsType };
    };
};
type CatchCallback = (error: CatchResponse) => void;

const useCatchCallback = (setErrors: ErrorsSetterType): CatchCallback => {
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
                        type: DataReducerEnum.LOADING,
                        payload: false,
                    });
                    break;
                }
                case 403:
                case 404: {
                    navigate('/customers');
                    break;
                }
                default: {
                    console.log('Unexpected Error');
                    console.log(response);
                    break;
                }
            }
        },
        [navigate, appDispatch, setErrors],
    );
};

const useCustomerEndpoint = (customerInput: ICustomer) => {
    const [endpoint, setEndpoint] = useState<string>(endpoints.customer.store);
    useEffect(() => {
        if (customerInput.id) {
            // edit
            setEndpoint(endpoints.customer.update(customerInput.id));
        } else {
            // create
            setEndpoint(endpoints.customer.store);
        }
    }, [customerInput.id, endpoints.customer]);
    return [endpoint] as const;
};

export function useCustomerSubmit(
    customerInput: ICustomer,
    inputFile: RefObject<HTMLInputElement>,
    setErrors: ErrorsSetterType,
) {
    const appDispatch = useAppDispatch();
    const thenCallback = useThenableCallback();
    const catchCallback = useCatchCallback(setErrors);

    const formData = buildFormData(customerInput, inputFile);
    const [url] = useCustomerEndpoint(customerInput);
    const { tokenAuth } = window.data;

    return useCallback(
        function (evt: FormEvent<HTMLFormElement>) {
            evt.preventDefault();
            if (!navigator.onLine) {
                return;
            }
            appDispatch({ type: DataReducerEnum.LOADING, payload: true });

            axios
                .post(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${tokenAuth}`,
                    },
                })
                .then(thenCallback)
                .catch(catchCallback);
        },
        [
            navigator.onLine,
            url,
            appDispatch,
            thenCallback,
            catchCallback,
            tokenAuth,
            formData,
        ],
    );
}
