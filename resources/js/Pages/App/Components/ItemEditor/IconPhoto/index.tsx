import { Overview_ } from '@/Pages/App/Components/ItemEditor/IconPhoto/styling';

type IconPhoto = {
    photo?: string | null;
    iconDefault?: JSX.Element;
};

export const IconPhoto = ({ photo = '', iconDefault }: IconPhoto) => {
    if (!photo) {
        return iconDefault ?? null;
    }
    return <Overview_ $url={photo} />;
};
