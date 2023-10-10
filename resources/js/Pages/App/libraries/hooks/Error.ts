import { useTranslate } from '@/libraries';
import { useEffect } from 'react';
import { DataReducerEnum, ErrorFromRequest, useAppDispatch } from '..';

export const useGenericErrorHandler = (error: ErrorFromRequest | null) => {
    const appDispatch = useAppDispatch();
    const translate = useTranslate();

    useEffect(() => {
        if (!error) {
            return;
        }
        const errors = error?.response?.data?.errors;
        let customMessage: [string] = [translate('request-error', true)];
        if (errors) {
            customMessage = [Object.values(errors)[0]];
        }
        appDispatch({ type: DataReducerEnum.LOADING, payload: false });
        appDispatch({
            type: DataReducerEnum.ERROR,
            payload: { ...error, customMessage },
        });
    }, [error, translate, appDispatch]);
};
