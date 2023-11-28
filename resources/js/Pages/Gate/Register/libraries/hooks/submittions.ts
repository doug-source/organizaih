import { RegisterReducerEnum } from '@/Pages/Gate/Register/libraries/enums';
import { useRegisterReducer } from '@/Pages/Gate/Register/libraries/hooks/reducers';
import { ErrorKeys } from '@/Pages/Gate/Register/libraries/types';
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

type RegisterHandlerFn = (
    name: string,
    email: string,
    password: string,
    password_confirmation: string,
    setSuccessMsg: Dispatch<SetStateAction<string>>,
    dispatch: ReturnType<typeof useRegisterReducer>[1],
) => readonly [boolean, (evt: FormEvent<HTMLFormElement>) => void];

export const useRegisterHandler: RegisterHandlerFn = (
    name,
    email,
    password,
    password_confirmation,
    setSuccessMsg,
    dispatch,
) => {
    const translate = useTranslate();
    const [processing, setProcessing] = useState(false);
    const setLoading = useLoadingDispatch();
    const handler = useCallback(
        function (evt: FormEvent<HTMLFormElement>) {
            evt.preventDefault();

            const url = endpoints.register.store;
            if (typeof url === 'undefined' || processing === true) {
                return;
            }

            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('password_confirmation', password_confirmation);

            setProcessing(true);
            setLoading && setLoading(true);
            dispatch({
                type: RegisterReducerEnum.TRIGGER_ERRORS,
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
                            setSuccessMsg(
                                `${translate('registration-effected', true)}!`,
                            );
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
                                    type: RegisterReducerEnum.TRIGGER_ERRORS,
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
            name,
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
