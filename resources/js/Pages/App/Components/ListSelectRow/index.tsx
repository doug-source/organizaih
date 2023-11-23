import { ListItemColumn } from '@/Pages/App/Components/ListItemColumn';
import { ListItemPack } from '@/Pages/App/Components/ListItemPack';
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
    <ListItemPack index={index}>
        {image && (
            <NavLink
                to={`/${target}/${action}`}
                onClick={onClick}
            >
                {image}
            </NavLink>
        )}
        <ListItemColumn title={data.name}>
            <NavLink
                to={`/${target}/${action}`}
                onClick={onClick}
            >
                {data.name}
            </NavLink>
        </ListItemColumn>
    </ListItemPack>
);
