import { Input_ } from '@/Components/Input';
import { makeInputNumberRef } from '@/Pages/App/Components/InputNumber/libraries';
import { ComponentPropsWithoutRef, forwardRef, useEffect, useRef } from 'react';
import styled from 'styled-components';

type InputNumberProps = Omit<
    ComponentPropsWithoutRef<'input'>,
    'value' | 'type'
> & {
    value: number | undefined;
    type?: 'number' | 'range';
};

const InputRange_ = styled.input``;

export const InputNumber = forwardRef<
    HTMLInputElement | null,
    InputNumberProps
>(({ value, type = 'number', onChange, ...props }, ref) => {
    const inputNumberRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        if (
            inputNumberRef.current !== null &&
            inputNumberRef.current.value !== ''
        ) {
            inputNumberRef.current.stepUp(0);
        }
    }, [inputNumberRef]);
    const InputNumber_ = type === 'number' ? Input_ : InputRange_;

    if (typeof onChange === 'undefined') {
        return (
            <InputNumber_
                {...props}
                type={type}
                ref={makeInputNumberRef(ref, inputNumberRef)}
                onChange={(evt) => {
                    if (
                        evt.target.value.trim() === '' ||
                        inputNumberRef.current === null
                    ) {
                        return;
                    }
                    inputNumberRef.current.valueAsNumber = Number(
                        evt.target.value,
                    );
                }}
            />
        );
    }

    return (
        <InputNumber_
            {...props}
            type={type}
            ref={makeInputNumberRef(ref, inputNumberRef)}
            value={value}
            onChange={(evt) => {
                if (evt.target.value.trim() === '') {
                    return;
                }
                onChange(evt);
            }}
        />
    );
});
