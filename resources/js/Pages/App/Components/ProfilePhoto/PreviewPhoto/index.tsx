import { ProfilePhoto } from '@/Pages/App/Components/ProfilePhoto';
import {
    PhotoPreview_,
    PreviewImg_,
} from '@/Pages/App/Components/ProfilePhoto/PreviewPhoto/styling';
import { ComponentPropsWithRef } from 'react';

type ProfilePhotoProps = ComponentPropsWithRef<typeof ProfilePhoto>;

type PreviewPhotoProps = {
    imgSrc: string | null | undefined;
    iconNoPhoto: ProfilePhotoProps['iconNoPhoto'];
};

export const PreviewPhoto = ({ imgSrc, iconNoPhoto }: PreviewPhotoProps) => {
    if (!imgSrc) {
        return <PhotoPreview_>{iconNoPhoto}</PhotoPreview_>;
    }
    return (
        <PhotoPreview_>
            <PreviewImg_ src={imgSrc} />
        </PhotoPreview_>
    );
};
