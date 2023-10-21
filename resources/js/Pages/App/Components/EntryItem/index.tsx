import { EntryActionsItem } from '@/Pages/App/Components/EntryActionsItem';
import { EntryItem_ } from '@/Pages/App/Components/EntryItem/styling';
import { ComponentPropsWithoutRef, HTMLAttributes, ReactNode } from 'react';

type EntryActionsItemChildren = ComponentPropsWithoutRef<
    typeof EntryActionsItem
>['children'];

type EntryItemProps = {
    children: ReactNode;
    actions: EntryActionsItemChildren;
} & HTMLAttributes<HTMLDivElement>;

export const EntryItem = ({
    children,
    actions,
    className,
    ...remain
}: EntryItemProps) => {
    return (
        <EntryItem_
            className={className}
            {...remain}
        >
            {children}
            <EntryActionsItem>{actions}</EntryActionsItem>
        </EntryItem_>
    );
};

export { EntryItem_ };
