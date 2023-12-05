import { AnonymousSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type AnonymousIconProps = HTMLAttributes<'svg'>;

export const AnonymousIcon = (props: AnonymousIconProps) => (
    <Suspense>
        <AnonymousSVG {...props} />
    </Suspense>
);
