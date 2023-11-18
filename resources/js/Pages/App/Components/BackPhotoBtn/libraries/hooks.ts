import { BackPhotoBtn } from '@/Pages/App/Components/BackPhotoBtn';
import { DataReducerEnum } from '@/Pages/App/libraries';
import { useAppDispatch } from '@/Pages/App/libraries/hooks';
import {
    ComponentPropsWithoutRef,
    MouseEventHandler,
    useCallback,
} from 'react';

type BackPhotoBtnProps = ComponentPropsWithoutRef<typeof BackPhotoBtn>;

export const useClickBackPhotoHandler = (
    setImgSrc: BackPhotoBtnProps['setImgSrc'],
    photoUrl: BackPhotoBtnProps['photoUrl'],
    onChange: BackPhotoBtnProps['onChange'],
    photoInputRef: BackPhotoBtnProps['photoInputRef'],
): MouseEventHandler<HTMLButtonElement> => {
    const appDispatch = useAppDispatch();
    return useCallback(() => {
        setImgSrc(photoUrl ? `/storage/app/${photoUrl}` : null);
        appDispatch({
            type: DataReducerEnum.CHANGE_PHOTO,
        });
        onChange && onChange('');
        const { current: photoInput } = photoInputRef;
        if (photoInput !== null) {
            photoInput.value = '';
        }
    }, [appDispatch, setImgSrc, photoUrl, onChange, photoInputRef]);
};
