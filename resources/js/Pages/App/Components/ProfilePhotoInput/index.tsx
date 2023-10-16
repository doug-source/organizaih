import { BackPhotoBtn } from '@/Pages/App/Components/BackPhotoBtn';
import { PhotoField } from '@/Pages/App/Components/ProfilePhotoInput/PhotoField';
import { PreviewPhoto } from '@/Pages/App/Components/ProfilePhotoInput/PreviewPhoto';
import { useImgSrcChange } from '@/Pages/App/Components/ProfilePhotoInput/libraries';
import { ProfilePhoto_ } from '@/Pages/App/Components/ProfilePhotoInput/styling';
import {
    ForwardRefRenderFunction,
    ForwardedRef,
    forwardRef,
    useRef,
} from 'react';

type ProfilePhotoInnerProps = {
    iconNoPhoto: JSX.Element;
    photo?: string | null;
    photoChosen?: string;
    onChange?: (value: string) => void;
};

const ProfilePhotoInner: ForwardRefRenderFunction<
    HTMLInputElement,
    ProfilePhotoInnerProps
> = (
    {
        iconNoPhoto,
        photo: photoUrl,
        photoChosen,
        onChange = (f) => f,
    }: ProfilePhotoInnerProps,
    ref: ForwardedRef<HTMLInputElement>,
) => {
    const [imgSrc, setImgSrc] = useImgSrcChange(photoUrl);
    const photoInputRef = useRef<HTMLInputElement | null>(null);

    return (
        <ProfilePhoto_>
            <BackPhotoBtn
                photoChosen={photoChosen}
                photoUrl={photoUrl}
                setImgSrc={setImgSrc}
                photoInputRef={photoInputRef}
                onChange={onChange}
            />
            <PreviewPhoto
                iconNoPhoto={iconNoPhoto}
                imgSrc={imgSrc}
            />
            <PhotoField
                forwardedRef={ref}
                setImgSrc={setImgSrc}
                onChange={onChange}
            />
        </ProfilePhoto_>
    );
};

export const ProfilePhotoInput = forwardRef<
    HTMLInputElement,
    ProfilePhotoInnerProps
>(ProfilePhotoInner);
