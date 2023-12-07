import { RemoveRedSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type RemoveRedIconProps = HTMLAttributes<SVGElement>;

export const RemoveRedIcon = (props: RemoveRedIconProps) => (
    <Suspense>
        <RemoveRedSVG {...props} />
    </Suspense>
);
