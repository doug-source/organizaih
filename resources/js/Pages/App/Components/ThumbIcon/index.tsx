import { ThumbSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type ThumbIconProps = HTMLAttributes<SVGElement>;

export const ThumbIcon = (props: ThumbIconProps) => (
    <Suspense>
        <ThumbSVG {...props} />
    </Suspense>
);
