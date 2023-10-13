import { DataReducerEnum, useAppDispatch } from '@/Pages/App/libraries';
import { useTranslate } from '@/libraries';
import { useEffect } from 'react';

export const useInitPage = (keyTitle = '', loading = true) => {
    const appDispatch = useAppDispatch();
    const translate = useTranslate();

    useEffect(() => {
        const payload = translate(keyTitle, true);
        appDispatch({ type: DataReducerEnum.TITLE, payload });
        appDispatch({ type: DataReducerEnum.LOADING, payload: loading });
    }, [appDispatch, translate, keyTitle, loading]);
};
