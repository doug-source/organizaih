import { makePulldownClick } from '@/Pages/App/Components/Pulldown/libraries';
import {
    PulldownIcon_,
    TopWrapBtn_,
} from '@/Pages/App/Components/Pulldown/styling';
import { useToggleSecondWord } from '@/Pages/App/libraries/hooks';

type PulldownProps = {
    toggleContainerClass: ReturnType<typeof useToggleSecondWord>[1];
    onTopWrappped?: Required<Parameters<typeof makePulldownClick>>[2];
};

export const Pulldown = ({
    onTopWrappped,
    toggleContainerClass,
}: PulldownProps) => {
    const [btnClass, toggleBtnClass] = useToggleSecondWord('closer');
    return (
        <TopWrapBtn_
            className={btnClass}
            onClick={makePulldownClick(
                toggleContainerClass,
                toggleBtnClass,
                onTopWrappped,
            )}
        >
            <PulldownIcon_ />
        </TopWrapBtn_>
    );
};
