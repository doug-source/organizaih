import { ArrowSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type ArrowIconProps = HTMLAttributes<SVGElement>;

export const ArrowIcon = (props: ArrowIconProps) => (
    <Suspense>
        <ArrowSVG {...props} />
    </Suspense>
);
