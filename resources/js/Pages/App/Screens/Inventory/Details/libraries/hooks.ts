import {
    DispatchFn,
    InventoryItemsReducerArgs,
} from '@/Pages/App/Screens/Inventory/Details/libraries';
import {
    DispatchContext,
    SetTouchDataContext,
    TouchListenersContext,
} from '@/Pages/App/Screens/Inventory/Details/libraries/contexts';
import { InventoryItemsReducerEnum } from '@/Pages/App/Screens/Inventory/Details/libraries/enums';
import { inventoryItemsReducer } from '@/Pages/App/Screens/Inventory/Details/libraries/reducers';
import {
    IInventoryItemRemoved,
    IInventoryProduct,
} from '@/Pages/App/Screens/Inventory/Details/types';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import {
    useAPI,
    useAppDispatch,
    useDeleteAPI,
    useGenericErrorHandler,
    useLongTouchPress,
} from '@/Pages/App/libraries/hooks';
import { makeContextError } from '@/libraries';
import { endpoints, navigations } from '@/settings';
import {
    useCallback,
    useContext,
    useEffect,
    useReducer,
    useState,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const useInventoryDetailsReducer = () => {
    return useReducer(inventoryItemsReducer, {
        inventoryItem: null,
        itemDataRemoved: null,

        optionsConfirm: false,
        warning: false,
        preConfirm: false,
    });
};

type Store = ReturnType<
    typeof useAPI<IInventoryProduct, { pagination: false }>
>[0];

const useInventoryDetailsResponse = (store: Store, dispatch: DispatchFn) => {
    const appDispatch = useAppDispatch();
    useEffect(() => {
        if (store.error || !store.data || !store.status) {
            return;
        }
        dispatch({
            type: InventoryItemsReducerEnum.INIT,
            payload: store.data,
        });
        appDispatch({ type: DataReducerEnum.LOADING, payload: false });
        if (store.data === null) {
            history.back();
        }
    }, [store.error, store.data, store.status, dispatch, appDispatch]);
};

export const useInventoryDetailsRequest = (dispatch: DispatchFn) => {
    const { id } = useParams();
    const [store] = useAPI<IInventoryProduct, { pagination: false }>(
        id && endpoints.inventory.data(Number(id)),
    );
    useGenericErrorHandler(store.error);

    useInventoryDetailsResponse(store, dispatch);
    return [store.error] as const;
};

export const useInventoryDetailsRemotion = (dispatch: DispatchFn) => {
    const appDispatch = useAppDispatch();
    const [remotion, doRemotion] = useDeleteAPI();
    useGenericErrorHandler(remotion.error);
    useEffect(() => {
        if (remotion.error) {
            dispatch({ type: InventoryItemsReducerEnum.CANCEL_DELETE });
            doRemotion('');
        } else if (remotion.status) {
            dispatch({ type: InventoryItemsReducerEnum.DELETE });
            appDispatch({ type: DataReducerEnum.LOADING, payload: false });
        }
    }, [remotion.error, remotion.status, dispatch, doRemotion, appDispatch]);
    return [doRemotion] as const;
};

export const useNoInventoryChecking = (
    state: Parameters<typeof inventoryItemsReducer>[0],
) => {
    useEffect(() => {
        if (state.noInventoryItem) {
            history.back();
        }
    }, [state.noInventoryItem]);
};

export const useTouching = (dispatch: DispatchFn) => {
    const [touchData, setTouchData] = useState<IInventoryItemRemoved | null>(
        null,
    );
    const [isLongTouch, touchListeners] = useLongTouchPress(500);
    useEffect(() => {
        if (isLongTouch) {
            dispatch({ type: InventoryItemsReducerEnum.TOGGLE_OPTION_CONFIRM });
        }
    }, [isLongTouch, dispatch]);
    return [touchListeners, touchData, setTouchData] as const;
};

type DoRemotionFn = ReturnType<typeof useInventoryDetailsRemotion>[0];

export const useConfirmYesDefault = (
    dispatch: DispatchFn,
    doRemotion: DoRemotionFn,
    state: InventoryItemsReducerArgs[0],
) => {
    const appDispatch = useAppDispatch();
    return useCallback(() => {
        if (!state.itemDataRemoved) {
            return;
        }
        dispatch({
            type: InventoryItemsReducerEnum.HIDE_CONFIRM,
        });
        doRemotion(
            endpoints.inventory.delete(state.itemDataRemoved.inventoryItemID),
        );
        appDispatch({
            type: DataReducerEnum.LOADING,
            payload: true,
        });
    }, [
        appDispatch,
        state.itemDataRemoved,
        dispatch,
        doRemotion,
        endpoints.inventory.delete,
    ]);
};

type TouchHookReturn = ReturnType<typeof useTouching>;

export const useConfirmYesTouch = (
    dispatch: DispatchFn,
    touchData: TouchHookReturn[1],
    setTouchData: TouchHookReturn[2],
) => {
    const navigate = useNavigate();
    return useCallback(() => {
        if (touchData === null) {
            return;
        }
        dispatch({
            type: InventoryItemsReducerEnum.TOGGLE_OPTION_CONFIRM,
        });
        navigate(navigations.inventory.edit(touchData.inventoryItemID));
        setTouchData(null);
    }, [
        touchData,
        setTouchData,
        navigate,
        dispatch,
        navigations.inventory.edit,
    ]);
};

export const useConfirmNoTouch = (
    dispatch: DispatchFn,
    touchData: TouchHookReturn[1],
    setTouchData: TouchHookReturn[2],
) => {
    return useCallback(() => {
        if (touchData === null) {
            return;
        }
        dispatch({
            type: InventoryItemsReducerEnum.TOGGLE_OPTION_CONFIRM,
        });
        dispatch({
            type: InventoryItemsReducerEnum.PREPARE_DELETE,
            payload: touchData,
        });
        setTouchData(null);
    }, [touchData, setTouchData, dispatch]);
};

export const useInventoryDetailsDispatch = () => {
    const dispatch = useContext(DispatchContext);
    if (dispatch === null) {
        throw makeContextError(
            'useInventoryDetailsDispatch',
            'DispatchContext',
        );
    }
    return dispatch;
};

export const useInventoryDetailsSetTouchData = () => {
    const setTouchData = useContext(SetTouchDataContext);
    if (setTouchData === null) {
        throw makeContextError(
            'useInventoryDetailsSetTouchData',
            'SetTouchDataContext',
        );
    }
    return setTouchData;
};

export const useInventoryDetailsTouchListeners = () => {
    const touchListeners = useContext(TouchListenersContext);
    if (touchListeners === null) {
        throw makeContextError(
            'useInventoryDetailsTouchListeners',
            'TouchListenersContext',
        );
    }
    return touchListeners;
};

export const useEntryRemoveHandler = (
    dispatch: ReturnType<typeof useInventoryDetailsReducer>[1],
) => {
    return useCallback(
        (inventoryItemID: number, createdAt: string) => {
            dispatch({
                type: InventoryItemsReducerEnum.PREPARE_DELETE,
                payload: {
                    inventoryItemID,
                    createdAt,
                },
            });
        },
        [dispatch],
    );
};

type UseTouchingReturns = ReturnType<typeof useTouching>;
type DispatchTouchData = UseTouchingReturns[2];
type TouchListennersObj = UseTouchingReturns[0];

export const useTouchStartCallback = (
    setTouchData: DispatchTouchData,
    touchListeners: TouchListennersObj,
) => {
    return useCallback(
        (
            item: { id: IInventoryItemRemoved['inventoryItemID'] },
            createdAt: IInventoryItemRemoved['createdAt'],
        ) => {
            setTouchData({
                inventoryItemID: item.id,
                createdAt,
            });
            return touchListeners.touchstart();
        },
        [setTouchData, touchListeners],
    );
};
