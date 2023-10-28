import {
    InventoryItemIdentifier,
    mountSelectAction,
} from '@/Pages/App/Screens/Inventory/Form/Base/libraries';
import { InventoryDefinitionReducerEnum } from '@/Pages/App/Screens/Inventory/Form/Base/libraries/enums';
import { makeConfirmClose } from '@/Pages/App/Screens/Inventory/Form/Base/libraries/handlers';
import {
    InventoryDefinitionDispatch,
    InventoryDefinitionState,
    InventoryDispatchContext,
    InventoryStateContext,
} from '@/Pages/App/Screens/Inventory/Form/libraries';
import { ProductToInventory } from '@/Pages/App/Screens/Product/types';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import { useAppDispatch, useLongTouchPress } from '@/Pages/App/libraries/hooks';
import { columnPrecisionDB, columnScaleDB } from '@/Pages/App/settings';
import { isFloatValid, makeContextError } from '@/libraries';
import {
    ChangeEvent,
    MouseEventHandler,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';

const useInventoryState = () => {
    const state = useContext(InventoryStateContext);
    if (state === null) {
        throw makeContextError('useInventoryState', 'InventoryStateContext');
    }
    return state;
};

const useInventoryDispatch = () => {
    const dispatch = useContext(InventoryDispatchContext);
    if (dispatch === null) {
        throw makeContextError(
            'useInventoryDispatch',
            'InventoryDispatchContext',
        );
    }
    return dispatch;
};

export const useInventoryReducer = () => {
    return [useInventoryState(), useInventoryDispatch()] as const;
};

const useReturnIncludedCallback = (
    state: InventoryDefinitionState,
    dispatch: InventoryDefinitionDispatch,
) => {
    return useCallback(
        (payload: ProductToInventory) => {
            if (state.productToInventory) {
                return;
            }
            dispatch({
                type: InventoryDefinitionReducerEnum.REMOVE_INVENTORY_FROM_SAVE,
                payload,
            });
            dispatch({
                type: InventoryDefinitionReducerEnum.INCLUDE_PRODUCT,
                payload,
            });
        },
        [dispatch, state.productToInventory],
    );
};

const useRemoveIncludedCallback = (dispatch: InventoryDefinitionDispatch) => {
    return useCallback(
        (payload: ProductToInventory) => {
            dispatch({
                type: InventoryDefinitionReducerEnum.REMOVE_INVENTORY_FROM_SAVE,
                payload,
            });
        },
        [dispatch],
    );
};

const useItemSaverTouch = (dispatch: InventoryDefinitionDispatch) => {
    const [isLongTouch, touchListeners] = useLongTouchPress(500);
    useEffect(() => {
        if (isLongTouch) {
            dispatch({
                type: InventoryDefinitionReducerEnum.TOGGLE_OPTION_CONFIRM,
            });
        }
    }, [isLongTouch, dispatch]);
    const [productTouched, setProductTouched] =
        useState<ProductToInventory | null>(null);
    return {
        touchListeners,
        productTouched,
        setProductTouched,
    };
};

type TouchOutputs = ReturnType<typeof useItemSaverTouch>;

const useTouchStartCallback = (
    setProductTouched: TouchOutputs['setProductTouched'],
) => {
    return useCallback(
        (product: ProductToInventory) => {
            setProductTouched(product);
        },
        [setProductTouched],
    );
};

export const useItemSaverDependencies = (
    state: InventoryDefinitionState,
    dispatch: InventoryDefinitionDispatch,
) => {
    const { touchListeners, productTouched, setProductTouched } =
        useItemSaverTouch(dispatch);
    return {
        onReturnIncluded: useReturnIncludedCallback(state, dispatch),
        onRemoveIncluded: useRemoveIncludedCallback(dispatch),
        onTouchStart: useTouchStartCallback(setProductTouched),
        productTouched,
        setProductTouched,
        touchListeners,
    };
};

const useItemEditorQtyChange = (dispatch: InventoryDefinitionDispatch) => {
    return useCallback<(event: ChangeEvent<HTMLInputElement>) => void>(
        (evt) =>
            dispatch({
                type: InventoryDefinitionReducerEnum.INCLUDE_PRODUCT_QTY,
                payload: Math.max(Number(evt.target.value), 1),
            }),
        [dispatch],
    );
};

const useItemEditorPriceChange = (dispatch: InventoryDefinitionDispatch) => {
    return useCallback<(event: ChangeEvent<HTMLInputElement>) => void>(
        (evt) => {
            const scale = columnScaleDB.inventory;
            const precision = columnPrecisionDB.inventory;
            if (!isFloatValid(Number(evt.target.value), scale, precision)) {
                return;
            }
            dispatch({
                type: InventoryDefinitionReducerEnum.INCLUDE_PRODUCT_COST,
                payload: Math.max(Number(evt.target.value), 0),
            });
        },
        [columnScaleDB, columnPrecisionDB, isFloatValid, dispatch],
    );
};

const useItemEditorRemoveSelected = (dispatch: InventoryDefinitionDispatch) => {
    return useCallback(() => {
        dispatch({
            type: InventoryDefinitionReducerEnum.REMOVE_PRODUCT,
        });
    }, [dispatch]);
};

const useItemEditorIncludeSelected = (
    state: InventoryDefinitionState,
    dispatch: InventoryDefinitionDispatch,
) => {
    return useCallback(() => {
        const product = state.productToInventory;
        if (product === null) {
            return;
        }
        dispatch({
            type: InventoryDefinitionReducerEnum.REMOVE_PRODUCT,
        });
        dispatch({
            type: InventoryDefinitionReducerEnum.INCLUDE_INVENTORY_TO_SAVE,
            payload: product,
        });
    }, [state.productToInventory, dispatch]);
};

export const useItemEditorHandlers = (
    state: InventoryDefinitionState,
    dispatch: InventoryDefinitionDispatch,
) => {
    return {
        onItemEditorQtyChange: useItemEditorQtyChange(dispatch),
        onItemEditorPriceChange: useItemEditorPriceChange(dispatch),
        onItemEditorRemoveSelected: useItemEditorRemoveSelected(dispatch),
        onItemEditorIncludeSelected: useItemEditorIncludeSelected(
            state,
            dispatch,
        ),
    };
};

type ConfirmYesHandler = (
    dispatch: InventoryDefinitionDispatch,
    onReturnIncluded: ReturnType<typeof useReturnIncludedCallback>,
    productTouched: TouchOutputs['productTouched'],
    setProductTouched: TouchOutputs['setProductTouched'],
) => () => void;

const useConfirmYesHandler: ConfirmYesHandler = (
    dispatch,
    onReturnIncluded,
    productTouched,
    setProductTouched,
) => {
    return useCallback(() => {
        if (productTouched === null) {
            return;
        }
        dispatch({
            type: InventoryDefinitionReducerEnum.TOGGLE_OPTION_CONFIRM,
        });
        onReturnIncluded(productTouched);
        setProductTouched(null);
    }, [dispatch, onReturnIncluded, productTouched, setProductTouched]);
};

type ConfirmNoHandler = (
    dispatch: InventoryDefinitionDispatch,
    onRemoveIncluded: ReturnType<typeof useRemoveIncludedCallback>,
    productTouched: TouchOutputs['productTouched'],
    setProductTouched: TouchOutputs['setProductTouched'],
) => () => void;

const useConfirmNoHandler: ConfirmNoHandler = (
    dispatch,
    onRemoveIncluded,
    productTouched,
    setProductTouched,
) => {
    return useCallback(() => {
        if (productTouched === null) {
            return;
        }
        dispatch({
            type: InventoryDefinitionReducerEnum.TOGGLE_OPTION_CONFIRM,
        });
        onRemoveIncluded(productTouched);
        setProductTouched(null);
    }, [dispatch, onRemoveIncluded, productTouched, setProductTouched]);
};

type ConfirmHandler = (
    dispatch: InventoryDefinitionDispatch,
    onReturnIncluded: ReturnType<typeof useReturnIncludedCallback>,
    onRemoveIncluded: ReturnType<typeof useRemoveIncludedCallback>,
    productTouched: TouchOutputs['productTouched'],
    setProductTouched: TouchOutputs['setProductTouched'],
) => {
    onConfirmYes: () => void;
    onConfirmNo: () => void;
    onConfirmCancel: () => void;
};

export const useConfirmHandlers: ConfirmHandler = (
    dispatch,
    onReturnIncluded,
    onRemoveIncluded,
    productTouched,
    setProductTouched,
) => {
    return {
        onConfirmYes: useConfirmYesHandler(
            dispatch,
            onReturnIncluded,
            productTouched,
            setProductTouched,
        ),
        onConfirmNo: useConfirmNoHandler(
            dispatch,
            onRemoveIncluded,
            productTouched,
            setProductTouched,
        ),
        onConfirmCancel: makeConfirmClose(dispatch),
    };
};

export const useProductSelectionHandler = (
    inventoryItemID: InventoryItemIdentifier,
    { productToInventory, productsToInventory }: InventoryDefinitionState,
) => {
    const appDispatch = useAppDispatch();
    const action = mountSelectAction(inventoryItemID);
    return useCallback<MouseEventHandler<HTMLAnchorElement>>(
        (evt) => {
            if (productToInventory) {
                evt.preventDefault();
                return;
            }
            appDispatch({
                type: DataReducerEnum.TITLE,
                payload: '',
            });
            appDispatch({
                type: DataReducerEnum.SELECTION_TARGET,
                payload: 'inventories',
            });
            appDispatch({
                type: DataReducerEnum.SELECTION_ACTION,
                payload: action,
            });
            appDispatch({
                type: DataReducerEnum.SELECTION_INVENTORIES_SAVED_ITEM_ADD_ALL,
                payload: productsToInventory,
            });
        },
        [appDispatch, productToInventory, productsToInventory, action],
    );
};
