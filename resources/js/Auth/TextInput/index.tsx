import { Input } from '@/Components';
import {
    InputHTMLAttributes,
    createRef,
    forwardRef,
    useImperativeHandle,
} from 'react';
import { useTextFocus } from './libraries';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
    isFocused?: boolean;
};

export type TextInputRef = {
    focus: () => void;
};

export const TextInput = forwardRef<TextInputRef, TextInputProps>(
    function TextInputComponent({ isFocused = false, ...props }, ref) {
        const localRef = createRef<HTMLInputElement>();

        useImperativeHandle(ref, () => ({
            focus: () => localRef.current?.focus(),
        }));

        useTextFocus(localRef, isFocused);

        return (
            <Input
                {...props}
                ref={localRef}
            />
        );
    },
);
