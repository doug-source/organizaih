import { SelectProductSVG_ } from '@/Pages/App/Components/SelectProduct/styling';
import { MouseEventHandler, Suspense } from 'react';
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
            <Suspense>
                <SelectProductSVG_ />
            </Suspense>
        </NavLink>
    );
};

export * from './styling';
