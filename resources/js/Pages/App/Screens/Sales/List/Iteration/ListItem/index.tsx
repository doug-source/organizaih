import { Suspense } from 'react';
import {
    Photo as PhotoSubItem,
    Buttons as ButtonsSubItem,
} from '../../../../../shared';
import { AnonymousSVG } from '../../../../../../library/icons/asynchronous';
import { Link } from './Link';
import { DataListItem_ } from '../../../../../shared/List/Item/styling';

type ListItemProps = {
    index: number;
    id: number;
    created_at: string;
    customerName: string;
    customerPhoto: string | null;
    onUpdate?: () => void;
    onRemove?: (saleID: number) => void;
};

export const ListItem = ({
    index,
    id,
    created_at,
    customerName,
    customerPhoto,
    onUpdate = () => {},
    onRemove = () => {},
}: ListItemProps) => {
    return (
        <DataListItem_>
            <div>{index + 1}</div>
            <Link id={id}>
                <PhotoSubItem
                    iconNoPhoto={
                        <Suspense>
                            <AnonymousSVG />
                        </Suspense>
                    }
                    photo={customerPhoto}
                />
            </Link>
            <Link id={id}>
                <div title={created_at}>{created_at}</div>
                <div title={customerName}>{customerName}</div>
            </Link>
            <ButtonsSubItem
                urlPrefix='/sales'
                id={id}
                onUpdate={onUpdate}
                onRemove={onRemove}
            />
        </DataListItem_>
    );
};
