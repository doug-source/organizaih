import { ProfilePhotoInput } from '@/Pages/App/Components/ProfilePhotoInput';
import { usePhotoFile } from '@/Pages/App/libraries/hooks/Contexts';
import { ComponentPropsWithRef, useEffect, useState } from 'react';

type ProfilePhotoProps = ComponentPropsWithRef<typeof ProfilePhotoInput>;

export const useImgSrcChange = (photoUrl: ProfilePhotoProps['photo']) => {
    const [imgSrc, setImgSrc] = useState<string | null | undefined>();
    const photoFile = usePhotoFile();

    useEffect(() => {
        if (photoFile) {
            const reader = new FileReader();
            if (typeof photoFile !== 'undefined') {
                reader.readAsDataURL(photoFile);
            } else {
                setImgSrc('');
            }
            reader.addEventListener('loadend', () => {
                if (photoFile.name.match(/\.(jpe?g|png)$/)) {
                    if (typeof reader.result === 'string') {
                        setImgSrc(reader.result);
                    }
                }
            });
        } else if (photoUrl) {
            setImgSrc(`/storage/app/${photoUrl}`);
        } else {
            setImgSrc(undefined);
        }
    }, [photoUrl, photoFile, setImgSrc]);
    return [imgSrc, setImgSrc] as const;
};
