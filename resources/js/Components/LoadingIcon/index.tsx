import ReactLoading from 'react-loading';

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
        <ReactLoading
            type='spinningBubbles'
            className={className}
            width={size}
            height={size}
        />
    );
};
