import { registerReducer } from '@/Pages/Gate/Register/libraries/reducer';
import { useReducer } from 'react';

type HookProps =
    | {
          name: string;
          email: string;
          phone: string | null;
      }
    | undefined;

export const useRegisterReducer = (props: HookProps) => {
    const [state, dispatch] = useReducer(registerReducer, {
        name: props?.name ?? '',
        email: props?.email ?? '',
        phone: props?.phone ?? '',
        password: '',
        password_confirmation: '',
        errors: {},
    });
    return [state, dispatch] as const;
};
