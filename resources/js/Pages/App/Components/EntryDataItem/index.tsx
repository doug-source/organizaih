import { EntryDataItem_ } from '@/Pages/App/Components/EntryDataItem/styling';
import { ReactNode } from 'react';

type EntryDataItemProps = {
    children: ReactNode;
};

export const EntryDataItem = ({ children }: EntryDataItemProps) => (
    <EntryDataItem_>{children}</EntryDataItem_>
);

export { EntryDataItem_ };
