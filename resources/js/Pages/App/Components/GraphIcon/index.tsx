import { GraphIcon_ } from '@/Pages/App/Components/GraphIcon/styling';
import { HTMLAttributes, Suspense } from 'react';

type GraphIconProps = HTMLAttributes<SVGElement>;

export const GraphIcon = (props: GraphIconProps) => (
    <Suspense>
        <GraphIcon_ {...props} />
    </Suspense>
);
