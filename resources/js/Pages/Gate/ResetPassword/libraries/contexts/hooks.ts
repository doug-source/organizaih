import { ResetPasswordFieldsContext } from '@/Pages/Gate/ResetPassword/libraries/contexts/ResetPasswordFields';
import { ResetPasswordTokenContext } from '@/Pages/Gate/ResetPassword/libraries/contexts/ResetPasswordToken';
import { useContext } from 'react';

export const useResetPasswordFields = () => {
    return useContext(ResetPasswordFieldsContext);
};

export const useResetPasswordToken = () => {
    return useContext(ResetPasswordTokenContext);
};
