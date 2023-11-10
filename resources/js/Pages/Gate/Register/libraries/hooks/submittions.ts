import { useLoadingDispatch } from '@/Pages/Gate/libraries/contexts/hooks';
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

type ErrorKeys =
    | 'name'
    | 'email'
    | 'password'
    | 'password_confirmation'
    | 'status';

type CatchReturn = {
    response: {
        status: number;
        data: {
            errors: Record<ErrorKeys, [string]>;
        };
    };
};
type ErrorsBox = Partial<Record<ErrorKeys, string>>;

type RegisterHandlerFn = (
    name: string,
    email: string,
    password: string,
    password_confirmation: string,
    setSuccessMsg: Dispatch<SetStateAction<string>>,
) => readonly [
    boolean,
    (evt: FormEvent<HTMLFormElement>) => void,
    Partial<Record<ErrorKeys, string>>,
];

export const useRegisterHandler: RegisterHandlerFn = (
    name,
    email,
    password,
    password_confirmation,
    setSuccessMsg,
) => {
    const translate = useTranslate();
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState<ErrorsBox>({});
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
                            console.log(
                                `Unexpected Success Status: ${response.status}`,
                            );
                        }
                    }
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

                    setLoading && setLoading(false);
                    setProcessing(false);
                });
        },
        [
            endpoints,
            name,
            email,
            password,
            processing,
            setErrors,
            setLoading,
            setProcessing,
            setSuccessMsg,
            translate,
            setTimeout,
        ],
    );

    return [processing, handler, errors] as const;
};
