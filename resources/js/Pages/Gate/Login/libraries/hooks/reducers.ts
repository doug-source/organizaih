import { authReducer } from '@/Pages/Gate/Login/libraries/reducer';
import { useReducer } from 'react';

export const useAuthReducer = () => {
    const [state, dispatch] = useReducer(authReducer, {
        email: '',
        password: '',
        remember: false,
        errors: {},
    });
    return [state, dispatch] as const;
};
