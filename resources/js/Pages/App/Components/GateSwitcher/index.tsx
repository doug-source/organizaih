import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { v1 } from 'uuid';
import {
    CheckboxWrapper_,
    CheckedX_,
    HiddenLabelX_,
    SwitchInput_,
    SwitchLabel_,
    TextX_,
    ToggletextX_,
    UncheckedX_,
} from './styling';

type GateSwitcherProps = {
    label: string;
    value?: boolean;
    onLabel?: JSX.Element | string;
    offLabel?: JSX.Element | string;
    disabled?: boolean;
    className?: string;
    onChange?: (switchState: boolean) => void;
};

export type GateSwitcherCheckHandle = {
    toggleCheck: () => void;
};

export const GateSwitcher = forwardRef<
    GateSwitcherCheckHandle,
    GateSwitcherProps
>(function GateSwitcherComp(
    {
        label,
        value = false,
        onLabel = '',
        offLabel = '',
        disabled = false,
        className,
        onChange,
    },
    ref,
) {
    const switchRefID = useRef(v1());
    const [checked, setChecked] = useState(value);
    useImperativeHandle(ref, () => ({
        toggleCheck() {
            setChecked(!checked);
            if (typeof onChange !== 'undefined') {
                onChange(!checked);
            }
        },
    }));
    return (
        <CheckboxWrapper_ className={className}>
            <SwitchInput_
                value='private'
                id={switchRefID.current}
                name={switchRefID.current}
                disabled={disabled}
                checked={checked}
                onChange={() => {
                    setChecked(!checked);
                    if (typeof onChange !== 'undefined') {
                        onChange(!checked);
                    }
                }}
            />
            <SwitchLabel_ htmlFor={switchRefID.current}>
                <TextX_>{label}</TextX_>
                <ToggletextX_ onClick={(evt) => evt.preventDefault()}>
                    <UncheckedX_>
                        <HiddenLabelX_>Unchecked: </HiddenLabelX_>
                        {offLabel}
                    </UncheckedX_>
                    <CheckedX_>
                        <HiddenLabelX_>Checked: </HiddenLabelX_>
                        {onLabel}
                    </CheckedX_>
                </ToggletextX_>
            </SwitchLabel_>
        </CheckboxWrapper_>
    );
});

export * from './styling';
