import { ICustomerListData } from '@/Pages/App/Screens/Customer/List/types';
import { IInventoryListData } from '@/Pages/App/Screens/Inventory/List/types';
import { ProductToSale } from '@/Pages/App/Screens/Product/types';
import { calculateMax } from '@/Pages/App/Screens/Sales/Form/Base/libraries';
import { SaleDefReducerEnum } from '@/Pages/App/Screens/Sales/Form/libraries/enums';
import {
    useSaleDispatch,
    useSaleState,
} from '@/Pages/App/Screens/Sales/Form/libraries/hooks';
import { SaleDefinitionPayload } from '@/Pages/App/Screens/Sales/Form/libraries/types/payload';
import { SaleDefinitionReducerState } from '@/Pages/App/Screens/Sales/Form/libraries/types/state';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import {
    useAPI,
    useAppDispatch,
    useGenericErrorHandler,
    useLongTouchPress,
} from '@/Pages/App/libraries/hooks';
import { columnPrecisionDB, columnScaleDB } from '@/Pages/App/settings';
import { isFloatValid } from '@/libraries/toolbox/Number';
import {
    ChangeEvent,
    Dispatch,
    MouseEventHandler,
    useCallback,
    useEffect,
    useState,
} from 'react';

export * from './submittions';

type DispatchFn = Dispatch<SaleDefinitionPayload.Skeleton>;

export const useSaleReducer = () => {
    return [useSaleState(), useSaleDispatch()] as const;
};

export const useInventoryRequest = (
    state: SaleDefinitionReducerState,
    dispatch: DispatchFn,
) => {
    const appDispatch = useAppDispatch();

    const [storeInventory, requestInventory] = useAPI<
        IInventoryListData | null,
        { pagination: false }
    >();
    useGenericErrorHandler(storeInventory.error);

    useEffect(() => {
        if (state.productToSale?.id && !state.inventory.requested) {
            requestInventory(
                `${state.inventoryEndpoint}/${state.productToSale.id}`,
            );
            dispatch({
                type: SaleDefReducerEnum.INVENTORY_STATUS,
                payload: true,
            });
            appDispatch({ type: DataReducerEnum.LOADING, payload: true });
        }
    }, [
        state.productToSale?.id,
        state.inventory.requested,
        state.inventoryEndpoint,
    ]);
    return [storeInventory] as const;
};

export const useInventoryResponse = (
    state: SaleDefinitionReducerState,
    dispatch: DispatchFn,
    storeInventory: ReturnType<typeof useInventoryRequest>[0],
) => {
    const appDispatch = useAppDispatch();
    useEffect(() => {
        if (
            storeInventory.error ||
            typeof storeInventory.data === 'undefined' ||
            !storeInventory.status ||
            !state.inventory.requested ||
            state.inventory.filled
        ) {
            return;
        }
        dispatch({
            type: SaleDefReducerEnum.INVENTORY_DATA,
            payload: storeInventory.data,
        });
        dispatch({
            type: SaleDefReducerEnum.INVENTORY_FILLED,
            payload: true,
        });
        appDispatch({ type: DataReducerEnum.LOADING, payload: false });
    }, [storeInventory, appDispatch, dispatch]);
};

export const useReturnIncludedCallback = (
    state: SaleDefinitionReducerState,
    dispatch: DispatchFn,
) => {
    return useCallback(
        (payload: ProductToSale) => {
            if (state.productToSale) {
                return;
            }
            dispatch({
                type: SaleDefReducerEnum.REMOVE_SALE_FROM_SAVE,
                payload,
            });
            dispatch({ type: SaleDefReducerEnum.INCLUDE_PRODUCT, payload });
        },
        [dispatch, state.productToSale],
    );
};

export const useItemSaverTouch = (dispatch: DispatchFn) => {
    const [isLongTouch, touchListeners] = useLongTouchPress(500);
    useEffect(() => {
        if (isLongTouch) {
            dispatch({ type: SaleDefReducerEnum.TOGGLE_OPTION_CONFIRM });
        }
    }, [isLongTouch, dispatch]);
    const [saleTouched, setSaleTouched] = useState<ProductToSale | null>();
    return {
        touchListeners,
        saleTouched,
        setSaleTouched,
    };
};

export const useConfirmYesHandler = (
    dispatch: DispatchFn,
    onReturnIncluded: ReturnType<typeof useReturnIncludedCallback>,
    saleTouched: ReturnType<typeof useItemSaverTouch>['saleTouched'],
    setSaleTouched: ReturnType<typeof useItemSaverTouch>['setSaleTouched'],
) => {
    return useCallback(() => {
        if (!saleTouched) {
            return;
        }
        dispatch({
            type: SaleDefReducerEnum.TOGGLE_OPTION_CONFIRM,
        });
        onReturnIncluded(saleTouched);
        setSaleTouched(null);
    }, [saleTouched, dispatch, onReturnIncluded, setSaleTouched]);
};

export const useRemoveIncludedCallback = (dispatch: DispatchFn) => {
    return useCallback(
        (payload: ProductToSale) => {
            dispatch({
                type: SaleDefReducerEnum.REMOVE_SALE_FROM_SAVE,
                payload,
            });
        },
        [dispatch],
    );
};

