import { RemoveSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type RemoveIconProps = HTMLAttributes<SVGElement>;

export const RemoveIcon = (props: RemoveIconProps) => (
    <Suspense>
        <RemoveSVG {...props} />
    </Suspense>
);
