import { DefinePhotoAbsolute } from '@/Pages/App/Components/DefinePhotoAbsolute';
import { DefinePhotoStatic } from '@/Pages/App/Components/DefinePhotoStatic';

type ProfilePhotoOutputProps = {
    url: string | null;
    iconNoPhoto: JSX.Element;
    className?: string;
    absolute?: boolean;
};

export const ProfilePhotoOutput = ({
    url,
    iconNoPhoto,
    className,
    absolute,
}: ProfilePhotoOutputProps) => {
    if (!url) {
        return iconNoPhoto;
    }
    if (absolute) {
        return (
            <DefinePhotoAbsolute
                className={className}
                $url={url}
            />
        );
    }
    return (
        <DefinePhotoStatic
            className={className}
            $url={url}
        />
    );
};
