import { useReducer } from 'react';
import { authReducer } from '../reducer';

export const useAuthReducer = () => {
    const [state, dispatch] = useReducer(authReducer, {
        email: '',
        password: '',
        remember: false,
        errors: {},
    });
    return [state, dispatch] as const;
};
