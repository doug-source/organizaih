import { selfReducer } from '@/Pages/App/Components/UserEditionPack/libraries/reducer';
import { IUser } from '@/libraries/types';
import { useReducer } from 'react';

export const useSelfReducer = (user: IUser) => {
    const [state, dispatch] = useReducer(selfReducer, {
        user: {
            ...user,
        },
        errors: {},
    });
    return [state, dispatch] as const;
};
