import { ResetPasswordReducerEnum } from '@/Pages/Gate/ResetPassword/libraries/enums';
import { useResetPasswordReducer } from '@/Pages/Gate/ResetPassword/libraries/hooks/reducers';
import { ErrorKeys } from '@/Pages/Gate/ResetPassword/libraries/types';
import { handleCatchErrors } from '@/Pages/Gate/libraries';
import { useLoadingDispatch } from '@/Pages/Gate/libraries/contexts/hooks';
import { CatchReturn, ThenDataReturn } from '@/Pages/Gate/libraries/types';
import { useTranslate } from '@/libraries/hooks';
import { endpoints } from '@/settings';
import axios from 'axios';
import {
    Dispatch,
    FormEvent,
    SetStateAction,
    useCallback,
    useState,
} from 'react';

type ResetPasswordHandlerFn = (
    email: string,
    password: string,
    password_confirmation: string,
    token: string,
    setSuccessMsg: Dispatch<SetStateAction<string>>,
    dispatch: ReturnType<typeof useResetPasswordReducer>[1],
) => readonly [boolean, (evt: FormEvent<HTMLFormElement>) => void];

export const useResetPasswordHandler: ResetPasswordHandlerFn = (
    email,
    password,
    password_confirmation,
    token,
    setSuccessMsg,
    dispatch,
) => {
    const translate = useTranslate();
    const [processing, setProcessing] = useState(false);
    const setLoading = useLoadingDispatch();
    const handler = useCallback(
        function (evt: FormEvent<HTMLFormElement>) {
            evt.preventDefault();

            const url = endpoints.resetPassword.update;
            if (typeof url === 'undefined' || processing === true) {
                return;
            }

            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
            formData.append('password_confirmation', password_confirmation);
            formData.append('token', token);

            setProcessing(true);
            setLoading && setLoading(true);
            setSuccessMsg('');
            dispatch({
                type: ResetPasswordReducerEnum.TRIGGER_ERRORS,
                payload: {},
            });

            axios
                .post<ThenDataReturn>(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then(({ status, data: { message } }) => {
                    switch (status) {
                        case 200: {
                            setLoading && setLoading(false);
                            setSuccessMsg(message);
                            setTimeout(() => {
                                location.href = location.origin;
                            }, 2500);
                            break;
                        }
                        default: {
                            setLoading && setLoading(false);
                            console.log(`Unexpected Success Status: ${status}`);
                        }
                    }
                })
                .catch(({ response }: CatchReturn<ErrorKeys>) => {
                    switch (response.status) {
                        case 422:
                        case 403: {
                            handleCatchErrors(response, (error) => {
                                dispatch({
                                    type: ResetPasswordReducerEnum.TRIGGER_ERRORS,
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
            endpoints,
            token,
            email,
            password,
            password_confirmation,
            processing,
            dispatch,
            setLoading,
            setProcessing,
            setSuccessMsg,
            translate,
            handleCatchErrors,
        ],
    );

    return [processing, handler] as const;
};
