import {
    TextContent_,
    TextItem_,
} from '@/Pages/App/Components/ListItemColumn/styling';
import { ReactNode } from 'react';

type ListItemColumnProps = {
    title?: string;
    className?: string;
    children?: ReactNode;
};

export const ListItemColumn = ({
    title,
    className,
    children,
}: ListItemColumnProps) => {
    return (
        <TextItem_
            className={className}
            title={title}
        >
            <TextContent_>{children}</TextContent_>
        </TextItem_>
    );
};
