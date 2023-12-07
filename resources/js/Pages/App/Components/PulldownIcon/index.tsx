import { PulldownIcon_ } from '@/Pages/App/Components/PulldownIcon/styling';
import { HTMLAttributes, Suspense } from 'react';

type PulldownIconProps = HTMLAttributes<SVGElement>;

export const PulldownIcon = (props: PulldownIconProps) => (
    <Suspense>
        <PulldownIcon_ {...props} />
    </Suspense>
);
