import { SelectProductSVG_ } from '@/Pages/App/Components/SelectProduct/styling';
import { MouseEventHandler, Suspense } from 'react';
import { NavLink } from 'react-router-dom';

type SelectProductProps = {
    target: string;
    onSelectionClick: MouseEventHandler<HTMLAnchorElement>;
};

export const SelectProduct = ({
    target,
    onSelectionClick,
}: SelectProductProps) => {
    return (
        <NavLink
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
