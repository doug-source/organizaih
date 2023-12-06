import { ThenableCallback } from '@/Pages/App/Components/UserEditionPack/libraries/types';

export * from './enums';
export * from './handlers';
export * from './hooks';
export * from './reducer';
export * from './types';

export const detachUserPhotoPath = (
    response: Parameters<ThenableCallback>[0],
) => {
    const {
        data: {
            data: { photo: photoPath },
        },
    } = response;
    return photoPath ?? null;
};

export const detachUserFirstName = (
    response: Parameters<ThenableCallback>[0],
) => {
    const {
        data: {
            data: { name: userName },
        },
    } = response;
    return (userName ?? '').replace(/^(.+)\s.*$/gi, '$1');
};
