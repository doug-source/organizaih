import { BrandSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type BrandIconProps = HTMLAttributes<SVGElement>;

export const BrandIcon = (props: BrandIconProps) => (
    <Suspense>
        <BrandSVG {...props} />
    </Suspense>
);
