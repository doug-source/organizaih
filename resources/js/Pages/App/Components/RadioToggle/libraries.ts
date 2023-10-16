import { RadioToggle } from '@/Pages/App/Components/RadioToggle';
import {
    ChangeEventHandler,
    ComponentPropsWithoutRef,
    useCallback,
} from 'react';

type RadioToggleProps = ComponentPropsWithoutRef<typeof RadioToggle>;

export const useChangeHandler = (
    onChange: RadioToggleProps['onChange'],
): ChangeEventHandler<HTMLInputElement> => {
    return useCallback(
        (evt) => {
            onChange && onChange(evt.target.value);
        },
        [onChange],
    );
};
