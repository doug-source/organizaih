import { AnonymousSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { ComponentPropsWithoutRef, Suspense } from 'react';

type AnonymousProps = ComponentPropsWithoutRef<'svg'>;

export const Anonymous = ({ className, ...remain }: AnonymousProps) => {
    return (
        <Suspense>
            <AnonymousSVG
                className={className}
                {...remain}
            />
        </Suspense>
    );
};
