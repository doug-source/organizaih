import { ComponentPropsWithoutRef, Suspense } from 'react';
import { InventorySVG_ } from './styling';

type SvgIconProps = ComponentPropsWithoutRef<'svg'>;

export const InventoryIcon = ({ className, ...remain }: SvgIconProps) => (
    <Suspense>
        <InventorySVG_
            className={className}
            {...remain}
        />
    </Suspense>
);
