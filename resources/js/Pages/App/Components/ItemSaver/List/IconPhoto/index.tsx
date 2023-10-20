import { Overview_ } from '@/Pages/App/Components/ItemSaver/List/IconPhoto/styling';

type IconPhotoProps = {
    photo?: string | null;
    iconDefault: JSX.Element | null;
};

export const IconPhoto = ({ photo, iconDefault }: IconPhotoProps) => {
    if (!photo) {
        return iconDefault;
    }
    return <Overview_ $url={photo} />;
};
