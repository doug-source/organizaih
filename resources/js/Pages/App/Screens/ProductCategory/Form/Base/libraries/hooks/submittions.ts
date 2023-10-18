import { buildFormData } from '@/Pages/App/Screens/ProductCategory/Form/Base/libraries';
import { IProductCategory } from '@/Pages/App/Screens/ProductCategory/types';
import { ErrorsSetterType, ErrorsType } from '@/Pages/App/Screens/types';
import { DataReducerEnum, useAppDispatch } from '@/Pages/App/libraries';
import { endpoints } from '@/settings';
import axios from 'axios';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type ThenableCallback = (response: { status: number }) => void;

const useThenableCallback = (): ThenableCallback => {
    const appDispatch = useAppDispatch();
    const navigate = useNavigate();
    return useCallback(
        (response) => {
            switch (response.status) {
                case 200: {
                    navigate('/product-categories');
                    break;
                }
                default: {
                    appDispatch({
                        type: DataReducerEnum.LOADING,
                        payload: false,
                    });
                    console.log(
                        'Unexpected Success Status: ' + response.status,
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
                    navigate('/product-categories');
                    break;
                }
                default: {
                    console.log('Unexpected Error');
                    console.log(response);
                    break;
                }
            }
        },
        [setErrors, appDispatch, navigate],
    );
};

const useProductCategoryEndpoint = (
    productCategoryInput: IProductCategory | null,
) => {
    const [endpoint, setEndpoint] = useState(endpoints.productCategory.store);
    useEffect(() => {
        if (productCategoryInput === null) {
            return;
        }
        if (productCategoryInput.id) {
            // edit
            setEndpoint(
                endpoints.productCategory.update(productCategoryInput.id),
            );
        } else {
            // create
            setEndpoint(endpoints.productCategory.store);
        }
    }, [productCategoryInput?.id, endpoints.productCategory]);
    return [endpoint] as const;
};

export const useProductCategorySubmit = (
    productCategoryInput: IProductCategory | null,
    setErrors: ErrorsSetterType,
) => {
    const appDispatch = useAppDispatch();
    const thenCallback = useThenableCallback();
    const catchCallback = useCatchCallback(setErrors);
    const [url] = useProductCategoryEndpoint(productCategoryInput);
    const formData = buildFormData(productCategoryInput);
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
            tokenAuth,
            formData,
            thenCallback,
            catchCallback,
        ],
    );
};
