import {
    DataListItem_,
    ListItemType,
    TextContent_,
    TextItem_,
} from '@/Pages/App/Components/ListItem';
import { PhotoListItem } from '@/Pages/App/Components/PhotoListItem';
import { AnonymousSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { MouseEventHandler, Suspense } from 'react';
import { NavLink } from 'react-router-dom';

type ListSelectRowProps = {
    data: ListItemType;
    index: number;
    target: string;
    action: string;
    iconNoPhoto: JSX.Element;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export const ListSelectRow = ({
    data,
    index,
    target,
    action,
    iconNoPhoto,
    onClick = () => {},
}: ListSelectRowProps) => (
    <DataListItem_>
        <div>{index + 1}</div>
        <NavLink
            to={`/${target}/${action}`}
            onClick={onClick}
        >
            <PhotoListItem
                iconNoPhoto={
                    <Suspense>
                        <AnonymousSVG />
                    </Suspense>
                }
                photo={data.photo}
            />
        </NavLink>
        <TextItem_ title={data.name}>
            <TextContent_>
                <NavLink
                    to={`/${target}/${action}`}
                    onClick={onClick}
                >
                    {data.name}
                </NavLink>
            </TextContent_>
        </TextItem_>
    </DataListItem_>
);
