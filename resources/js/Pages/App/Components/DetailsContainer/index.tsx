import { DetailsContainer_ } from '@/Pages/App/Components/DetailsContainer/styling';
import { HTMLAttributes, ReactNode } from 'react';

type DetailsContainerProps = {
    children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const DetailsContainer = ({
    children,
    ...remain
}: DetailsContainerProps) => {
    return <DetailsContainer_ {...remain}>{children}</DetailsContainer_>;
};
