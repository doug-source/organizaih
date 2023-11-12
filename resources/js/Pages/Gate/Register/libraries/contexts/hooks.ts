import { RegisterFieldsContext } from '@/Pages/Gate/Register/libraries/contexts/RegisterFields';
import { useContext } from 'react';

export const useRegisterFields = () => {
    return useContext(RegisterFieldsContext);
};
