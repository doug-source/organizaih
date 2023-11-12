import { ForgotPasswordReducerEnum } from '@/Pages/Gate/ForgotPassword/libraries/enums';
import { useForgotPasswordReducer } from '@/Pages/Gate/ForgotPassword/libraries/hooks/reducers';
import { ErrorKeys } from '@/Pages/Gate/ForgotPassword/libraries/types';
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

type ForgotPasswordHandlerFn = (
    email: string,
    setSuccessMsg: Dispatch<SetStateAction<string>>,
    dispatch: ReturnType<typeof useForgotPasswordReducer>[1],
) => readonly [boolean, (evt: FormEvent<HTMLFormElement>) => void];

export const useForgotPasswordHandler: ForgotPasswordHandlerFn = (
    email,
    setSuccessMsg,
    dispatch,
) => {
    const translate = useTranslate();
    const [processing, setProcessing] = useState(false);
    const setLoading = useLoadingDispatch();
    const handler = useCallback(
        function (evt: FormEvent<HTMLFormElement>) {
            evt.preventDefault();

            const url = endpoints.forgotPassword.create;
            if (typeof url === 'undefined' || processing === true) {
                return;
            }

            const formData = new FormData();
            formData.append('email', email);

            setProcessing(true);
            setLoading && setLoading(true);

            setSuccessMsg('');
            dispatch({
                type: ForgotPasswordReducerEnum.TRIGGER_ERRORS,
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
                            setProcessing(false);
                            setSuccessMsg(message);
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
                                    type: ForgotPasswordReducerEnum.TRIGGER_ERRORS,
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
            email,
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
