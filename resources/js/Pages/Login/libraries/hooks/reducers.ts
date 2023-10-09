import { useReducer } from 'react';
import { authReducer } from '../reducer';

export const useAuthReducer = () => {
    const [state, dispatch] = useReducer(authReducer, {
        email: '',
        password: '',
        errors: {},
    });
    return [state, dispatch] as const;
};
