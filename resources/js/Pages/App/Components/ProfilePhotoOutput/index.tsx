import { PhotoItem_ } from '@/Pages/App/Components/DefinePhoto';

type PhotoProps = {
    url: string | null;
    iconNoPhoto: JSX.Element;
    className?: string;
};

export const ProfilePhotoOutput = ({
    url,
    iconNoPhoto,
    className,
}: PhotoProps) => {
    if (!url) {
        return iconNoPhoto;
    }
    return (
        <PhotoItem_
            className={className}
            $url={url}
        />
    );
};
