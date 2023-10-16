import { buildFormData } from '@/Pages/App/Screens/Customer/Form/Base/libraries';
import { ICustomer } from '@/Pages/App/Screens/Customer/types';
import { ErrorsSetterType, ErrorsType } from '@/Pages/App/Screens/types';
import { DataPayload, DataReducerEnum } from '@/Pages/App/libraries';
import { endpoints } from '@/settings';
import axios from 'axios';
import {
    Dispatch,
    FormEvent,
    RefObject,
    useCallback,
    useEffect,
    useState,
} from 'react';

type AppDispatch = Dispatch<DataPayload.Skeleton>;
type ThenableCallback = (response: { status: number }) => void;

const useThenableCallback = (appDispatch: AppDispatch): ThenableCallback => {
    return useCallback(
        (response) => {
            switch (response.status) {
                case 200: {
                    history.back();
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
        [history.back, appDispatch],
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
    appDispatch: AppDispatch,
    setErrors: ErrorsSetterType,
): CatchCallback => {
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
                    history.back();
                    break;
                }
                default: {
                    console.log('Unexpected Error');
                    console.log(response);
                    break;
                }
            }
        },
        [history.back, appDispatch, setErrors],
    );
};

const useCustomerEndpoint = (customerInput: ICustomer) => {
    const [endpoint, setEndpoint] = useState(endpoints.customer.store);
    useEffect(() => {
        if (customerInput.id) {
            // edit
            setEndpoint(endpoints.customer.update(customerInput.id));
        } else {
            // create
            setEndpoint(endpoints.customer.store);
        }
    }, [customerInput.id, endpoints.customer]);
    return [endpoint];
};

export function useCustomerSubmit(
    customerInput: ICustomer,
    inputFile: RefObject<HTMLInputElement>,
    setErrors: ErrorsSetterType,
    appDispatch: Dispatch<DataPayload.Skeleton>,
) {
    const thenCallback = useThenableCallback(appDispatch);
    const catchCallback = useCatchCallback(appDispatch, setErrors);

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
