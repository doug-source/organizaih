import { makeDtStartEndpoint } from '@/libraries/toolbox/Date';
import { DataReducerEnum } from '@/Pages/App/libraries/enums/data';
import {
    useAPI,
    useAppDispatch,
    useGenericErrorHandler,
} from '@/Pages/App/libraries/hooks';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

const useQtyRequest = (
    allMonths: boolean,
    date: Date | null,
    rawEndpoint: string,
    setWaitPreRequest: Dispatch<SetStateAction<boolean>>,
) => {
    const [endpoint, setEndpoint] = useState<string>();
    const [storeQty, requestQty] = useAPI<number, number>();
    useEffect(() => {
        let newEndpoint = rawEndpoint;
        if (!allMonths && date !== null) {
            newEndpoint = makeDtStartEndpoint(rawEndpoint, date);
        }
        setEndpoint(newEndpoint);
    }, [allMonths, date, makeDtStartEndpoint, setEndpoint, rawEndpoint]);
    useEffect(() => {
        if (!endpoint) {
            return;
        }
        setWaitPreRequest(true);
        requestQty(endpoint);
    }, [endpoint, requestQty, setWaitPreRequest]);
    useGenericErrorHandler(storeQty.error);
    return [storeQty] as const;
};

export const usePreQty = (rawEndpoint: string) => {
    const appDispatch = useAppDispatch();
    const loadingRef = useRef<boolean | null>(false);
    const [qty, setQty] = useState<number>(0);
    const [waitPreRequest, setWaitPreRequest] = useState(false);
    const [allMonths, setAllMonths] = useState(true);
    const [monthSelected, setMonthSelected] = useState<Date | null>(null);

    const [storeQty] = useQtyRequest(
        allMonths,
        monthSelected,
        rawEndpoint,
        setWaitPreRequest,
    );
    useEffect(() => {
        if (!storeQty.status) {
            appDispatch({ type: DataReducerEnum.LOADING, payload: true });
            loadingRef.current = true;
        }
    }, [storeQty.status, appDispatch]);
    useEffect(() => {
        if (
            storeQty.error !== null ||
            typeof storeQty.data === 'undefined' ||
            loadingRef.current === null
        ) {
            return;
        }
        if (loadingRef.current === false) {
            appDispatch({ type: DataReducerEnum.LOADING, payload: null });
            loadingRef.current = null;
        } else if (storeQty.status && loadingRef.current === true) {
            if (storeQty.data === 0 || qty === storeQty.data) {
                appDispatch({
                    type: DataReducerEnum.LOADING,
                    payload: false,
                });
            }
            setQty(storeQty.data);
            loadingRef.current = false;
            setWaitPreRequest(false);
        }
    }, [
        storeQty.error,
        storeQty.data,
        storeQty.status,
        setQty,
        appDispatch,
        loadingRef,
        setWaitPreRequest,
    ]);
    return {
        qty,
        setAllMonths,
        waitPreRequest,
        setWaitPreRequest,
        monthSelected,
        setMonthSelected,
    };
};
