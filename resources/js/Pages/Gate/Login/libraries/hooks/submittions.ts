import { ErrorKeys } from '@/Pages/Gate/Login/libraries/types';
import { handleCatchErrors } from '@/Pages/Gate/libraries';
import { useLoadingDispatch } from '@/Pages/Gate/libraries/contexts/hooks';
import { CatchReturn, ErrorsBox } from '@/Pages/Gate/libraries/types';
import { endpoints } from '@/settings';
import axios from 'axios';
import { FormEvent, useCallback, useState } from 'react';

type AuthHandlerFn = (
    email: string,
    password: string,
    remember: boolean,
) => readonly [
    boolean,
    (evt: FormEvent<HTMLFormElement>) => void,
    Partial<Record<ErrorKeys, string>>,
];

export const useAuthHandler: AuthHandlerFn = (email, password, remember) => {
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState<ErrorsBox<ErrorKeys>>({});
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
            setErrors({});

            axios
                .post(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then((response) => {
                    switch (response.status) {
                        case 200: {
                            setLoading && setLoading(false);
                            location.reload();
                            break;
                        }
                        default: {
                            setLoading && setLoading(false);
                            console.log(
                                `Unexpected Success Status: ${response.status}`,
                            );
                        }
                    }
                    setProcessing(false);
                })
                .catch(({ response }: CatchReturn<ErrorKeys>) => {
                    switch (response.status) {
                        case 422:
                        case 403: {
                            handleCatchErrors(response, setErrors);
                            break;
                        }
                        default:
                            break;
                    }

                    setLoading && setLoading(false);
                    setProcessing(false);
                });
        },
        [email, password, remember, setLoading, setProcessing, setErrors],
    );

    return [processing, handler, errors] as const;
};
