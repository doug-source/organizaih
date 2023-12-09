import { AllowSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type AllowIconProps = HTMLAttributes<SVGElement>;

export const AllowIcon = (props: AllowIconProps) => (
    <Suspense>
        <AllowSVG {...props} />
    </Suspense>
);
