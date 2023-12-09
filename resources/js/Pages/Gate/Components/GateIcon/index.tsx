import { GateSVG } from '@/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type GateIconProps = HTMLAttributes<SVGElement>;

export const GateIcon = (props: GateIconProps) => (
    <Suspense>
        <GateSVG {...props} />
    </Suspense>
);
