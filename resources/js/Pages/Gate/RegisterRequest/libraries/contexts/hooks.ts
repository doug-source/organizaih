import { RegisterRequestFieldsContext } from '@/Pages/Gate/RegisterRequest/libraries/contexts/RegisterRequestFields';
import { useContext } from 'react';

export const useRegisterRequestFields = () => {
    return useContext(RegisterRequestFieldsContext);
};
