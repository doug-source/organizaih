import { getElementTextWidth, remOutput } from '@/libraries';
import { createRef, useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

export const useDropdownSize = (value: number) => {
    const dropdownRef = createRef<HTMLSelectElement>();
    const [width, setWidth] = useState('auto');
    const theme = useTheme();
    useEffect(() => {
        const { current: combobox } = dropdownRef;
        if (combobox === null) {
            return;
        }
        const option: HTMLOptionElement | null = combobox.querySelector(
            `option[value='${value}']`,
        );
        if (!option) {
            return;
        }
        const {
            border: { width: borderWidth },
        } = theme.generic.measures.fields;
        const {
            padding: { right: paddingRight, left: paddingLeft },
        } = theme.measures.dropdown;
        const size = getElementTextWidth(option.textContent ?? '', combobox);
        const sizeFinal = size + paddingLeft + paddingRight + borderWidth * 2;
        setWidth(`${remOutput(sizeFinal)}`);
    }, [dropdownRef, value]);
    return [dropdownRef, width] as const;
};
