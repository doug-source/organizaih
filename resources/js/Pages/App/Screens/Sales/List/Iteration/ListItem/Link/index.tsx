import { NavLink } from 'react-router-dom';
import { SubItem_ } from './styling';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { ListItem } from '..';
import { useAppDispatch } from '../../../../../../hooks';
import { DataReducerEnum } from '../../../../../../enums';

type ListItemProps = ComponentPropsWithoutRef<typeof ListItem>;

type LinkProps = {
    id: ListItemProps['id'];
    children: ReactNode;
};

export const Link = ({ id, children }: LinkProps) => {
    const appDispatch = useAppDispatch();
    return (
        <SubItem_>
            <NavLink
                to={`/sales/${id}`}
                onClick={() =>
                    appDispatch({
                        type: DataReducerEnum.TITLE,
                        payload: '',
                    })
                }
            >
                {children}
            </NavLink>
        </SubItem_>
    );
};
