import { dataReducer } from '@/Pages/App/libraries/reducers/data';

export const detachErrorMessage = (
    error?: Parameters<typeof dataReducer>[0]['error'],
) => {
    if (!error || !error.customMessage) {
        return '';
    }
    return error.customMessage[0] || '';
};
