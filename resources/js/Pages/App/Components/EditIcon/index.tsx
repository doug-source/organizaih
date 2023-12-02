import { EditSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type EditIconProps = HTMLAttributes<'svg'>;

export const EditIcon = (props: EditIconProps) => (
    <Suspense>
        <EditSVG {...props} />
    </Suspense>
);
