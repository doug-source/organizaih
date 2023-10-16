import { useChangeHandler } from '@/Pages/App/Components/RadioToggle/libraries';
import {
    Container_,
    InputRadio_,
    Label_,
} from '@/Pages/App/Components/RadioToggle/styling';
import { Fragment } from 'react';
import { useTheme } from 'styled-components';
import { v1 } from 'uuid';

type StyleRow = {
    backgroundColor: string;
    color: string;
    shadowColor: string;
    borderColor: string;
};

type OptionsPattern = {
    value: string;
    label: string;
    style: StyleRow;
};

type RadioToggleProps = {
    options: OptionsPattern[];
    stateValue: string;
    onChange?: (value: string) => void;
};

export const RadioToggle = ({
    options,
    stateValue,
    onChange,
}: RadioToggleProps) => {
    const theme = useTheme();
    const labelTheme = theme.radioToggle.label;
    const onChangeMounted = useChangeHandler(onChange);
    return (
        <Container_>
            {options.map(({ value, label, style }) => {
                const identifier = v1();
                return (
                    <Fragment key={`${value}-${label}`}>
                        <InputRadio_
                            id={identifier}
                            value={value}
                            checked={stateValue === value}
                            onChange={onChangeMounted}
                        />
                        <Label_
                            htmlFor={identifier}
                            $backgroundColor={style.backgroundColor}
                            $borderColor={style.borderColor}
                            $color={style.color}
                            $shadowColor={style.shadowColor}
                            $colorNot={labelTheme.colorNot}
                        >
                            {label}
                        </Label_>
                    </Fragment>
                );
            })}
        </Container_>
    );
};
