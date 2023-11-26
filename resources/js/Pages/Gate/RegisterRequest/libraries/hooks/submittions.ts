import { RegisterRequestReducerEnum } from '@/Pages/Gate/RegisterRequest/libraries/enums';
import { useRegisterRequestReducer } from '@/Pages/Gate/RegisterRequest/libraries/hooks/reducers';
import { ErrorKeys } from '@/Pages/Gate/RegisterRequest/libraries/types';
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
    email: string,
    phone: string,
    setSuccessMsg: Dispatch<SetStateAction<string>>,
    dispatch: ReturnType<typeof useRegisterRequestReducer>[1],
) => readonly [boolean, (evt: FormEvent<HTMLFormElement>) => void];

export const useRegisterRequestHandler: RegisterHandlerFn = (
    email,
    phone,
    setSuccessMsg,
    dispatch,
) => {
    const translate = useTranslate();
    const [processing, setProcessing] = useState(false);
    const setLoading = useLoadingDispatch();
    const handler = useCallback(
        function (evt: FormEvent<HTMLFormElement>) {
            evt.preventDefault();

            const url = endpoints.registerRequest.store();
            if (typeof url === 'undefined' || processing === true) {
                return;
            }

            const formData = new FormData();
            formData.append('email', email);
            formData.append('phone', phone);

            setSuccessMsg('');
            setProcessing(true);
            setLoading && setLoading(true);
            dispatch({
                type: RegisterRequestReducerEnum.TRIGGER_ERRORS,
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
                                `${translate('request-effected', true)}!`,
                            );
                            break;
                        }
                        default: {
                            setLoading && setLoading(false);
                            console.log(`Unexpected Success Status: ${status}`);
                        }
                    }
                    setProcessing(false);
                })
                .catch(({ response }: CatchReturn<ErrorKeys>) => {
                    switch (response.status) {
                        case 422:
                        case 403: {
                            handleCatchErrors(response, (error) => {
                                dispatch({
                                    type: RegisterRequestReducerEnum.TRIGGER_ERRORS,
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
            phone,
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
