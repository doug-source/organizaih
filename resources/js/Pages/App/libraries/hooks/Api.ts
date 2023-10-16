import axios from 'axios';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export type ErrorFromRequest = { response: { data: { errors: object } } };

type DataDefine<T, W> = W extends { pagination: true }
    ? { data: T[]; last_page: number; total: number }
    : W extends T[]
    ? T[]
    : T;

export type ApiData<T, W> = [
    {
        data: DataDefine<T, W> | undefined;
        readonly status: boolean;
        readonly error: ErrorFromRequest | null;
    },
    Dispatch<SetStateAction<string>>,
];

export const useAPI = <T, W>(endpoint = ''): ApiData<T, W> => {
    const [status, setStatus] = useState(false);
    const [data, setData] = useState<DataDefine<T, W>>();
    const [error, setError] = useState<ErrorFromRequest | null>(null);
    const [url, setUrl] = useState(endpoint);
    const { tokenAuth } = window.data;

    useEffect(() => {
        if (!url) {
            return;
        }
        setData(undefined);
        setStatus(false);
        axios
            .get(url, {
                headers: {
                    Authorization: `Bearer ${tokenAuth}`,
                },
            })
            .then((response) => {
                const data = response.data as DataDefine<T, W>;
                setData(data);
            })
            .then(() => setStatus(true))
            .catch((error: ErrorFromRequest) => {
                setError(error);
            })
            .catch(() => setStatus(true));
    }, [url, tokenAuth]);
    return [{ data, status, error }, setUrl];
};

export const useDeleteAPI = (endpoint = '') => {
    const [status, setStatus] = useState(false);
    const [error, setError] = useState<ErrorFromRequest | null>(null);
    const [url, setUrl] = useState(endpoint);
    const { tokenAuth } = window.data;

    useEffect(() => {
        if (!url) {
            return;
        }
        setStatus(false);
        setError(null);
        axios
            .delete(url, {
                headers: {
                    Authorization: `Bearer ${tokenAuth}`,
                },
            })
            .then(() => setStatus(true))
            .catch((error: ErrorFromRequest) => {
                setStatus(true);
                setError(error);
            });
    }, [url]);
    return [{ status, error }, setUrl] as const;
};
