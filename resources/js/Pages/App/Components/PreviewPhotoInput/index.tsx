import {
    PhotoPreview_,
    PreviewImg_,
} from '@/Pages/App/Components/PreviewPhotoInput/styling';

type PreviewPhotoProps = {
    imgSrc: string | null | undefined;
    iconNoPhoto: JSX.Element;
};

export const PreviewPhotoInput = ({
    imgSrc,
    iconNoPhoto,
}: PreviewPhotoProps) => {
    if (!imgSrc) {
        return <PhotoPreview_>{iconNoPhoto}</PhotoPreview_>;
    }
    return (
        <PhotoPreview_>
            <PreviewImg_ src={imgSrc} />
        </PhotoPreview_>
    );
};
