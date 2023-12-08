import { SelectProductSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type SelectProductIconProps = HTMLAttributes<SVGElement>;

export const SelectProductIcon = (props: SelectProductIconProps) => (
    <Suspense>
        <SelectProductSVG {...props} />
    </Suspense>
);
