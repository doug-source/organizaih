import { Row_ } from '@/Pages/Gate/Components/Row/styling';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

type RowProps = {
    children?: ReactNode;
} & ComponentPropsWithoutRef<typeof Row_>;

export const Row = ({ children, ...remain }: RowProps) => (
    <Row_ {...remain}>{children}</Row_>
);
