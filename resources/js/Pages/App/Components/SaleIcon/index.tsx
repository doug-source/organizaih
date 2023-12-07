import { SaleSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type SaleIconProps = HTMLAttributes<SVGElement>;

export const SaleIcon = (props: SaleIconProps) => (
    <Suspense>
        <SaleSVG {...props} />
    </Suspense>
);
