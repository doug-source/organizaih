import { AuthReducerEnum } from '@/Pages/Gate/Login/libraries/enums';
import { useAuthReducer } from '@/Pages/Gate/Login/libraries/hooks/reducers';
import { ErrorKeys } from '@/Pages/Gate/Login/libraries/types';
import { handleCatchErrors } from '@/Pages/Gate/libraries';
import { useLoadingDispatch } from '@/Pages/Gate/libraries/contexts/hooks';
import { CatchReturn, ThenDataReturn } from '@/Pages/Gate/libraries/types';
import { endpoints } from '@/settings';
import axios from 'axios';
import { FormEvent, useCallback, useState } from 'react';

type AuthHandlerFn = (
    email: string,
    password: string,
    remember: boolean,
    dispatch: ReturnType<typeof useAuthReducer>[1],
) => readonly [boolean, (evt: FormEvent<HTMLFormElement>) => void];

export const useAuthHandler: AuthHandlerFn = (
    email,
    password,
    remember,
    dispatch,
) => {
    const [processing, setProcessing] = useState(false);
    const setLoading = useLoadingDispatch();
    const handler = useCallback(
        function (evt: FormEvent<HTMLFormElement>) {
            evt.preventDefault();

            const url = endpoints.login.auth;
            if (typeof url === 'undefined') {
                return;
            }

            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
            remember && formData.append('remember', 'on');

            setProcessing(true);
            setLoading && setLoading(true);
            dispatch({
                type: AuthReducerEnum.TRIGGER_ERRORS,
                payload: {},
            });

            axios
                .post<ThenDataReturn>(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then(({ status }) => {
                    switch (status) {
                        case 200: {
                            setLoading && setLoading(false);
                            location.reload();
                            break;
                        }
                        default: {
                            setLoading && setLoading(false);
                            console.log(`Unexpected Success Status: ${status}`);
                            setProcessing(false);
                        }
                    }
                })
                .catch(({ response }: CatchReturn<ErrorKeys>) => {
                    switch (response.status) {
                        case 422:
                        case 403: {
                            handleCatchErrors(response, (error) => {
                                dispatch({
                                    type: AuthReducerEnum.TRIGGER_ERRORS,
                                    payload: error,
                                });
                            });
                            break;
                        }
                        default:
                            break;
                    }
                    setLoading && setLoading(false);
                    setProcessing(false);
                });
        },
        [
            email,
            password,
            remember,
            setLoading,
            setProcessing,
            handleCatchErrors,
        ],
    );

    return [processing, handler] as const;
};
