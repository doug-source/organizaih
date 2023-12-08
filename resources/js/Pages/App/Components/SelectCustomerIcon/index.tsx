import { SelectCustomerSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type SelectCustomerIconProps = HTMLAttributes<SVGElement>;

export const SelectCustomerIcon = (props: SelectCustomerIconProps) => (
    <Suspense>
        <SelectCustomerSVG {...props} />
    </Suspense>
);
