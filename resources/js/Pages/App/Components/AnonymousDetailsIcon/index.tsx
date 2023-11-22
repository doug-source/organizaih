import { AnonymousIcon_ } from '@/Pages/App/Components/AnonymousDetailsIcon/styling';
import { HTMLAttributes, Suspense } from 'react';

type AnonymousListIconProps = HTMLAttributes<typeof SVGElement>;

export const AnonymousDetailsIcon = (props: AnonymousListIconProps) => (
    <Suspense>
        <AnonymousIcon_ {...props} />
    </Suspense>
);
