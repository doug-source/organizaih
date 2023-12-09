import { GoogleSVG } from '@/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type GoogleIconProps = HTMLAttributes<SVGElement>;

export const GoogleIcon = (props: GoogleIconProps) => (
    <Suspense>
        <GoogleSVG {...props} />
    </Suspense>
);
