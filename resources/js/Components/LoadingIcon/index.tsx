import { LoadingIcon_ } from '@/Components/LoadingIcon/styling';

type LoadingIconProps = {
    show: boolean;
    className?: string;
    size: number;
};

export const LoadingIcon = ({ className, show, size }: LoadingIconProps) => {
    if (!show) {
        return null;
    }
    return (
        <LoadingIcon_
            type='spinningBubbles'
            className={className}
            width={size}
            height={size}
        />
    );
};
