import {
    DispatchFn,
    StateSaleList,
    createFirstYearDate,
} from '@/Pages/App/Screens/Sales/List/libraries';
import { SalesReducerEnum } from '@/Pages/App/Screens/Sales/List/libraries/enums';
import { salesReducer } from '@/Pages/App/Screens/Sales/List/libraries/reducers';
import {
    SalesPayload,
    SalesReducerState,
} from '@/Pages/App/Screens/Sales/List/libraries/types';
import { ISaleResponse, ISales } from '@/Pages/App/Screens/Sales/types';
import {
    DataReducerEnum,
    DeletionReducerEnum,
} from '@/Pages/App/libraries/enums';
import {
    useAppDispatch,
    useGenericErrorHandler,
} from '@/Pages/App/libraries/hooks';
import {
    ErrorFromRequest,
    useAPI,
    useDeleteAPI,
} from '@/Pages/App/libraries/hooks/Api';
import { paginationSetting } from '@/Pages/App/settings';
import { formatRequestDate } from '@/libraries/toolbox/Date';
import { endpoints } from '@/settings';
import { Dispatch, useCallback, useEffect, useReducer } from 'react';

export const useSaleReducer = () => {
    const [state, dispatch] = useReducer(salesReducer, {
        total: [],
        sales: [],
        page: paginationSetting.pageInitial,
        group: paginationSetting.groupList[0],
        lastPage: paginationSetting.lastPageInitial,
        qty: paginationSetting.totalInitial,
        error: null,
        endpoint: endpoints.sale.list,
        idRemoved: null,
        search: '',
        preConfirm: false,
        warning: false,
        productName: '',
        customerName: '',

        dtStart: createFirstYearDate(),
        dtEnd: new Date(),
    });
    return [state, dispatch] as const;
};

export const useSaleRequest = (
    endpoint: SalesReducerState['endpoint'],
    page: SalesReducerState['page'],
    group: SalesReducerState['group'],
    dtStart: SalesReducerState['dtStart'],
    dtEnd: SalesReducerState['dtEnd'],
    productName: SalesReducerState['productName'],
    customerName: SalesReducerState['customerName'],
) => {
    const appDispatch = useAppDispatch();
    const [storeSales, requestSales] = useAPI<
        ISaleResponse,
        { pagination: true }
    >();
    useEffect(() => {
        if (endpoint && page && group && dtStart && dtEnd) {
            const arrQueryString = [`page=${page}`, `group=${group}`];
            const productNameVal = productName.trim();
            if (productNameVal) {
                arrQueryString.push(`productName=${productNameVal}`);
            }
            const customerNameVal = customerName.trim();
            if (customerNameVal) {
                arrQueryString.push(`customerName=${customerNameVal}`);
            }
            arrQueryString.push(
                `dtStart=${formatRequestDate(dtStart)}`,
                `dtEnd=${formatRequestDate(dtEnd)}`,
            );

            requestSales(`${endpoint}?${arrQueryString.join('&')}`);
            if (!storeSales.status) {
                appDispatch({ type: DataReducerEnum.LOADING, payload: true });
            }
        }
    }, [
        endpoint,
        page,
        group,
        dtStart,
        dtEnd,
        productName,
        customerName,
        storeSales.status,
        requestSales,
        appDispatch,
    ]);
    useGenericErrorHandler(storeSales.error);
    return [storeSales];
};

type SaleResponse =
    | {
          data: ISaleResponse[];
          last_page: number;
          total: number;
      }
    | undefined;

export const useSaleResponse = (
    error: ErrorFromRequest | null,
    response: SaleResponse,
    status: boolean,
    dispatch: Dispatch<SalesPayload.Skeleton<ISales>>,
) => {
    const appDispatch = useAppDispatch();
    useEffect(() => {
        if (error || !response || !status) {
            return;
        }
        const { data = [], last_page: lastPage = 0, total } = response;
        dispatch({ type: SalesReducerEnum.INIT, payload: data });
        dispatch({ type: SalesReducerEnum.CHANGE_LAST, payload: lastPage });
        dispatch({ type: SalesReducerEnum.CHANGE_QTY, payload: total });
        appDispatch({ type: DataReducerEnum.LOADING, payload: false });
    }, [error, response, status, dispatch, appDispatch]);
};

export const useSaleRemotion = (dispatch: DispatchFn) => {
    const appDispatch = useAppDispatch();
    const [remotion, doRemotion] = useDeleteAPI();
    useEffect(() => {
        if (remotion.error) {
            dispatch({ type: DeletionReducerEnum.CANCEL_DELETE });
            doRemotion('');
        } else if (remotion.status) {
            dispatch({ type: DeletionReducerEnum.DELETE });
            appDispatch({ type: DataReducerEnum.LOADING, payload: false });
        }
    }, [remotion.error, remotion.status, dispatch, appDispatch, doRemotion]);
    useGenericErrorHandler(remotion.error);
    return [doRemotion] as const;
};

export const useConfirmYesHandler = (
    idRemoved: StateSaleList['idRemoved'],
    dispatch: DispatchFn,
    doRemotion: ReturnType<typeof useSaleRemotion>[0],
) => {
    const appDispatch = useAppDispatch();
    return useCallback(() => {
        if (idRemoved === null) {
            return;
        }
        dispatch({ type: DeletionReducerEnum.HIDE_CONFIRM });
        doRemotion(endpoints.sale.delete(idRemoved));
        appDispatch({
            type: DataReducerEnum.LOADING,
            payload: true,
        });
    }, [dispatch, doRemotion, idRemoved]);
};
