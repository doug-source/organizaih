import { Button_ } from '@/Pages/Gate/Components/Button/styling';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

type ButtonProps = {
    children?: ReactNode;
} & ComponentPropsWithoutRef<typeof Button_>;

export const Button = ({ children, ...remain }: ButtonProps) => (
    <Button_ {...remain}>{children}</Button_>
);
