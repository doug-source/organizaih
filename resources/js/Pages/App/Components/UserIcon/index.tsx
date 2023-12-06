import { UserSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type UserIconProps = HTMLAttributes<SVGElement>;

export const UserIcon = (props: UserIconProps) => (
    <Suspense>
        <UserSVG {...props} />
    </Suspense>
);
