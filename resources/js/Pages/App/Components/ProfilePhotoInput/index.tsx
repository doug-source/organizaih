import { BackPhotoBtn } from '@/Pages/App/Components/BackPhotoBtn';
import { PhotoFile as PhotoFileInput } from '@/Pages/App/Components/PhotoFile';
import { PreviewPhotoInput } from '@/Pages/App/Components/PreviewPhotoInput';
import { useImgSrcChange } from '@/Pages/App/Components/ProfilePhotoInput/libraries';
import { ProfilePhoto_ } from '@/Pages/App/Components/ProfilePhotoInput/styling';
import { usePhotoFile } from '@/Pages/App/libraries/hooks/Contexts';
import {
    ComponentPropsWithoutRef,
    ForwardRefRenderFunction,
    ForwardedRef,
    forwardRef,
    useRef,
    useState,
} from 'react';

type PreviewPhotoInputProps = ComponentPropsWithoutRef<
    typeof PreviewPhotoInput
>;

type ProfilePhotoInnerProps = {
    iconNoPhoto: PreviewPhotoInputProps['iconNoPhoto'];
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
    const [fileInputKey, setFileInputKey] = useState(Date.now());
    return (
        <ProfilePhoto_>
            <BackPhotoBtn
                photoChosen={photoChosen ?? photoFile?.name}
                photoUrl={photoUrl}
                setImgSrc={setImgSrc}
                photoInputRef={photoInputRef}
                onChange={(value) => {
                    onChange(value);
                    setFileInputKey(Date.now());
                }}
            />
            <PreviewPhotoInput
                iconNoPhoto={iconNoPhoto}
                imgSrc={imgSrc}
            />
            <PhotoFileInput
                key={fileInputKey}
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
