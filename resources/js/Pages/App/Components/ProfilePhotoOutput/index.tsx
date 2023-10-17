import { PhotoItem_ } from '@/Pages/App/Components/DefinePhoto';

type PhotoProps = {
    url: string | null;
    iconNoPhoto: JSX.Element;
};

export const ProfilePhotoOutput = ({ url, iconNoPhoto }: PhotoProps) => {
    if (!url) {
        return iconNoPhoto;
    }
    return <PhotoItem_ $url={url} />;
};
