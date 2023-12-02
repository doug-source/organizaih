import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import {
    useAPI,
    useAppDispatch,
    useGenericErrorHandler,
} from '@/Pages/App/libraries/hooks';
import { IUser } from '@/libraries/types';
import { endpoints } from '@/settings';
import { useEffect, useState } from 'react';

export const useUserDetailsRequest = () => {
    const [store] = useAPI<IUser, { pagination: false }>(
        endpoints.user.self.data,
    );
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
        setUser(store.data);
        appDispatch({ type: DataReducerEnum.LOADING, payload: false });
    }, [store.error, store.data, setUser, appDispatch]);
    return [user] as const;
};
