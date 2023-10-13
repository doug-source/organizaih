import {
    Container_,
    Img_,
    OverviewImg_,
} from '@/Pages/App/Components/PhotoListItem/styling';
import { ReactNode } from 'react';

type PhotoListItemProps = {
    photo?: string | null;
    className?: string;
    iconNoPhoto?: ReactNode;
};

export const PhotoListItem = ({
    className,
    photo,
    iconNoPhoto,
}: PhotoListItemProps) => {
    if (!iconNoPhoto) {
        return null;
    }
    if (!photo) {
        return (
            <div className={className}>
                <Container_>{iconNoPhoto}</Container_>
            </div>
        );
    }

    return (
        <div className={className}>
            <Container_>
                <Img_ $url={photo} />
                <OverviewImg_ $url={photo} />
            </Container_>
        </div>
    );
};
