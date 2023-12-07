import { CalendarSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type CalendarIconProps = HTMLAttributes<SVGElement>;

export const CalendarIcon = (props: CalendarIconProps) => (
    <Suspense>
        <CalendarSVG {...props} />
    </Suspense>
);
