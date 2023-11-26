import { registerRequestReducer } from '@/Pages/Gate/RegisterRequest/libraries/reducer';
import { useReducer } from 'react';

export const useRegisterRequestReducer = ({ email = '' } = {}) => {
    const [state, dispatch] = useReducer(registerRequestReducer, {
        email,
        phone: '',
        errors: {},
    });
    return [state, dispatch] as const;
};
