import { CustomerIcon_ } from '@/Pages/App/Components/CustomerIcon/styling';
import { HTMLAttributes, Suspense } from 'react';

type CustomerIconProps = HTMLAttributes<SVGElement>;

export const CustomerIcon = (props: CustomerIconProps) => (
    <Suspense>
        <CustomerIcon_ {...props} />
    </Suspense>
);
