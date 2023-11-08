import { GoogleSVG } from '@/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type GoogleProps = {
    className?: string;
} & HTMLAttributes<SVGElement>;

export const Google = ({ className, ...remain }: GoogleProps) => {
    return (
        <Suspense>
            <GoogleSVG
                className={className}
                {...remain}
            />
        </Suspense>
    );
};
