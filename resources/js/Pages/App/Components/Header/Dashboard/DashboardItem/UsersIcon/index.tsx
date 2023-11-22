import { ComponentPropsWithoutRef, Suspense } from 'react';
import { UsersSVG_ } from './styling';

type SvgIconProps = ComponentPropsWithoutRef<'svg'>;

export const UsersIcon = ({ className, ...remain }: SvgIconProps) => (
    <Suspense>
        <UsersSVG_
            className={className}
            {...remain}
        />
    </Suspense>
);
