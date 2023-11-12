import { forgotPasswordReducer } from '@/Pages/Gate/ForgotPassword/libraries/reducer';
import { useReducer } from 'react';

export const useForgotPasswordReducer = () => {
    const [state, dispatch] = useReducer(forgotPasswordReducer, {
        email: '',
        errors: {},
    });
    return [state, dispatch] as const;
};
