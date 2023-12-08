import { SelectCustomerIcon_ } from '@/Pages/App/Components/SelectCustomer/styling';
import { MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';

type SelectCustomerProps = {
    target: string;
    className?: string;
    onSelectionClick?: MouseEventHandler<HTMLAnchorElement>;
    show?: boolean;
};

export const SelectCustomer = ({
    target,
    className,
    onSelectionClick,
    show = true,
}: SelectCustomerProps) => {
    if (!show) {
        return null;
    }
    return (
        <NavLink
            className={className}
            to={`/customers/select/${target}`}
            onClick={onSelectionClick}
        >
            <SelectCustomerIcon_ />
        </NavLink>
    );
};

export * from './styling';
