import { HTMLAttributes, Suspense } from 'react';
import { AnonymousIcon_ } from './styling';

type AnonymousListIconProps = HTMLAttributes<typeof SVGElement>;

export const AnonymousListIcon = (props: AnonymousListIconProps) => (
    <Suspense>
        <AnonymousIcon_ {...props} />
    </Suspense>
);
