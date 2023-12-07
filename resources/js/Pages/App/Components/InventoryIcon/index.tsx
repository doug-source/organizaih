import { InventoryIcon_ } from '@/Pages/App/Components/InventoryIcon/styling';
import { HTMLAttributes, Suspense } from 'react';

type InventoryIconProps = HTMLAttributes<SVGElement>;

export const InventoryIcon = (props: InventoryIconProps) => (
    <Suspense>
        <InventoryIcon_ {...props} />
    </Suspense>
);
