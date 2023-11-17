import { BackPhotoBtn_ } from '@/Pages/App/Components/BackPhotoBtn/styling';
import { BackFileSVG, DataReducerEnum } from '@/Pages/App/libraries';
import { useAppDispatch } from '@/Pages/App/libraries/hooks';
import { useTranslate } from '@/libraries';
import { Dispatch, MutableRefObject, SetStateAction, Suspense } from 'react';

type BackPhotoBtnProps = {
    photoChosen?: string;
    photoUrl?: string | null;
    onChange?: (value: string) => void;
    setImgSrc: Dispatch<SetStateAction<string | null | undefined>>;
    photoInputRef: MutableRefObject<HTMLInputElement | null>;
};

export const BackPhotoBtn = ({
    photoChosen,
    photoUrl,
    onChange,
    setImgSrc,
    photoInputRef,
}: BackPhotoBtnProps) => {
    const translate = useTranslate();
    const appDispatch = useAppDispatch();
    if (!photoChosen) {
        return null;
    }
    return (
        <BackPhotoBtn_
            title={translate('back-previous-state', true)}
            onClick={() => {
                onChange && onChange('');
                setImgSrc(photoUrl && `/storage/app/${photoUrl}`);
                const { current: photoInput } = photoInputRef;
                if (photoInput !== null) {
                    photoInput.value = '';
                }
                appDispatch({
                    type: DataReducerEnum.CHANGE_PHOTO,
                });
            }}
        >
            <Suspense>
                <BackFileSVG />
            </Suspense>
        </BackPhotoBtn_>
    );
};
