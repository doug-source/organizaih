import { resetPasswordReducer } from '@/Pages/Gate/ResetPassword/libraries/reducer';
import { useReducer } from 'react';

export const useResetPasswordReducer = ({ email = '' } = {}) => {
    const [state, dispatch] = useReducer(resetPasswordReducer, {
        email,
        password: '',
        password_confirmation: '',
        errors: {},
    });
    return [state, dispatch] as const;
};
