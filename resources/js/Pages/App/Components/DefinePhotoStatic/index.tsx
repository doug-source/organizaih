import { PhotoItem_ } from '@/Pages/App/Components/DefinePhotoStatic/styling';
import { ComponentPropsWithoutRef } from 'react';

type DefinePhotoStaticProps = ComponentPropsWithoutRef<typeof PhotoItem_>;

export const DefinePhotoStatic = ({
    $url,
    children,
    ...remain
}: DefinePhotoStaticProps) => {
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
