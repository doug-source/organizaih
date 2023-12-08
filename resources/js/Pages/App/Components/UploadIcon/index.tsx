import { UploadSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type UploadIconProps = HTMLAttributes<SVGElement>;

export const UploadIcon = (props: UploadIconProps) => (
    <Suspense>
        <UploadSVG {...props} />
    </Suspense>
);
