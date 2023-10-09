import { SaleSVG } from '@/Pages/App/libraries';
import { ComponentPropsWithoutRef, Suspense } from 'react';

type SvgIconProps = ComponentPropsWithoutRef<'svg'>;

export const SaleIcon = ({ className, ...remain }: SvgIconProps) => (
    <Suspense>
        <SaleSVG
            className={className}
            {...remain}
        />
    </Suspense>
);
