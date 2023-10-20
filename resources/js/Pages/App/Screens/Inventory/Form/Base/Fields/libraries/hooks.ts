import {
    buildFormData,
    prepareInventoryItem,
} from '@/Pages/App/Screens/Inventory/Form/Base/Fields/libraries';
import { InventoryItemIdentifier } from '@/Pages/App/Screens/Inventory/Form/Base/libraries';
import { ProductToInventory } from '@/Pages/App/Screens/Product/types';
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
                    navigate('/inventories');
                    appDispatch({
                        type: DataReducerEnum.SELECTION_CLEAR,
                    });
                    appDispatch({
                        type: DataReducerEnum.LOADING,
                        payload: false,
                    });
                    break;
                }
                default: {
                    appDispatch({
                        type: DataReducerEnum.LOADING,
                        payload: false,
                    });
                    appDispatch({
                        type: DataReducerEnum.SELECTION_CLEAR,
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
                        type: DataReducerEnum.SELECTION_CLEAR,
                    });
                    appDispatch({
                        type: DataReducerEnum.LOADING,
                        payload: false,
                    });
                    break;
                }
                case 403:
                case 404: {
                    appDispatch({
                        type: DataReducerEnum.SELECTION_CLEAR,
                    });
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

const useInventoryEndpoint = (
    productsToSave: ProductToInventory[],
    inventoryItemID?: InventoryItemIdentifier,
) => {
    const [endpoint, setEndpoint] = useState(endpoints.inventory.store);
    useEffect(() => {
        if (productsToSave.length === 0) {
            return;
        }
        if (inventoryItemID) {
            // edit
            setEndpoint(endpoints.inventory.update(inventoryItemID));
        } else {
            // create
            setEndpoint(endpoints.inventory.store);
        }
    }, [productsToSave, inventoryItemID, endpoints.inventory]);
    return [endpoint] as const;
};

export const useInventorySubmit = (
    productsToSave: ProductToInventory[],
    setErrors: ErrorsSetterType,
    inventoryItemID?: InventoryItemIdentifier,
) => {
    const appDispatch = useAppDispatch();
    const thenCallback = useThenableCallback();
    const catchCallback = useCatchCallback(setErrors);
    const [url] = useInventoryEndpoint(productsToSave, inventoryItemID);
    const { tokenAuth } = window.data;

    return useCallback(
        (evt: FormEvent<HTMLFormElement>) => {
            evt.preventDefault();
            if (!navigator.onLine) {
                return;
            }
            const formData = buildFormData(
                prepareInventoryItem(productsToSave),
                inventoryItemID,
            );

            appDispatch({ type: DataReducerEnum.LOADING, payload: true });
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
            prepareInventoryItem,
            productsToSave,
            buildFormData,
            inventoryItemID,
            appDispatch,
            tokenAuth,
            thenCallback,
            catchCallback,
        ],
    );
};
