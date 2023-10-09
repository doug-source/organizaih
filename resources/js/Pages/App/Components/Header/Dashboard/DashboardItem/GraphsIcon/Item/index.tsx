import { GraphSVG } from '@/Pages/App/libraries';
import { ComponentPropsWithoutRef, Suspense } from 'react';

type GraphsIconProps = ComponentPropsWithoutRef<'svg'>;

export const GraphsIconItem = ({ className, ...remain }: GraphsIconProps) => (
    <Suspense>
        <GraphSVG
            className={className}
            {...remain}
        />
    </Suspense>
);
