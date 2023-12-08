import { LogoutSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type LogoutIconProps = HTMLAttributes<SVGElement>;

export const LogoutIcon = (props: LogoutIconProps) => (
    <Suspense>
        <LogoutSVG {...props} />
    </Suspense>
);
