import { IUser } from '@/Pages/App/Screens/User/types';
import { DataReducerEnum } from '@/Pages/App/libraries';
import {
    useAPI,
    useAppDispatch,
    useGenericErrorHandler,
} from '@/Pages/App/libraries/hooks';
import { formatDateByString } from '@/libraries';
import { endpoints } from '@/settings';
import { useEffect, useState } from 'react';

export const useUserDetailsRequest = (id: number) => {
    const endpoint = (id && endpoints.user.data(id)) || '';
    const [store] = useAPI<IUser, { pagination: false }>(endpoint);
    useGenericErrorHandler(store.error);
    return [store] as const;
};

type Store = ReturnType<typeof useUserDetailsRequest>[0];

export const useUserDetailsResponse = (store: Store) => {
    const appDispatch = useAppDispatch();
    const [user, setUser] = useState<IUser>();

    useEffect(() => {
        if (store.error || !store.data) {
            return;
        }
        setUser({
            ...store.data,
            email_verified_at: formatDateByString(store.data.email_verified_at),
            created_at: formatDateByString(store.data.created_at),
            updated_at: formatDateByString(store.data.updated_at),
            roles: store.data.roles,
            abilities: store.data.abilities,
        });
        appDispatch({ type: DataReducerEnum.LOADING, payload: false });
    }, [store.error, store.data, setUser, appDispatch]);
    return [user] as const;
};
