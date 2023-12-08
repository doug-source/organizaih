import { SelectProductIcon_ } from '@/Pages/App/Components/SelectProduct/styling';
import { MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';

type SelectProductProps = {
    target: string;
    className?: string;
    onSelectionClick?: MouseEventHandler<HTMLAnchorElement>;
    show?: boolean;
};

export const SelectProduct = ({
    target,
    className,
    onSelectionClick,
    show = true,
}: SelectProductProps) => {
    if (!show) {
        return null;
    }
    return (
        <NavLink
            className={className}
            to={`/products/select/${target}`}
            onClick={onSelectionClick}
        >
            <SelectProductIcon_ />
        </NavLink>
    );
};

export * from './styling';
