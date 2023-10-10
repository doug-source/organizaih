import {
    LoadingOverlay_,
    ReactLoading_,
} from '@/Pages/App/Components/Loading/styling';
import { useTheme } from 'styled-components';

type LoadingProps = {
    show: boolean | null;
    className?: string;
};

export const Loading = ({ show, className }: LoadingProps) => {
    const theme = useTheme();
    const { loading: loadingMeasure } = theme.measures;
    if (!show) {
        return null;
    }
    return (
        <LoadingOverlay_>
            <ReactLoading_
                className={className}
                type='spinningBubbles'
                width={loadingMeasure.size}
                height={loadingMeasure.size}
            />
        </LoadingOverlay_>
    );
};
