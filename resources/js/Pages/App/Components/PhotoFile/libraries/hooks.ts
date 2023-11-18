import { PhotoFile } from '@/Pages/App/Components/PhotoFile';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import { useAppDispatch } from '@/Pages/App/libraries/hooks';
import { ChangeEventHandler, ComponentPropsWithRef, useCallback } from 'react';

type ProfilePhotoProps = ComponentPropsWithRef<typeof PhotoFile>;

export const usePhotoHandler = (
    onChange: ProfilePhotoProps['onChange'],
): ChangeEventHandler<HTMLInputElement> => {
    const appDispatch = useAppDispatch();
    return useCallback(
        (evt) => {
            const $input = evt.target;
            if ($input === null) {
                return;
            }
            const $file = ($input.files ?? [])[0];
            appDispatch({
                type: DataReducerEnum.CHANGE_PHOTO,
                payload: $file,
            });
            onChange && onChange($input.value);
        },
        [appDispatch, onChange],
    );
};
