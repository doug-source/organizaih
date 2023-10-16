import { ProfilePhoto } from '@/Pages/App/Components/ProfilePhoto';
import { ComponentPropsWithRef, useEffect, useState } from 'react';

type ProfilePhotoProps = ComponentPropsWithRef<typeof ProfilePhoto>;

export const useImgSrcChange = (photoUrl: ProfilePhotoProps['photo']) => {
    const [imgSrc, setImgSrc] = useState<string | null | undefined>();
    useEffect(() => {
        if (photoUrl) {
            setImgSrc(`/storage/app/${photoUrl}`);
        } else {
            setImgSrc(undefined);
        }
    }, [photoUrl]);
    return [imgSrc, setImgSrc] as const;
};
