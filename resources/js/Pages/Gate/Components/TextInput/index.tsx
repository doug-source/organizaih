import { useTextFocus } from '@/Pages/Gate/Components/TextInput/libraries/hooks';
import { TextInput_ } from '@/Pages/Gate/Components/TextInput/styling';
import {
    InputHTMLAttributes,
    createRef,
    forwardRef,
    useImperativeHandle,
} from 'react';

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
            <TextInput_
                {...props}
                ref={localRef}
            />
        );
    },
);
