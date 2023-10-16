import {
    DropdownWrapper_,
    Dropdown_,
} from '@/Pages/App/Components/Dropdown/styling';
import { ComponentPropsWithoutRef } from 'react';
import { useDropdownSize } from './libraries';

type DropdownStyleProps = ComponentPropsWithoutRef<typeof Dropdown_>;

type SelectProps = ComponentPropsWithoutRef<'select'>;

type DropdownProps = SelectProps & DropdownStyleProps;

export const Dropdown = ({ className, children, ...remain }: DropdownProps) => {
    const [dropdownRef, width] = useDropdownSize(Number(remain.value));
    return (
        <DropdownWrapper_ className={className}>
            <Dropdown_
                ref={dropdownRef}
                $width={width}
                {...remain}
            >
                {children}
            </Dropdown_>
        </DropdownWrapper_>
    );
};
