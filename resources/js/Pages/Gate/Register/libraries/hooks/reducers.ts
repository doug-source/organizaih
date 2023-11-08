import { registerReducer } from '@/Pages/Gate/Register/libraries/reducer';
import { useReducer } from 'react';

export const useRegisterReducer = ({ name = '', email = '' } = {}) => {
    const [state, dispatch] = useReducer(registerReducer, {
        name,
        email,
        password: '',
        password_confirmation: '',
        errors: {},
    });
    return [state, dispatch] as const;
};
