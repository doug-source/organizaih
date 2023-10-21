import { EntryActionsItem_ } from '@/Pages/App/Components/EntryActionsItem/styling';
import { ReactNode } from 'react';

type EntryActionsItemProps = {
    children: ReactNode & {};
};

export const EntryActionsItem = ({ children }: EntryActionsItemProps) => {
    return <EntryActionsItem_>{children}</EntryActionsItem_>;
};

export { EntryActionsItem_ };
