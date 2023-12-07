import { AddSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type AddIconProps = HTMLAttributes<SVGElement>;

export const AddIcon = (props: AddIconProps) => (
    <Suspense>
        <AddSVG {...props} />
    </Suspense>
);
