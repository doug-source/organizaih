import { PhotoItem_ } from '@/Pages/App/Components/DefinePhotoAbsolute/styling';
import { ComponentPropsWithoutRef } from 'react';

type DefinePhotoAbsoluteProps = ComponentPropsWithoutRef<typeof PhotoItem_>;

export const DefinePhotoAbsolute = ({
    $url,
    children,
    ...remain
}: DefinePhotoAbsoluteProps) => {
    return (
        <PhotoItem_
            $url={$url}
            {...remain}
        >
            {children}
        </PhotoItem_>
    );
};

export * from '@/Pages/App/Components/DefinePhotoAbsolute/styling';
