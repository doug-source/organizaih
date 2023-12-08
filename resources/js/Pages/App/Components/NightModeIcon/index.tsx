import { NightModeSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type NightModeIconProps = HTMLAttributes<SVGElement>;

export const NightModeIcon = (props: NightModeIconProps) => (
    <Suspense>
        <NightModeSVG {...props} />
    </Suspense>
);
