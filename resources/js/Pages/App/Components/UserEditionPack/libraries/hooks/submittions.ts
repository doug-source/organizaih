import { useFormData } from '@/Pages/App/Components/UserEditionPack/libraries/hooks';
import { ErrorsSetterType, ErrorsType } from '@/Pages/App/Screens/types';
import { DataReducerEnum, useAppDispatch } from '@/Pages/App/libraries';
import { IUser } from '@/libraries/types';
import { endpoints, navigations } from '@/settings';
import axios from 'axios';
import { FormEvent, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

type ThenableCallback = (response: { status: number }) => void;

const useThenableCallback = (): ThenableCallback => {
    const appDispatch = useAppDispatch();
    const navigate = useNavigate();
    return useCallback(
        (response) => {
            switch (response.status) {
                case 200: {
                    appDispatch({
                        type: DataReducerEnum.CHANGE_PHOTO,
                    });
                    appDispatch({
                        type: DataReducerEnum.LOADING,
                        payload: false,
                    });
                    navigate(navigations.configuration.index);
                    break;
                }
                default: {
                    appDispatch({
                        type: DataReducerEnum.LOADING,
                        payload: false,
                    });
                    console.log(
                        `Unexpected Success Status: ${response.status}`,
                    );
                }
            }
        },
        [history.back, appDispatch],
    );
};

type CatchResponse = {
    response: {
        status: number;
        data: { errors: ErrorsType };
    };
};
type CatchCallback = (error: CatchResponse) => void;

const useCatchCallback = (setErrors: ErrorsSetterType): CatchCallback => {
    const appDispatch = useAppDispatch();
    const navigate = useNavigate();
    return useCallback(
        ({ response }) => {
            switch (response.status) {
                case 422: {
                    const {
                        data: { errors },
                    } = response;
                    setErrors && setErrors(errors);
                    appDispatch({
                        type: DataReducerEnum.LOADING,
                        payload: false,
                    });
                    break;
                }
                case 403:
                case 404: {
                    // NOT FOUND
                    navigate(navigations.configuration.index);
                    break;
                }
                default: {
                    console.log('Unexpected Error');
                    console.log(response);
                    break;
                }
            }
        },
        [navigate, appDispatch, setErrors],
    );
};

export const useSelfSubmit = (
    userInput: IUser,
    setErrors: ErrorsSetterType,
) => {
    const appDispatch = useAppDispatch();
    const thenCallback = useThenableCallback();
    const catchCallback = useCatchCallback(setErrors);

    const url = endpoints.user.self.update;
    const photoRef = useRef<HTMLInputElement>(null);
    const [formData] = useFormData(
        userInput,
        (photoRef?.current?.files ?? [])[0],
    );
    const { tokenAuth } = window.data;

    return [
        useCallback(
            (evt: FormEvent<HTMLFormElement>) => {
                evt.preventDefault();
                if (!navigator.onLine) {
                    return;
                }

                appDispatch({ type: DataReducerEnum.LOADING, payload: true });
                axios
                    .post(url, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            Authorization: `Bearer ${tokenAuth}`,
                        },
                    })
                    .then(thenCallback)
                    .catch(catchCallback);
            },
            [
                navigator.onLine,
                url,
                appDispatch,
                thenCallback,
                catchCallback,
                tokenAuth,
                formData,
            ],
        ),
        photoRef,
    ] as const;
};
