import { DetailsSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type DetailsIconProps = HTMLAttributes<'svg'>;

export const DetailsIcon = (props: DetailsIconProps) => (
    <Suspense>
        <DetailsSVG {...props} />
    </Suspense>
);
