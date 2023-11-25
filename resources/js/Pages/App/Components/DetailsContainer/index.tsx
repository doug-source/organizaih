import { DetailsContainer_ } from '@/Pages/App/Components/DetailsContainer/styling';
import { ComponentPropsWithoutRef, HTMLAttributes, ReactNode } from 'react';

type DetailsContainerProps = {
    gapItems?: ComponentPropsWithoutRef<typeof DetailsContainer_>['$gapItems'];
    children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const DetailsContainer = ({
    children,
    gapItems,
    ...remain
}: DetailsContainerProps) => {
    return (
        <DetailsContainer_
            $gapItems={gapItems}
            {...remain}
        >
            {children}
        </DetailsContainer_>
    );
};
