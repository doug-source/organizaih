import {
    DataListItem_,
    TextContent_,
    TextItem_,
} from '@/Pages/App/Components/ListItem';
import { MouseEventHandler, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type ListSelectRowProps = {
    data: { name: string };
    index: number;
    target: string;
    action: string;
    image?: ReactNode;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export const ListSelectRow = ({
    data,
    index,
    target,
    action,
    image,
    onClick = () => {},
}: ListSelectRowProps) => (
    <DataListItem_>
        <div>{index + 1}</div>
        {image && (
            <NavLink
                to={`/${target}/${action}`}
                onClick={onClick}
            >
                {image}
            </NavLink>
        )}
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
