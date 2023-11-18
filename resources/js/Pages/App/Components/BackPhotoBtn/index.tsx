import { useClickBackPhotoHandler } from '@/Pages/App/Components/BackPhotoBtn/libraries/hooks';
import { BackPhotoBtn_ } from '@/Pages/App/Components/BackPhotoBtn/styling';
import { BackFileSVG } from '@/Pages/App/libraries';
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
    const clickHandler = useClickBackPhotoHandler(
        setImgSrc,
        photoUrl,
        onChange,
        photoInputRef,
    );
    if (!photoChosen) {
        return null;
    }
    return (
        <BackPhotoBtn_
            title={translate('back-previous-state', true)}
            onClick={clickHandler}
        >
            <Suspense>
                <BackFileSVG />
            </Suspense>
        </BackPhotoBtn_>
    );
};
