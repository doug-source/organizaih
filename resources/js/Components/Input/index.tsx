import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react';
import { Input_ } from './styling';

type InputProps = ComponentPropsWithoutRef<typeof Input_>;

type RefPassed = ForwardedRef<HTMLInputElement>;

export const Input = forwardRef(function InputComponent(
    props: InputProps,
    ref: RefPassed,
) {
    return (
        <Input_
            ref={ref}
            {...props}
        />
    );
});

export * from '@/Components/Input/styling';
