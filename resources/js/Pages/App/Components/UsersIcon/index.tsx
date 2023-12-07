import { UsersIcon_ } from '@/Pages/App/Components/UsersIcon/styling';
import { HTMLAttributes, Suspense } from 'react';

type UsersIconProps = HTMLAttributes<SVGElement>;

export const UsersIcon = (props: UsersIconProps) => (
    <Suspense>
        <UsersIcon_ {...props} />
    </Suspense>
);