export const useConfirmNoHandler = (
    dispatch: DispatchFn,
    onRemoveIncluded: ReturnType<typeof useRemoveIncludedCallback>,
    saleTouched: ReturnType<typeof useItemSaverTouch>['saleTouched'],
    setSaleTouched: ReturnType<typeof useItemSaverTouch>['setSaleTouched'],
) => {
    return useCallback(() => {
        if (!saleTouched) {
            return;
        }
        dispatch({
            type: SaleDefReducerEnum.TOGGLE_OPTION_CONFIRM,
        });
        onRemoveIncluded(saleTouched);
        setSaleTouched(null);
    }, [saleTouched, dispatch, onRemoveIncluded, setSaleTouched]);
};

export const useItemEditorIncludeSelected = (
    state: SaleDefinitionReducerState,
    dispatch: DispatchFn,
) => {
    return useCallback<MouseEventHandler<HTMLButtonElement>>(() => {
        const product = state.productToSale!;
        dispatch({
            type: SaleDefReducerEnum.REMOVE_SALE,
        });
        dispatch({
            type: SaleDefReducerEnum.INCLUDE_SALE_TO_SAVE,
            payload: product,
        });
        dispatch({ type: SaleDefReducerEnum.INVENTORY_CLEAR });
    }, [state.productToSale, dispatch]);
};

export const useItemEditorPriceChange = (dispatch: DispatchFn) => {
    return useCallback<(event: ChangeEvent<HTMLInputElement>) => void>(
        (evt) => {
            const scale = columnScaleDB.sale;
            const precision = columnPrecisionDB.sale;
            if (!isFloatValid(Number(evt.target.value), scale, precision)) {
                return;
            }
            dispatch({
                type: SaleDefReducerEnum.INCLUDE_SALE_PRICE,
                payload: Math.max(Number(evt.target.value), 0),
            });
        },
        [columnScaleDB.sale, columnPrecisionDB.sale, isFloatValid, dispatch],
    );
};

export const useItemEditorQtyChange = (
    state: SaleDefinitionReducerState,
    dispatch: DispatchFn,
) => {
    return useCallback<(event: ChangeEvent<HTMLInputElement>) => void>(
        (evt) => {
            const max = calculateMax(
                state.productToSale,
                state.inventory.data,
                state.salesFromDB,
            );
            dispatch({
                type: SaleDefReducerEnum.INCLUDE_SALE_QTY,
                payload: Math.min(Math.max(Number(evt.target.value), 1), max),
            });
        },
        [
            calculateMax,
            state.productToSale,
            state.inventory.data,
            state.salesFromDB,
        ],
    );
};

export const useItemEditorRemoveSelected = (dispatch: DispatchFn) => {
    return useCallback<MouseEventHandler<HTMLButtonElement>>(() => {
        dispatch({
            type: SaleDefReducerEnum.REMOVE_SALE,
        });
        dispatch({ type: SaleDefReducerEnum.INVENTORY_CLEAR });
    }, [dispatch]);
};

type ProductSelectionStateProps = {
    productToSale: ProductToSale | null;
    customer: ICustomerListData | null;
    salesToSave: ProductToSale[];
};

export const useProductSelectionHandler = (
    state: ProductSelectionStateProps,
    action: string,
) => {
    const appDispatch = useAppDispatch();
    return useCallback<MouseEventHandler<HTMLAnchorElement>>(
        (evt) => {
            if (state.productToSale) {
                evt.preventDefault();
                return;
            }
            appDispatch({
                type: DataReducerEnum.TITLE,
                payload: '',
            });
            appDispatch({
                type: DataReducerEnum.SELECTION_TARGET,
                payload: 'sales',
            });
            appDispatch({
                type: DataReducerEnum.SELECTION_ACTION,
                payload: action,
            });
            appDispatch({
                type: DataReducerEnum.SELECTION_CUSTOMER,
                payload: {
                    key: 'sales',
                    value: state.customer,
                },
            });
            appDispatch({
                type: DataReducerEnum.SELECTION_SALES_SAVED_ITEM_ADD_ALL,
                payload: state.salesToSave,
            });
        },
        [
            state.productToSale,
            state.customer,
            state.salesToSave,
            action,
            appDispatch,
        ],
    );
};

type CustomerSelectionStateProps = {
    productToSale: ProductToSale | null;
    salesToSave: ProductToSale[];
};

export const useCustomerSelectionHandler = (
    state: CustomerSelectionStateProps,
    action: string,
) => {
    const appDispatch = useAppDispatch();
    return useCallback(() => {
        appDispatch({
            type: DataReducerEnum.TITLE,
            payload: '',
        });
        appDispatch({
            type: DataReducerEnum.SELECTION_TARGET,
            payload: 'sales',
        });
        appDispatch({
            type: DataReducerEnum.SELECTION_ACTION,
            payload: action,
        });
        appDispatch({
            type: DataReducerEnum.SELECTION_SALES_SAVED_ITEM_ADD_ALL,
            payload: state.salesToSave,
        });
        if (
            typeof state.productToSale !== 'undefined' &&
            state.productToSale !== null
        ) {
            appDispatch({
                type: DataReducerEnum.SELECTION_PRODUCT,
                payload: {
                    key: 'sales',
                    value: {
                        ...state.productToSale,
                        id: state.productToSale.id!,
                    },
                },
            });
        }
    }, [state.productToSale, state.salesToSave, action, appDispatch]);
};
