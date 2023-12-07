import { BackFileSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type BackFileIconProps = HTMLAttributes<SVGElement>;

export const BackFileIcon = (props: BackFileIconProps) => (
    <Suspense>
        <BackFileSVG {...props} />
    </Suspense>
);
