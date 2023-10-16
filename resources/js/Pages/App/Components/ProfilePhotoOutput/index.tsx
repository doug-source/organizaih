import { PhotoItem_ } from '@/Pages/App/Components/DefinePhoto';
import { AnonymousPhoto_ } from '@/Pages/App/Components/ProfilePhotoOutput/styling';

type PhotoProps = {
    url: string | null;
};

export const ProfilePhotoOutput = ({ url }: PhotoProps) => {
    if (!url) {
        return <AnonymousPhoto_ />;
    }
    return <PhotoItem_ $url={url} />;
};
