import {
    useDecreaseFn,
    useIncreaseFn,
} from '@/Pages/App/Components/InputRange/libraries/hooks';
import {
    ControlIcon_,
    InputNumber_,
    MinusControl_,
    PlusControl_,
    RangeBoxContainer_,
    RangeBoxLabel_,
    RangeBoxLeftBorder_,
    RangeBoxPack_,
    RangeBoxRightBorder_,
    RangeCurrentValue_,
} from '@/Pages/App/Components/InputRange/styling';
import { useRef } from 'react';
import { useTheme } from 'styled-components';

type InputRangeProps = {
    min: number;
    max?: number;
    step?: number;
    qty: number;
    label: string;
    onChange: (val: number) => void;
};

export const InputRange = ({
    min,
    max = 100,
    step = 1,
    qty,
    label = '',
    onChange,
}: InputRangeProps) => {
    const refRange = useRef<HTMLInputElement>(null);
    const controlTheme = useTheme().inputRange.slider.control;

    return (
        <>
            <RangeBoxContainer_>
                <RangeBoxLabel_>{label}:</RangeBoxLabel_>
                <RangeBoxPack_>
                    <RangeBoxLeftBorder_ />
                    <MinusControl_
                        as='div'
                        onClick={useDecreaseFn({
                            min,
                            step,
                            refRange,
                            onChange,
                        })}
                        $color={controlTheme.color}
                    >
                        <ControlIcon_ data-signal='-' />
                    </MinusControl_>
                    <InputNumber_
                        value={qty}
                        min={min}
                        max={max}
                        disabled={max === 0}
                        ref={refRange}
                        onChange={(evt) => {
                            const val = Number(evt.target.value);
                            if (val < min) {
                                return;
                            }
                            onChange(val);
                        }}
                    />
                    <PlusControl_
                        as='div'
                        onClick={useIncreaseFn({
                            max,
                            step,
                            refRange,
                            onChange,
                        })}
                        $color={controlTheme.color}
                    >
                        <ControlIcon_ data-signal='+' />
                    </PlusControl_>
                    <RangeBoxRightBorder_ />
                </RangeBoxPack_>
            </RangeBoxContainer_>
            <RangeCurrentValue_>{qty}</RangeCurrentValue_>
        </>
    );
};
