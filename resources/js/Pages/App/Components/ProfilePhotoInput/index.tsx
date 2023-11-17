import { BackPhotoBtn } from '@/Pages/App/Components/BackPhotoBtn';
import { PhotoFile as PhotoFileInput } from '@/Pages/App/Components/PhotoFile';
import { PreviewPhoto } from '@/Pages/App/Components/ProfilePhotoInput/PreviewPhoto';
import { useImgSrcChange } from '@/Pages/App/Components/ProfilePhotoInput/libraries';
import { ProfilePhoto_ } from '@/Pages/App/Components/ProfilePhotoInput/styling';
import { usePhotoFile } from '@/Pages/App/libraries/hooks/Contexts';
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
    const photoFile = usePhotoFile();
    return (
        <ProfilePhoto_>
            <BackPhotoBtn
                photoChosen={photoChosen ?? photoFile?.name}
                photoUrl={photoUrl}
                setImgSrc={setImgSrc}
                photoInputRef={photoInputRef}
                onChange={onChange}
            />
            <PreviewPhoto
                iconNoPhoto={iconNoPhoto}
                imgSrc={imgSrc}
            />
            <PhotoFileInput
                forwardedRef={ref}
                onChange={onChange}
            />
        </ProfilePhoto_>
    );
};

export const ProfilePhotoInput = forwardRef<
    HTMLInputElement,
    ProfilePhotoInnerProps
>(ProfilePhotoInner);
