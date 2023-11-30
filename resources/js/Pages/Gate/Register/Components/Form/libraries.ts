import { useRegisterReducer } from '@/Pages/Gate/Register/libraries/hooks/reducers';
import { useStatusServer } from '@/Pages/Gate/libraries/contexts/hooks';

type Errors = ReturnType<typeof useRegisterReducer>[0]['errors'];

type ServerErrors = ReturnType<typeof useStatusServer>['errors'];

export const detachStatusError = (
    errors: Errors,
    serverErrors: ServerErrors,
) => {
    const errorMessage = errors.status ?? errors.token;
    if (errorMessage) {
        return errorMessage;
    }
    return serverErrors.status?.shift();
};
