import { DayModeSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type DayModeIconProps = HTMLAttributes<SVGElement>;

export const DayModeIcon = (props: DayModeIconProps) => (
    <Suspense>
        <DayModeSVG {...props} />
    </Suspense>
);
