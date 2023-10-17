import { buildFormData } from '@/Pages/App/Screens/Product/Form/Base/libraries';
import { IProduct } from '@/Pages/App/Screens/Product/types';
import { IProductCategory } from '@/Pages/App/Screens/ProductCategory/types';
import { ErrorsSetterType, ErrorsType } from '@/Pages/App/Screens/types';
import {
    DataPayload,
    DataReducerEnum,
    useAppDispatch,
} from '@/Pages/App/libraries';
import { endpoints } from '@/settings';
import axios from 'axios';
import {
    Dispatch,
    FormEvent,
    MutableRefObject,
    useCallback,
    useEffect,
    useState,
} from 'react';
import { NavigateFunction } from 'react-router-dom';

type AppDispatch = Dispatch<DataPayload.Skeleton>;
type ThenableCallback = (response: { status: number }) => void;

const useThenableCallback = (
    appDispatch: AppDispatch,
    navigate: NavigateFunction,
): ThenableCallback => {
    return useCallback(
        (response) => {
            switch (response.status) {
                case 200: {
                    navigate('/products');
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
    navigate: NavigateFunction,
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
                    // NOT FOUND
                    navigate('/products');
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

const useProductEndpoint = (productInput: IProduct) => {
    const [endpoint, setEndpoint] = useState(endpoints.product.store);
    useEffect(() => {
        if (productInput.id) {
            // edit
            setEndpoint(endpoints.product.update(productInput.id));
        } else {
            // create
            setEndpoint(endpoints.product.store);
        }
    }, [productInput.id, endpoints.product]);
    return [endpoint];
};

export const useProductSubmit = (
    navigate: NavigateFunction,
    productInput: IProduct,
    categorySelected: IProductCategory,
    inputFile: MutableRefObject<HTMLInputElement | null>,
    setErrors: ErrorsSetterType,
) => {
    const appDispatch = useAppDispatch();
    const thenCallback = useThenableCallback(appDispatch, navigate);
    const catchCallback = useCatchCallback(appDispatch, setErrors, navigate);

    const [url] = useProductEndpoint(productInput);
    const formData = buildFormData(productInput, categorySelected, inputFile);
    const { tokenAuth } = window.data;

    return useCallback(
        (evt: FormEvent<HTMLFormElement>) => {
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
};
