import { endpoints } from '@/settings';
import axios from 'axios';
import { FormEvent, useCallback, useState } from 'react';

type CatchReturn = {
    response: {
        status: number;
        data: {
            errors: Record<'email' | 'password', [string]>;
        };
    };
};
type ErrorsBox = Partial<Record<'email' | 'password', string>>;

export const useAuthHandler = (email: string, password: string) => {
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState<ErrorsBox>({});
    const handler = useCallback(
        function (evt: FormEvent<HTMLFormElement>) {
            evt.preventDefault();

            const url = endpoints.login.auth;

            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
            setProcessing(true);

            axios
                .post(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then((response) => {
                    setProcessing(false);
                    console.log('THEN');
                    console.log(response);
                })
                .catch(({ response }: CatchReturn) => {
                    switch (response.status) {
                        case 422: {
                            const { errors } = response.data;
                            setErrors(
                                Object.fromEntries(
                                    Object.entries(errors).map(
                                        ([key, list]) => [key, list[0]],
                                    ),
                                ),
                            );
                            break;
                        }
                        default:
                            break;
                    }

                    setProcessing(false);
                    console.log('CATCH');
                    console.log(response);
                });
        },
        [email, password, setProcessing, setErrors],
    );

    return [processing, handler, errors] as const;
};
